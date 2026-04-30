require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session");
const mongoose = require("mongoose");
const User = require("./public/auth/model");
const path = require("path");
const app = express();
const flash = require("connect-flash");
const mongoStore = require("connect-mongo");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(
  session({
    secret: "mysecret123",
    resave: false,
    saveUninitialized: false,
    store: mongoStore.create({
      mongoUrl: process.env.MONGODB_URL,
      collectionName: "sessions",
      ttl: 24 * 60 * 60,
      autoRemove: "native",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

app.use(flash());
app.use((req, res, next) => {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log("mongoose connection error:", e));

function checkAuth(req, res, next) {
  if (!req.session.userId) {
    return res.redirect("/signup");
  }
  next();
}

//SIGNUP ROUTE
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    req.flash("error", "Username Taken");
    return res.redirect("/signup");
  }

  const newUser = await new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  const successMsg = req.flash("success", "successfully registered");
  res.redirect("/login");
});

// LOGIN ROUTE
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({
    $and: [{ username }, { email }],
  });

  if (!user) {
    req.flash("error", "Invalid username or password");
    return res.redirect("/login");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    req.flash("error", "Invalid username or password");
    return res.redirect("/login");
  }

  req.session.userId = user._id;

  req.flash("success", `Welcome back ${user.username}!`);

  return res.redirect("/");
});

// LOGOUT ROUTE
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error logging out, try again later");
    }

    res.redirect("/middleman");
  });
});

app.get("/middleman", (req, res) => {
  req.flash("success", "logged out successfully");
  res.redirect("/login");
});

// DUBBYMOVIES ROUTE
app.get("/", checkAuth, (req, res) => {
  res.render("index");
});

app.get("/movieDetails", checkAuth, (req, res) => {
  res.render("movieDetails");
});

app.get("/aboutPage", checkAuth, (req, res) => {
  res.render("about");
});

app.listen(3000, (req, res) => {
  console.log("Now listening on port 3000...");
});

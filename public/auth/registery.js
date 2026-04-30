const signupForm = document.getElementById("signupForm");
const statusMsg = document.getElementById("statusMsg");
const loginForm = document.getElementById("loginForm");
const flashMsg = document.getElementById("flashMsg");
const logoutBtn = document.getElementById("logoutBtn");
const loginBtn = document.getElementById("loginBtn");
const goodMsg = document.getElementById("goodMsg");
const loginValue = document.querySelectorAll("input");
const body = document.body;

if (flashMsg) {
  setTimeout(() => {
    goodMsg.style.opacity = "0";

    setTimeout(() => {
      flashMsg.textContent = "";
    }, 500);
  }, 2000);
}

if (loginForm || signupForm) {
  window.addEventListener("pageshow", () => {
    if (loginForm) loginForm.reset();
    if (signupForm) signupForm.reset();
  });
}

// for (let value of loginValue) {
//   value.style.color = "white";
// }

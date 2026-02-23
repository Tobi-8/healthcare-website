const hamburger = document.querySelector(".hamburger-menu");
const bar1 = document.querySelector(".menu1");
const bar2 = document.querySelector(".menu2");
const bar3 = document.querySelector(".menu3");
const mobileNav = document.querySelector(".mobileNav");

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  mobileNav.classList.toggle("openDrawer");
});


// FOR THE FORM VALIDATION
const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!firstName || !lastName || !email || !subject || !message) {
    messageBox.textContent = "Please fill in all required fields.";
    messageBox.style.color = "red";
    return;
  }

  messageBox.textContent = "Message sent successfully!";
  messageBox.style.color = "green";

  form.reset();
});
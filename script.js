const btn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

btn.addEventListener("click", function () {
  sidebar.classList.toggle("active");

 if (sidebar.classList.contains("active")) {
      btn.textContent = "✖";
    } else {
      btn.textContent = "☰";
    }
  });
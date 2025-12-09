document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Navbar 불러오기
  const navbarContainer = document.getElementById("navbar");
  if (navbarContainer) {
    fetch("/navbar/navbar.html")
      .then((res) => res.text())
      .then((html) => {
        navbarContainer.innerHTML = html;

        // navbar.js 동적으로 로드 (한 번만)
        if (!document.getElementById("navbar-script")) {
          const script = document.createElement("script");
          script.src = "/navbar/navbar.js";
          script.id = "navbar-script"; // 중복 방지용
          document.body.appendChild(script);
        }
      });
  }

  // 2️⃣ Footer 불러오기
  const footerContainer = document.getElementById("footer");
  if (footerContainer) {
    fetch("/footer/footer.html")
      .then((res) => res.text())
      .then((html) => {
        footerContainer.innerHTML = html;
      });
  }
});

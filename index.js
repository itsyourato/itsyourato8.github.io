document.addEventListener("DOMContentLoaded", () => {
  initRollingPreview(); // 상단 무한 롤링 공연 미리보기
});

/* ---------------------------------------------------------
   1) 상단 "다가오는 공연 미리보기" — 무한 롤링 슬라이더
---------------------------------------------------------- */
function initRollingPreview() {
  const track = document.querySelector(".rolling-track");
  if (!track) return;

  const performances = [
    { image: "image/band1.jpeg" },
    { image: "image/jazz2.jpeg" },
    { image: "image/band3.jpeg" },
    { image: "image/jazz4.jpeg" },
    { image: "image/per8.jpeg" },
    { image: "image/per3.png" },
    { image: "image/jazz1.jpeg" },
    { image: "image/per7.jpeg" },
    { image: "image/per2.png" },
  ];

  // 무한 롤링을 위해 2배 트랙 생성
  const list = [...performances, ...performances];

  list.forEach((perf) => {
    const card = document.createElement("div");
    card.className = "preview-card";

    const img = document.createElement("img");
    img.src = perf.image;
    img.alt = "performance-image";

    card.appendChild(img);
    track.appendChild(card);
  });
}

// account.html의 포스터 카드들을 불러와서 home.html에 삽입
fetch("/account/account.html")
  .then((response) => response.text())
  .then((htmlText) => {
    // 임시 DOM 생성
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlText;

    // poster-card 선택
    const cards = tempDiv.querySelectorAll(".poster-card");

    // 현재 페이지에 삽입할 컨테이너
    const container = document.querySelector(".poster-list-container");

    cards.forEach((card) => {
      // 이미지 경로를 home.html 기준으로 수정
      const img = card.querySelector("img");
      if (img) {
        // account.html이 /account 폴더 안에 있으므로 상대 경로 조정
        img.src = img.src.replace("../image/", "/image/");
      }
      container.appendChild(card);
    });
    initPosterSlider(".poster-list-container"); // 포스터 카드 슬라이더
  })
  .catch((err) => console.error("Error loading account.html:", err));

function initPosterSlider(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const cards = container.querySelectorAll(".poster-card");
  if (!cards.length) return;

  let index = 0;

  container.style.display = "flex";
  container.style.transition = "transform 0.5s ease";

  const moveDistance =
    cards[0].offsetWidth + parseInt(getComputedStyle(container).gap) - 0.3;

  setInterval(() => {
    index = (index + 1) % cards.length;
    container.style.transform = `translateX(-${index * moveDistance}px)`;
  }, 3000);
}

// 공연장 불러오기
// 공연장 불러오기
// 공연장 불러오기
fetch("/area/area.html")
  .then((response) => response.text())
  .then((htmlText) => {
    // 임시 DOM 생성
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlText;

    // poster-card 선택
    const cards = tempDiv.querySelectorAll(".area-card");

    // 현재 페이지에 삽입할 컨테이너
    const container = document.querySelector(".area-list-container");

    cards.forEach((card) => {
      // 이미지 경로를 home.html 기준으로 수정
      const img = card.querySelector("img");
      if (img) {
        // account.html이 /account 폴더 안에 있으므로 상대 경로 조정
        img.src = img.src.replace("../image/", "/image/");
      }
      container.appendChild(card);
    });
    initAreaSlider(".area-list-container"); // 포스터 카드 슬라이더
  })
  .catch((err) => console.error("Error loading account.html:", err));

function initAreaSlider(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const cards = container.querySelectorAll(".area-card");
  if (!cards.length) return;

  let index = 0;

  container.style.display = "flex";
  container.style.transition = "transform 0.5s ease";

  const moveDistance =
    cards[0].offsetWidth + parseInt(getComputedStyle(container).gap) - 0.3;

  setInterval(() => {
    index = (index + 1) % cards.length;
    container.style.transform = `translateX(-${index * moveDistance}px)`;
  }, 3000);
}

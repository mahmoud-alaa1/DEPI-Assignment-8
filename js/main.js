let imgsNumber = 6;
let idx = 0;
const galleryContainer = document.querySelector("main section .container .row");
const caruosel = document.querySelector("main section .carousel");
const caruoselImage = document.querySelector("main section .carousel img");
galleryContainer.innerHTML = "";
for (var i = 0; i < imgsNumber; i++) {
  galleryContainer.innerHTML += `<div class="card-container col-xl-4  col-md-6 col-12">
    <div class="my-card">
      <div class="img-container mb-3">
        <button class="d-block w-100 h-100">
        <img data-idx="${i}" src="imgs/${i + 1}.png" alt="" />
                </button>
      </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
      voluptate!
    </p>
  </div>`;
}

function toggleCaruosel() {
  caruosel.style.display = caruosel.style.display === "none" ? "" : "none";
}

function setImage(i) {
  i = Number(i);
  caruoselImage.setAttribute("src", `imgs/${i + 1}.png`);
  idx = i;
}

function changeIdx(inc) {
  idx = (idx + inc + imgsNumber) % imgsNumber;
  setImage(idx);
}

galleryContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    toggleCaruosel();
    setImage(e.target.dataset.idx);
  }
});

caruosel.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV" || e.target.classList.contains("close"))
    toggleCaruosel();
  else if (e.target.classList.contains("left")) {
    changeIdx(1);
  } else if (e.target.classList.contains("right")) {
    changeIdx(-1);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    caruosel.style.display = "none";
  }
});

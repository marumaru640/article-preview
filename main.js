const shareOption = document.querySelector(".share-option");
const shareButton = document.querySelector(".share-button");

const shareButtonClick = () => {
  shareOption.classList.toggle("active"); // visible が設定されていれば除去し、なければ追加
};

shareButton.addEventListener("click", shareButtonClick);

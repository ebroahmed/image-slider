let currentIndex = 0;
const totalImages = document.querySelectorAll("#slider img").length;

function updateSlider() {
  document.getElementById("slider").style.transform = `translateX(${
    -currentIndex * 100
  }%)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSlider();
}

function nextSlide() {
  currentIndex = (currentIndex + 1 + totalImages) % totalImages;
  updateSlider();
}

function searchImage() {
  const searchIndex = parseInt(document.getElementById("searchBox").value);
  if (!isNaN(searchIndex) && searchIndex >= 1 && searchIndex <= totalImages) {
    currentIndex = searchIndex - 1;

    updateSlider();
    localStorage.setItem("currentIndex", currentIndex);
  } else {
    alert(
      "Invalid index. Please enter a valid index between 1 and " + totalImages
    );
  }
}
window.onload = function () {
  const storedIndex = localStorage.getItem("currentIndex");

  if (storedIndex !== null) {
    currentIndex = parseInt(storedIndex);
    updateSlider();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const loadingIndicator = document.getElementById("loading-indicator");
  const gallery = document.getElementById("gallery");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const closeModal = document.getElementById("close-modal");

  // Текст для анимации
  const text = "красивые одноклассницы";
  let index = 0;

  // Анимация ввода текста
  function typeText() {
    if (index < text.length) {
      searchInput.value += text.charAt(index);
      index++;
      setTimeout(typeText, 100);
    } else {
      // Запуск анимации поиска
      loadingIndicator.style.display = "block";
      setTimeout(showGallery, 2000);
    }
  }

  // Показ фотографий
  function showGallery() {
    loadingIndicator.style.display = "none";
    gallery.style.display = "grid";

    // Пути к фотографиям (замените на свои)
    const images = [
      "images/photo1.jpg",
      "images/photo2.jpg",
      "images/photo3.jpg",
      "images/photo4.jpg",
      "images/photo5.jpg",
      "images/photo6.jpg",
      "images/photo7.jpg",
      "images/photo8.jpg",
      "images/photo9.jpg",
      "images/photo10.jpg",
      "images/photo11.jpg",
      "images/photo12.jpg",
      "images/photo13.jpg",
      "images/photo14.jpg",
      "images/photo15.jpg",
      "images/photo16.jpg",
      "images/photo17.jpg",
      "images/photo18.jpg",
      "images/photo19.jpg",
      "images/photo21.jpg",
      "images/photo22.jpg",
      "images/photo23.jpg",
      "images/photo24.jpg",
      "images/photo25.jpg",
      "images/photo26.jpg"
    ];

    // Добавление фотографий в галерею
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Фото";

      // Открытие фотографии в модальном окне
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = src;
      });

      gallery.appendChild(img);
    });
  }

  // Закрытие модального окна
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Запуск анимации
  typeText();
});

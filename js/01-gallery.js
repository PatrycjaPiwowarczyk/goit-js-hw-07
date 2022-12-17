import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imageGallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const modalLink = document.createElement("a");
  modalLink.classList.add("gallery__item");
  modalLink.setAttribute("href", item.original);

  const galleryItem = document.createElement("img");
  galleryItem.src = item.preview;
  galleryItem.classList.add("gallery__image");
  galleryItem.setAttribute("alt", item.description);
  galleryItem.setAttribute("data-source", item.original);

  imageGallery.appendChild(modalLink);
  modalLink.appendChild(galleryItem);
});

const modal = (e) => {
  e.preventDefault();
  if (e.target.classList.contains(!"gallery__image")) {
    return;
  }
  {
    const instance = basicLightbox.create(`<img class="gallery__image" src=${e.target.dataset.source}>`);
    instance.show();

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        instance.close();
      }
    });
  }
};

imageGallery.addEventListener("click", modal);

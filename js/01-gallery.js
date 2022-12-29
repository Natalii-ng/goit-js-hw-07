import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(img) {
    return img
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>`;
        })
        .join('');
};

galleryContainer.addEventListener("click", handleImageClick);

function handleImageClick(e) {
    e.preventDefault();
    const targetClick = e.target;
    if (!targetClick.classList.contains("gallery__image")) {
        return
    };
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" widht="800" height="600"/>
    `,
        {
            onShow: (instance) => {
                galleryContainer.addEventListener("keydown", onEscapeButton);
            },
            onClose: (instance) => {
                galleryContainer.removeEventListener("keydown", onEscapeButton);
            },
        }
    );

    instance.show();
    function onEscapeButton(evt) {
        if (evt.key === 'Escape') {
            instance.close();
        }
    };
}

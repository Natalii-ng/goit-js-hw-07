import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(img) {
    return img
        .map(({ preview, original, description }) => {
            return `
            <li><a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a></li>`;
        })
        .join('');
};

  
    const Lightbox = new SimpleLightbox('.gallery__item', {
        captionsData: 'alt',
        captionDelay: 250,
    });


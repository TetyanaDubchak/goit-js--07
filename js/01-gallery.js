import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');


const markup = galleryItems.map((item) =>  `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" /></a>
        </li>`).join('');

container.insertAdjacentHTML('beforeend', markup);

const onClick = (e) => {
    e.preventDefault();

    const currentItem = e.target.getAttribute('data-source');
    
    const instance = basicLightbox.create(`
        <img src="${currentItem}" width="800" height="600">
       
`)

    instance.show();


};

container.addEventListener('click', onClick);


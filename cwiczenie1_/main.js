const gallery = document.querySelectorAll('.gallery img');
//firstimage.addEventListener('click', showLightbox);

function showLightbox()
{
    const lightbox = document.querySelector ('.lightbox');
    lightbox.classList.add('visible');
    //lightbox.style.transform = 'scale(1)';
}
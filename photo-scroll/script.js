function findElementAtCenter(container) {
    const elem = document.elementFromPoint(container.offsetWidth / 2, container.offsetHeight / 2);
    return elem;
}

const photoContainer = document.getElementById('photo-container');
const photoDate = document.getElementById('photo-date');

function refreshCenterItem() {
    const elem = findElementAtCenter(photoContainer);
    if (elem.tagName.toLowerCase() === 'img') {
        const filenames = elem.src.split('/');
        const filename = filenames.at(-1);
        photoDate.innerText = filename;
    }
}

photoContainer.addEventListener('scroll', refreshCenterItem);

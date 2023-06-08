import {listPhoto} from '../index.js'

export function makePhotoList(data){
    const photoList = data.map ((result) => {
        return `<div class="list-photo-item"> <img src="${result.webformatURL}" alt="${result.tags}" width=360 loading='lazy'/>
        <div class="statistics-list">
        <p>
        <p>Likes:</p><strong>${result.likes}</strong>
        </p>
        <p>
        <p>Views:</p><strong>${result.views}</strong>
        </p>
        <p>
        <p>Comments:</p><strong>${result.comments}</strong>
        </p>
        <p>
        <p>Downloads:</p><strong>${result.downloads}</strong>
        </div>
         </ul>
          </div>`;
    }).join('')
    return photoList
}

export function createListPhoto (hits){
    const markup = makePhotoList(hits);
    listPhoto.insertAdjacentHTML('beforeend', markup);
}
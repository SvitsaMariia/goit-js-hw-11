import Notiflix from "notiflix";
import axios from "axios";
import lodash from "lodash";

import './js/PhotoAPI.js';
import {SearchPictures, loadMorePhoto} from "./js/SearchPhoto";

export const searchForm = document.getElementById('search-form');
export const listPhoto = document.querySelector('.gallery');
export const loadMoreBtn = document.getElementById('load-more-btn');
loadMoreBtn.style.display = 'none';

searchForm.addEventListener ('submit', SearchPictures)
loadMoreBtn.addEventListener ('click', loadMorePhoto)

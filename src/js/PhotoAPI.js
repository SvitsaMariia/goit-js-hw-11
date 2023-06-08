import axios from 'axios'


export class PhotoAPI {
    #BASE_URL = `https://pixabay.com/api/`;
    #KEY = `19502637-d06b43ee367f131773b25cf8c`;
    #PER_PAGE = 40;
    #IMAGE_TYPE = 'photo';
    #ORIENTATION = 'horizontal';
    #SAFESEARCH = 'true';
    QUERY = '';
    TOTAL_PAGES = 1;
    PAGE = 1;
  
    async searchPhoto(photoName) {
      const url = this.#BASE_URL;
      const params = new URLSearchParams({
        key: this.#KEY,
        q: this.QUERY,
        image_type: this.#IMAGE_TYPE,
        orientation: this.#ORIENTATION,
        per_page: this.#PER_PAGE,
        safesearch: this.#SAFESEARCH,
        page: this.PAGE,
      });
  
      const response = await axios.get(`${url}?${params}`);
      const data = response.data;
  
      this.TOTAL_PAGES = Math.ceil(data.totalHits / this.#PER_PAGE);
      this.nextPage();
      return data;
    }
    get PerPage() {
      return this.#PER_PAGE;
    }
    nextPage() {
        this.PAGE += 1;
    }
    clearPage() {
      this.PAGE = 1;
    }
  }

  
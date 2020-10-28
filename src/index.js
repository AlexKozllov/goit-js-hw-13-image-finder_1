import css from "./css/style.css";
import getPictures from './apiService.js'
import debounce from "lodash.debounce";

const gallery=document.querySelector('.gallery')
const searchForm=document.getElementById('search-form')


searchForm.addEventListener('input', debounce((e) => {
    getPictures(e.target.value).then(galleryForm => {
        gallery.innerHTML = galleryForm
    })
}, 500))



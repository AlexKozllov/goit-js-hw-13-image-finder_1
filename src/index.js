import css from "./css/style.css";
import getPictures from './apiService.js'
// import photoCard from './templstes/photoCard.hbs'

const gallery=document.querySelector('.gallery')

getPictures().then(galleryForm => {
    // console.dir(a)
    gallery.innerHTML=galleryForm
});

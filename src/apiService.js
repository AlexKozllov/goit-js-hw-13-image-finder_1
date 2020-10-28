import gallery from './templstes/gallery.hbs'

// const galleryy=document.querySelector('.gallery')

export default
    
async function getUsers (e) {
  const response = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${e}&page=1&per_page=12&key=18823692-f69edaabddb6a9bc41c7d0ed3`);
  const users = await response.json();
  console.dir(e);
     const elementRespons =  users.hits
    return  gallery(elementRespons)
};
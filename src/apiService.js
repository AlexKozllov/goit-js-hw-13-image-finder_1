import gallery from './templstes/gallery.hbs'
export default
    
async function getUsers () {
  const response = await fetch('https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=yellow+flowers&page=1&per_page=12&key=18823692-f69edaabddb6a9bc41c7d0ed3');
  const users =await response.json();
    // const previewURL = await users.hits.map(el=> {
    //     return el.previewURL
    // })
    const elementRespons =  users.hits
    // gallery(elementRespons)
    console.log(elementRespons);
  return  gallery(elementRespons);
};


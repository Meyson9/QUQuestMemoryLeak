
const  burgerMenu = () => {
 const downloadedWraper = document.querySelector('.downloadedBtn'),
       btnMenu = document.querySelector('#burgerBtn');
       
       btnMenu.addEventListener('click',()=>{
        downloadedWraper.classList.toggle('hide')
       }) 
  
}

export default burgerMenu
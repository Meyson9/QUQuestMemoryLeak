import elemScroll from "../services/elemScroll";
const lostMicrophone = (sel=false) => {

const btnLostMicrophone =  document.querySelector(sel?'.fab-buttons__link_segment':'.fab-buttons__link');


btnLostMicrophone.addEventListener('click', (e)=> {
  e.preventDefault();
  let activeMicrapone = localStorage.getItem('WhereStayUser'),
      list = document.querySelectorAll('.start-stop');

  
  // console.log(activeMicrapone);
  
  if(!list) return console.log('тут пусто! Ты аухел ?');  
  let p = document.querySelector("."+activeMicrapone)
  // console.log(p);
  p.scrollIntoView({block: "center", behavior: "smooth"})
  list = null;
  activeMicrapone;
  p = null;

})
// btnDeactiv

}
export default lostMicrophone
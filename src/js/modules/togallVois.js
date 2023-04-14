const togallVois = (select=false) => {

  const doc = document.querySelectorAll(select?'.fab-buttons_Segment':'.fab-buttons')[0].children
  
  localButtonToggale('muteVoise','.icon-material_li','icon-material_li_mute')
  localButtonToggale('nonstope','.icon-material_tw','icon-material_tw_NonStop')

    // режим нон стоп
    doc[1].addEventListener('click', (e)=> {
      e.preventDefault()
      console.log(e);
      toggaleButton('.icon-material_tw','icon-material_tw_NonStop','nonstope')
  
    })


    // режим без звука 
    doc[2].addEventListener('click', (e)=> {
      e.preventDefault()
    console.log(e);
      toggaleButton('.icon-material_li','icon-material_li_mute','muteVoise')

      const icon_material_li = document.querySelector('.icon-material_tw');
      
      


      
      if(icon_material_li.classList.contains('icon-material_tw_NonStop')){
        icon_material_li.classList.remove('icon-material_tw_NonStop');
        localStorage.removeItem('nonstope');
      }
    
    })



  function toggaleButton(elemSelector,toggalClass,localSelect) {
    const icon_material_li = document.querySelector(elemSelector);

    if (icon_material_li.classList.contains(toggalClass) || localStorage.getItem(localSelect)) {
      icon_material_li.classList.remove(toggalClass)
      localStorage.removeItem(localSelect)
    } else {
      icon_material_li.classList.add(toggalClass)
      localStorage.setItem(localSelect,localSelect)
    }
  }

  function localButtonToggale(seleLocal,elemSelector,toggalClass) {
    let icon_material_li = document.querySelector(elemSelector);
// console.log(icon_material_li);

     if(localStorage.getItem(seleLocal)){
      icon_material_li.classList.add(toggalClass)
    } else {
      icon_material_li.classList.remove(toggalClass)
     }

  }
}
export default togallVois
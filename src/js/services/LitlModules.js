function stopVoiseLisenerAll() {
  // document.getElementsByClassName('iconActive').forEach(element => {
  //   // console.log(element.offsetParent.nextElementSibling);
  //   element.offsetParent.nextElementSibling.click();
  // });
  document.querySelectorAll('.pause ').forEach(item => item.click());
}
function stopVoiseSpeecAll() {
  let al = document.querySelectorAll('audio');
  for(let i = 0; i < al.length;i++){
    al[i].currentTime = 0;
    if (!al[i].paused) {     
      al[i].pause();
    }
    if(i === al.length){
      al = null;
    }
  }
}

// function elemRemovelistener(params) {
  
// }

// item.pause()

export {stopVoiseLisenerAll,stopVoiseSpeecAll}
import multiPlepresButtons  from "../services/multiPlepresButtons";
import chech  from "../services/chech";
import automationSizeInput from "../services/automationSizeInput";
import voiceQuestion from "../services/voiceQuestion";
import elemScroll from "../services/elemScroll";
import modeNonStop from "../services/modeNonStop";
import { stopVoiseLisenerAll,stopVoiseSpeecAll } from "../services/LitlModules";
import widjetCircolLev from "../services/widjetCircolLev";
let count = 0

const  app = (selStart, selStop, selRemove, selTextare, selPahtVoid, selLocal, selBtnResp,selVoisIcPuls,openAll,key) => {
 

// if (localStorage.getItem(selLocal) !== null) {
//   // …то отображаем его содержимое в нашем редакторе
//   let local = localStorage.getItem(selLocal),
//   cor = `${local}`
//   localStorage.setItem(selLocal, chech(local));
//   document.querySelector(selTextare).value = cor ;
// }
     

  const recognizer = global.recog;

  // const btnStartVoise = document.querySelector(selStart)
  // const letstop = document.querySelector(selStop)
  // const remove = document.querySelector(selRemove)
  // const textare = document.querySelector(selTextare)
  // const btnResp = document.querySelector(selBtnResp)
  // const material_fb = document.querySelector('.icon-material_fb')

  const params = {
    btnStartVoise : document.querySelector(selStart),
    letstop : document.querySelector(selStop),
    remove : document.querySelector(selRemove),
    textare : document.querySelector(selTextare),
    btnResp : document.querySelector(selBtnResp),
    material_fb : document.querySelector('.icon-material_fb')
  };

  let resal = true;
  let setinte;
  localStorage.removeItem('nevosprozwodi');

  recognizer.onstart = (e) => {
   
    localStorage.setItem('nevosprozwodi','zapis')
    console.log("Распознавание голоса запущено" + selStart);

    multiPlepresButtons(true,selStart)
  };

  recognizer.onerror = ({ error }) => {
    console.error(error);
    if (error.error == 'no-speech') {
      recognizer.stop();
    }
    if (error.error == 'network') {
      recognizer.stop();
      // recognizer.start();
    }
    if (error.error == 'aborted') {
      recognizer.stop();
    }
  };


  params.btnResp.addEventListener('click', respBtn);

  function respBtn(e) {
    e.preventDefault();
    // console.log(e);
    // e.preventDefault();

    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.cssText  = `max-height: ${panel.scrollHeight}px; `;
    }
    panel= null;
  }

  params.remove.addEventListener('click', removebt)
  function removebt(e){
    e.preventDefault()


    let target = null 
    if(e.target.localName === "button") {
      target = e.target.parentNode.nextElementSibling
    } else {
      target = e.target.parentNode.parentNode.nextElementSibling
    }
    target.value = '';
    target.innerHTML = '';
    localSet('');
    removeAnswer(selLocal);
    // localStorage.setItem(selLocal, '');
    widjetCircolLev()
  }
  recognizer.onend = () => {
    console.log("Распознавание голоса закончено" + selStart);
    multiPlepresButtons(false,selStart)
    localStorage.removeItem('nevosprozwodi');
    if (!resal) return;
    recognizer.start();
  };

  // automationSizeInput(textare)



// const audio = new Audio();
// audio.preload = 'auto';
// audio.src = `./${selPahtVoid}`;


 
            //  audoiMute()
     

  params.btnStartVoise.addEventListener('click', startVoise)
  function startVoise(event) { 
    event.preventDefault();
    stopVoiseSpeecAll();
    
    //set localStorage Where Stay user 
    localStorage.setItem('WhereStayUser',selLocal);
    params.material_fb.classList.add('icon-material_Pulsev');
    
    resal = true;
    document.querySelector(selVoisIcPuls).classList.add('iconActive');

    recognizer.start();
    recognizer.onresult = function (event) {
      let result = event.results[event.resultIndex];
      if (result.isFinal) {
          console.log('Вы сказали в тоге: ' + result[0].transcript);
          saveResultTranscript(true, result,selLocal );
      } else {
          console.log('Промежуточный результат: ', result[0].transcript);
          // …то отображаем его содержимое в нашем редакторе
          saveResultTranscript(false, result,selLocal );
      }
    };
  }

  params.letstop.addEventListener('click', stop);

  function stop(event) {
    event.preventDefault();

    clearTimeout(setinte);
    params.material_fb.classList.remove('icon-material_Pulsev');

    if(params.btnStartVoise.children[0].attributes[0].ownerElement.classList.contains('iconActive')){
      params.btnStartVoise.children[0].attributes[0].ownerElement.classList.remove('iconActive');
    }

    params.btnStartVoise.classList.add('start')
    resal = false;
    // recognizer.abort();
    recognizer.stop();
    // recognizer.onresult = function (event) {
    //   let result = event.results[event.resultIndex];
    //   if (result.isFinal) {

    //   }
    // }
  }
 
  console.log(params.textare.value);
  params.textare.addEventListener('input', textf);

  function textf(event) {
    event.preventDefault();
      // localStorage.setItem(selLocal,chech(textare.value));
      localSet(params.textare.value);
      addAnswer(localStorage.getItem(selLocal));
      if(params.textare.value.length == 0){
        removeAnswer(selLocal)
      }
      if(params.textare.value.length <= 1){
        widjetCircolLev();
      }
  }
  let db= window.dbasce;

  function removeAnswer(key) {
      
    let ap = selLocal.replace(/(\d)+/,'')
    let transaction = db.transaction([ap],"readwrite");
    let store = transaction.objectStore(ap);
    
    let request = store.delete(key);
    //
    request.onsuccess = function(e) {
        console.log('удфленно нахуй');
    }	
  }
 
  function getAnswer() {

    if (getAnswer.isRun) {
      return 
    }

    let ap = selLocal.replace(/(\d)+/,'')

    let transaction = db.transaction([ap],"readonly");
    let store = transaction.objectStore(ap);

    let request = store.get(selLocal);
  
  //
    request.onsuccess = function(e) {
      let result = e.target.result;
      // console.log(result);
        result? saveResultTranscript(true, false, selLocal,result['value']):'';
    }	
    getAnswer.isRun = true
  }
  
  getAnswer()



  

  function addAnswer(value) {

    // console.log("About to add "+selLocal+"/"+value);
    let ap = selLocal.replace(/(\d)+/,'')
    //Get a transaction
    //default for OS list is all, default for type is read
    let transaction = db.transaction([ap],"readwrite");
    //Ask for the objectStore
    let store = transaction.objectStore(ap);
  
    //Define a person
    let person = {
      name:selLocal,
      value:value,
      // created:new Date()
    }
  
    //Perform the add
    // let request = store.add(person);
    let request = store.put(person);
  
    request.onerror = function(e) {
      console.log("Error",e.target.error.name);
      //some type of error handler
    }
  
    request.onsuccess = function(e) {
      console.log("Woot! Did it");
    }
  }
  
  console.log(localStorage.getItem(selLocal) +":text");
  if (localStorage.getItem(selLocal) !== null) {
    saveResultTranscript(true, false, selLocal,localStorage.getItem(selLocal))
  }

  function saveResultTranscript(save = true, result, selLocal,oneSeveer=false) {
    //target result
    widjetCircolLev();
    // automationSizeInput(textare);
    // localStorage.setItem(selLocal,two)
    oneSeveer?localStorage.setItem(selLocal,oneSeveer):'';

    // …то отображаем его содержимое в нашем редакторе
    let local = localStorage.getItem(selLocal),
    cor = `${local?local:''} ${result? result[0].transcript:''}`.trim();
    // target.value = chech(cor.trim());
    params.textare.value = chech(cor);

    
    // target.value = cor ;
    if (save) {
       params.textare.value = chech(cor); 
        localSet(cor);
        // addAnswer(localStorage.getItem(selLocal))
        addAnswer(cor.trim());
      }
      local = null;
      cor = null;
  }

  function localSet(params) {
    localStorage.setItem(selLocal,chech(params));
    // addAnswer(selLocal,chech(params));
  }


  // stopVoiseLisenerAll();
  window.res = [respBtn,removebt,startVoise,stop,textf,params];

  console.log('openAll ' + openAll);
  // console.log(openAll);
  if(!openAll){
    let timeModeNonStop = setTimeout(() => {
      modeNonStop(params.btnStartVoise,params.letstop,selPahtVoid,openAll)

      // очистка
      clearTimeout(timeModeNonStop);
      timeModeNonStop = null
    }, 10);
  }

  if (!openAll) {
    let time = setTimeout(() => {
      elemScroll(selLocal);
      console.log('sellor');
      // очистка
      clearTimeout(time);
      time = null
    }, 10);
  }

}

export default app
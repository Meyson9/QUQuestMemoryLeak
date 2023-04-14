import app  from "./app";
import chech  from "../services/chech";
import matchSearch  from "../services/matchSearch";
import quetionAdd from "../services/quetionAdd";
import db from "../db/db.json"
// const db = require("../assets/db.json")
const standardQuestions = (element, selectorCit = 'standart',key, openAll=false, arlistLength)=>{

 
      let div = document.createElement('div');
      div.classList.add('tinRightIn');
      //${'quetion'+key === 'quetion1'? 'q':'hide' }
      div.innerHTML = `
      <div class="wrapper ${selectorCit}question${key}">
      <div style="
      margin: 35px 0 20px;
          ">
          <div class="row" style="
          display: flex;
          flex-direction: column;
          gap: 13px;
          ">
              <div class="quesion">
                <div class="quesionNum">
                ${key} из ${arlistLength}
                </div>
                <p id="textQuesion">
               ${element[0]}
                </p> 
              </div>
              <div class="wrap-button">
                
              <audio controls class="audio aud" controlslist=" nodownload noremoteplayback "  style="width:100%;max-width:284px;" id="aud${key}">
               <source src="${element[2]? element[2]:'assets/voise/samCh.mp3'}" type="audio/mp3">
               <p>Ваш браузер не поддерживает аудио HTML5. Вот 
               <a href="assets/voise/samCh.mp3">ссылка на аудио</a>.</p>
             </audio>
             <button class="btn-remove btn btn-remove${key}">
             <img class="icon" src="assets/img/cors.png" alt="remove">
             </button>
             <button class="btn-remove btn start-stop start-stop${key}">
             <img class="icon" id="voisIconi${key}" src="assets/img/micro.png" alt="vois">
             
             </button>
             <button class="btn-remove btn pause pause${key}">
             <img class="icon" src="assets/img/mute.png" alt="stop">
             </button>
             ${window.innerWidth < 575 ?` 
             <div>
             <button class="stateBtn stateBtn${key} crossBut" style="
             margin: 15px 12px 0px 33px;
               ">
             </button>
              </div>`:''
            } 
            
           </div>
             
           <textarea class="lasss lasss${key}" style="min-height: 225px;">
           </textarea>
        
          </div>
        
        </div> 
        <div class="respons">
           <button id="btnResp${key}" class="accordion">Ответ</button>
            <div class="panel">
               <p class="textOler">${element[1]? matchSearch(element[1]):'ответа пока нет'}</p>
               ${element[3]?'<a href=${element[3]} target="_blank">Ссылка откроется в новом окне</a>' : ''}
          </div>
          </div>

      </div>
      `;
      // для оббнуления из startStage.js
      window.openall = false
         //  <p  style="text-align: center;" >Ответ</p>
        //  document.querySelector('.quetion1').classList.remove('hide')
      let timer;
      document.querySelector('.wrapperPagestart').append(div);
      
            console.log(document.querySelector('.lasss').value);
      // timer = setTimeout(() => {
      //   app('.start-stop' + key,
      //       '.pause'+key,
      //       '.btn-remove'+key,
      //       '.lasss' + key,
      //       '#aud'+key,
      //       selectorCit+'question'+key,
      //       '#btnResp'+ key,
      //       '#voisIconi'+key,
      //       openAll,
      //       key); 



      //       let stateBtnkey = document.querySelector('.stateBtn'+key);

      //       if(!stateBtnkey)return stateBtnkey = null;

      //       stateBtnkey.addEventListener('click',(e)=>appp(e));

      //       function appp(event) {
      //         quetionAdd(false,undefined,undefined,event);
      //         // анимаию сюда animation: 1s swashIn ease;
      //         stateBtnkey.classList.add('vanishIn');
      //         // console.dir(stateBtnkey);
      //         let timer1
      //         timer1 =  setTimeout(() => {
      //           stateBtnkey.parentElement.remove();
      //           //уборка
      //           clearTimeout(timer1);
      //           timer1 = null;
      //         }, 1100);
      //         stateBtnkey.removeEventListener('click',appp);
      //       }
      //   //уборка
      //   clearTimeout(timer);
      //   timer = null;
      
      // }, 1000);
      
      div = null;
    // }
  
  // }
  


}

export default standardQuestions

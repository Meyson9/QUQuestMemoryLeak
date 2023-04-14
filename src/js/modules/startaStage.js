import standardQuestions from "./standardQuestions"; 
import quetionAdd from "../services/quetionAdd";
import db from "../db/db.json"
import dbArr from "../db/dbArr.json"
import openAllQuestion from "./openAllQuestion";
import whereStay from "./whereStay";
import togallVois from "./togallVois";
import lostMicrophone from "./lostMicrophone";
import { stopVoiseLisenerAll } from "../services/LitlModules";


const startaStage = () =>{
  const btnsStart = document.querySelectorAll('.button'),
        wrapperTutle =  document.querySelector('.wrapperTutle'),
        buttonHolder =document.querySelector('.buttonHolder');

  const body = document.body,
        html = document.documentElement;
        
  let selectorListQ = [];

    let height = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );

   
// console.log(height);
  btnsStart.forEach((item)=> {

    item.addEventListener('click', (e)=>{
      selectorListQ = [];

     let targetBtn = e.target;
     window.modeloderad = false;

     const todoNumOne = document.querySelector('.tinRightIn');
     if(!todoNumOne){
       wrapperTutle.classList.add('pps');
     }
    let time;
    time = setTimeout(() => {
          buttonHolder.classList.remove('hide');
          btnsStart.forEach(span=> {
          span.nextElementSibling.classList.remove('textActiveLevel');
          })
          targetBtn.nextElementSibling.classList.add('textActiveLevel');
          clearTimeout(time);
          time = null;
        }, 1000);

        let navel = document.querySelector('#navel'),
            burger_men = document.querySelector('#burger_men'),
            btnBurge_men = document.querySelector('#btnBurge_men'),
            spanBurger_man = document.querySelector('#spanBurger_man'),
            overlowBurger = document.querySelector('#overlowBurger');

            let sel = 'tick';
      selectorListQ = [];
      // console.log(selectorListQ);
        switch (targetBtn.classList[2]) {
          case 'tick':
            selectorListQ = dbArr['styles'][0];
            // console.log(selectorListQ);        
            sel = 'tick';
            break;
          case 'cross':
            selectorListQ = dbArr['styles'][1];
            sel = 'cross';
            break;
          case 'heart':
            selectorListQ = dbArr['styles'][2];
            sel = 'heart';
            break;
          case 'flower':
  
          selectorListQ = dbArr['styles'][3];
          sel = 'flower'
            break;

        }
        selectorListQ = selectorListQ.length;

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // //         // код для мобильных устройств
          document.querySelector('.staet').classList.add('hide');

          if(navel.classList.contains('burger-menu_nav')){
        // бесполезная строка по моим предполоениям
            let menu = document.querySelector('.burger-menu');

            menu.classList.remove('burger-menu_active');
          } else {
            navel.classList.add('burger-menu_nav');
            burger_men.classList.add('burger-menu');
            btnBurge_men.classList.add('burger-menu_button');
            spanBurger_man.classList.add('burger-menu_lines');
            overlowBurger.classList.add('burger-menu_overlay');
            
            burgerMenu('.burger-menu');
          } 
          if(!document.querySelector('.downloadedBtn').children[0].classList.contains('fabSegment')){
          let div = document.createElement('div');
          div.classList.add('fabSegment','alerot')
          div.style.cssText = "align-items: center;"
          div.innerHTML = `
          <ul class="fab-buttons_Segment alerot">
            <li class="fab-buttons__item_Segment">
              <div href="#" class="fab-buttons__link_segment alerot btnFile fb" style="
                width: 100px;
                height: 30px;
                border-radius: 30px;
            " data-tooltip="Найти актив...">
                  <i class="icon-material icon-material_fb" style="
                  top: -14px;
                  position: relative;
              "></i>
              </div>
            </li>
            <li class="fab-buttons__item_Segment">
              <div href="#" class="fab-buttons__link_segment alerot btnFile tw" style="
                  width: 100px;
                  height: 30px;
                  border-radius: 30px;
              " data-tooltip="Нон-стопом">
                    <i class="icon-material icon-material_tw" style="
                    top: -14px;
                    position: relative;
                "></i>
              </div>
            </li>
            <li class="fab-buttons__item_Segment">
              <div href="#" class="fab-buttons__link_segment alerot btnFile li" style="
                  width: 100px;
                  height: 30px;
                  border-radius: 30px;
              "  data-tooltip="Звук">
                    <i class="icon-material icon-material_li" style="
                    top: -14px;
                    position: relative;
                "></i>
              </div>
            </li>
            <li class="fab-buttons__item_Segment">
              <div href="#" class="fab-buttons__link_segment alerot btnFile gp_segment" style="
                width: 100px;
                height: 30px;
                border-radius: 30px;
            " data-tooltip="показать все">
                  <i class="icon-material icon-material_gp" style="
                  top: -14px;
                  position: relative;
              "></i>
                </div>
            </li>
            <li class="fab-buttons__item_Segment">
              <div href="#" class="fab-buttons__link_segment alerot btnFile wher" style="
                  width: 100px;
                  height: 30px;
                  border-radius: 30px;
              " data-tooltip="где я был?">
                    <i class="icon-material icon-material_Wher" style="
                    top: -14px;
                    position: relative;
                "></i>
              </div>
            </li>
          </ul>
          </span>
          `

            // Получаем ссылку на элемент, перед которым мы хотим вставить sp1
            const sp2 = document.querySelector(".btnFile");
            //Получаем ссылку на родителя sp2
            const parentDiv = sp2.parentNode;

            // Вставляем sp1 перед sp2
            parentDiv.insertBefore(div, sp2);
            div = null;
            whereStay(document.querySelector('.wher'));
            togallVois(true);
            lostMicrophone(true);
            console.log('код для мобильных устройств 180');

            document.querySelector('.gp_segment')
          }
          document.querySelector('.gp_segment').addEventListener('click',clickIphone,{once:true})
            
          function  clickIphone() {
            
            alert('----10')
         
            let timer;

            // console.log(window.arAlex);
            let  count = 0,
            lengthIteration = 10,
            index = 0;
           
                      chicle();
                  function chicle() {
                    // console.log('цыкл игнарируется  ? ');
                    for ( index ; index < lengthIteration; index++) {
                      // console.log(count+' ========count= : index ' + index);
                      count++;
                      // console.log(`(${count}  >= ${selectorListQ} )`);
                      if(count  === selectorListQ ){
                        return quetionAdd(false,false,false,true);
                      }
                      // const element = [index];

                     let time2 = setTimeout(() => {
                        quetionAdd(false,false,false,false);
                        // window.openall = true;
                        clearTimeout(time2);
                        time2 = null;
                      }, 500);
                    }

                    lengthIteration += 20;
                    
                    index = count
                    
                    if(count  >= selectorListQ ){
                      count = 0,
                      lengthIteration = 30,
                      index = 0
                      return ;
                    }else {
                      // console.log('мы тут вызываем');

                     let time3 = setTimeout(() => {
                        chicle();
                        clearTimeout(time3);
                        time3 = null;
                      }, 1500);
                    }
                  }

                 
                }
            

        } else {
          openAllQuestion(sel);
          buttonHolder.classList.add('holeOut');

          if(navel.classList.contains('burger-menu_nav')){
            navel.classList.remove('burger-menu_nav');
            burger_men.classList.remove('burger-menu');
            btnBurge_men.classList.remove('burger-menu_button');
            spanBurger_man.classList.remove('burger-menu_lines');
            overlowBurger.classList.remove('burger-menu_overlay');
          }

          // код для обычных устройств
          buttonHolder.classList.remove('holeOut');

          buttonHolder.classList.add('buttonHolderStatic');

          if(!buttonHolder.classList.contains('bord')){
            buttonHolder.classList.add('hide');
            buttonHolder.classList.add('bord');
          }
          buttonHolder.classList.add('gridAct');
        }

      // }, 300);
      
     
      // selectorListQ ? console.log('не пуст') : console.log("пуст");

      clearLocalStoreg();
      function clearLocalStoreg() {
        for(let [key, value] of Object.entries(localStorage)) {
          let selectorQuestionLevel =  key.search(/(tick|cross|heart|flower)(question)/);
          
          if (selectorQuestionLevel === 0) {
            localStorage.removeItem(key)
            
          }
          selectorQuestionLevel  = null;
          selectorQuestionLevel  = null;


        }

      }
      

     let time4 = setTimeout(() => {
        let list = document.querySelectorAll('.tinRightIn');

        if(list){
          console.log('true list ===_');
          // stopVoiseLisenerAll();
          // при смене уровня сложности меняет на стандартную высоту страницы 
          for (let index = 0; index < list.length; index++) {
            const element = list[index];
            
            // element.children[0].children[1].children[0].removeEventListener('click',window.res[0])
            // element.children[0].children[0].children[0].children[1].children[1].removeEventListener('click',window.res[1])
            // element.children[0].children[0].children[0].children[1].children[2].removeEventListener('click',window.res[2])
            // element.children[0].children[0].children[0].children[1].children[3].removeEventListener('click',window.res[3])
            // element.children[0].children[0].children[0].children[2].removeEventListener('click',window.res[4])


              element.remove();
             
            }
            list = null;

          document.body.style.height  = height +'px'
        } 

        localStorage.setItem('sel',sel);
     
        window.selFoOpenAllquestion = sel;

        quetionAdd(false,sel);

        if(document.querySelector('[data-span2]')){
          document.querySelector('[data-span2]').classList.remove('opal');
        }
        clearTimeout(time4);
        time4 = null;
      }, 800);  
    })
  })
  




  
  function burgerMenu(selector) {
    let menu = document.querySelector(selector);

    let button = document.querySelector('.burger-menu_button');
    let butto1 = document.querySelector('.burger-menu_lines');
    let links = document.querySelector('.burger-menu_link');
    let overlay = document.querySelector('.burger-menu_overlay');
    
    button.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    butto1.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    menu.classList.contains('losharablt');
      if (menu.classList.contains('burger-menu_active')) {
        menu.classList.remove('burger-menu_active')
        
      } else {
        menu.classList.add('burger-menu_active');
        
      }
    });
    
    overlay.addEventListener('click', () => toggleMenu());
    
    function toggleMenu(){
      const spaner = document.querySelector('[data-span2]') ;
      if(menu.classList.contains('burger-menu_active')){
        menu.classList.remove('burger-menu_active');
        spaner.classList.remove('opal');
        // document.querySelector('.burger-menu_lines').style = 'opacity: 1;'
      } else {
        // document.querySelector('.burger-menu_lines').style = 'opacity: 0;'
        menu.classList.add('burger-menu_active');
        spaner.classList.add('opal');

      }
      
      // if (menu.classList.contains('burger-menu_active')) {
      //   document.querySelector('body').style='overlow= hidden';
      // } else {
      //   document.querySelector('body').style='overlow= visible';
      // }
    }
  }
}
export default startaStage

import dbArr from'../db/dbArr.json'
import standardQuestions from './standardQuestions';
let selectorDB = null,
localSel = null;

const whereStay = (selector = false) => {
  // console.log(selector);
  // console.log(sel);
  // selectorDB= selector
  // localSel = sel
    if (selector) {
     return selector.addEventListener('click', (e)=> whereSt(e));
    }

  const doc = document.querySelectorAll('.fab-buttons')
  
  doc[0].children[4].addEventListener('click', (e)=> whereSt(e))
  
  
  
  function whereSt (e) {
    e.preventDefault()
    console.log('index');

    const sel =  localStorage.getItem('WhereStayUser');
    
    if (!sel) {
      return console.log('WhereStayUser = undefained');
    }
    
    // если вопрос уже существует просто долистаем до нее 
    const selen = document.querySelector('.'+sel);

    if(selen){
      return selen.scrollIntoView({block: "start", behavior: "smooth"})
    }
    

    // if (sel) {

    const selectorQuestionLevel =  sel.replace(/(question)(\d)+/,''); // узнаю к какой группе вопрос принадлежит
    const numberQuestion =  sel.replace(/(tick|cross|heart|flower)(question)/,'') - 1; // номер вопроса 
      
    // console.log(selectorQuestionLevel);
    // console.log(sel);
    // console.log(numberQuestion);

    // существуют ли вопросы 
    const selectorQues = document.querySelector(`.wrapper`);

    let selectorQuestionopen;  
    // есть? да значит смотрим что вопросы с какой группы сущесвтуют : вопроов нету
    selectorQues? selectorQuestionopen = selectorQues.classList[1].replace(/(question)(\d)+/,'')
    :selectorQuestionopen = null;
    // с какого овпроса начать 
    let index = document.querySelectorAll('.tinRightIn').length||0

    if(selectorQuestionopen === selectorQuestionLevel){
      console.log('нажимать на изменения урвоня нет смысла!');
    }
    console.log(`${selectorQuestionopen} !== ${selectorQuestionLevel} || !${selectorQuestionopen}`);

    if(selectorQuestionopen !== selectorQuestionLevel || !selectorQuestionopen){
      window.quetiAddn = true; 
      document.querySelector(`.${selectorQuestionLevel}`).click();
      index = 0
    }
    // if(document.querySelector(`.${selectorQuestionLevel}`)){
      // }
    
     let time = setTimeout(() => {
        // document.querySelector('.tinRightIn').remove()
        let veriIemselectorCLass = null
        let selectorListQ = null

        switch (selectorQuestionLevel) {
          case 'tick':
            selectorListQ = dbArr['styles'][0];
            veriIemselectorCLass = 'tick';
            break;
          case 'cross':
            selectorListQ = dbArr['styles'][1];
            veriIemselectorCLass = 'cross';
            break;
          case 'heart':
            selectorListQ = dbArr['styles'][2];
            veriIemselectorCLass = 'heart';
            break;
          case 'flower':
            selectorListQ = dbArr['styles'][3];
            veriIemselectorCLass = 'flower';
            break;
        }
        window.modeloderad = true; 
        const wrapperTutle =  document.querySelector('.wrapperTutle')
        if(wrapperTutle.classList.contains('pps')){
          wrapperTutle.classList.remove('pps')
        }

  // let index = document.querySelectorAll('.tinRightIn').length||0
        console.log(index);

        for (index ; index < numberQuestion+1; index++) {
          const element = selectorListQ[index];
        
          console.log(numberQuestion);
          standardQuestions( element, selectorQuestionLevel, index+1,false,selectorListQ.length)  

        }
        clearTimeout(time);
        time = null;
                       }, 2000);
            // }

}




}

export default whereStay
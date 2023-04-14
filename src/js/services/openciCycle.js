import { stopVoiseLisenerAll,stopVoiseSpeecAll } from "./LitlModules";
import standardQuestions from "../modules/standardQuestions";
import quetionAdd from "./quetionAdd";
import dbArr from '../db/dbArr.json'
let selectorDB,selectorDBLenght

const openciCycle = (localSel) => {
 
  let selectorListQ = null

        switch (localSel) {
          case 'tick':
            selectorListQ = dbArr['styles'][0];
            break;
          case 'cross':
            selectorListQ = dbArr['styles'][1];
            break;
          case 'heart':
            selectorListQ = dbArr['styles'][2];
            break;
          case 'flower':
            selectorListQ = dbArr['styles'][3];
            break;
        }
        // let index = document.querySelectorAll('.tinRightIn').length
        
         selectorListQ = selectorListQ.length;
  // stopVoiseLisenerAll();
  // stopVoiseSpeecAll();
  let index = document.querySelectorAll('.tinRightIn').length
  for (index ; index < selectorListQ; index++) {
    console.log(index + " : " + (selectorListQ -1));
    // console.log(selectorListQ);
    
    if(index == selectorListQ-1) {
      console.log('true');
      quetionAdd(false,false,false,false);

    } else {
      quetionAdd(false,false,false,true);
    }
    
  }

  selectorListQ= null;
  localSel = null;

}
export default openciCycle;
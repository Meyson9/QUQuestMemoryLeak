import dbArr from '../db/dbArr.json'
const widjetCircolLev = (isFinal) => {
const btns = document.querySelectorAll('.startPage')
    // console.log(localStorage.key());
    // console.time('ti');
    const obj = {
      'tickquestion':0,
      'crossquestion':0,
      'heartquestion':0,
      'flowerquestion':0
    }

    //получить все значений нужной мне колонки и сделать подсчет строк 
    let db= window.dbasce
    // console.log(db);

    portDB('tickquestion')
    portDB('crossquestion')
    portDB('heartquestion')
    portDB('flowerquestion')

    function portDB(params) {
      
    let transaction = db.transaction([params],"readonly");
    let store = transaction.objectStore(params);
    let p = store.getAll()
    // console.log(p);

    p.onsuccess = function() {  
      // console.log(p['result']); // arra
      // console.log(p.source.name); // namecuestion Name all
      compare(p.source.name)
    }
    
    
    function compare(selector) {
      if(selector == p.source.name){
        let arr = p.result.length;
        // console.log(p.result[0]);
        // arr
        obj[p.source.name] = arr;
        // console.log(obj[p.source.name]);
        name()
      }
    }
    
}
      

    
    // 2 / 10 * 100 = 2
    function name() {

    btns.forEach(item =>{
      // console.dir(item);
      let selectbivider
      switch (item.classList[2]) {
        case 'tick':
          selectbivider = dbArr['styles'][0].length;
          break;
        case 'cross':
          selectbivider = dbArr['styles'][1].length;
          break;
        case 'heart':
          selectbivider = dbArr['styles'][2].length;
          break;
        case 'flower':
          selectbivider = dbArr['styles'][3].length;
          break;
      }
      // console.log(obj[item.classList[2]+"question"]);
      // console.log(item.classList[2]);
      let counterProcent = (Math.round(obj[item.classList[2]+"question"] / selectbivider * 100))
      item.textContent = counterProcent + '%';
      item.style.setProperty('--pie-p', counterProcent + '%')
    })
    // console.timeEnd('ti');
  }
}

export default widjetCircolLev
import startaStage from "./modules/startaStage";
import upWindowuser from "./modules/upWindowuser";
import dblClicChanje from "./modules/dblClicChanje";
import togallVois from "./modules/togallVois";
// import openAllQuestion from "./modules/openAllQuestion";
import lostMicrophone from "./modules/lostMicrophone";
import whereStay from "./modules/whereStay";
// import SineWaves from 'sine-waves'
import exportQuestion from "./modules/exportQuestion";
import widjetCircolLev from "./services/widjetCircolLev";
import openFile from './modules/openFile';
import burgerMenu from "./modules/burgerMenu";
let db;

// import icon from 'remixicon'
window.addEventListener('DOMContentLoaded', () => {
	// console.log(Module._pathCache);

	function indexedDBOk() {
		return "indexedDB" in window;
	}
	//No support? Go in the corner and pout.
	if (!indexedDBOk) return;

	let openRequest = indexedDB.open("idarticle_people3", 1);

	openRequest.onupgradeneeded = function (e) {
		let thisDB = e.target.result;

		if (!thisDB.objectStoreNames.contains("tickquestion")) {
			thisDB.createObjectStore("tickquestion", { keyPath: 'name' });
		}
		if (!thisDB.objectStoreNames.contains("crossquestion")) {
			thisDB.createObjectStore("crossquestion", { keyPath: 'name' });
		}
		if (!thisDB.objectStoreNames.contains("heartquestion")) {
			thisDB.createObjectStore("heartquestion", { keyPath: 'name' });
		}
		if (!thisDB.objectStoreNames.contains("flowerquestion")) {
			thisDB.createObjectStore("flowerquestion", { keyPath: 'name' });
		}
	}

	openRequest.onsuccess = function (e) {
		db = e.target.result;
		window.dbasce = db;
		widjetCircolLev(true);
		exportQuestion(db);
		openFile(db, openRequest);
	}

	openRequest.onerror = function (e) {
		//Do something for the error
		console.log(e);
		console.log('курица общипанная едром из гомункула из торпедной стружки говна');
	}

	const recognizer = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();


	// const recognizer =  new SpeechRecognition(); 
	// Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
	recognizer.interimResults = true;

	// Какой язык будем распознавать?
	recognizer.lang = 'ru-Ru';
	recognizer.continuous = true;
	global.recog = recognizer;



	burgerMenu();

	startaStage();

	togallVois()

	dblClicChanje();

	lostMicrophone()

	whereStay()

	upWindowuser()


});

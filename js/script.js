let elems = document.body.querySelectorAll('*');
console.log(elems);
console.log("Done!");

let selectorArr = []; //массив селекторов
let tagArr = []; // массив тегов
let colorArr = ['red', 'grey', 'green', 'lightblue', 'orange', 'black', 'lightblue', 'pink']; //массив цветов

// console.log("elems.length = " + elems.length);

for (let i = 0; i < elems.length; i++) {
	if (elems[i].tagName != 'SCRIPT') { //тег script не учитывается
		if (tagArr.includes(elems[i].tagName)) {
			console.log('Duplicate!');
		} else {
			let curItem = elems[i].tagName;	//в curElem записываем имя тега текущего элемента

			let cssObj = {}; //создаем объект для определения css

			cssObj.tag = elems[i].tagName.toLowerCase(); //записываем свойство tag ключом из curElem
			cssObj.id = elems[i].id; //записываем свойство id ключом из curElem
			cssObj.number = i; //записываем свойство number ключом из цикла

			// let classArr = []; //создаем пустой массив для классов
			// for (let k = 0; k < elems[i].className.toString().split(' ').length; k++) { //цикл по количеству классов (через пробел)
			// 	classArr.push(elems[i].className.toString().split(' ')[k]); //каждый из классов записываем в массив  для классов
			// 	console.log(classArr);
			// }
			// cssObj.classes = classArr;

			selectorArr.push(cssObj); //в массив селекторов добавляем объект cssObj

			tagArr.push(elems[i].tagName); //в массив тегов добавляем tagName
		}
	}
};

let cssItems = null;

for (let k = 0; k < selectorArr.length; k++) {
	cssItems = document.getElementsByTagName(selectorArr[k].tag);
	console.log(cssItems);

	if (cssItems.length == 1) {
		cssItems[0].style.borderStyle = "solid";
		cssItems[0].style.borderWidth = "3px";
		cssItems[0].style.marginTop = "10px";
		cssItems[0].style.marginLeft = "10px";
		cssItems[0].style.marginRight = "10px";
		cssItems[0].style.paddingTop = "15px";
		cssItems[0].style.paddingLeft = "10px";
		cssItems[0].style.borderColor = colorArr[k];

		cssItems[0].insertAdjacentHTML('afterbegin', '<legend>' + selectorArr[k].tag + '</legend>'); 
		
		let legendItem = cssItems[0].getElementsByTagName('legend');
		console.log(legendItem);
		legendItem[0].style.color = colorArr[k];
		legendItem[0].style.fontSize = '15px';
		legendItem[0].style.maxWidth = '50px';
		legendItem[0].style.marginTop = '-25px';
		legendItem[0].style.marginLeft = '10px';
		legendItem[0].style.backgroundColor = 'white';
		legendItem[0].style.textAlign = 'center';
		legendItem[0].style.fontWeight = 'normal';

	} else {
		for (let l = 0; l < cssItems.length; l++) {
			cssItems[l].style.borderStyle = "solid";
			cssItems[l].style.borderWidth = "3px";
			cssItems[l].style.marginTop = "10px";
			cssItems[l].style.marginLeft = "10px";
			cssItems[l].style.marginRight = "10px";
			cssItems[l].style.paddingTop = "15px";
			cssItems[l].style.paddingLeft = "10px";
			cssItems[l].style.borderColor = colorArr[k];

			cssItems[l].insertAdjacentHTML('afterbegin', '<legend>' + selectorArr[k].tag + '</legend>'); 

			let legendItem = cssItems[l].getElementsByTagName('legend');
			console.log(legendItem);
			legendItem[0].style.color = colorArr[k];
			legendItem[0].style.fontSize = '15px';
			legendItem[0].style.maxWidth = '50px';
			legendItem[0].style.marginTop = '-25px';
			legendItem[0].style.marginLeft = '10px';
			legendItem[0].style.backgroundColor = 'white';
			legendItem[0].style.textAlign = 'center';
			legendItem[0].style.fontWeight = 'normal';
		} 
	}
};

	// for (let l = 0; l < cssItems.length; l++) {
	// 	console.log('cssItems[l]: ' + cssItems[l].classes);

	// 	cssItems[l].style.borderStyle = "solid";
	// 	cssItems[l].style.borderWidth = "3px";
	// 	cssItems[l].style.margin = "15px";
	// 	cssItems[l].style.padding = "25px";
	// 	cssItems[l].style.borderColor = colorArr[k];

	// 	// let legend = document.createElement('legend');
	// 	// let textLegend = document.insertAdjacentHTML(cssItems[l].tag);
	// 	// legend.appendChild(textLegend);
	// 	cssItems[l].insertAdjacentHTML('afterbegin', '<legend>' + selectorArr[k].tag + '</legend>'); 
	// }
// 	console.log(cssItems);
// };
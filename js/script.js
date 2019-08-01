function addCssStylesToHTML(param) {
    let elems = document.body.querySelectorAll('*');
    console.log(elems);

    let selectorArr = []; //массив селекторов
    let tagArr = []; // массив тегов
    let colorArr = ['red', 'grey', 'green', 'pink', 'orange', 'black', 'lightblue']; //массив цветов

    function getRandomColorsArray(num) {
        for (let i = 0; i < num; i++) {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let k = 0; k < 6; k++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            colorArr.push(color);
        }
        return colorArr;
    }

    function addCssStyleAroundTag(index, colorNum) {
        cssItems[index].style.borderStyle = "solid";
        cssItems[index].style.borderWidth = "3px";
        cssItems[index].style.margin = "10px 10px 10px 10px";
        cssItems[index].style.paddingTop = "15px";
        cssItems[index].style.paddingLeft = "10px";
        cssItems[index].style.borderColor = colorArr[colorNum];
    }

    function addLegend(index, tagNum, type) {
        console.log('type: ' + type);
        switch (type) {
            case 'tag':
                console.log("we are in case tag");
                cssItems[index].insertAdjacentHTML('afterbegin', '<legend>' + tagArr[tagNum].toLowerCase() + '</legend>');
                break;

            case 'class':
                console.log("we are in case class");
                let selectorByClassInd = 0; //переменная для сопоставления нескольких записей с одинаковым тегом, но остальными разными параметрами
                for (let ind = 0; ind < selectorArr.length; ind++) {
                    if (selectorArr[ind].tag == tagArr[tagNum].toLowerCase()) {
                        if (index == selectorByClassInd) {
                            if (selectorArr[ind].classes[0] != '') {
                                cssItems[index].insertAdjacentHTML('afterbegin', '<legend>.' + selectorArr[ind].classes.join('.') + '</legend>');
                            }
                        }
                        selectorByClassInd++; // в случае когда искомый тег находится в массиве selectorArr, увеличиваем счетчик на 1 для обработки следующей записи с таким же тегом
                    }
                }
                break;

            case 'id':
                console.log("we are in case id");
                let selectorByIdInd = 0; //переменная для сопоставления нескольких записей с одинаковым тегом, но остальными разными параметрами
                for (let ind = 0; ind < selectorArr.length; ind++) {
                    if (selectorArr[ind].tag == tagArr[tagNum].toLowerCase()) {
                        if (index == selectorByIdInd) {
                            if (selectorArr[ind].id != '') {
                                cssItems[index].insertAdjacentHTML('afterbegin', '<legend>#' + selectorArr[ind].id + '</legend>');
                            }
                        }
                        selectorByIdInd++; // в случае когда искомый тег находится в массиве selectorArr, увеличиваем счетчик на 1 для обработки следующей записи с таким же тегом
                    }
                }
                break;

            case 'combo':
                console.log("we are in case id");
                let selectorByXInd = 0;
                let classInLegend = '';
                let idInLegend = '';
                for (let ind = 0; ind < selectorArr.length; ind++) {
                    if (selectorArr[ind].tag == tagArr[tagNum].toLowerCase()) {
                        if (index == selectorByXInd) {
                            if (selectorArr[ind].id != '') {
                                idInLegend = '#' + selectorArr[ind].id;
                            }
                            if (selectorArr[ind].classes[0] != '') {
                                classInLegend = '.' + selectorArr[ind].classes.join('.');
                            }
                        }
                        selectorByXInd++;
                    }
                }
                cssItems[index].insertAdjacentHTML('afterbegin', '<legend>' + tagArr[tagNum].toLowerCase() + classInLegend + idInLegend + '</legend>');
                break;
        }
    }

    function addCssStyleAroundLegend(index, tagNum, type) {
        addLegend(index, tagNum, type);

        let legendItem = cssItems[index].getElementsByTagName('legend');
        console.log(legendItem);
        if (legendItem.length > 0) {
            legendItem[0].style.color = colorArr[tagNum];
            legendItem[0].style.fontSize = '15px';
            legendItem[0].style.maxWidth = '100px';
            legendItem[0].style.marginTop = '-25px';
            legendItem[0].style.marginLeft = '10px';
            legendItem[0].style.backgroundColor = 'white';
            legendItem[0].style.textAlign = 'center';
            legendItem[0].style.fontWeight = 'normal';
        }
    }

    for (let i = 0; i < elems.length; i++) {
        // if (elems[i].tagName != 'SCRIPT') { //тег script не учитывается
        if (elems[i].tagName.display != 'none') { //тег script не учитывается
            let curItem = elems[i].tagName; //в curElem записываем имя тега текущего элемента

            let cssObj = {}; //создаем объект для определения css

            cssObj.tag = elems[i].tagName.toLowerCase(); //записываем свойство tag ключом из curElem
            cssObj.id = elems[i].id; //записываем свойство id ключом из curElem
            cssObj.number = i; //записываем свойство number ключом из цикла

            let classArr = []; //создаем пустой массив для классов
            for (let k = 0; k < elems[i].className.toString().split(' ').length; k++) { //цикл по количеству классов (через пробел)
                classArr.push(elems[i].className.toString().split(' ')[k]); //каждый из классов записываем в массив  для классов
                console.log(classArr);
            }
            cssObj.classes = classArr;

            selectorArr.push(cssObj); //в массив селекторов добавляем объект cssObj

            if (tagArr.indexOf(elems[i].tagName) == -1) {
                tagArr.push(elems[i].tagName); //в массив тегов добавляем tagName
            }
        }
    };

    if (tagArr.length > colorArr.length) {
        getRandomColorsArray(tagArr.length - colorArr.length);
    }

    let cssItems = null;

    for (let k = 0; k < tagArr.length; k++) {
        cssItems = document.getElementsByTagName(tagArr[k]);

        if (cssItems.length == 1) {
            addCssStyleAroundTag(0, k);
            addCssStyleAroundLegend(0, k, param);
        } else {
            for (let l = 0; l < cssItems.length; l++) {
                addCssStyleAroundTag(l, k);
                addCssStyleAroundLegend(l, k, param);
            }
        }
    };
}

addCssStylesToHTML('combo');
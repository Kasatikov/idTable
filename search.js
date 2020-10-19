let submit = document.getElementById("submit");
let search = document.getElementById("search");
let log =  document.getElementById("log");
let simpleLog = document.getElementById("simple-log");

submit.onclick = function() {
    if (search.value) {
        log.innerHTML = '';
        simpleLog.innerHTML = '';
        let hashResult = hashTable.getItemIndex(search.value);
        let simpleResult = simpleSearch.getItemIndex(search.value);
        if (hashResult !== null) {
            log.insertAdjacentHTML('afterbegin', '<div>Результат поиска по методу цепочек: Id найден, его номер: ' + hashResult + '</div>');
        }
        else {
            log.insertAdjacentHTML('afterbegin', '<div>Результат поиска по методу цепочек: Id  не найден</div>');
        }
        if (simpleResult > -1) {
            simpleLog.insertAdjacentHTML('afterbegin', '<div>Результат простого поиска: Id найден, его номер: ' + simpleResult + '</div>');
        }
        else {
            simpleLog.insertAdjacentHTML('afterbegin', '<div>Результат простого поиска: Id  не найден</div>');
        }
    }
};
let fetch = require('node-fetch');

const dataList = {
    blockbuster: 'https://api.github.com/repos/martinlunde/IT2810-Angular/languages',
    lundeweb: 'https://api.github.com/repos/martinlunde/lundeweb/languages',
    onlineweb: 'https://api.github.com/repos/dotkom/onlineweb4/languages',
    pim: 'https://api.github.com/repos/martinlunde/IT2810-React-and-Native/languages',
    samfundet: 'https://api.github.com/repos/martinlunde/IT1901/languages'
};
const updatedLanguages = {};

function updateLanguages() {
    for(let element in dataList){
        getData(dataList[element], element);
    }
}

function getData(url, element) {
    fetch(url).then( result => {
        result.json().then((data) => {
            console.log(element);
            console.log(data);
        });
    });
}

updateLanguages();
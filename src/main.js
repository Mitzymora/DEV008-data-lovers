//import { filterData, sortData, computeStatus, filterCasas, filterEstatus, searchNombre } from './data.js';

import got from './data/got/got.js'; //Se agrega TODA la data//
import data from './data/got/got.js';

console.log(got, data, got.js);

let fullName = ("fullName")
fullName.sort ((a,b) => {
    if (a == b) {
        return 0;
    }
    if(a > b){
        return -1;
    }
    return 1;
}
)
console.log(fullName);


//import { lastName } from './data/got/got.js';
//console.log( lastName )

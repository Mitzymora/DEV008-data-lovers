//importación funciones data
//import { filterData, sortData, computeStatus, filterCasas, filterEstatus, searchNombre } from './data.js';

//Se agrega TODA la data de base de datos
import data from './data/got/got.js';
//console.log(data);
//const trono = (data);

//funcion muestra de tarjetas
function gotCardsCreator(data){ 
    document.getElementById("gotCards").innerHTML=data.map((item)=>
    
        <div class="container">
                <div class="card">
                    <div><img class="got-image.url" src="${item.img}"
                        alt="Imagen GOT"></img>
                    </div>
                    <div class="GOT-fullName">${item.fullName}
                    </div>
                </div>
        </div>
        
    )
    .join("");
}
return gotCardsCreator(data.got);




//const filtrado = lastName.filterCasas(function(lastName){
//return lastName > 0
//});

//console.log(lastName);
//console.log.filtrado;



//import trono from './data/got/got.js';
//console.log(trono);



//hacer constantes de los contenedores de busqueda 
//const filtroabc = document.getElementById("ordenalfabetico")
//const filtrocasa= document.getElementById("filtro-casas")
//const filtrovivomuerto= document.getElementById("Estado")


//const sortData = document.getElementById("ordenalfabetico").addEventListener()

//Prueba de JS//

//const lastName = lastName;


//import { lastName } from './data/got/got.js';
//console.log( lastName )

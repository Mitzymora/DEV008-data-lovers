

// estas funciones son de ejemplo
//función para orden a-z y viceversa
export function sortData(order, data) {
  console.log(data)
  let ordenalfabetico;  
  if (order === "abc") {ordenalfabetico = data.got.sort((a, b) => {
    if (a.fullName < b.fullName) {
      return -1;
    }
    if(a.fullName > b.fullName){
      return 1;
    }
    return 0;
  });
} else if(order === "cba") {
  ordenalfabetico = data.got.sort((a, b)=> {
    if (a.fullName> b.fullName){
      return -1;
    }
    if (a.fullName < b.fullName){
      return 1;
    }
    return 0;
  });
}
console.log(ordenalfabetico);
return ordenalfabetico;
}





  //export function filterData(){

//}

//export const anotherExample = () => {
  //return 'OMG';
//};

//export const data = () => {
  //console.log ( data.got)
  

//}



//console.log( lastName)


//const searchNombre= document
//export default function searchNombre(input,selector){
  //searchNombre.addEventListener("keyup", e=> {
    
  //})
//}
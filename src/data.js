// estas funciones son de ejemplo
export const sortData = (fullName)
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

export const sortData = (fullName) => {
  let ordenar= fullName.sort((a,b) =>
  {
    if (a.fullName > b.fullName) {
    return 1;
  } else 
  {
  return -1;
} 
});
return ordenar;
};

console.log()

  //export function filterData(){

//}

//export const anotherExample = () => {
  //return 'OMG';
//};

//export const data = () => {
  //console.log ( data.got)
  

//}

export {
  got} from './got.js';


//console.log( lastName)

//const searchNombre= document
//export default function searchNombre(input,selector){
  //searchNombre.addEventListener("keyup", e=> {
    
  //})
//}
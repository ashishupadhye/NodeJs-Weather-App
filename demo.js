// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000); // (*)
  
//   }).then(function(result) { // (**)
  
//     console.log(result);
//     return result * 2;
  
//   }).then(function(result) { // (***)
  
//     console.log(result);
  
//     return result * 2;
  
//   }).then(function(result) {
  
//     console.log(result);
  
//     return result * 2;
  
//   })/*.then(function(result){
//       console.log("Extra")
//   })*/

/* ============================================================*/



setTimeout(() =>{
    console.log("3 secounds");
},3000)

const geoCode = (address, callback) =>{
    setTimeout(()=>{
        const data = {
            latitude : 0,
            lagitude : 0
        }
        callback(data)
    },3000)
    
}

geoCode('Pune', (data)=>{
        console.log(data);
})

const add = (a, b, callback) =>{
    setTimeout(()=>{

        callback(a + b)
    },3000)
    
}

add(1, 4, (sum)=>{
    console.log(sum)
})
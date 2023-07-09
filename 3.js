// var - scoped to nearest function
// let - scoped to nearest block { }

// function test(){
// // var scope
//     if(){
//         var x = "nm";
//         let y = "ag";
//         // let & var scope
//     }

//     // var scope
// }

// Var Scope expl
// function myLoop() {
//   for (var i = 0; i <= 5; i++) {
//     console.log(i);
//   }

//   console.log("end - ", i);
// }

// Let Scope expl
function myLoop() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }

  console.log("end - ", i);
}

myLoop();

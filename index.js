

const data ={
   'student_data1': {
    name:'A',
    id: 123,
    marks:[{'hi':11,'mt':22,'en':20}]
  },
  'student_data2':{
    name:'B',
    id: 124,
    marks:[{'hi':12,'mt':20,'en':10}]
  },
  'student_data3':{
    name:'c',
    id: 125,
    marks:[{'hi':12,'mt':22,'en':23}]
  },
}

console.log(data)
console.log(data.student_data1.marks);
  


//    totalmaks=
var total_marks = {} ;



//
for (var property in data) {
    
    console.log(property);
    console.log(data.student_data1.marks);
  
   for (var pro in data.student_data1.marks){
       console.log(data[property])
    //    console.log(property[pro].name);
    //    console.log();    
   }

    // console.log(data[pro][property])
    // console.log(pro,":",data.marks[0]);
    // total_marks += data.marks[0]
}
// console.log(total_marks);


// for (var key in data) {
//     if (data.hasOwnProperty(key)) {
//        console.log(data[key].id);
//     }
//  }

//   const jsonStr = JSON.stringify(data);
//   const p = JSON.parse(jsonStr)




//   const haved ={
//         "124":[{"name":data.name,"total_marks":"100"}],
//         "125":[{"name":data.name,"total_marks":"100"}],
//         "126":[{"name":data.name,"total_marks":"100"}]
        
//   }

//   const jf = JSON.stringify(haved);
//   console.log(haved);

//   const st = JSON.stringify(student_data);


//   console.log(p);
  
//   console.log(jsonStr);




//question
// Write a function that takes input as param and returns ourput given below
// Input: 

//      [
//       {
//         student_data:{
//           name:'A',
//           id: 123,
//           marks:[{'hi':11,'mt':22,'en':20}]
//         }
//       },
//       {
//         student_data:{
//           name:'B',
//           id: 124,
//           marks:[{'hi':12,'mt':20,'en':10}]
//         }
//       },
//       {
//         student_data:{
//           name:'C',
//           id: 125,
//           marks:[{'hi':12,'mt':22,'en':23}]
//         }
//       }
//     ];
// Output


//     {
//       '123': {
//         name: 'A',
//         total_marks: 52
//       },
//       '124': {
//         name: 'B',
//         total_marks: 56
//       },
//       '125': {
//         name: 'C',
//         total_marks: 57
//       }
//     }




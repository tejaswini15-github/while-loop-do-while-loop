// // while loop 
// // 1-5
// var i=1;
//  var a=5;
// while (i<=a) {
//     console.log(i);
//     i++;
// }

// // 1-10
// var i=1;
// var a=10;
// while (i<=10) {
//     console.log(i);
//     i++;
// }

// // even numbers 1-20
// var i=2;
// var a=20;
// while (i<=20) {
//     console.log(i);
//     i=i+2;
// }


// // javascript in reverse
// var str = "Javascript";
// var res = '';
// var i=str.length-1;
// while (i>=0) {
//     res+=str[i]  // res=res+str[i]
//     i--
// }
// console.log(res)

// // arr to empty []
// var arr=[1,4,3,5,3,5,6,7,8];
// var length=arr.length;
// while (length>0) {
//     arr.pop();
//     length--;
// }
// console.log(arr)

// var arr=[1,4,3,5,3,5,6,7,8];
// var length = arr.length;
// while (length>0) {
//     console.count("Time");
//     length--;
// }


// arr = ["kamal", "raghu", "rahul", "jansi", "Ramu", "Reshma"];
// for (var i=0; i<arr.length; i++) {
//     var str = arr[i];
//     if (str[0] == "r" || str[0] == "R") {
//         console.log(str.toUpperCase())
//     }
// }



// arr = ["kamal", "raghu", "rahul", "jansi", "Ramu", "Reshma"];
// for (var i=0; i<arr.length; i++) {
//     var str = arr[i];
//     if (str[0]=="r" || str[0]=="R") {
//         arr[i]=str.toUpperCase();
//     }
// }
// console.log(arr);

// // do while loop
// // syntax  
// // do {
//      // statements
// //} while(Condition);


// while (false) {
//     console.log("Hello World")
// }
// do {
//     console.log("Hello Do While")
// }
// while (false) ;

// var i=1;
// while (--i > 0) {
//     console.log("while")
// }
// i=1;
// do {
//     console.log("Do While")
// }while (--i>0)                   // Do While


// var i=1;
// do {
//     console.log(i);
//     i++ ;
// }while (i<=5)


// var i=1;
// do {
//     console.log(++i)
// }while (++i <=10)


// var i=1;
// do {
//     console.log(i+3);
// }while (i++ * 2 <=14);

// var i = 0;
// for (i = 0; i < 3; i++) {
//     console.log(i);        // 0 1 2
// }


// var i = 0;
// while (i < 2) {
//     console.log(i);
//     i++;                 // 0 1
// }


// var i = 0;
// while (i < 5) {
//     console.log(i)
//     i++;
// }

// for (var i = 0; i <= 3; i++) {
//     console.log(i);
// }



// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 3);


// var i = 0;
// do {
//     console.log(i)
//     i++;
// } while (i < 10);

// var i = 3;
// while (i > 0) {
//     console.log(i);
//     i--;
// }


// var i = 0;
// for (; i < 3;) {
//     console.log(i);
//     i++;
// }

// var i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i < 4);

// var i = 0;
// for (i = 0; i < 5; i++) {
//     if (i == 2) {
//         break;
//     }
//     console.log(i);
// }


// var i = 5;
// while (i <= 5) {
//     console.log(i)
//     i++;
// }

// var i = 0;
// for (var j = 0; j < 2; j++) {
//     i++;
// }
// console.log(i);

// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 0);
// console.log(i);

// for (var i = 0; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
// }


// var i = 1;
// for (i = 0; i < 10; i++) {
//     if (i == 5) break;
//     console.log(i);
// }

// var i = 0;
// for (var j = 0; j < 2; j++) {
//     i++;
//     console.log(i);
// }

// var i = 0;
// while (i < 4) {
//     console.log(i++);
// }

// var i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// var i = 0;
// for (i = 0; i < 3; i++) {
//     console.log(i);
// }


// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 2);


// var i = 3;  
// while (i < 5) {
//     i++;
//     console.log(i);  
// }


// var i = 0;
// for (; i < 4;) {
//     i++;
//     console.log(i);
// }


// var i = 0;
// while (i < 10) {
//     i++;
//     if (i == 5) continue;
//     console.log(i)
// }


var i = 0;  // 1  2
do {
    if (i === 2) break;
    console.log(i); // 0  1
    i++;  
} while (i < 5); 


for (var i = 0; i < 4; i++) { // 1  2 
    if (i === 2) continue;
    console.log(i);           // 0  1  3
}

// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 3);

// var i = 2;
// for (i = 0; i < 3; i++) {
//     console.log(i);
// }


// var i = 0;
// for (var j = 0; j < 3; j++) {
//     console.log(i);
//     i++;
// }

// var i = 0;
// while (i < 2) {
//     console.log(i); 
//     i += 2;
// }

var i = 0;
do {
    if (i === 2) break;
    console.log(i);
    i++;
} while (i < 5);



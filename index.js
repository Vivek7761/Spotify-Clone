// console.log('Hello world');
// var myName =  'Vivek';
// console.log(myName);
// console.log(typeof(myName));
// var myPhoneNumber = 8756657656;
// var myHome = "Bhandaridah";
// console.log(myPhoneNumber);
// console.log(myHome);
// console.log(3*3);
// console.log("remainder"  +21%5);
//if else

// var tomr = "sunny";
// if(tomr == "rain"){
//     console.log('take the rain coat');
// }else{
//     console.log("no need");
// }

//leap yrar

// var year = 2020;
// debugger;
// if(year % 4 === 0){
//     if( year % 100 ===0){
//     if( year % 400 ===0){
//         console.log("This year" + year + "is leap year");
//     }else{
//         console.log("This year" + year + "is  not leap year");
//     }
//     }else{
//         console.log("This year" + year + "is  not leap year");
//     }
//     }else{
//         console.log("This year" + year + "is  not leap year");
//     }

// TABLE
//  for(var num = 1; num<=10; num++){
//     var tableOf = 8;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
//  }
// var myName = " vivek kumar";
// console.log(myName);

// myName = " stock market";
// console.log(myName);

// let myName = " vivek kumar";
// console.log(myName);

// myName = " stock market";
// console.log(myName);

// const myName = " vivek kumar";
// console.log(myName);

// myName = " stock market";
// console.log(myName);




// biodata();
// function biodata(){
//     var myFirstname = "vivek";
//     console.log(myFirstname);

    
//     if(true){
//         var myLastname = "Mahto";
//         console.log('inner' + myLastname);
//         console.log('inner' + myFirstname);
//     }
//     console.log('innerOuter' + myLastname)
// }



//TEMPLATE STRINGS/LITERALS

// for(let num = 1; num <= 10; num++){
//     let tableof = 12;
//     console.log(tableof + "*" + num + "=" + tableof*num);
// }


//FAt arror function

//normal way of writing fuction

// function sum(){
//     let a = 5; b = 10;
//     let sum = a+b;
//     return `${sum}`;
// }

// const sum = ()=>{
//     let a = 5; b = 10;
//     let sum = a+b;
//     return `${sum}`;
// }

// console.log(sum());

//2

// const sum = ()=>{return `${(a=5)+(b=10)}`;
// }

// console.log(sum());

//Traversal of an Array
//if we want to get the single data at a time and also
//if we want to change the data


// var mrFrnds = ["vivek","vikash","rohit","sonu"];
// console.log(mrFrnds[mrFrnds.length-1]);
// console.log(mrFrnds.length);


// function ADDnumber(a,b){
//     var = a + b;
//     return d;
// }



// function addNumber(a,b){
//     var d = a+b;
//     return doubleNumber(d);
// }
// function doubleNumber(x){
//     return x*2;
// }
// var e = addNumber(1,2);
// console.log(e);

// var myFrnd = ['vivek','rahul','rakesh','mohan'];
// console.log([myFrnd.length-1]);

//for loops
// var myFrnd = ['vivek','rahul','rakesh','mohan'];
// for(var i = 0;i < myFrnd.length; i++){
//     console.log(myFrnd[i]);
// }

// //for loop in

// var myFrnd = ['vivek','rahul','rakesh','mohan'];
// for(let elements in myFrnd){
//     console.log(elements);
// }

// //for of loop

// var myFrnd = ['vivek','rahul','rakesh','mohan'];
// for(let elements of myFrnd){
//     console.log(elements);
// }

// var myFrnd = ['vivek','rahul','rakesh','mohan'];
// myFrnd.forEach(function(element,index,array){
//     console.log(element + " index :" + index + " " + array);
// });

//insert

// farm = ['chicken','cat','goat'];
// farm.push('pigs','cows','fox');
// console.log(farm);


//pop() method

// const veg = ['allu','chicken','tomato','patato'];
// console.log(veg);
// console.log(veg.pop());
// console.log(veg);

//splice method

// const months = ['jan','feb','march','april'];
// const updateMonth = months.splice(1,1,'Feb');
// console.log(months);

//map() method


// const array1 = [ 1,4,9,19,58];
// //>9

// let newArr = array1.map((curElem,index,arr)=>{
//     return curElem > 9;
// })
// console.log(array1);
// console.log(newArr);

// let arr = [25,36,49,64];
// let arrSquare = arr.map((curElem) => {
//     return Math.sqrt(curElem);
    
// })
// console.log(arrSquare);

// let string1 = 'abc';
//      	let string2 = 'abc';
//      	console.log(string1 == string2)
//      	console.log(string1 === string2)
     	
     	// const a = '5';
     	// const b = 5;
     	// console.log(a == b)
     	// console.log(a === b)
     	
     	// const arr1 = ['2', '3']
     	// const arr2 = ['2', '3']
     	// console.log(arr1 == arr2)
     	// console.log(arr1 === arr2)
     	
     	let arr1 = ['1','2']
      	let arr2 = [ 2, 'abc']
     	arr1 = arr2
     	console.log(arr1 == arr2)
     	console.log(arr1 === arr2)
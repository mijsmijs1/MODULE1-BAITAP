// let b=2;
// function phepchia(){
//     var a=10;
//     console.log(a/b)
// }
// if(b<2){
//     var a=2;
// }
// phepchia()
// console.log(a)

//                         bai1
// function myNumber(){
//         for(let i=1;i<=1000;i++){
//         if(i%5===0&&i%7===0&&i%11===0){
//            return i;
//            break;
//         }
//         }
// }
// console.log(myNumber())
//                       bai 2
// let myArr=[7,9,6,4,42,2,1,7,5]
//
// function biggestNumber(array){
//     let max=array[0]
//     for(let i=0;i<array.length;i++){
//         if(array[i]>max){
//             max=array[i];
//         }
//     }
//     return max;
//     // return Math.max(...array)
// }
// console.log(biggestNumber(myArr))

///                    bai2

// let myArr=[7,9,6,4,42,2,1,7,5]
// function soLeLonNhat(array){
//     let max=array[0];
//     for(let i=0;i<array.length;i++){
//         if(array[i]%2!==0){
//             if(array[i]>max){
//             max=array[i];
//         }
//         }
//     }
//     return max;
// }
// console.log(soLeLonNhat(myArr))

///             bai 2

// function giaiThuaSoNguyenDuong(a){
//     let sum=1
//     for(let i=1;i<=a;i++){
//         sum=sum*i
//     }
//     return sum;
// }
// console.log(giaiThuaSoNguyenDuong(4))

//              bai3
// function kiemTraSoNguyenTo(number){
//     for(let i=2;i<=Math.sqrt(number);i++){
//         if(number%i===0){
//             return `So ${number} khong phai la so nguyen to`
//         } else{
//             return `So ${number} la so nguyen to`
//         }
//     }
// }
// console.log(kiemTraSoNguyenTo(11))


//             Bai3
// function cacSoNguyenToBeHon(number){
//     let flag=[]
//     let result=[]
//     for (let i=2;i<=number;i++){
//         flag[i]=true
//         for( let j=2;j<=Math.sqrt(i);j++){
//             if(i%j===0){
//                 flag[i]=false
//                 break;}
//             else {
//                 flag[i]=true
//             }
//             }
//         if(flag[i]){
//             result.push(i)
//         }
//     }
//     console.log(result.join(" "))
// }
// console.log(cacSoNguyenToBeHon(100))

/////////// bai 3
// function haiMuoiSoNguyenToDauTien(){
//     let flag=[]
//     let flag2=0
//     let result=[]
//     let i=2
//     while(flag2<20){
//         flag[i]=true
//         for( let j=2;j<=Math.sqrt(i);j++){
//             if(i%j===0){
//                 flag[i]=false
//                 break;}
//             else {
//                 flag[i]=true}}
//         if(flag[i]){
//             result.push(i)
//             flag2++}
//         i++}
//     console.log(result.join(" "))
// }
// haiMuoiSoNguyenToDauTien()


// let numberCheck2 = parseInt(prompt("Vui long so so nguyen to den n, nhap n;"));
//
//     for ( let i=2; i<=numberCheck2;i++){
//         var choose = true;
//     for (let j =2; j<=Math.sqrt(i);j++) {
//         if (i % j === 0) {
//             choose = false;
//         }}
//         if(choose){
//             console.log(i);
//         }
// }
// let numberCheck2 = parseInt(prompt("Vui long so so nguyen to den n, nhap n;"));
// let choose = [];
// for (let i = 2; i <= numberCheck2; i++) {
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             choose[i] = false;
//             break;
//         } else {
//             choose[i] = true;
//             break
//         }
//     }
//     if (choose[i]) {
//         console.log(i);
//     }
// }

// (function (){
//     alert("Hello cac ban")
// })()
//
// function myFunction(param){
//     if (typeof param ==='function'){
//         param("De nong dan biet code;")
//     }
// }
//
// function myCallBack(value){
//     console.log("Value: ",value)
// }
// myFunction(myCallBack)

//IIFE
/*(function (){
    alert("JS ao qua")
})()*/

function writeLog(message) {
    //message là tham số
    console.log(message)
}

writeLog("Day la message") //truyền text như vầy gọi là đối số
writeLog(123) //123

function writeLog2(message, message2 = 123) {
    console.log(message)
    console.log(message2)
}

writeLog2("abc")


function writeLog3() {
    console.log(arguments)
}

writeLog3("Log1", "Log2", "Log3")

var id = Symbol("id") //unique
var id2 = Symbol("id") //unique
console.log(id === id2) //false

//viết 1 function nhâm vào kiểu dữ liệu là string, 3 tham số
//log ra được là param1 - param2 - param3
function writeLog4() {
    var myString = ''
    for (let el of arguments) {
        myString += `${el} - `
    }
    console.log(myString)
}

writeLog4("Log1", "Log2", "Log3") // => Log1 - Log2 - Log3 -

//Mốt số lưu ý với function
function showMessage() {
    console.log("Message 1")
}

function showMessage() {
    console.log("Message 2")
}

showMessage()

function showMessage2() {
    function showMessage3() {
        console.log("Message 3")
    }

    showMessage3()
}

showMessage2()

//Hoisting trong function
showMessage5()

function showMessage5() {
    console.log("Declaration function")
}

// const showMess5 = function showMessage5() {
//     console.log("Declaration function")
// }

setTimeout(function autoLogin() {
}) //expression function

//Callback function
function myFunction(param) {
    if (typeof param === 'function') {
        param("De nong dan biet code")
    }
}

function myCallback(value) {
    console.log("RA: ", value)
}

myFunction(myCallback) //RA: De nong dan biet code

//map() => trả về 1 new array thoả 1 điều kiện cho trước
Array.prototype.map2 = function (callback) {
    var output = []
    var arrayLength = this.length;
    // console.log("arrayLength: ", arrayLength)
    // console.log("this: ", this)
    for (var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i])
        // console.log("i: ", i)
        // console.log("this[i]: ", this[i])
        // console.log("result: ", result)

        output.push(result)
    }
    return output
}

var courses = ["JS", "HTML", "PHP", "Ruby"]

/*var html = courses.map2(function (course) {
    return `<h2>${course}</h2>`
})*/

// var html = courses.map2( course => `<li>${course}</li>`)
// document.write(html.join(""))
//
// Array.prototype.filter2 = function(callback) {
//     var output = []
//
//     for (var i in this) {
//         console.log(this)
//         if(this.hasOwnProperty(i)){
//             var result = callback(this[i],i, this)
//             console.log(callback(this[i],i, this))
//             if(result) {
//                 output.push(this[i])
//             }
//         }
//     }
//     return output
// }
// var course2 = [
//     {
//         name: "Dart",
//         price: 680,
//         isFinish: true
//     },
//     {
//         name: "JS",
//         price: 0,
//         isFinish: false
//     },
//     {
//         name: "Node",
//         price: 400,
//         isFinish: true
//     }
// ]
// /*const callbackFunc = function (course, index, array) {
//     return course.price >= 400
// }*/
// var someCourse = course2.filter2(course => {
//     let charN = course.name.toLowerCase()
//     return charN.includes('n')
// })
// console.log(someCourse)

// Array.prototype.filter2= function (callback){
//     var result=[]
//     let myLength=this.length;
//     var finalResult=[]
//     for(let i in this){
//         console.log(this)
//         if(this.hasOwnProperty(i)){
//             result=callback(this[i]);
//             console.log(result)
//             if(result){
//                 finalResult.push(this[i]);
//             }
//         }
//     }
//     return finalResult;
//      console.log(finalResult)
// }
// var course2 = [
//     {
//         name: "Dart",
//         price: 680,
//         isFinish: true
//     },
//     {
//         name: "JS",
//         price: 0,
//         isFinish: false
//     },
//     {
//         name: "Node",
//         price: 400,
//         isFinish: true
//     }
// ]
// function conditon1(course,index,array){
//     return course.price>=400
// }
// let myResult=course2.filter2(conditon1)
// console.log(myResult)
/// bai4:
// let array=[1,2,3,4]
// const chuoiDaoNguoc=function(arr){
//     return arr.reverse()
// }
//
// console.log(chuoiDaoNguoc(array))

//bai5:
// let array=[1,2,3,4,2,5,4,3,3,3,2,1]
// var loaiPhanTuTrung=function(arr){
//     var newArr=arr.sort();
//     console.log(newArr)
//     var result=[]
//     for(let i=0;i<arr.length;i++){
//             if(arr[i]!==arr[i+1]){
//                 result.push(arr[i])
//             }
//     }
//     return result
// }
// console.log(loaiPhanTuTrung(array))

//bai6
// var UCLN = function (a, b) {
//     let result;
//     let flag=true
//     let c,d;
//     if (a > b) {
//         var number = b;
//         b = a;
//         a = number;
//     }
// while(flag){
//      c = b / a
//      d = b % a
//     console.log("so be "+a)
//     console.log("so lon "+b)
//     console.log("so chia du "+d)
//     if (d === 0) {
//         result = a
//         flag=false
//     } else {
//         b=a;
//         a=d;
//     }
// }
//     return(result)
// }
// console.log(UCLN(18, 30))

// bai7
// let number=parseInt(prompt("Nhap vao so nguyen can dao nguoc:"))
// const daoNguocSo=function(number){
//     let myNumber=String(number);
//     let myArr=myNumber.split("");
//     myArr.reverse()
//     return myArr.join("");
// }
// console.log(daoNguocSo(number))
// bbai8
// let myStr=prompt("Nhap vao chuoi can so sanh chuoi ki tu doi xung:")
// const isPalindrome=function(string){
//     var newStr =string.replace(/[^0-9_-]/g, '');
//     console.log(newStr)
//     var newArr=newStr.split('')
//     newArr.reverse()
//     var newStr3=newArr.join("")
//     console.log(newStr3)
//     if (newStr===newStr3){
//         return "Chuoi doi xung ki tu"
//     } else{
//         return "Chuoi khong doi xung ki tu"
//     }
//
// }
// console.log(isPalindrome(myStr))
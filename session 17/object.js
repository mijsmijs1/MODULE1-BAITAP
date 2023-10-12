// let myInfo={
//     name:"Phu Quy",
//     age:18,
//     address:"HCM",
//     getName:function(){
//         return this.age;
//     }
// }
// console.log(myInfo)
// console.log(myInfo.age)
// console.log(myInfo['age'])
// myInfo.email="hung@gmail.com"// them thuoc tinh
// myInfo['position']="teacher"//them thuoc tinh
// console.log(myInfo)


// //xoa thuoc tinh (do uu tien cao, xoa truoc roi console.log
// delete myInfo.position
// var myKey="address"
// console.log(myInfo[myKey])
//
// var myDate=new Date()
// var day=
// console.log(`${myDate.getDay()}/${myDate.getMonth()}/${myDate.getFullYear()}`)

let s="[][]{}()[]{}"
// let newStr=s.replace("ab","")
// s=newStr
// console.log(s)
// let result=[]
// while(s.string=1){
// result=s.replace("[]","")
// s=result
// console.log(s)
// result=s.replace("{}","")
// s=result
// console.log(s)
// result=s.replace("()","")
// s=result
// console.log(s)
// console.log(s)}
// if(s.length<=1){return false;}
// if(s.length>=2){
//     if((s.split("(").length - 1)!==(s.split(")").length - 1)){return false}
//     if((s.split("{").length - 1)!==(s.split("}").length - 1)){return false}
//     if((s.split("[").length - 1)!==(s.split("]").length - 1)){return false}}
// if(s[s.length-1]==="("||s[s.length-1]==="{"||s[s.length-1]==="["){return false}
// if(s.length%2===0){
//     for(let i=0;i<s.length;i++){
//         if(((s[i]==="(")&&((s[i+1]==="]")||(s[i+1]==="}")))||((s[i]==="[")&&((s[i+1]===")")||(s[i+1]==="}")))||((s[i]==="{")&&((s[i+1]==="]")||(s[i+1]===")")))){
//             return false;
//         }
//     }
//     return true;
//
// }
// let list1=[1,2,3,7,8,6,4,2,4]
// let list2=[3,4,2,199,6,5,43,6,1]
//
// // var result=[...list1,...list2];
// // console.log(result)
// var mergeTwoLists = function(list1, list2) {
//     var result=[...list1,...list2]
//     for(let i=0;i<result.length;i++){
//         let flag=true
//         for(let j =i;j<result.length-1-i;j++){
//             if(result[j]>result[j+1]){
//                 [result[j],result[j+1]]=[result[j+1],result[j]]
//                 flag=false
//             }
//             if(flag=false){break;}
//         }
//     }
//     return result
// };
// console.log(mergeTwoLists(list1,list2))

// let prices =
//     [1,2,4,7,11]
//
//     let profit=[];
//     for(let i=0;i<prices.length;i++){
//         for(let j=i+1;j<prices.length;j++){
//             if(prices[i]-prices[j]<0){
//                 profit.push((prices[j]-prices[i]));
//                 console.log(profit)
//             }
//         }
//     }
//     if (profit.length!==0){
//         profit.sort();
//         console.log(profit[profit.length-1])
//     }
//     else{
//         console.log(0);
//     }
// var myarr="A man, a plan, a canal: Panama"
// let myArr1=String(myarr)
// myArr1 = myArr1.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '');
// let myArr=myArr1.toLowerCase().sp
// console.log(myArr)


//                    bai 1

// let myInfo={
//     name:"Nguy Phu Quy",
//     year_of_birth:1999,
//     address:"HocMon"
// }
// let year=new Date()
// let currentYear=year.getFullYear()
// console.log(`${myInfo.name} is ${currentYear-myInfo.year_of_birth} years old.`)
  /////////////////bai2
// let object1 = { foo: "bar", a: 5 };
// let object2 = {name: "foo", d: 10 };
// let newObj=Object.assign(object1,object2)
// /// cach nhanh nhat
// let newObj2={...object1,...object2};
// console.log(newObj2)
// // cach 2
// let newObj1=(JSON.stringify(object1,object2))
// let result=JSON.parse(newObj1)
// console.log(result)
// //
//
// // Đối tượng JSON có cấu trúc lồng nhau
// const originalObject = {
//     name: "John",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         postalCode: "10001",
//     },
// };
// let result1= Object.assign({originalObject},object1,object2)
// console.log(result1)



/////          bai3
// function getLastDayOfMonth(year,month){
    // if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    //     if(month===3||month===5||month===8||month===10){
    //         return 30;
    //     } else if(month===1){
    //         return 29;
    //     } else{
    //         return 31;
    //     }
    // } else{
    //     if(month===3||month===5||month===8||month===10){
    //         return 30;
    //     } else if(month===1){
    //         return 28;
    //     } else{
    //         return 31;
    //     }
    // }



    // var lastDayOfMonth = new Date(year,month,0)
    // var date=lastDayOfMonth.getDate()
    // return date
// }
// console.log(getLastDayOfMonth(2012,2))

// // b                     bai5
// let startime=10;
// const intervalID = setInterval(myCallback, 1000); //miligiay
// settime()
// function myCallback() {
//     startime--
//     settime()
//     if(startime==0) {
//         clearInterval(intervalID)
//         alert("Het gio roi")}
// }
// function settime(){
//     let seconds=startime;
//     if (startime<10){
//         seconds=`0${startime}`
//     }
//     document.getElementById("timeout").innerHTML=`00:${seconds}`
// }


// function abc(...rest){
//     console.log(rest)
// }
// abc({
//     a:1,
//     b:2,
//     c:3
// })
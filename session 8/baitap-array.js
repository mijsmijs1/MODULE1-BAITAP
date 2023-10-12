// let arr=[1,2,3,4,5,6,7,8,9,5,6,4,3,2,4,6,7,8,6,5,3];
// alert(arr);
// console.log(arr.length)
// arr.push(2,4,6,8)
// console.log(arr)
// arr[19]=25;

//bai 1
// let data=[1,2,3,3,4,5]
// let data2 =[2,4,6,8]
// var mynumber =data2.every(function (myNumber) {
//     return myNumber%2===0;
// })
// if (mynumber){
//     console.log("So ban nhap la so chan")
// } else {
//     console.log("So ban nhap la so le")
// }

//bai2:
// let data=[-1,2,-3,-3,4,-5]
//
// var mynumber =data.filter(function (myNumber) {
//     return myNumber>=0;
// })
//     console.log(mynumber)

//bai3
// let data=[-1,-2,-3,-3,-4,-5]
//
// var mynumber =data.findIndex(function (myNumber) {
//     return myNumber>=0;
// })
// var mynumber2=data.find(function (myNumber) {
//     return myNumber>=0;
// })
// if (mynumber===-1){
//     console.log("No result")
// } else{
//     console.log(`${mynumber} ${mynumber2}`)}

//bai4:
// let data = [0, 12, 3, -3, -4, 110]
// let myArr = []
// let result="";
// data.forEach(function (myNumber) {
//     if (myNumber % 5 === 0) {
//         myArr += myNumber+" "
//         result=myArr.split(" ")
//         // myArr.push(myNumber)
//     }
// })
// result.pop()
// console.log(result)

//bai5
// let data=[-1,2,-3,-3,4,-5,5]
//
// var mynumber =data.includes(5)
// if(mynumber){
//     console.log("Yes")
// } else{
//     console.log("No")
// }

//bai6
// let data=["A","B","C"]
// let data2=[1,2,3,"A"]
// console.log(data.join(", "))
// console.log(data2.join(", "))

//bai7:
// let data=[10,15,30,-3,-4,150]
// let myArr=[]
// data.forEach(myFunction);
// function myFunction(item, index, arr) {
//     arr[index] = Math.abs(item);}
// console.log(data)


// let data=[2,-1,-8]
// let result1 = data.map((num)=>Math.abs(num))
// console.log(result1)

//bai8
// let data=["A","B","C"]
// data.shift()
// data.pop()
// data.unshift("X")
// console.log(data)

//bai9
// let myNumber=[]
// let allNumber=parseInt(prompt("Nhap so phan tu cua mang: "))
// for (let i=0;i<allNumber;i++){
//     let number=parseInt(prompt(`Nhap gia tri thu ${i} cua mang: `))
//     myNumber.push(number)
// }
// let result=myNumber.sort()
// console.log(myNumber[0])

//## Bài tập 10:

// Trong phần này, chúng ta sẽ phát triển một chương trình thực hiện xoá một phần tử
// được nhập vào từ bàn phím ra khỏi mảng, nếu phần tử đó xuất hiện trong mảng.
// let test;
// let myArray=[]
// let shouldExit=false
// let allNumber=parseInt(prompt("Nhap so phan tu cua mang: "))
// for (let i=0;i<allNumber;i++){
//     let number=prompt(`Nhap gia tri thu ${i} cua mang: `)
//     myArray.push(number)
// }
// let needIndex=prompt(`Nhap gia tri can xoa trong mang da nhap: `)
//
// while(!shouldExit){
// var index=myArray.findIndex(function (item) {
//     return item === needIndex;})
//     if (index>=0){
//         myArray.splice(index,1)}
//     else{
//         shouldExit=true;
//     }
// }
// console.log(myArray);


//bai1:
// let myString=prompt("hay nhap chuoi vao: ")
// let myString1 ="background-color-name";
// let flag=false;
// index=[]
// myStr=[]
// myStr2=[]
// myStr3=[]
// let sum=0
// let i=0;
// if(myString1[0]==="-"){
// while(!flag){
//     index[i]=myString1.indexOf("-")
//     if (index[i]>=0){
//         myString1=myString1.slice(index[i]+1,myString1.length)
//         myStr[i]=myString1
//         i++
//         sum=sum+1;}
//     else {
//         flag=true;
//         break;}}
// for (let j=0;j<myStr.length;j++){
//     myStr2[j]=myStr[j].split("-")}
// for (let k=0;k<sum;k++){
//     var MyString4=(myStr2[0][k]).charAt(0).toUpperCase();
//     var MyString5=(myStr2[0][k]).slice(1);
//     myStr3[k]=MyString4+MyString5
//     if(k===(sum-1)){
//         console.log(myStr3.join(""))
//         break;}
// }} else{
//     index[i]=myString1.indexOf("-")
//     let myStringg=myString1.slice(0,index[i])
//     var MyStringa=myStringg.charAt(0).toUpperCase();
//     var MyStringb=myStringg.slice(1);
//     myStringg=MyStringa+MyStringb
//     let myStringgg=myString1.slice(index[i],myString1.length)
//     while(!flag){
//         index[i]=myStringgg.indexOf("-")
//         if (index[i]>=0){
//             myStringgg=myStringgg.slice(index[i]+1,myStringgg.length)
//             myStr[i]=myStringgg
//             i++
//             sum=sum+1;
//         } else {
//             flag=true;
//             break;
//         }
//     }
//     for (let j=0;j<myStr.length;j++){
//         myStr2[j]=myStr[j].split("-")}
//     for (let k=0;k<sum;k++){
//         var MyString4=(myStr2[0][k]).charAt(0).toUpperCase();
//         var MyString5=(myStr2[0][k]).slice(1);
//         myStr3[k]=MyString4+MyString5
//         if(k===(sum-1)){
//             console.log(myStringg+myStr3.join(""))
//             break;
// }}}

//
// let myString1 = "background-color-name";
// let myStringc=[]
//
// if (myString1.charAt(0)==="-"){
//     let myArr = myString1.split("-")
//     for (let i = 0; i < myArr.length; i++) {
//         var MyStringa = myArr[i].charAt(0).toUpperCase();
//         var MyStringb = myArr[i].slice(1);
//         myStringc[i] = [MyStringa + MyStringb];
//     }
//     console.log(myStringc.join(""))}
// else{
//     let myArr = myString1.split("-")
//     for (let i = 1; i < myArr.length; i++) {
//         var MyStringa = myArr[i].charAt(0).toUpperCase();
//         var MyStringb = myArr[i].slice(1);
//         myStringc[i] = [MyStringa + MyStringb];
//     }
//     console.log(myArr[0]+myStringc.join(""))
// }

//bai2:
// let myStr=[1,2,5,9,3,4,12]
// let a=3
// let b=7
// var result=myStr.filter(function (element){
//     if(element>=3&&element<=7){
//         return element;
//     }
//
// })
// console.log(result)

//bai3:
// let myStr=[1,2,5,9,3,4,12]
// let a=3
// let b=7
// myStr=myStr.filter(function (element){
//     if(element>=3&&element<=7){
//         return element;
//     }
//
// })
// console.log(myStr)

//bai4
// let arr = [5, 2, 1, -10, 8];
// let result=arr.sort(function (a,b){
//     return b-a
// });
// console.log(result);

//bai5:
// let arr = ["HTML", "JavaScript", "CSS"];
// let copyOfArr=[]
// for(let i=0;i<arr.length;i++){
//     copyOfArr[i]=arr[i];
// }
// copyOfArr.sort()
// console.log(arr)
// console.log(copyOfArr)
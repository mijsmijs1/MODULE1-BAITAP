/// let f=5;
// let s=true;
// let g = "xin chao";
// document.write("f ="+f);
// document.write("s="+s);
// document.write("g="+g);

// let a=prompt("Nhap so thu nhat:");
// let b=prompt("Nhap so thu hai:");
// if (a % b == 0){
//     alert(a+"chia chet cho"+b);
// } else{
//     alert(a+" khong chia chet cho"+b);
// }

// let width=prompt("Nhap chieu rong HCN:")
// let height = prompt("Nhap chieu cao HCN:")
// height = parseInt(height);
// width = parseInt(width);
// let area = height * width;
// alert("Dien tich HCN:" + area);

// let money_usd = prompt("Nhap so tien USD:");
// let money_dong = money_usd*23000;
// document.write("So tien quy doi tu " + money_usd + " USD thanh "+ money_dong +" dong");


// let a = prompt("Nhap gia tri dau tien:");
// let b = prompt("Nhap gia tri thu hai:");
// let c = prompt("Nhap gia tri thu ba:");
// if (a > b && a > c){
//     document.write("gia tri lon nhat la:" + a);
// } else if (b > a && b > c){
//     document.write("gia tri lon nhat la:" + b);
// } else{
//     document.write("gia tri lon nhat la:" + c);
// }

// confirm("Ban da du 18 tuoi chua?");

//Nhap diem trung binh
// let a = prompt("Nhap diem mon toan:");
// a = parseInt(a);
// let b= prompt("Nhap diem mon tieng anh:");
// b = parseInt(b);
// let c  = prompt("Nhap diem mon van:");
// c = parseInt(c);
// let d = (a+b+c)/3;
// document.write("Diem trung binh la:" + d);

//Tinh nhiet do
// let c = prompt("Nhap nhiet do C:");
// c= parseInt(c);
// let d = (c*9/5)+32;
// document.write("nhiet do F la:" + d);

//Dien tich hinh tron
// let a = prompt("Nhap dien tich hinh tron:");
// let area = 3.14*a*a;
// document.write("dien tich hinh tron la:" + area);

// let a=6;
// let result: ++a + a + a++ + ++a + a;
// console.log(0 || NaN || "Rikkei Academy" || null);
// console.log(null || NaN || false || null);
// console.log(undefined || 1 || 5 || null);
// console.log(null || NaN || false || undefined);
// console.log("" || null || 5 || NaN);
// console.log(1 || null || 12 || NaN);
// console.log(0 && 1 && 5 && null);
// console.log(2 && false && NaN && null);
// console.log(3 && 2 && 5 && null);
// console.log(1 && null && NaN);
// console.log(2 && NaN && false && null);
// console.log(1 && null && 12 && NaN);
//
//
// //
// switch (new Date().getDay()) {
//     case 0:
//         day = "Chủ Nhật";
//         break;
//     case 1:
//         day = "Thứ hai";
//         break;
//     case 2:
//         day = "Thứ ba";
//         break;
//     case 3:
//         day = "Thứ tư";
//         break;
//     case 4:
//         day = "Thứ năm";
//         break;
//     case 5:
//         day = "Thứ sáu";
//         break;
//     case 6:
//         day = "Thứ bảy";
//         break;
// }
// document.write(day);


// Tinh nam nhuan
// let myYear = parseInt(prompt("Hay nhap nam can xet:"));
// if ((myYear % 4 == 0 && myYear % 100 != 0) || (myYear % 400 == 0)) {
//     document.write(`Nam ${myYear} la nam nhuan`);
// } else {
//     document.write("Nam " + myYear + " khong phai la nam nhuan");
// }

//dang nhap
// let idUsers=prompt("Hay nhap ten tai khoan:");
// if(idUsers == "Admin"){
//     let passUsers = prompt("hay nhap mat khau:")
//     if (passUsers == "TheMaster") {
//         alert("Welcome");
//     } else if( passUsers == null){
//         alert("Canceled");
//     } else{
//         alert("Wrong password");
//     }
// } else if(idUsers == null){
//     alert("Canceled");
// } else{
//     alert("I don't know!!");
// }

// TInh ngay cua thang
// let month = parseInt(prompt("Moi nhap thang vao 1/2/..../12:"));
// let myYear =parseInt(prompt("Moi nhap nam:"));
// if (month>0 && month<=12 && myYear>0) {
//     switch (month) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             alert("Thang "+month+" co 31 ngay")
//             break;
//         case 2:
//             if ((myYear % 4 == 0 && myYear % 100 != 0) || (myYear % 400 == 0)) {
//             alert("Thang "+month+" co 29 ngay")} else{
//                 alert("Thang "+month+" co 30 ngay")
//             }
//             break;
//         default:
//             alert("Thang "+month+" co 30 ngay")
//     }} else{
//     alert("Khong hop le")
// }


// may
// tinh
// don
// gian
// let a = parseInt(prompt("moi nhap so dau tien:"));
// let b = parseInt(prompt("moi nhap so thu hai:"));
// let c = prompt("Moi ban nhap cac phep tinh (+,-,*,/):");
// switch (c) {
//     case "+":
//         let d = a + b;
//         alert("Ket qua cua phep tinh tren: " + a + " " + c + " " + b + " = " + d);
//         break;
//     case "-":
//         let e = a - b;
//         alert("Ket qua cua phep tinh tren: " + a + " " + c + " " + b + " = " + e);
//         break;
//     case "*":
//         let f = a * b;
//         alert("Ket qua cua phep tinh tren: " + a + " " + c + " " + b + " = " + f);
//         break;
//     case "/":
//         if (b !== 0) {
//             let g = a / b;
//             alert(`Ket qua cua phep tinh tren ${a} ${c} ${b} = ${g}`);
//         } else {
//             alert("phep tinh khong hop le");
//         }
//         break;
//     default:
//         alert("phep tinh khong hop le");
//         break;
// }

//Tim Max va Min
// let a = parseInt(prompt("moi nhap so dau tien:"));
// let b = parseInt(prompt("moi nhap so thu hai:"));
// let c = parseInt(prompt("moi nhap so thu ba:"));
// if (a > b) {
//     if (a > c) {
//         if(b>c){
//         alert("Max:" + a);
//         alert("Min:" + c);
//         } else{
//             alert("Max:" + a);
//             alert("Min:" + b);
//         }
//     } else {
//         alert("Max:" + c);
//         alert("Min:" + b);
//     }
// } else if (b > c) {
//     if(a<c){
//     alert("Max:" + b);
//     alert("Min:" + a);
//     } else{
//         alert("Max:" + b);
//         alert("Min:" + c);
//     }
// } else {
//     alert("Max:" + c);
//     alert("Min:" + a);
// }

//Tim cung hoang dao:
// function myFunc() {
// let day = parseInt(document.getElementById("dayOfUser").value);
// let month = parseInt(document.getElementById("monthOfUser").value);
// if (day < 1 || day > 31 || month < 1 || month > 12) {
//     alert("Ban da nhap sai thong tin, vui long nhap dung ngay thang");
// }
// switch (month) {
//     case 1:
//         if (day > 19) {
//             alert("Bao Binh");
//         } else {
//             alert("Ma Ket");
//         }
//         break;
//     case 2:
//         if (day > 19) {
//             alert("Song Ngu");
//         } else {
//             alert("Bao Binh");
//         }
//         break;
//     case 3:
//         if (day > 20) {
//             alert("Bach Duong");
//         } else {
//             alert("Song Ngu");
//         }
//         break;
//     case 4:
//         if (day > 19) {
//             alert("Kim Nguu");
//         } else {
//             alert("Bach Duong");
//         }
//         break;
//     case 5:
//         if (day > 20) {
//             alert("Song TU");
//         } else {
//             alert("Kim Nguu");
//         }
//         break;
//     case 6:
//         if (day > 21) {
//             alert("Cu Giai");
//         } else {
//             alert("SOng Tu");
//         }
//         break;
//     case 7:
//         if (day > 22) {
//             alert("Su TU");
//         } else {
//             alert("Cu giai");
//         }
//         break;
//     case 8:
//         if (day > 22) {
//             alert("Xu Nu");
//         } else {
//             alert("Su TU");
//         }
//         break;
//     case 9:
//         if (day > 22) {
//             alert("Thien Binh");
//         } else {
//             alert("Xu Nu");
//         }
//         break;
//     case 10:
//         if (day > 23) {
//             alert("Ho Cap");
//         } else {
//             alert("Thien Binh");
//         }
//         break;
//     case 11:
//         if (day > 21) {
//             alert("Nhan Ma");
//         } else {
//             alert("Ho Cap");
//         }
//         break;
//     case 12:
//         if (day > 21) {
//             alert("Ma Ket");
//         } else {
//             alert("Nhan Ma");
//         }
//         break;
// }
// }


//vong lap
// let sum = 0;
// let numberList = "";
// for (let i = 0; sum < 100; i++) {
//     let myNumber = Number(prompt("Nhap so lon hon 0 va nho hon 100:"));
//     numberList += String(myNumber) + " ";
//     sum += myNumber;
// }
// alert("Cac so da nhap la:"+numberList);
// alert("Tong cac so da nhap:"+sum);

// let a = parseInt(prompt("moi nhap so dau tien:"));
// let b = parseInt(prompt("moi nhap so thu hai:"));
// let c = parseInt(prompt("moi nhap so thu ba:"));
// if (a > b) {
//     if (a > c) {
//         console.log("max:" + a)
//     } else {
//         console.log("max:" + c)
//     }
// } else if(b>c){
//     console.log("max:" + b)
// } else {
//     console.log("max:" + c)
// }


//Viet hoa dau dong
// Đầu vào của bạn
// var inputString = prompt("Nhap chuoi ki tu can viet hoa dau dong:")
//
// // Tách chuỗi thành danh sách các từ
// var words = inputString.split(" ");
//
// // Tạo một biến để lưu trữ kết quả
// var resultString = [];
// //
// for (let i = 0; i <
// words.length; i++
// ) {
//     let word =  String(words[i]);
//     if ( word.length > 0) {
//         resultString[i] = [word.charAt(0).toUpperCase() + word.slice(1)+" "];
//         // console.log(String(resultString));
//     }
// }
// console.log(String(resultString.join("")));
// // console.log(resultString);


// // Xử lý từng từ một
//      var word = words[0];
// if (word.length > 0) {
//     resultString += word[0].toUpperCase() + word.slice(1);
// }
//
// word = words[1];
// if (word.length > 0) {
//     resultString += " " + word[0].toUpperCase() + word.slice(1);
// }
//
// word = words[2];
// if (word.length > 0) {
//     resultString += " " + word[0].toUpperCase() + word.slice(1);
// }
//
// word = words[3];
// if (word.length > 0) {
//     resultString += " " + word[0].toUpperCase() + word.slice(1);
// }
//
// // In kết quả ra màn hình
// console.log(resultString);


//diem so
// let myPoint = parseInt(prompt("moi nhap so diem cua hoc sinh:"));
// if (myPoint>=90){
//     console.log("loai A")
// } else if(myPoint>=80){
//     console.log("loai B")
// } else if(myPoint>=70){
//     console.log("loai C")
// } else {
//     console.log("loai D")}

//TOan tu ba ngoi
// let number = parseInt(prompt("Nhap vao mot so"));
// let result = (number % 2 == 0) ? "So chan" : "So le";
// console.log("number la:"+result);
//Xet tuoi
// let old = parseInt(prompt("Nhap vao so tuoi cua nguoi vote: "));
// let result = (old >= 18) ? "Ban da du tuoi de bo phieu" : "Ban chua du tuoi"
// console.log("Ket qua: "+result);


// Trong Js có 6 giá trị tham trị: primitive value// du lieu nguyen thuy
// number string boolean undefined null ssymbol NaN
// 0
// false
// '' hoac ""
// undefined
// null
// NaN
// Cac gia tri nay covert sang boolean deu la false
// Ngoai nhung gia tri nay con lai la true
// Reference value (tham chieu) // Complex dataa (du lieu phuc tap): Function, object, array
// let number = new Date();
// let today=number.getDate();
// switch (today) {
//     case 0:{
//         document.getElementById("myToDay").innerHTML = "Hom nay la thu bay";
//     }
//     break
//     case 1:{
//         document.getElementById("myToDay").innerHTML = "Hom nay la chu nhat";
//     }
//         break
//     case 2:{
//         document.getElementById("myToDay").innerHTML = "Hom nay la thu 2";
//     }
//         break
//     case 3:{
//         document.getElementById("myToDay").innerHTML = "Hom nay la thu 3";
//     }
//         break
//     case 4:{
//         document.getElementById("myToDay").innerHTML = "Hom nay la thu 4";
//     }
//         break
//     case 5:{
//         document.getElementById("myToDay").innerHTML = "Hom nay la thu 5";
//     }
//         break
//     case 6:{
//         document.getElementById("myToDay").innerHTML = "Hom nay la thu 6";
//     }break
// }

//Nhap diem trung binh 5 mon
// let a = parseInt(prompt("Vui long nhap diem mon 1: "))
// let b = parseInt(prompt("Vui long nhap diem mon 2: "))
// let c = parseInt(prompt("Vui long nhap diem mon 3: "))
// let d = parseInt(prompt("Vui long nhap diem mon 4 : "))
// let e = parseInt(prompt("Vui long nhap diem mon 5: "))
// let evergare = ((a + b + c + d + e) / 5) * 10 / 100;
// if (evergare >= 0.9) {
//     console.log("grade A")
// } else if (evergare >= 0.8) {
//     console.log("grade B")
// } else if (evergare >= 0.7) {
//     console.log("grade C")
// } else if (evergare >= 0.6) {
//     console.log("grade D")
// } else if (evergare >= 0.4) {
//     console.log("grade E")
// } else {
//     console.log("grade F")
// }

//Xap xep cac so

// let a = parseInt(prompt("Vui long nhap so thu nhat: "))
// let b = parseInt(prompt("Vui long nhap so thu hai : "))
// let c = parseInt(prompt("Vui long nhap so thu ba : "))
// let d = parseInt(prompt("Vui long nhap so thu tu : "))
// let myArray=[a,b,c,d];
// for (let i =0; i<=(myArray.length-1);i++){
//     for(let j=i+1; j<=myArray.length;j++) {
//         if (myArray[i] < myArray[j]) {
//             let arrayOf = myArray[i];
//             myArray[i] = myArray[j];
//             myArray[j] = arrayOf;
//         }
//     }
// }
// var a=3;
// var b=2;
// var c=9;
// var d=-1;
// var num=[a,b,c,d];
// console.log(num.sort(function (a,b){return(b-a)}).join(" "))
// // console.log(String(myArray));

//Xet tam giac
// let a = parseInt(prompt("Vui long nhap canh thu nhat tam giac: "))
// let b = parseInt(prompt("Vui long nhap canh thu hai tam giac: "))
// let c = parseInt(prompt("Vui long nhap canh thu ba tam giac: "))
// if ((a > 0) && (b > 0) && (c > 0) && (a + b > c) && (a + c > b) && (b + c > a)) {
//     if ((a * a + b * b === c * c) ||
//         (a * a + c * c === b * b) || (c * c + b * b === a * a)) {
//         if ((a === b) || (a === c) || (b === c)) {
//             console.log("Right triangle ! and Isosceles triangle !")
//         } else {
//             console.log("Right triangle !")
//         }
//     } else if ((a === b) || (a === c) || (b === c)) {
//         if (a === b === c) {
//             console.log("Equilateral triangle !")
//         } else {
//             console.log("Acute triangle !")
//         }
//     }
//     if ((a * a + b * b > c * c) ||
//         (a * a + c * c > b * b) || (c * c + b * b > a * a)) {
//         console.log("Acute triangle !")
//     } else {
//         console.log("Obtuse triangle !")
//     }
// } else {
//     console.log("Not a Triangle !")
// }


//Nhap mot chu cai
// let myChar = prompt("Vui long nhap mot chu cai tu A-Z: ")
// if (myChar === myChar.toUpperCase(0)){
//     console.log("upper-case alphabet");
// } else if(myChar === myChar.toLowerCase(0)){
//     console.log("lower-case alphabet");
// } else{
//     console.log("not an alphabet");
// }

//Xet 3 so nguyen
// let a = parseInt(prompt("Vui long nhap so thu nhat: "))
// let b = parseInt(prompt("Vui long nhap so thu hai : "))
// let c = parseInt(prompt("Vui long nhap so thu ba : "))
// if(a>=b>=c){
//     console.log("Decreasing");
// } else if(a<=b<=c){
//     console.log("Increasing");
// } else{
//     console.log("Neither increasing nor decreasing order");
// }


//


// for (let i=0,j=10;i<=10;i++,j--){
//     let sum=i+j;
//     document.write(i+"+"+j+"="+sum);
// }

// ve tam giac
// text = '';
// for (let count = 0; count<
// 50; count++
// )
// {
//     text += '<hr width ="' + count + '%"/>';
// }
// document.getElementById("shape").innerHTML=text;
// so nguyen to

// let a = parseInt(prompt("Vui long so nguyen to den n, nhap n: "));
// myArray = new Array();
// arrayNumber=new Array();
// for (let i = 0;i<=a;i++){
//  myArray[i] = true;}
// // console.log(myArray);
//
// if (a===2){
//     console.log("so nguyen to:"+a)}
//  else if (a>2){
//     for ( i=3;i<=a;i+2){
//         if((i%2===0)||(i%(Math.sqrt(i))===0)){
//                 myArray[i]=false;
//         }
//         console.log(String(myArray[i]));
//     }}
//     for (i=3;i<=a;i++){
//         if(myArray[i]===[false]){
//             console.log("So nguyen to la:"+i );
//         }
//     }
// } else {
//     console.log("Khong phai so nguyen to")
// }
// var myArr4 = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ]
// for (let i = 0; i < myArr4.length; i++) {
//     for (let j = 0; j < myArr4[i].length; j++) {
//         console.log(myArr4[i][j])
//     }
// }
// let myString =[]
// for (let i = 0; i < 5; i++) {
//    for (let j=0;j<10;j++){
//        document.write("*")
//    }
//    document.write("<br/>")
// }

// let a= parseInt(prompt("Nhap gia tri:"))
// for (let i=0;i<a.length;i++){
//     if(i===0||(i%2===0)){
//         console.log(i)
//     }
// }

// for (let i=0;i<100;i++){
//
//     if(i>8){
//         continue
//     }
//     if(i===0||(i%2===0)){
//     console.log(i) }
// }


//bai1
// let a = parseInt(prompt("Vui long nhap so nguyen bat dau de tinh tong cac so chan ben trong: "));
// let b = parseInt(prompt("Vui long nhap so nguyen ket thuc de tinh tong cac so chan ben trong: "));
// let sum=0;
// for (let i=a; i<=b;i++){
//     if(i%2===0){
//         sum += i;
//     }
// }
// console.log(sum);

//bai 2
// let n = parseInt(prompt("Vui long nhap so nguyen be hon 20 tinh n!: "));
//  let myResult=n;
//  for(let i=1;i<n;i++){
//         myResult*= (n-i);
//  }
//  console.log(myResult)


//bai 3
// let myArr=[0,-5,1,-3,4]
// let sum=0;
// for (const value of myArr){
//     if(value>=0){
//         sum+=value;
//     }
// }
// console.log(sum)

//bai 4
// let myArr=[0,-5,1,-3,4,8,10,7,9,11,12]
// for (const value of myArr){
//     if((value%4===0)&&(value%3===0)){
//         break
//     } else if(value%4===0){
//         continue;
//     } else
//     {console.log(value)}
// }

// bai5
// let strInput = String(prompt("Vui long nhap chuoi ki tu can dao nguoc: "));
// let sum = "";
// let myLength =strInput.length;
// for (let i = (myLength - 1); i >= 0; i--) {
//     sum = sum + strInput[i];
//     // console.log(String(strInput.charAt(i)))
//     // document.write(strInput.charAt(i))
// }
// console.log(sum)


//bai 5:
// let myChose = parseInt(prompt("Vui long nhap cac thuoc tinh: 1/Kiểm tra tính chẵn lẻ của 1 số. 2/Kiểm tra số nguyên tố. 3/Kiểm tra một số có chia hết cho 3 không. 4/Thoát :"));
// while ((myChose>=1)&&(myChose<4)) {
//     switch (myChose) {
//         case 1:
//             let numberCheck1 = parseInt(prompt("Vui long so can kiem tra;"));
//             if (numberCheck1 !== 0) {
//                 if (numberCheck1 % 2 === 0) {
//                     console.log("So ban nhap la so chan")
//                 } else {
//                     console.log("So ban nhap la so le")
//                 }
//             } else {
//                 console.log("Ban da nhap so khong")
//             }
//             break
//         case 2:
//             let numberCheck2 = parseInt(prompt("Vui long so can kiem tra;"));
//             let chose = true;
//             if (numberCheck2 === 2) {
//                 console.log("So ban nhap la so nguyen to")
//             }
//             if (numberCheck2 > 2) {
//                 for (i = 2; i <= Math.sqrt(numberCheck2); i++) {
//                     if (numberCheck2 % i === 0) {
//                         chose = false;
//                     }
//                 }
//                 if (chose === false) {
//                     console.log("So ban nhap khong phai la so nguyen to")
//                 } else {
//                     console.log("So ban nhap la so nguyen to")
//                 }
//             } else {
//                 console.log("So ban nhap khong hop le")
//             }
//             break
//         case 3:
//             let numberCheck3 = parseInt(prompt("Vui long so can kiem tra:"));
//             if (numberCheck3 % 3 === 0) {
//                 console.log("So ban nhap chia het cho ba")
//             } else {
//                 console.log("So ban nhap khong chia het cho ba")
//             }
//             break
//     }
//     myChose = parseInt(prompt("Vui long nhap cac thuoc tinh: 1/Kiểm tra tính chẵn lẻ của 1 số. 2/Kiểm tra số nguyên tố. 3/Kiểm tra một số có chia hết cho 3 không. 4/Thoát :"));
// }  if (myChose<1||myChose>4) {
//     console.log("Ban nhap khong hop le")

// if (myChose=4){
//     console.log("Tam biet")
// } else{
//     console.log("Ban nhap khong hop le")
// }


//bai 6
// let shouldExit =false;
// while (!shouldExit) {
//     var choose = parseInt(prompt("nhap vao 1 so , 1/Tinh chu vi dien tich HCN,2/Tinh chu vi dien tich tam giac/Tinh chu vi dien tich hinh tron 4/Thoát"))
//     switch (choose) {
//         case 1:
//             var number1 = parseInt(prompt("nhap chieu dai HCN: "))
//             var number11 = parseInt(prompt("nhap chieu cao HCN: "))
//             console.log(`Dien tich HCN la ${number1 * number11}`)
//             console.log(`Chu vi HCN la ${2 * (number1 + number11)}`)
//             break
//         case 2:
//             var number2 = parseInt(prompt("nhap canh thu nhat cua tam giac: "))
//             var number22 = parseInt(prompt("nhap canh thu nhat cua tam giac: "))
//             var number222 = parseInt(prompt("nhap canh thu ba cua tam giac: "))
//             let p = (number2 + number22 + number222) / 2
//             console.log(`Dien tich tam giac la ${Math.sqrt(p * (p - number2) * (p - number22) * (p - number222))}`)
//             console.log(`Chu vi tam giac la ${number2 + number22 + number222}`)
//             break
//         case 3:
//             var number3 = parseInt(prompt("nhap ban kinh tam giac "))
//             console.log(`Dien tich hinh tron la ${Math.PI * number3 * number3}`)
//             console.log(`Chu vi HCN la ${2 * Math.PI * number3}`)
//             break;
//         case 4:
//             console.log("tam biet")
//             shouldExit=true;
//             break;
//         default:
//             alert("nhap sai yeu cau nhap lai");
//             break;
//     }
// }

//bai 7
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


// bai 8:
// let shouldExit=false;
// while (!shouldExit){
// var a = parseInt(prompt("nhap canh thu nhat cua tam giac: "))
// var b = parseInt(prompt("nhap canh thu nhat cua tam giac: "))
// var c = parseInt(prompt("nhap canh thu ba cua tam giac: "))
//    if(a+b>c&&b+c>a&&c+a>b&&(a>0&&b>0&&c>0)){
//        alert(`Chu vi la${a+b+c}`)
//        let pu = (a + b + c) / 2
//        alert(`dien tich la:${Math.sqrt(pu * ((pu - a) * (pu - b) * (pu - c)))}`)
//        shouldExit=true;
//    } else {
//        alert("Ban nhap sai so canh tam giac")
//    }
// }

//bai 1:
// let sum=0;
// let shouldExit = false;
// while (!shouldExit) {
//     var N = parseInt(prompt("Nhap so N:"))
//     if (N >= 2 && N <= 100) {
//         shouldExit = true;
//         break;
//     }else
//     {
//         alert("Nhap sai roi, vui long nhap lai:")
//     }
// }
// for(let i =2;i<=N;i++){
//     let j=i*i;
//     if(j%2===0){
//         console.log(j);
//     }
// }

//bai 2:
// let sum=0;
// let shouldExit = false;
// while (!shouldExit) {
//     var N = parseInt(prompt("Nhap so N:"))
//     if (N >= 2 && N <= 100) {
//         shouldExit = true;
//         break;
//     }else
//     {
//         alert("Nhap sai roi, vui long nhap lai:")
//     }
// }
// for(let i =2;i<=N;i++){
//     let j=i*i;
//     if(j%2===0){
//         console.log(j);
//     }
// }
//bai3:

// let message="Mau sac da duoc thay doi roi";
// for (let i=0;i<10;i++){
//     var letters = '0123456789ABCDEF'.split('');
//     var color = '#';
//     for (var j = 0; j < 6; j++ ) {
//         color += letters[Math.round(Math.random() * 15)];
//     }
//     console.log("%c" + message, "color:" + color);
// }
// bai4
// for (let i=1; i<=100;i++){
//     if(i%3===0&&i%5===0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3===0){
//         console.log("Fizz");
//     } else if(i%5===0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

//bai5
// let sum=0
// var a = parseInt(prompt("nhap so can xet: "))
// for (let i=a-1;i>0;i--){
//     if(a%i===0){
//          sum=sum+i;
//     }
// }
// if (a===sum){
//     console.log(`${a} la so hoan hao`)
// } else{
//     console.log(`${a} khong phai la so hoan hao`)
// }
//bai7:
// let sum, a=1,b=0;
// let num=20;
// while(num>=0){
//  sum=a;
//  a=a+b;
//  b=sum;
//  num--;
//  console.log(b);
// }

//bai8:

// let sum1=''
// for (let i=1;i<=15;i++){
//     sum1+="*";
//     document.write(sum1+"<br/>")
// }


// let myArr=[]
// for (let i=0;i<15;i++){
//     myArr[i]='*';
// }
// let sum2=myArr.join('');
// // console.log(myArr.join(''))
// for (let i=14;i>=0;i--){
//     document.write(sum2.slice(i)+"<br/>")
// }

// let myArr=[" "," "," "," "," "," "," "," "," "," ",]
// let myArr=[]
// for (let i=0;i<10;i++){
//     myArr[i]="&#160&#160";
// }
// for (let j=9;j>=0;j--){
//     myArr[j]=["*"];
//     document.write(myArr.join(''))
//     document.write("<br/>")
//     // document.write(myArr.join(''))
// }


// let myArr=[]
// for (let i=0;i<=10;i++){
//     myArr[i]="*";
// }
// for (let j=0;j<=10;j++){
//     myArr[j]=["&#160&#160"];
//     document.write(myArr.join(''))
//     document.write("<br/>")
//     // document.write(String(myArr.join(''))+"<br/>")
// }

// let a= parseInt(prompt("Nhap canh cua tam giac:"))
// let b= parseInt(prompt("Nhap canh cua tam giac:"))
// let a=10
//     let b=10
// for(let i=0;i<a;i++){
//     for(let j=0;j<i;j++){
//         document.write("*");
//     }
//     document.write("<br/>");
// }

// let a=10
// let b=10
// for(let i=0;i<a;i++){
//     for(let j=i;j>=0;j--){
//         document.write("*");
//     }
//     document.write("<br/>");
// }

// let m=[" "," ",3]
// document.write(m.join(" "))
//bai 10:
// let shouldExit = false;
// let shouldExit2 = false;
//
// let randomNumber
// let randomNumber1
// while (!shouldExit){
// randomNumber1 = Math.round(Math.random() * 15)
// if (randomNumber1 >= 1 && randomNumber1  <= 10) {
//     randomNumber = randomNumber1;
//     shouldExit=true
//     break;
// }}
// console.log(randomNumber)
//     for (let i=0; i<=2; i++){
//         let myNumber = parseInt(prompt("Game doan so (ban chi co 3 luot doan):"))
//     if(myNumber===randomNumber){
//         alert("Ban da doan dung")
//         shouldExit2=true;
//         break;
//     } else if (i<2 && myNumber<randomNumber){
//         alert("Ban doan be hon, vui long doan lai")
//     } else if (i<2 && myNumber>randomNumber) {
//         alert("Ban doan lon hon, vui long doan lai")
//     } else if (i=2 && myNumber<randomNumber){
//         alert("Ban doan lai doan be hon, het luot")
//         shouldExit2=true;
//         break;
//     } else {
//         alert("Ban doan lai doan lon hon, het luot")
//         shouldExit2=true;
//         break;
//     }
//     }
//     if(!shouldExit2){
//     alert("Ban thua roi");
//     }



//hinh chu nhat rong
// let a=parseInt(prompt("nhap a"))
// let b=parseInt(prompt("nhap b"))
//     for(let i=1;i<=b;i++){
//         for(let j=1;j<=a;j++){
//             if(i===1||i===b){
//                 document.write("*");
//             } else if
//              (j===1||j===a) {
//                 document.write(`*`)
//             } else {
//                 document.write(`&#160&#160`)
//             }
//         }
//         document.write("<br/>")
//     }

//hinh trai tim
// function drawHeart(m, n) {
//     let i, j;
//     for(i = 1; i < 7; i++) {
//         for(j = 1; j <= 7; j++) {
//             if(!((i == 1 && (j == 1 || j == 4 || j == 7))
//                 || (i == 4 && (j == 1 || j == 7))
//                 || (i == 5 && (j <= 2 || j >= 6))
//                 || (i == 6 && (j <= 3 || j >= 5)))) {
//                 document.write("*");
//             } else {
//                 document.write("&#160&#160");
//             }
//         }
//         document.write("<br/>")
//     }
// }
//
// drawHeart(6,7)


// let a=parseInt(prompt("nhap a"))
// let item="*".repeat(2)
//     for(let i=1;i<=a;i++){
//         for(let j=1;j<=a-i;j++){
//             document.write("&#160&#160")
//         }
//             for(let k=1;k<=2*i-1;k++){
//                 document.write("*");
//             }
//         document.write("<br/>")
// }
//ve tam giac can rong
// let a=parseInt(prompt("nhap a"))
// let item="*".repeat(2)
// for(let i=1;i<=a;i++){
//     for(let j=1;j<=a-i;j++){
//         document.write("&#160&#160")
//     }
//     for(let k=1;k<=2*i-1;k++){
//         if(k===1||k===2*i-1||i===a){
//             document.write("*");
//         } else{
//         document.write("&#160&#160"); }
//     }
//     document.write("<br/>")
// }
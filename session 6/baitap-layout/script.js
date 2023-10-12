('.customer-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    responsive: [
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
    prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-arrow-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-arrow-right"></i></button>`,
});
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
    menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
        menu.classList.remove(activeClass);
    }
});

var age;
age = 18;
age = 30;
console.log("Tuoi cua thay Hung:", age)
var num = 5;
num = num + 10;
console.log("num:", num);

var fruit = "Apple";
fruit = "Banana"
console.log("Loai trai cay la:", fruit)
const color = 2;
console.log(color)
const firstname = undefined
var nameofme = !firstname
console.log(typeof nameofme)


var res = 10 % 3
console.log("ket qua cua toan tu %:", res)

var output = res++

console.log(output)
//Expresstion
 var myFunc = function funcName(){
    alert("abc")
 }
//Declaration
function submit(){

}
var myObject={
    name:"minh hung",
    age:18,
    address:"HCM",
    myFunc: function(){

    }
}
// Array []
var myArray=["JS","PHP",'Reac']
console.log(myArray)

var andOp = undefined
console.log(andOp)

//&& nếu các điều kiện là true thì lấy giá trị phía sau, gặp 0 Nan undefined thì lấy giá trị 0 Nan undefined. Nêú gặp 2 giá trị false thì ưu tiên undèined>NaN>0
//|| nếu gặp giá trị giống nhau true hoặc false thì sẽ lấy giá trị true, nếu cả 2 là false thì lấy false phía sau.
var point;
// point = prompt("Nhap  so diem cua hoc sinh:")
if (point>=75) {
    console.log("Loai A")
} else if(point>=60 && point<75){
    console.log("Loai B")}
    else if(point>=45 && point<60) {
        console.log("Loai C")
    }
    else if(point>=35 && point<45) {
        console.log("Loai D")
    } else {
        console.log("Loai E")
}

console.log(c)
var c; //
// console.log(d)
// let d
// var thì khi khai báo sẽ nhảy lên trước, còn let và constant không tự động nhảy lên trước

// chỗi:
// -cách tạo chuỗi
//- nên dùng cách nào
// kiểm tra data type
//2. chỗi case sử dụng backlash(\) Thêm một dấu trước nó
//3.Xem độ dài chuỗi
//4Chú ý độ dài khi viết code
//5.Template string ES6

//var fullName = new String("Nguyen Minh Hung"){}//Cách ít sài

var fullName2="Minh Hung is 'Teacher'"

var fullName3= "day la dau \\"
console.log(fullName3)

var fullName4="Minh Hung "
console.log(fullName4.length)

var fullName5="Mot so case su dung backlash" +"mot so case"
console.log(fullName5)

var firstName1="Quan"
var lastName1="Duong"
console.log(`Toi la: ${firstName1}   ${lastName1}`)

//Các phương thức làm việc với chuỗi:
//1. Length
//2> Find Index
//3. Cut String
//4.Replace
//5. Convert to upper case
//6.Convert to lower case
//7.Trim
//8.Split
//9.Get a character by index

var myString="De nong dan biet code"
let myArr2=myString.toLowerKey()
console.log(myArr2)
var myString2="De nong dan biet code"
console.log("De nong dan biet code: "+myString.length)
console.log(myString.indexOf("no"))
console.log(myString.indexOf("et"))
console.log(myString.indexOf("xxx"))//KHong co tra ve -1
var myString2="De nong dan biet code va lam code"
console.log(myString2.indexOf("code",20))// TIm tu vi tri thu 20 tro len
console.log(myString2.lastIndexOf("code"))// Tim chu code o vi tri cuoi cung
console.log(myString.slice(4,6))//  cat lay ki tu tu so 4 den 5
console.log(myString.slice(4))
console.log(myString.replace(/code/g,"dev"))
console.log(myString.toUpperCase()) //Viet hoa tat ca
console.log(myString.toLowerCase())
console.log(myString.trim(3))//Bo khoang trang o dau

var languages="javascript, PHP, Ruby"
console.log(languages.split(", "))//['javascript', 'PHP', 'Ruby']
console.log(languages.split(""))//['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't', ',', ' ', 'P', 'H', 'P', ',', ' ', 'R', 'u', 'b', 'y']

var myString3="Minh Hung"
console.log(myString3.charAt(0))
console.log(myString3.charAt(10))// Tra ve chuoi rong "" la falsy
console.log(myString3[1])//i



// var MyString;
// MyString= prompt("Nhap chuoi ki tu muon in hoa chu cai dau:")
// var char1=MyString.charAt(0).toUpperCase();
// var char2=MyString.slice(1);
// var char3=char1.concat(char2);
// console.log(char3);

// var MyString2;
// MyString2= prompt("Nhap chuoi ki tu:")
// MyString2=MyString2.trim();
// MyString2=MyString2.replace("a","4").replace(/s/g,5).replace(/i/g,1).replace(/o/g,0).replace(/e/g,3);
// console.log(MyString2);

// var MyString3=prompt("Nhap chuoi ki tu:")
var String=MyString3.split(" ");
var a=String.length;
var word=String[0];
var MyString4=word.charAt(0).toUpperCase();
var MyString5=word.slice(1);
// var MyString5=MyString3.slice(1);
console.log(MyString4+MyString5)

//
function myFunction(){
    document.write("Xin chao");
}

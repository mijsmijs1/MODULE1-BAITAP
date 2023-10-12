//1. Attribute events
//2. Assign evennt susing element node
// var h3Element = document.querySelector("h3")
// console.log(h3Element)

//duyet mang span trong the h3
//moi the span đó sẽ nhận sự kiện onclick
// log ra target trong event object
// function myfunc(){
//     alert("SPAN")
// }
// for(let i=0;i<3;i++){
//     h3Element.querySelector("span").onclick=function(event){
//        console.log("SPAN")
//         console.log(event.target.innerText) //.innerText để lấy text/ .value để lấy giá trị
//     }
// }

// var ulElement = document.querySelector("ul")
// console.log(ulElement)
// ulElement.onmousedown=function(e){
//     console.log(e.target.innerText)
// }
// ulElement.onclick=function(e){
//     console.log(e.target)
// }
//onclick: khi nhấn click chuột là thực thi (bang onmousedown)
//onchange: lay value sau khi nhap xong, khi nhấn xong thì nhận tất cả giá trị
//oninput: lay value moi khi nhap 1 ki tu mới, lần thứ hai cộng dồn lần thứ nhất
//key: lấy 1 phím vừa nhập vào
//onkeydown: khi bấm xuống là thực thi (ít sài)
//onkeyup: nhấn xuống sau đó nhấc lên th thực thi (ít sài)


// Event Listener
//1. Xử lí nhiều việc khi một event xãy râ
//2. Lắng nghe và hủy bỏ lắng nghe

// var btn =document.getElementById("myButton")
// console.log(btn)
// function workFirst(){
//     console.log("workFirst")
// }
// function workFirst1(){
//     console.log("workFirst1")
// }
// btn.addEventListener("click",workFirst)// đầu tiên là sự kiện click sau đó sẽ thực hiện fuction
// btn.addEventListener("click",workFirst1)

//setTimeout.setIntẻval,fetch: đây đều là những thao tác bât đồng bộ

// setTimeout(function(){
//     btn.removeEventListener("click",workFirst) //làm mất tác dụng cua event bên trên, tức là event bên trên khi nhấn không còn tác dụng
// },3000) //hàm chờ thời gian thực hiện function

//## Bài tập 1: Đổi màu background
// let myColor=[]
// for (let i=0;i<10;i++){
//     var letters = '0123456789ABCDEF'.split('');
//     var color = '#';
//     for (var j = 0; j < 6; j++ ) {
//         color += letters[Math.round(Math.random() * 15)];
//     }
//     myColor.push(color)
// }
// let buttonChangeColor=document.querySelector("#myButton")
// function changingColor(){
//     document.body.style.backgroundColor= `${myColor[Math.round(Math.random()*10)]}`
// }
// buttonChangeColor.addEventListener("click",changingColor)


//## Bài tập 2: Scroll to top

// const scroll=document.getElementById("scrollToTopButton");
// function scrollToTopButton(){
//     const scroll=document.getElementById("scrollToTopButton");
//     if(window.scrollY>300){
//         scroll.style.display="block";
//     } else{
//         scroll.style.display="none";
//     }
// }
// window.addEventListener("scroll",scrollToTopButton)
// function myfunction(){
//     window.scrollTo({ top: 0, behavior: "smooth" });
// }
// scroll.addEventListener("click",myfunction)
//
//
//
// let menuToggle=document.querySelector(".menu-toggle")
// let menu=document.querySelector(".menu")
// let out=document.querySelector(".out")
//
// menuToggle.addEventListener("click",function displayMenu(){
//     menu.style.display="block"
//     menuToggle.style.display="none"
//     out.style.display="block"
// })
//
// out.addEventListener("click",function hiddenMenuWithX() {
//         menu.style.display = "none"
//         menuToggle.style.display="block"
// })
// document.addEventListener("click",function hiddenMenu(event){
//     if(!menu.contains(event.target)&& !event.target.matches(".menu-toggle")){
//         menu.style.display="none"
//         menuToggle.style.display="block"
//         out.style.display="none"
//     }
// })
// const loading = document.getElementById("loading");
// const button=document.querySelector(".button")
//
//
// const hideLoading = () => {
//     loading.style.display = "none";
// };
// hideLoading()
// const showLoading= ()=>{
//     loading.style.display = "block";
// }

// button.addEventListener("click",function showtweet(){
//     showLoading()
//     setTimeout(()=>{
//     swal.fire(
//         "Trang web đã tải xong !");
//     hideLoading()
//     },2000);
// }
// const container = document.getElementById('list');
// for(let i = 0; i < 3; i++) {
//     container.insertAdjacentHTML("afterbegin", `<li>${i}</li>`)
//         }

// const myList1=document.getElementsByClassName("singer")
// for (let i=0;i<myList1.length;i++){
//     myList1[i].style.backgroundColor = "red"
// }
//
// let upper_btn = document.getElementById("upper_btn");
// let name_input = document.querySelector("#name_input");
// let result = document.querySelector("#result_div");
//
// upper_btn.addEventListener("click", () => {
//     let inputValue = name_input.value;
//     let upperCaseValue = inputValue.toUpperCase();
//     name_input.value = upperCaseValue;
//     result.innerHTML = upperCaseValue;
// });
//
//
// ///               PROMISE
// const p1= new Promise((resolve,reject)=>{
//   resolve('success')
// })
// const p2 =new Promise((resolve,reject)=>{
//     reject("error")
// })
// p1.then(data=>{
//     console.log(data)
// })
// p2.catch(error =>{
//     console.log(error)
// })
// p1
//     .then(success => console.log(success))
//     .catch(error =>console.log(error))
//     .finally(()=>console.log("finally"))
//
//
//
// const p3=Promise.resolve(100)
// const p4=Promise.resolve(true)
// const p5=Promise.reject("error")
// const p6=new Promise((resolve,reject)=>{
//     setTimeout(
//         ()=>{
//             console.log("p4")
//         },4000
//     )
// })
// Promise.all([p1,p2,p4])
// .then(data=>{
//     console.log("p1,p2,p4",data)
// })
// .catch (err =>{
//     console.log("p1,p3,p4",err)
// })
//
//
// const resolvePromise = new Promise((resolve,reject)=>{
//     resolve("ok")
// })
// const rejectPromise = new Promise((resolve,reject)=>{
//     reject("Error")
// })
// rejectPromise
// .then(()=>{
//     throw new Error("Oh no")
// })
// .catch(err=>{
//     console.log("rejectPromise, Catch loi",err)
// })
//
// rejectPromise
// .then(()=>{
//     throw new Error("oh no")
// },err =>{
//     console.log("rejectPromise",err)
// })
//
// // return va không return trong callback của then (khi sử dựng tính chất chaining của promise)
// const promise=new Promise((resolve,reject)=>{
//     resolve(100)
// })
// promise
// .then(data1=>{
//     console.lof("ok1",data1)
//     return data1*2 ///trả về giá trị cho lần then phía sau
// })
// .then(data2=>{
//     console.log("ok2",data2)    //neu khong co return thi khong truyen xuong cac gia tri then ben duoi
// })
// .catch(err=>{
//     console.log("error",err)
// })
// .finally(()=>{
//     console.log("done")
// })


/// bai tap 1
// let todoList = document.querySelector(".todo-list");
// let submit = document.querySelector(".button");
// let todo = document.querySelector("#todo");
// let form = document.querySelector(".todo-form");
// let todos;
//
// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const todoVal = todo.value;
//     todos.push(todoVal);
//     localStorage && localStorage.setItem("todoList", JSON.stringify(todos));
//     createTodoItem(todoVal);
//     todo.value = '';
// });
//
// todos = JSON.parse(localStorage.getItem("todoList")) || [];
//
// function createTodoItem(title) {
//     if (title.length > 0) {
//         todoList.insertAdjacentHTML("beforeend",`<div>${title}<i class="fa-solid fa-x outkey" ></i></div>`)
//     }
// }
//
// todoList.addEventListener("click", (e) => {
//     if (e.target.classList.contains("fa-x")) {
//         const itemToRemove = e.target.parentNode;
//         const itemText = itemToRemove.textContent.trim();
//         const itemIndex = todos.indexOf(itemText);
//         if (itemIndex !== -1) {
//             todos.splice(itemIndex, 1);
//             localStorage.setItem("todoList", JSON.stringify(todos));
//         }
//         itemToRemove.removeChild(itemToRemove);
//     }
// });

// let myForm=document.querySelector(".todo-form")
// let myButton =document.querySelector(".button")
// let myInput=document.querySelector("#todo")
// let myItemList=document.querySelector(".todo-list")
// let myData;
//
// myForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let data = myInput.value
//     myData.push(data)
//     localStorage&&localStorage.setItem("todo-list",JSON.stringify(myData))
//     createTodoItem(data)
//     myInput.value=''
// })
// myData=JSON.parse(localStorage.getItem("todo-list"))||[];
// function createTodoItem(item){
//     if(item.length>0){
//         myItemList.insertAdjacentHTML("afterbegin",`<li>${item}<i class="fa-solid fa-x outkey" ></i></li>`)
//     }
// }
// myItemList.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("fa-x")){
//     let fatherItem=e.target.parentNode
//     let fatherItemText= fatherItem.textContent
//     let itemIndex=myData.indexOf(fatherItemText)
//     if(itemIndex>=0){
//         myData.splice(itemIndex,1)
//         localStorage&&localStorage.setItem("todo-list",JSON.stringify(myData))
//     }
//     fatherItem.remove()
// }
// })

function add_child() {
    //tạo phần tử p
    var p = document.createElement("p");

    //tạo phần tử text
    var node = document.createTextNode("Some new text");

    //gắn node vào p
    p.appendChild(node);

    //Thay đổi một số thuộc tính của p
    p.appendChild(node);
    p.style.backgroundColor = 'red';
    p.style.padding = "10px";
    p.style.color = "white";

    var div = document.getElementById("demo");
    //gắn p vào div
    div.appendChild(p);
}

const link=document.createElement("a")
link.href="https://www.youtube.com/watch?v=EHF7xBUAmrQ"
link.innerText="nhan vao day de tuy cap"
document.body.appendChild(link)



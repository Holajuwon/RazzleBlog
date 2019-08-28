function open(){
  let menu = document.querySelectorAll(".login-container");
  menu.forEach(menuList =>{
    menuList.classList.toggle("appear")
  });
}
document.querySelector(".menu").addEventListener('click', open);
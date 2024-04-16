let hamberger_icon=document.querySelector('.hamberger-icon')
let cross = document.querySelector('.cross');
hamberger_icon.addEventListener('click',()=>{
hamberger_icon.parentElement.classList.add('menu-show');
hamberger_icon.style.display = "none";
});
cross.addEventListener('click',()=>{
    console.log("garimaa")
    cross.parentElement.parentElement.classList.remove('menu-show');
    hamberger_icon.style.display = "block";
   
})
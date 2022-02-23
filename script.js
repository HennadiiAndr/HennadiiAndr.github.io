const burger = document.querySelector(".burger");
const midNavBar = document.querySelector(".middle-nav-container")
const addVisibility = function(e){
  midNavBar.classList.add('middle-nav-visible')
  e.stopPropagation()
}
const removeVisibility = function(e){
   midNavBar.classList.remove('middle-nav-visible')
   e.stopPropagation()
}
const preventClosing = function(e){
   e.stopPropagation()
}
midNavBar.addEventListener('click', preventClosing)
burger.addEventListener('click', addVisibility);
document.body.addEventListener('click', removeVisibility)
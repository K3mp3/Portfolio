 let width = window.innerWidth;

 const headerH1 = document.querySelector(".h1-header-desktop");
 
 function init() {

    /* Adding classes */
    headerH1.classList.add("remove-text");

    /* Calling functions */
    changeText();
 }

 init();
 
function changeText() {
    if (width > 920) {
        headerH1.classList.remove("remove-text");
    } else {
        headerH1.classList.add("remove-text");
    }
}
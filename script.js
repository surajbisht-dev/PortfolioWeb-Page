const header = document.querySelector('.navbar');
        
window.onscroll = function() {
    var top = window.scrollY;
    if(top >=150) {
        header.classList.add('navbarDark');
        }
    else {
        header.classList.remove('navbarDark');
    }
}

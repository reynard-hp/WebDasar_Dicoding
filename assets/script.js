var slides = document.querySelectorAll('.slide');
var slideIndex = 0;

function popup(){
    /* setting semua slide display menjadi none */
    for(var i = 0; i < slides.length; i++){
        if(!(slides[i].classList.contains("none"))){
            slides[i].classList.add("none");
        }
    }
    /* poping up slides satu per satu */
    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.remove("none");
    setTimeout(popup, 3000);
}

popup();

const fades = document.querySelectorAll('.fade');

function showFadeElements(){

  fades.forEach(fade => {

    const top = fade.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      fade.classList.add('show');
    }

  });

}

/* JALAN SAAT PAGE DIBUKA */
showFadeElements();

/* JALAN SAAT SCROLL */
window.addEventListener('scroll', showFadeElements);
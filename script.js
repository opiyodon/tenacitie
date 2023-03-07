/* ====================================================================================================================
  ================================   LINK ACTIVE NAV   ================================================================
  ==================================================================================================================== */
  var linkNav = document.querySelectorAll('.NAV_LI')

  function active(){
      if(linkNav){
          linkNav.forEach(l=> l.classList.remove('active'))
          this.classList.add('active')
      }
  }
  linkNav.forEach(l=> l.addEventListener('click',active))
  //sectionScroll
    /*var sectionScroll = document.querySelectorAll('.sectionScroll');

    window.addEventListener("scroll", () => {
        if (window.scrollY = sectionScroll) {
            linkNav.forEach(l=> l.classList.remove('active'))
            this.classList.add('active')
        }
    })
/* ====================================================================================================================
================================   GO TO TOP BUTTON ||| RESUSABLE CODE   ================================================================
==================================================================================================================== */
//function to go to the top the page when button is clicked || its appears only after scrolling for some distance from the top of the screen
var toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add("to-top-active");
    }else {
        toTop.classList.remove("to-top-active");
    }
})
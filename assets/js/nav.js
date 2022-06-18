/* ============ MENU ============ */
var navigation = {
    init:function(){
        this.navigationResponsive();
    },
    navigationResponsive:function(){
        var listMenu = document.querySelector('.menu .sideBar');
        var buttonMenu = document.querySelector('.menu .menu-button');
        
        buttonMenu.addEventListener('click',function(){
        listMenu.style.setProperty("--childenNumber", listMenu.children.length);
  
        buttonMenu.classList.toggle("clicked");
        listMenu.classList.toggle('active');  /* click chuot 2 lan 'toggle' */
        });
    },
  }
  navigation.init();
  
/* ------------------------------- SCROLL MENU ------------------------------- */

  const sections = document.querySelectorAll("section[id]");


  window.addEventListener("scroll", navHighlighter);
  
  function navHighlighter() {
    
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");
      
      
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ){
        document.querySelector(".sideBar a[href*=" + sectionId + "]").classList.add("active");
      } else {
        document.querySelector(".sideBar a[href*=" + sectionId + "]").classList.remove("active");
      }
    });
  }
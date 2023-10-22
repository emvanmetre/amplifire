function toggleMenu(){
  const navList=document.getElementById('nav-list');
  navList.classList.toggle('show');
  if(navList.classList.contains('show')) {
    navList.style.display='flex';
  } else {
      if(window.innerWidth<=768) {
        navList.style.display='none';
      } 
    else{navList.style.display='flex';
    }
  }
}
window.addEventListener('resize',function(){const navList=document.getElementById('nav-list');if(window.innerWidth>768){navList.style.display='flex';}else if(!navList.classList.contains('show')){navList.style.display='none';}});


// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollHeight < 20 || document.documentElement.scrollHeight < 20) {
    document.getElementById("banner").style.bottom = "0";
  } else {
    document.getElementById("banner").style.bottom = "-50px";
  }
}

var modal = document.getElementById("contactModal");
var contactBtn = document.getElementById("contactBtn");
var closeBtn = document.getElementById("closeBtn")

contactBtn.addEventListener("click",function(){
    modal.style.display="block";
})


window.addEventListener("click",function(e){
    if(e.target==modal){
        modal.style.display="none";
    }
   
})

var raModal = document.getElementById("ra-modal")
var raBtn = document.getElementById("ra-modal-btn")

raBtn.addEventListener("click",function(){
    raModal.style.display="block";
})


window.addEventListener("click",function(e){
    if(e.target==raModal){
        raModal.style.display="none";
    }
   
})

var rsModal = document.getElementById("rs-modal")
var rsBtn = document.getElementById("rs-modal-btn")

rsBtn.addEventListener("click",function(){
    rsModal.style.display="block";
})


window.addEventListener("click",function(e){
    if(e.target==rsModal){
        rsModal.style.display="none";
    }
   
})

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



// var preloader = document.querySelector(".preloader")
//     function loader(){
        
//         preloader.style.display='none';
//     }
    


$(window).on('beforeunload', function() {
    $('body').hide();
    $(window).scrollTop(0);
  });


  var nav = document.querySelectorAll("a")
  for(i=0;i<nav.length;i++){
      nav[i].addEventListener('click', function (e) {
       e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
  
  }
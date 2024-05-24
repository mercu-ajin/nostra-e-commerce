var saleoffer = document.querySelector('.saleoffer');
var close = document.getElementById('saleoffer1');
var left = document.querySelector('.slider-leftbutton');
var right = document.querySelector('.slider-rightbutton');
var slider = document.querySelector('.sliderimage');
var poster1 = document.getElementById("poster1");
var poster2 = document.getElementById("poster2");
var poster3 = document.getElementById("poster3");
var menubar = document.querySelector(".navbar-menu");
var closeSidebar = document.getElementById('side-navbar-close');
var sidebar = document.querySelector('.side-navbar');
var clickcount = 0;




menubar.addEventListener('click', function() {
    sidebar.style.marginLeft = "60%";
});

closeSidebar.addEventListener('click', function() {
    sidebar.style.marginLeft = "-60%";
});

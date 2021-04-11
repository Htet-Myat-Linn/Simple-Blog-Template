var section_background = document.querySelector(".intro");
var random = Math.floor(Math.random()*4)+1;
section_background.style.backgroundImage = `url('images/background${random}.jpg')`;

var nav = document.getElementsByClassName("nav")[0];
var btn = document.getElementsByClassName("menu")[0];
btn.addEventListener('click', _=> {
    $(".nav").slideToggle(1000,_=>{
        nav.classList.toggle("show-nav");
    });
});

window.onscroll = function(){changeNav();};

function changeNav(){
    var nav = document.getElementsByClassName("nav-bar")[0];
    var brand = document.getElementsByClassName("brand")[0];
    var nav_items = document.getElementsByClassName("middle");
    if(document.body.scrollTop > 550 || document.documentElement.scrollTop >550){
        nav.style.backgroundColor = "gainsboro";
        brand.style.color = "black";
        changeColor(nav_items,"black");
    }
    else{
        nav.style.backgroundColor = "";
        brand.style.color = "white";
        changeColor(nav_items,"white");
    } 
}
function changeColor(list,color){
    for(var i=0;i<4;i++){
        var li = list[i];
        li.style.color = color;
        
    }
}
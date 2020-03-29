var contact_button=document.getElementById('contact_button');
var contact_me_div=document.getElementById('contact_me');

function contact_button_func(){
project.style.display='none';
home.style.display='';
contact_me_div.scrollIntoView();

} 

contact_button.addEventListener('click',contact_button_func);

//////////////////////////////////////////////////////////////////////

var home=document.getElementById('home');
var project=document.getElementById('project');
var project_button=document.getElementById('project_button');
var home_button=document.getElementById('home_button');

project.style.display='none';

function project_button_func(){
    home.style.display='none';
    project.style.display='';
}

function home_button_func(){
    home.style.display='';
    project.style.display='none';
}

project_button.addEventListener('click',project_button_func);
home_button.addEventListener('click',home_button_func);

/////////////////////////////////////////////////////////////////
var project_tab=document.getElementsByClassName('project_tab');




project_tab[0].addEventListener('click',function(e) {
    window.location.href = 'https://shummi7.github.io/Background_Gradient/';
}, false);
project_tab[1].addEventListener('click',function(e) {
    window.location.href = 'https://shummi7.github.io/testrobo/';
}, false);
project_tab[2].addEventListener('click',function(e) {
    window.location.href = 'https://shummi7.github.io/Snake_Game/';
}, false);
project_tab[3].addEventListener('click',function(e) {
    window.location.href = 'https://shummi7.github.io/Todo_List/';
}, false);
project_tab[4].addEventListener('click',function(e) {
    window.location.href = 'https://smart-brain-face-rcgn.herokuapp.com/';
}, false);
import Typed from 'typed.js';
let menuIcon=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.Onclick= ()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

}

let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop -150;
        let heigth=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top<offset+heigth){
            navLinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href *=' +id +']').classList.add('active');
            });
        };
    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

   
}

const typed=new Typed('.multiple-text',{
    strings:['Frontend Developer','Web Developer','Youtuber'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
   
});




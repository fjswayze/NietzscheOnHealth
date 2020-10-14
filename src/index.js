import { data } from 'autoprefixer';
import _ from 'lodash'; 







window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    document.getElementById('walk').addEventListener('mouseover', function () {
        document.getElementById('paragraph-1').style.color = 'black'; 
        document.getElementById('paragraph-1').innerHTML = '"Sit as little as possible; give no credence to any thought that was not born outdoors while one moved about freely-- in which the muscles are not celebrating a feast, too. All prejudices come from the intestines."'; 
        
    })

    document.getElementById('walk').addEventListener('mouseout', function () {
        document.getElementById('paragraph-1').style.color = 'transparent'
    })

    document.getElementById('sit').addEventListener('mouseover', function () {
        document.getElementById('paragraph-1').innerHTML = '"The sedentary life - as I have said once before - is the real sin against the holy spirit."'
        document.getElementById('paragraph-1').style.color = 'black'
    })
 
    document.getElementById('sit').addEventListener('mouseout', function () {
        document.getElementById('paragraph-1').style.color = 'transparent'
    })

    document.getElementById('climate-p').addEventListener('mouseover', function () {
        document.getElementById('paragraph-1').innerHTML = '"The slightest sluggishness of the intestines is entirely sufficient, once it has become a bad habit, to turn a genius into something mediocre, something ‘German’.The German climate alone is enough to discourage strong, even inherently heroic, intestines."'
        document.getElementById('paragraph-1').style.color = 'black'
    })

    document.getElementById('climate-p').addEventListener('mouseout', function () {
        document.getElementById('paragraph-1').style.color = 'transparent'
    })

    let slideIndex = 1; 
    showSlides(slideIndex); 
    console.log(slideIndex); 

   

    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }

    function currentSlide(n){
        showSlides(slideIndex = n)
    }

    document.getElementById('prev').addEventListener('click', function(){
        plusSlides(-1); 
    });
    document.getElementById('next').addEventListener('click', function(){
        plusSlides(1); 
    });

    document.getElementById('dot-1').addEventListener('click', function(){
        currentSlide(1); 
    }); 

    document.getElementById('dot-2').addEventListener('click', function () {
        currentSlide(2);
    }); 

    document.getElementById('dot-3').addEventListener('click', function () {
        currentSlide(3);
    }); 

    document.getElementById('dot-4').addEventListener('click', function () {
        currentSlide(4);
    }); 

    function showSlides(n){
        var i; 
        var slides = document.getElementsByClassName('quote-plus-pic'); 
   
        var dots = document.getElementsByClassName('dot'); 
        if (n > slides.length) {slideIndex = 1}; 
        if (n < 1) {slideIndex = slides.length}; 
        for (i = 0; i < slides.length; i++){
            slides[i].style.display = 'none'; 
        }
        for(i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(' active', '')
        }
        console.log(slides[slideIndex -1].style.display); 
        slides[slideIndex - 1].style.display = 'flex';
        console.log(slides[slideIndex - 1].style.display); 
        dots[slideIndex -1].className += ' active'; 

    }


  
    
});

   
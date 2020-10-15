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
    let i = 0; 
    let j = 6; 
    let drinksTitle = 'Drinks'; 
    let speed  = 300; 

    typeOut(); 

    function typeOut(){
        if(i <= drinksTitle.length){
            document.getElementById('drinks-title').innerHTML = drinksTitle.slice(0, i); 
            i++; 
            if(i <= drinksTitle.length) setTimeout(typeOut, speed); 
        }
        if(i === drinksTitle.length + 1){
            j = 6; 
            setTimeout(typeDown, 2000)
        }
    }

    function typeDown(){
        if(j >= 0){
            document.getElementById('drinks-title').innerHTML = drinksTitle.slice(0, j); 
            j--; 
            if(j >= 0) setTimeout(typeDown, speed); 
        }

        if(j === -1){
            i = 1; 
            setTimeout(typeOut, 1000);  
        }


    }


    
    //Animation

    var canvas = document.getElementById('myCanvas')
    var ctx = canvas.getContext('2d')

    var x = canvas.width / 2;
    var y = canvas.height - 100;

 

    var x2 = canvas.width / 4;
    var y2 = canvas.height - 250;
   

    var x3 = canvas.width - 5; 
    var y3 = 100; 
   


    var dx = -2;
    var dy = -2;
    var dy2 = -2; 
    var dy3 = -2; 
    
    var valkyrie = document.getElementById('valkyrie'); 
   
    console.log(valkyrie.style.height)
    function drawValk1() {
        ctx.beginPath();
        ctx.drawImage(valkyrie, x, y, 150, 150)
        ctx.closePath();
    }

    function drawValk2() {
        ctx.beginPath();
        ctx.drawImage(valkyrie, x2, y2, 150, 150)
        ctx.closePath();
    }

    function drawValk3() {
        ctx.beginPath();
        ctx.drawImage(valkyrie, x3, y3, 150, 150)
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawValk1();
        drawValk2();
        drawValk3(); 
        if (x + dx < 0 || x + dx < 0) {
            x = canvas.width;
        }
        if (x2 + dx < 0 || x2 + dx < 0) {
            x2 = canvas.width;
        }

        if (x3 + dx < 0 || x3 + dx < 0) {
            x3 = canvas.width;
        }

        if (y + dy > canvas.height -50 || y + dy < 0){
            dy = -dy; 
        }

        if (y2 + dy2 > canvas.height - 150|| y2 + dy2 < 100) {
            dy2 = -dy2;
        }

        if (y3 + dy3 > canvas.height -150 || y3 + dy3 < 50) {
            dy3 = -dy3;
        }

        

        

        x += dx;
        y += dy;
        y2 += dy2; 
        y3 += dy3;  

        x2 += dx;
        x3 += dx; 
        

    }
    setInterval(draw, 10); 
    
});

   
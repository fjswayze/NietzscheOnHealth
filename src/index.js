import { data } from 'autoprefixer';
import _, { over } from 'lodash'; 







window.addEventListener('DOMContentLoaded', (event) => {

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
        slides[slideIndex - 1].style.display = 'flex';
        dots[slideIndex -1].className += ' active'; 

    }
    let i = 0; 
    let j = 6; 
    let drinksTitle = 'Drinks'; 
    let speed  = 300; 

   

    


    
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

  

    // QUIZ


    let questionIndex = 1; 
    showQuestion(questionIndex); 

    function plusQuestion(n) {
        questionIndex += n 
        showQuestion(questionIndex + 1)
    }

    function showQuestion(n) {
        let i; 
        var questions = document.getElementsByClassName('questions'); 
        if (n > questions.length) {
            questionIndex = 7
        }
        for (i = 0; i < questions.length; i++){
            questions[i].style.display = 'none'
        }
        questions[questionIndex - 1].style.display = 'flex'
    }
    

    let lastMan = 0; 
    let regularMan = 0; 
    let overMan = 0; 


    document.getElementById('take-quiz').addEventListener('click', function(){
        plusQuestion(1); 
    })

    document.getElementById('Q1A').addEventListener('click', function () {
        plusQuestion(1);
        lastMan += 1; 
    })
    document.getElementById('Q1B').addEventListener('click', function () {
        plusQuestion(1);
        regularMan += 1; 
    })
    document.getElementById('Q1C').addEventListener('click', function () {
        plusQuestion(1);
        overMan +=1; 
    })
    document.getElementById('Q1D').addEventListener('click', function(){
        plusQuestion(1); 
        regularMan += 1;
    })


    document.getElementById('Q2A').addEventListener('click', function () {
        plusQuestion(1);
        overMan +=1; 
    })
    document.getElementById('Q2B').addEventListener('click', function () {
        plusQuestion(1);
        regularMan += 1; 
    })
    document.getElementById('Q2C').addEventListener('click', function () {
        plusQuestion(1);
        lastMan += 1; 
    })
    document.getElementById('Q2D').addEventListener('click', function () {
        plusQuestion(1);
        regularMan += 1;
    })



    document.getElementById('Q3A').addEventListener('click', function () {
        plusQuestion(1);
        regularMan += 1; 
    })
    document.getElementById('Q3B').addEventListener('click', function () {
        plusQuestion(1);
        overMan += 1; 
    })
    document.getElementById('Q3C').addEventListener('click', function () {
        plusQuestion(1);
        lastMan += 1; 
    })
    document.getElementById('Q3D').addEventListener('click', function () {
        plusQuestion(1);
        regularMan += 1;
    })


    document.getElementById('Q4A').addEventListener('click', function () {
        plusQuestion(1);
        lastMan += 1; 
    })
    document.getElementById('Q4B').addEventListener('click', function () {
        plusQuestion(1);
        overMan += 1; 
    })
    document.getElementById('Q4C').addEventListener('click', function () {
        plusQuestion(1);
        regularMan += 1; 
    })
    document.getElementById('Q4D').addEventListener('click', function () {
        plusQuestion(1);
        regularMan += 1;
    })


    document.getElementById('Q5A').addEventListener('click', function () {
        lastMan += 1; 
        tabulateResult(); 
        plusQuestion(1);
    })
    document.getElementById('Q5B').addEventListener('click', function () {
        regularMan += 1; 

        tabulateResult(); 
        plusQuestion(1);
    })
    document.getElementById('Q5C').addEventListener('click', function () {
        overMan += 1; 
        tabulateResult(); 
        plusQuestion(1);
    })
    document.getElementById('Q5D').addEventListener('click', function () {
        regularMan += 1;
        tabulateResult(); 
        plusQuestion(1);
    })

    document.getElementById('retake').addEventListener('click', function(){
        questionIndex = 1; 
        overMan = 0; 
        regularMan = 0; 
        lastMan = 0; 
        plusQuestion(1)

    })

    let tabulatedResult; 

    function tabulateResult(){

 
    if(lastMan > regularMan && lastMan > overMan){
        document.getElementById('results-div').style.backgroundImage = 'url(https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80)'
        tabulatedResult = ' You are the Last Man, Nietzsche\'s greatest fear for humanity\'s future. However, knowing Nietzsche, that\'s probably not such a bad thing.'
    } 
    if(overMan > regularMan && overMan > lastMan){
        document.getElementById('results-div').style.backgroundImage = 'url(https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2224&q=80)'

        tabulatedResult = 'You are a true Nietzschean, or Overman, one who creates new values to vanquish nihilism. Enjoy!'
    }

    if (regularMan > overMan && regularMan >= lastMan || regularMan > lastMan && regularMan >= overMan) {
        document.getElementById('results-div').style.backgroundImage = 'url(https://images.unsplash.com/photo-1590343365416-788d3e16a065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80)'

        tabulatedResult = 'Not a Nietzschean, just an average joe  :('
    }
        document.getElementById('result').innerHTML = tabulatedResult; 
}

    
    
});

   
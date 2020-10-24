
# NietzscheOnHealth

Nietzsche On Health presents Fredrich Nietzsche's strange views on nutrition, climate, and exercise from his book *Ecco Homo* in a visually compelling way. The site is a CSS showcase. 

# Technologies Used

Nietzsche On Health is a pure frontend application and uses JavaScript, HTML5, and CSS. 

# Wagner Mode 
Users can click a small icon of Richar Wagner to enter 'Wagner Mode.'  Wagner's famous song, 'Ride of the Valkyries,' plays and Valkyries appear. (Wagner was Nietzsche's favorite composer.) 

![wagner](https://media.giphy.com/media/wqL5FaH1H4RvJX0Tlc/giphy.gif)

``` js
<script>
    function playSound() {
        var sound = document.getElementById("myAudio");
        if(sound.paused){
            sound.play();
        } else{
            sound.pause(); 
        }
    var animation = document.getElementById('myCanvas');
    if(animation.style.visibility === 'visible'){
        animation.style.visibility = 'hidden'
    } else {
         animation.style.visibility = 'visible';
    }
   
        
    }
</script>
```


# Flip Cards 

To see Nietzsche's views on food, users can hover over a flip card. 

![flip cards](https://media.giphy.com/media/pkUXwMxX2j3qzLyew8/giphy.gif)

This effect only requires CSS. Here is a snippet of the CSS code it uses, which utilizes the transform property: 

```
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg); 
}

.flip-card-front, .flip-card-back{
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.flip-card-back{
    color: white;
    transform: rotateY(180deg); 
}
```

# Expandable Menu 

![menu](https://media.giphy.com/media/I0696Yve4LoYNtLnli/giphy.gif)

This expandable menu, shown above, required significant use of DOM manipulation. 

```js
document.getElementById('walk').addEventListener('mouseover', function () {
        document.getElementById('paragraph-1').style.color = 'black'; 
        document.getElementById('paragraph-1').innerHTML = '"Sit as little as possible; give no credence to any thought that was not born outdoors while one moved about freely-- in which the muscles are not celebrating a feast, too. All prejudices come from the intestines."'; 
        
    })

    document.getElementById('walk').addEventListener('mouseout', function () {
        document.getElementById('paragraph-1').style.color = 'transparent'
    })


```

# Quiz Results
![quiz](https://media.giphy.com/media/lDSrmeYof6JkyiKJSV/giphy.gif)

Users can take a quiz which shows them how their personal habbits line up with Nietzsche's health advice. The quiz uses DOM manipulation to change the results page based on what answers the user gave: 
```js 
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

```



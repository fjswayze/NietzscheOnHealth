


function handleWalk(){
    document.getElementsByClassName('walk').addEventListner('click', function(){
        document.getElementsByClassName('paragraph-1').style.color = 'black'
    })
}

function handleSit() {
    document.getElementsByClassName('sit').addEventListner('click', function () {
        document.getElementsByClassName('paragraph-2').style.color = 'black'
    })
}

function handleClimate() {
    document.getElementsByClassName('climate').addEventListner('click', function () {
        document.getElementsByClassName('paragraph-3').style.color = 'black'
    })
}
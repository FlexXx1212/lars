var main, subElem, subButton, subButtonText, pointer, mouseClick;

var apiKey = "XXX";

function setup() {
    main = document.getElementById("main");
    subElem = document.getElementById("subText");
    subButton = document.getElementById("subButton");
    subButtonText = document.getElementById("subButtonText");
    pointer = document.getElementById("pointer");

    mouseClick = new Audio('mouse_click.mp3');
    mouseClick.volume = 0.1;

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCoyziYRqIEVosdR4laZjTGg&key=' + apiKey, true);

    request.onload = function() {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response);
            subElem.innerText = data.items[0].statistics.subscriberCount + " Abonnenten";
            animate();
        }
        // Send request
    request.send();
}



function animate() {
    main.classList.remove('shrunk');
    main.classList.add('grow');

    setTimeout(function(){
        pointer.style.visibility = "visible";
        pointer.classList.add("flyIn");
    },500);

    setTimeout(function(){
        subButton.classList.add("clicked");
        subButtonText.classList.add("clicked");
        subButtonText.innerText = "ABONNIERT";
        mouseClick.play();
    },2000);

    setTimeout(function(){
        pointer.classList.remove("flyIn");
        pointer.classList.add("flyOut");
    },3000);

    setTimeout(function(){
        main.classList.remove('grow');
        main.classList.add('shrunk');
    },4000);
}

setup();

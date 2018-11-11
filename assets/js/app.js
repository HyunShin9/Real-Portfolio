$( document ).ready(function() {

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});



        


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBIcg-i7MilVWYlqyz0t9ZfuSlujSNvfSQ",
    authDomain: "hyun-project-756c7.firebaseapp.com",
    databaseURL: "https://hyun-project-756c7.firebaseio.com",
    projectId: "hyun-project-756c7",
    storageBucket: "hyun-project-756c7.appspot.com",
    messagingSenderId: "493764036544"
};
firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var email = "";
var message = "";

$("#submit").on("click", function(event) {
    event.preventDefault();

    name = $("#fName").val().trim();
    email = $("#fEmail").val().trim();
    message = $("#fMessage").val().trim();
    console.log(name);


    database.ref().set({
        name: name,
        email: email,
        message: message,
    });

});

// interact.js
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    restrict: {
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
      
    // enable autoScroll
    autoScroll: false,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    
  });
function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;


// enable draggables to be dropped into this
interact('.drop').dropzone({
    // only accept elements matching this CSS selector
    accept: '.answer', 
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
    
    // listen for drop related events:
    
    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;
    
        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
        //draggableElement.textContent = 'Are you sure?';
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
    },
    ondrop: function (event) {
        if ($(event.relatedTarget).hasClass( "1" ) ) {
        event.relatedTarget.textContent = 'For the future, I hope to get my foot into the programming industry, and continue learning different sections of the trade.';
        }
        else if ($(event.relatedTarget).hasClass( "2" ) ) {
        event.relatedTarget.textContent = 'The logical puzzles. I find it quite enjoyable to spend time with a task within code because it gives a lot of free space to experiment and fit the puzzles pieces as you desire.';
        }
        else if ($(event.relatedTarget).hasClass( "3" ) ) {
        event.relatedTarget.textContent = 'I am looking for a stable and fulfilling career that gives me many chances to grow my wealth of knowledge.';
        }
        else if ($(event.relatedTarget).hasClass( "4" ) ) {
            event.relatedTarget.textContent = 'Creative freedom. This outlet has been vastly different compared to my last field of study as it allows you to sell what you have created; putting more weight into the product';
        }
            
        
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});
});
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/konditioner.jpg') {
      myImage.setAttribute ('src','images/kondi2.jpg');
    } else {
      myImage.setAttribute ('src','images/konditioner.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Мы поможем выбрать вам идеальный кондиционер для дома, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Мы поможем выбрать вам идеальный кондиционер для дома, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
      

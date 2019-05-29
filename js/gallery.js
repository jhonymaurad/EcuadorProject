
// change the index and display of the pictures

var slideIndex = 1;
showDivs(slideIndex);

function showDivs(n){
  var pics = document.getElementsByClassName('pics');
  if (n > pics.length) {slideIndex =1;}
  if (n < 1) {slideIndex = pics.length}
    var i =0;
    while(i < pics.length){
      pics[i].style.display = "none";
      i++;
    }
    pics[slideIndex-1].style.display = "block";
}

const plusDivs =(n) => {showDivs(slideIndex += n);}

// function validateform(form){
//   var money = form["money"].value;
//
//   if(money == 0){
//     window.alert("Stay where you are");
//   }
//   else if (money < 10000) {
//     window.alert("You will need more");
//
//   }
//   else (money > 10000) {
//     window.alert("You can retire");
//   }
//
// }

 // onclick chnage the source of the image
var myImage = document.getElementById('imgGal');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/galapagospics/sealion.png') {
      myImage.setAttribute ('src','../images/isabel.jpg');
    } else {
      myImage.setAttribute ('src','../images/galapagospics/sealion.png');
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// depending on the user input chack and compare with the links
function filterCont() {
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var list = document.getElementById("myDropdown");
    var cities = list.getElementsByTagName("a");
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            //shows the city if common letters match
            cities[i].style.display = "";
        } else {
            cities[i].style.display = "none";
        }
    }
}
     // will create a date object that will be
     // called on load and display the time,
     // changing the format if necessary

function startTime() {
    var localTime = new Date();
    var hour = localTime.getHours();
    var min = localTime.getMinutes();
    var sec = localTime.getSeconds();
    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);
    timeUnited= hour + ":" + min + ":" + sec;

    document.getElementById('myClock').innerHTML = timeUnited;

    // The setTimeout() method calls a function or evaluates an
    // expression after a specified number of milliseconds.
    var time = setTimeout(startTime, 500);
}
// Add zero in front of numbers < 10
function checkTime(singleDig) {
    if (singleDig < 10) {
      singleDig = "0" + singleDig
    };
    return singleDig;
}


// check money amount and display alert

var money;

function setvalues(){
  money = document.getElementById('field').value;
}
function checkMoney(){
  setvalues();
  if (money == 0) {
    window.alert("Stay where you are! ");
    return false;
  }else if(money <=10000){
    window.alert("You will need more money");
    return false;
  }
  else if (money >10000 && money <=100000){
    window.alert("You can live a couple years in Cuenca");
    return false;
  }
  else {
    window.alert("Come here, you will have a wonderful life here");
    return false;
  }
}

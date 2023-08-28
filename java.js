

function generateRandomNumber() {
  var dice1 = document.getElementById("dice1");
  var dice2 = document.getElementById("dice2");
  var dice3 = document.getElementById("dice3");

  let num1 = Math.floor(Math.random() * 6) + 1;
  let num2 = Math.floor(Math.random() * 6) + 1;
  let num3 = Math.floor(Math.random() * 6) + 1;

  defineImgPath(dice1,num1);
  defineImgPath(dice2,num2);
  defineImgPath(dice3,num3);
}

function defineImgPath(diceElement,number) {
    var path;
  switch (number) {
    case 1:
      path = "https://openclipart.org/download/282127/Die";
      break;
    case 2:
      path = "https://openclipart.org/download/282128/Die";
      break;
    case 3:
      path = "https://openclipart.org/download/282129/Die";
      break;
    case 4:
      path = "https://openclipart.org/download/282130/Die";
      break;
    case 5:
      path = "https://openclipart.org/download/282131/Die";
      break;
    case 6:
      path = "https://openclipart.org/download/282132/Die";
      break;
  }
  diceElement.src = path;
}


  

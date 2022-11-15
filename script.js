window.onload = function () {
  var alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var categories; // Array of topics
  var chosenCategory; // Selected catagory
  var word; // Selected word
  var guess; // Geuss
  var geusses = []; // Stored geusses
  var lives; // Lives
  var counter; // Count correct geusses
  var space; // Number of spaces in word '-'
  let flag = false;
  let flag2 = false;

  // Get elements
  var showLives = document.getElementById("mylives");
  let comment = document.getElementById("comment");

  // create alphabet ul
  var buttons = function () {
    var myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
      list = document.createElement("li");
      list.id = alphabet[i];

      list.innerHTML = alphabet[i];
      check();
      //keycheck();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };

  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Hindi Movies";
    }
  };

  // Create geusses ul
  result = function () {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === " ") {
        guess.innerHTML = " ";
        space += 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  clearAll = function () {
    let letterButtons = document.querySelectorAll("#buttons");

    letterButtons.forEach((button) => {
      button.style.display = "none";
    });
    document.getElementById("replace").innerText = "";
  };
  // Show lives
  comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      catagoryName.innerHTML = "The word was " + word;
      showLives.innerHTML = "<span style='color: red;'>You Lose!! ~ GAME OVER</span>";
      comment.innerHTML = "To play again press enter or click on play again";
      flag = true;
      clearAll();
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        catagoryName.innerHTML = "Congratulations !!";
        showLives.innerHTML = "<span style='color: MediumSeaGreen;'>~YOU WIN!~</span>";
        comment.innerHTML = "To play again press enter or click on play again";
        flag2 = true;
        clearAll();
      }
    }
    
  };
  // Animate man
  var animate = function () {
    try {
      var drawMe = lives;
      drawArray[drawMe]();
    } catch (error) {
      console.log("drawMe function closed");
    }
  };
  // Hangman
  canvas = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

  head = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };

  frame1 = function () {
    draw(0, 150, 150, 150);
  };

  frame2 = function () {
    draw(10, 0, 10, 600);
  };

  frame3 = function () {
    draw(0, 5, 70, 5);
  };

  frame4 = function () {
    draw(60, 5, 60, 15);
  };

  torso = function () {
    draw(60, 36, 60, 70);
  };

  rightArm = function () {
    draw(60, 46, 100, 50);
  };

  leftArm = function () {
    draw(60, 46, 20, 50);
  };

  rightLeg = function () {
    draw(60, 70, 100, 100);
  };

  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

  drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1,
  ];

  // OnClick Function
  check = function () {
    list.onclick = function () {
      var geuss = this.innerHTML;
      this.setAttribute("class", "active");

      this.onclick = null;

      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;

          counter += 1;
        }
      }
      var j = word.indexOf(geuss);
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
        
      }
    };
  };

  //  keyboard event

  window.addEventListener(
    "keydown",
    function (e) {
      let keyPressed = e.key.toUpperCase();
      let current = document.getElementById(e.key.toUpperCase());

      const charList = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

      if (charList.includes(keyPressed)) {
        if (flag == true || flag2 == true) {
          document.getElementById("stickman").style.display = "none";
          alert("Invalid selection of keys !! \n To play again press enter or click on play again");
          return;
        }
        current.click();
      } else {
        if (showLives.innerHTML == "You Won!" && keyPressed == "ENTER") {
          document.getElementById("stickman").style.display = "none";
          document.getElementById("reset").click();
          return;
        } else {
          if ((flag == true || flag2 == true) && keyPressed == "ENTER") {
            document.getElementById("stickman").style.display = "none";
            document.getElementById("reset").click();
            return;
          }
          alert("Please enter an alphabet to proceed.");
        }
      }
    },
    false
  );


  // Play
  play = function () {
    categories = [['DILWALE DULHANIYA LE JAYENGE','BAAHUBALI',
    'KGF',
    'DANGAL',
    'SANJU',
    'PK',
    'TIGER ZINDA HAI',
    'BAJRANGI BHAIJAAN',
    'WAR',
    'PADMAAVAT',
    'SULTAN',
    'KABIR SINGH',
    'TANHAJI',
    'DHOOM',
    'RRR',
    'THE KASHMIR FILES',
    'URI THE SURGICAL STRIKE',
    'SIMMBA',
    'KICK',
    'KRRISH',
    'CHENNAI',
    'BHARAT',
    'HOUSEFULL',
    'PREM RATAN DHAN PAYO',
    'GOLMAAL AGAIN',
    'MISSION MANGAL',
    'HAPPY NEW YEAR',
    'EK THA TIGER',
    'SOORYAVANSHI',
    'YEH JAWAANI HAI DEEWANI',
    'BHOOL BHULAIYAA',
    'BAJIRAO MASTANI',
    'BANG BANG',
    'RACE',
    'BAAGHI',
    'RAEES',
    'KESARI',
    'TOTAL DHAMAAL',
    'DABANGG',
    'CHHICHHORE',
    'TANU WEDS MANU RETURNS',
    'BODYGUARD',
    'DILWALE',
    'SUPER',
    'SAAHO',
    'THUGS OF HINDOSTAN',
    'DREAM GIRL',
    'SINGHAM RETURNS',
    'GULLY BOY',
    'JUDWAA',
    'BADHAAI HO',
    'TOILET EK PREM KATHA',
    'ROWDY RATHORE',
    'GANGUBAI KATHIAWADI',
    'STREE',
    'AIRLIFT',
    'RUSTOM',
    'RAAZI',
    'READY',
    'JAB TAK HAI JAAN',
    'TUBELIGHT',
    'BAAHUBALI',
    'AGNEEPATH',
    'BADRINATH KI DULHANIA',
    'GOLIYON KI RASLEELA RAM LEELA',
    'JAI HO',
    'JOLLY LLB',
    'AVENGERS END GAME',
    'BALA',
    'GHAJINI',
    'AE DIL HAI MUSHKIL',
    'HOLIDAY',
    'BARFI',
    'GOLD',
    'SONU KE TITU KI SWEETY',
    'BHAAG MILKHA BHAAG',
    'PUSHPA',
    'ABCD',
    'EK VILLAIN',
    'SON OF SARDAAR',
    'KAABIL',
    'DE DE PYAAR DE',
    'BOL BACHCHAN',
    'RAID',
    'GRAND MASTI',
    'SHIVAAY',
    'BATLA HOUSE',
    'ZERO',
    'WELCOME BACK',
    'BABY',
    'LUKA CHUPPI',
    'RAAJNEETI',
    'TALAASH',
    'SATYAMEVA JAYATE',
    'SINGH IS BLIING',
    'ZINDAGI NA MILEGI DOBARA',
    'BADLA',
    'GABBAR IS BACK',
    'RAB NE BANA DI JODI',
    'KALANK',
    'PATI PATNI AUR WOH',
    'JUGJUGG JEEYO',
    'FAN',
    'MY NAME IS KHAN',
    'BROTHERS',
    'PADMAN',
    'OH MY GOD',
    'VEERE DI WEDDING',
    'SAIRAT',
    'FUKREY RETURNS',
    'THE DIRTY PICTURE',
    'PIKU',
    'SUI DHAAGA',
    'GUNDAY',
    'OM SHANTI OM',
    'BAADSHAHO',
    'AASHIQUI',
    'DIL DHADAKNE DO',
    'HUMPTY SHARMA KI DULHANIA',
    'LAGE RAHO MUNNA BHAI',
    'COCKTAIL',
    'JAB HARRY MET SEJAL',
    'PARMANU THE STORY OF POKHRAN',
    'AJAB PREM KI GHAZAB KAHANI',
    'SAMRAT PRITHVIRAJ',
    'SECRET SUPERSTAR',
    'KIS KISKO PYAAR KAROON',
    'HIMMATWALA',
    'CHAK DE INDIA',
    'RAJA HINDUSTANI',
    'DILWALE DHULHANIYA LEJAYENGE',
    'HUMARI ADHURI KAHANI']];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, " ");
    console.log(word);
    buttons();

    geusses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  };

  play();
  

  document.getElementById("reset").onclick = function () {
    let dlg = confirm("Are you sure you want to restart the game?");

    if (dlg) {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      context.clearRect(0, 0, 400, 400);
      window.location.reload();
      play();
    } else {
      return;
    }
  };
};

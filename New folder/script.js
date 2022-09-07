var walkSound = new Audio("resources/sound/walk.mp3");
walkSound.loop = true;

var backgroundSound = new Audio("resources/sound/background2.mp3");
backgroundSound.loop = true;

var attackSound = new Audio("resources/sound/fairyAttack.mp3");
var jumpSound = new Audio("resources/sound/jump.mp3");
var flySound = new Audio("resources/sound/fly.mp3");

function keyCheck(event) {
    var keyCode = event.which;
    // alert(keyCode);

    if (keyCode == 39) {

        // BACKGROUND 
        if (backgroundAnimationId == 0) {
            backgroundAnimationId = setInterval(moveBackground, 200);
            // backgroundSound.play();

            createBoxes();
            moveBoxesAnimationId = setInterval(moveBoxes, 100);

        }

        // FAIRY WALK
        if (fairyWalkAnimationId == 0) {
            fairyWalkAnimationId = setInterval(fairyWalk, 90);

            walkSound.play();
        }
    }

    // FAIRY JUMP
    if (keyCode == 32) {
        if (fairyJumpAnimationId == 0) {

            clearInterval(fairyWalkAnimationId);
            fairyWalkAnimationId = 0;
            fairyWalkImageNumber = 0;
            walkSound.pause();

            fairyJumpAnimationId = setInterval(fairyJump, 150);

            jumpSound.currentTime = 0;
            jumpSound.play();
        }
    }
}

// BACKGROUND 
var backgroundAnimationId = 0;
var backgroundx = 0;

function moveBackground() {
    var background = document.getElementById("background");
    backgroundx = backgroundx - 10;
    background.style.backgroundPositionX = backgroundx + "px";
}

// FAIRY WALK
var fairyWalkAnimationId = 0;
var fairyWalkImageNumber = 0;

function fairyWalk() {
    var fairy = document.getElementById("fairy");
    fairyWalkImageNumber = fairyWalkImageNumber + 1;

    if (fairyWalkImageNumber == 9) {
        fairyWalkImageNumber = 0;
    }

    fairy.src = "resources/Fairy/Fairy_01__WALK_00" + fairyWalkImageNumber + ".png";
}

// FAIRY JUMP
var fairyJumpAnimationId = 0;
var fairyJumpImageNumber = 0;
var fairyMarginTop = 270;

function fairyJump() {
    var fairy = document.getElementById("fairy");
    fairyJumpImageNumber = fairyJumpImageNumber + 1;

    if (fairyJumpImageNumber <= 5) {
        fairyMarginTop = fairyMarginTop - 10;
        fairy.style.marginTop = fairyMarginTop + "px";
    }

    if (fairyJumpImageNumber > 5) {
        fairyMarginTop = fairyMarginTop + 10;
        fairy.style.marginTop = fairyMarginTop + "px";
    }


    if (fairyJumpImageNumber == 9) {

        clearInterval(fairyJumpAnimationId);
        fairyJumpAnimationId = 0;
        fairyJumpImageNumber = 0;

        fairy.style.marginTop = "270px";

        fairyWalkAnimationId = setInterval(fairyWalk, 100);
        walkSound.play();

        if (backgroundAnimationId == 0) {
            backgroundAnimationId = setInterval(moveBackground, 200);

            createBoxes();
            moveBoxesAnimationId = setInterval(moveBoxes, 100);
        }

    }
    fairy.src = "resources/Fairy/Fairy_01__JUMP_00" + fairyJumpImageNumber + ".png";
}


var boxMarginLeft = 1000; //badakaye left margin eka  


function createBoxes() { //badaka div tika hadna fun eka

    for (var i = 0; i < 20; i++) { //div 10k hadanwa
        var d = document.createElement("div"); //div element ekk hadanwa, eke nama 'd'
        d.className = "box"; //div class name box kiyna eka gannawa
        d.id = "box" + i; //box walata id wena wenma hadanwa
        d.style.marginLeft = boxMarginLeft + "px"; //hadena box 10ye paratharya hadnwa
        boxMarginLeft = boxMarginLeft + 500; //margin left eka wedi karnwa
        document.getElementById("background").appendChild(d); //background kiyna id ekata me box eka athul karnwa
    }
}

var moveBoxesAnimationId = 0;

function moveBoxes() {
    for (var i = 0; i < 20; i++) {
        var d = document.getElementById("box" + i);
        var dCSS = getComputedStyle(d); //box kiyna eke okkoma css tika gannawa
        var currentMarginLeft = dCSS.marginLeft; //gathta css walin maginleft eka gannawa
        var newMarginLeft = parseInt(currentMarginLeft) - 10; //box eke margin eka 10px gane adu karnwa
        d.style.marginLeft = newMarginLeft + "px";

        // alert(newMarginLeft); //badakayta thiyena level eka select karnwa alert ekk dala
        //select karna level eka anuwa if eka hadnwa
        if (newMarginLeft >= 300 & newMarginLeft <= 380) {

            if (fairyMarginTop > 250) { //jump eken dead wena welawa
                //siyaluma sound, animations, id, nawathtanwa div eke wedunma
                clearInterval(fairyWalkAnimationId);
                fairyWalkAnimationId = -1;
                clearInterval(fairyJumpAnimationId);
                fairyJumpAnimationId = -1;
                clearInterval(backgroundAnimationId);
                backgroundAnimationId = -1;
                clearInterval(moveBoxesAnimationId);
                moveBoxesAnimationId = -1;

                fairyDeadAnimationId = setInterval(fairyDead, 100);
                deadSound.play();
            }
        }
    }
}



//FIRY DEAD
var fairyDeadAnimationId = 0;
var fairyDeadImageNumber = 0;

function fairyDead() {

    var fairy = document.getElementById("fairy");
    fairyDeadImageNumber = fairyDeadImageNumber + 1;

    if (fairyDeadImageNumber == 9) {

        clearInterval(fairyDeadAnimationId);
        fairyDeadImageNumber = 9;

        fairy.style.marginTop = "270px";
    }
    fairy.src = "resources/Fairy/Fairy_01__DIE_00" + fairyDeadImageNumber + ".png";
}
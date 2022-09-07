var walkSound = new Audio("resources/sound/walk.mp3");
walkSound.loop = true;

var backgroundSound = new Audio("resources/sound/background2.mp3");
backgroundSound.loop = true;

var attackSound = new Audio("resources/sound/fairyAttack.mp3");
var jumpSound = new Audio("resources/sound/jump.mp3");
var flySound = new Audio("resources/sound/fly.mp3");
var deadSound = new Audio("resources/sound/dead.mp3");
var endSound = new Audio("resources/sound/end.mp3");

function keyCheck(event) {
    var keyCode = event.which;
    // alert(keyCode);

    if (keyCode == 39) {

        // BACKGROUND 
        if (backgroundAnimationId == 0) {
            backgroundAnimationId = setInterval(moveBackground, 50);
            backgroundSound.play();
            createBox1();
            moveBoxes1AnimationId = setInterval(moveBoxes1, 100);
            createBox2();
            moveBoxes2AnimationId = setInterval(moveBoxes2, 100);
            createBox3();
            moveBoxes3AnimationId = setInterval(moveBoxes3, 100);
            createBox4();
            moveBoxes4AnimationId = setInterval(moveBoxes4, 100);
            createBox5();
            moveBoxes5AnimationId = setInterval(moveBoxes5, 50);
        }

        // FAIRY WALK
        if (fairyWalkAnimationId == 0) {
            fairyWalkAnimationId = setInterval(fairyWalk, 80);

            walkSound.play();
        }
    }

    // FAIRY FLY
    if (keyCode == 38) {
        if (fairyFlyAnimationId == 0) {

            clearInterval(fairyWalkAnimationId);
            fairyWalkAnimationId = 0;
            fairyWalkImageNumber = 0;
            walkSound.pause();

            clearInterval(fairyJumpAnimationId);
            fairyJumpAnimationId = 0;
            fairyJumpImageNumber = 0;

            fairyFlyAnimationId = setInterval(fairyFly, 100);

            flySound.currentTime = 0;
            flySound.play();
        }
    }

    // FAIRY JUMP
    if (keyCode == 32) {
        if (fairyJumpAnimationId == 0) {

            clearInterval(fairyWalkAnimationId);
            fairyWalkAnimationId = 0;
            fairyWalkImageNumber = 0;
            walkSound.pause();

            clearInterval(fairyFlyAnimationId);
            fairyFlyAnimationId = 0;
            fairyFlyImageNumber = 0;

            clearInterval(fairyAttackAnimationId);
            fairyAttackAnimationId = 0;
            fairyAttackImageNumber = 0;

            fairyJumpAnimationId = setInterval(fairyJump, 100);

            jumpSound.currentTime = 0;
            jumpSound.play();
        }
    }

    //FAIRY ATTACK
    if (keyCode == 16) {
        if (fairyAttackAnimationId == 0) {

            clearInterval(fairyWalkAnimationId);
            fairyWalkAnimationId = 0;
            fairyWalkImageNumber = 0;
            walkSound.pause();

            clearInterval(fairyJumpAnimationId);
            fairyJumpAnimationId = 0;
            fairyJumpImageNumber = 0;

            clearInterval(fairyFlyAnimationId);
            fairyFlyAnimationId = 0;
            fairyFlyImageNumber = 0;

            fairyAttackAnimationId = setInterval(fairyAttack, 100);

            attackSound.currentTime = 0;
            attackSound.play();
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

    if (fairyWalkImageNumber == 10) {
        fairyWalkImageNumber = 0;
    }

    fairy.src = "resources/Fairy/Fairy_01__WALK_00" + fairyWalkImageNumber + ".png";
}

// FAIRY FLY
var fairyFlyAnimationId = 0;
var fairyFlyImageNumber = 0;
var fairyMarginTop = 270;
var score = 0;

function fairyFly() {

    var fairy = document.getElementById("fairy");
    fairyFlyImageNumber = fairyFlyImageNumber + 1;

    if (fairyFlyImageNumber <= 5) {
        fairyMarginTop = fairyMarginTop - 20;
        fairy.style.marginTop = fairyMarginTop + "px";
    }

    if (fairyFlyImageNumber > 5) {
        fairyMarginTop = fairyMarginTop + 20;
        fairy.style.marginTop = fairyMarginTop + "px";
    }

    if (fairyFlyImageNumber == 10) {
        clearInterval(fairyFlyAnimationId);
        fairyFlyAnimationId = 0;
        fairyFlyImageNumber = 0;

        score = score + 10;
        document.getElementById("score").innerHTML = score;

        fairyWalkAnimationId = setInterval(fairyWalk, 100);
        walkSound.play();

        if (backgroundAnimationId == 0) {
            backgroundAnimationId = setInterval(moveBackground, 50);
            createBox5();
            moveBoxes5AnimationId = setInterval(moveBoxes5, 50);
        }
    }
    fairy.src = "resources/Fairy/Fairy_01__FLY_00" + fairyFlyImageNumber + ".png";
}

// FAIRY JUMP
var fairyJumpAnimationId = 0;
var fairyJumpImageNumber = 0;

function fairyJump() {
    var fairy = document.getElementById("fairy");
    fairyJumpImageNumber = fairyJumpImageNumber + 1;

    if (fairyJumpImageNumber <= 5) {
        fairyMarginTop = fairyMarginTop - 20;
        fairy.style.marginTop = fairyMarginTop + "px";
    }

    if (fairyJumpImageNumber > 5) {
        fairyMarginTop = fairyMarginTop + 20;
        fairy.style.marginTop = fairyMarginTop + "px";
    }

    if (fairyJumpImageNumber == 10) {

        clearInterval(fairyJumpAnimationId);
        fairyJumpAnimationId = 0;
        fairyJumpImageNumber = 0;

        score = score + 5;
        document.getElementById("score").innerHTML = score;

        fairyWalkAnimationId = setInterval(fairyWalk, 100);
        walkSound.play();

        if (backgroundAnimationId == 0) {
            backgroundAnimationId = setInterval(moveBackground, 50);
            createBox5();
            moveBoxes5AnimationId = setInterval(moveBoxes5, 50);
        }

    }

    fairy.src = "resources/Fairy/Fairy_01__JUMP_00" + fairyJumpImageNumber + ".png";
}

//FIRY ATTACK
var fairyAttackAnimationId = 0;
var fairyAttackImageNumber = 0;

function fairyAttack() {

    var fairy = document.getElementById("fairy");
    fairyAttackImageNumber = fairyAttackImageNumber + 1;

    if (fairyAttackImageNumber <= 5) {
        fairyMarginTop = fairyMarginTop - 20;
        fairy.style.marginTop = fairyMarginTop + "px";
    }

    if (fairyAttackImageNumber > 5) {
        fairyMarginTop = fairyMarginTop + 20;
        fairy.style.marginTop = fairyMarginTop + "px";
    }


    if (fairyAttackImageNumber == 10) {

        clearInterval(fairyAttackAnimationId);
        fairyAttackAnimationId = 0;
        fairyAttackImageNumber = 0;

        score = score + 15;
        document.getElementById("score").innerHTML = score;

        fairyWalkAnimationId = setInterval(fairyWalk, 100);
        walkSound.play();

        if (backgroundAnimationId == 0) {
            backgroundAnimationId = setInterval(moveBackground, 50);

            createBox5();
            moveBoxes5AnimationId = setInterval(moveBoxes5, 50);
        }

    }
    fairy.src = "resources/Fairy/Fairy_01__FLY_ATTACK_00" + fairyAttackImageNumber + ".png";
}

var boxMarginLeft = 700;
var box2MarginLeft = 600;
var box3MarginLeft = 850;
var box4MarginLeft = 1300;
var box5MarginLeft = 1000;


for (x = 0; x < 20; x++) {

    function createBox1() {
        for (var i = 0; i < 10; i++) {

            var d = document.createElement("div");
            d.className = "box1";
            d.id = "box1" + i;
            d.style.marginLeft = boxMarginLeft + "px";
            boxMarginLeft = boxMarginLeft + 700;
            document.getElementById("background").appendChild(d);
        }
    }

    function createBox2() {
        for (var i = 0; i < 20; i++) {

            var d = document.createElement("div");
            d.className = "box2";
            d.id = "box2" + i;
            d.style.marginLeft = box2MarginLeft + "px";
            box2MarginLeft = box2MarginLeft + 500;
            document.getElementById("background").appendChild(d);
        }
    }

    function createBox3() {
        for (var i = 0; i < 20; i++) {

            var d = document.createElement("div");
            d.className = "box3";
            d.id = "box3" + i;
            d.style.marginLeft = box3MarginLeft + "px";
            box3MarginLeft = box3MarginLeft + 500;
            document.getElementById("background").appendChild(d);
        }
    }

    function createBox4() {
        for (var i = 0; i < 20; i++) {

            var d = document.createElement("div");
            d.className = "box4";
            d.id = "box4" + i;
            d.style.marginLeft = box4MarginLeft + "px";
            box4MarginLeft = box4MarginLeft + 1000;
            document.getElementById("background").appendChild(d);
        }
    }
}


var moveBoxes1AnimationId = 0;

function moveBoxes1() {
    for (var i = 0; i < 20; i++) {
        var d = document.getElementById("box1" + i);
        var dCSS = getComputedStyle(d);
        var currentMarginLeft = dCSS.marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 10;
        d.style.marginLeft = newMarginLeft + "px";

        // alert(newMarginLeft);
        if (newMarginLeft == 400) {

            document.getElementById("background").appendChild(d).style.display = 'none';
        }
    }

}

var moveBoxes2AnimationId = 0;

function moveBoxes2() {
    for (var i = 0; i < 20; i++) {
        var d = document.getElementById("box2" + i);
        var dCSS = getComputedStyle(d);
        var currentMarginLeft = dCSS.marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 10;
        d.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft == 400) {

            document.getElementById("background").appendChild(d).style.display = 'none';
        }
    }
}

var moveBoxes3AnimationId = 0;

function moveBoxes3() {
    for (var i = 0; i < 20; i++) {
        var d = document.getElementById("box3" + i);
        var dCSS = getComputedStyle(d);
        var currentMarginLeft = dCSS.marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 10;
        d.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft == 400) {

            document.getElementById("background").appendChild(d).style.display = 'none';
        }
    }
}

var moveBoxes4AnimationId = 0;

function moveBoxes4() {
    for (var i = 0; i < 20; i++) {
        var d = document.getElementById("box4" + i);
        var dCSS = getComputedStyle(d);
        var currentMarginLeft = dCSS.marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 10;
        d.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft == 400) {

            document.getElementById("background").appendChild(d).style.display = 'none';
        }
    }
}

function createBox5() {
    for (var i = 0; i < 20; i++) {
        var d = document.createElement("div");
        d.className = "box5";
        d.id = "box5" + i;
        d.style.marginLeft = box5MarginLeft + "px";
        document.getElementById("background").appendChild(d);

        if (i < 10) {
            box5MarginLeft = box5MarginLeft + 500;
        }

        if (i >= 11) {
            box5MarginLeft = box5MarginLeft + 300;
        }
    }
}

var moveBoxes5AnimationId = 0;

function moveBoxes5() {
    for (var i = 0; i < 20; i++) {
        var d = document.getElementById("box5" + i);
        var dCSS = getComputedStyle(d);
        var currentMarginLeft = dCSS.marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 10;
        d.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft >= 300 & newMarginLeft <= 370) {

            if (fairyMarginTop > 250) {

                clearInterval(fairyWalkAnimationId);
                fairyWalkAnimationId = -1;
                walkSound.pause();

                clearInterval(fairyJumpAnimationId);
                fairyJumpAnimationId = -1;
                jumpSound.pause();

                clearInterval(backgroundAnimationId);
                backgroundAnimationId = -1;

                clearInterval(moveBoxes5AnimationId);
                moveBoxes5AnimationId = -1;

                clearInterval(moveBoxes1AnimationId);
                moveBoxes1AnimationId = -1;

                clearInterval(moveBoxes2AnimationId);
                moveBoxes2AnimationId = -1;

                clearInterval(moveBoxes3AnimationId);
                moveBoxes3AnimationId = -1;

                clearInterval(moveBoxes4AnimationId);
                moveBoxes4AnimationId = -1;

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

        document.getElementById("d3").style.visibility = "visible";
        document.getElementById("final").innerHTML = score;
        endSound.play();
    }
    fairy.src = "resources/Fairy/Fairy_01__DIE_00" + fairyDeadImageNumber + ".png";
}

function help() {
    var x = document.getElementById('help');
    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }
}
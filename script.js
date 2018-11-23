window.addEventListener("load", sidenVises);

let showSettingMusic = true;
let showSettingSound = true;

function sidenVises() {
    console.log("siden vises");
    //    showStart();
    hideLevel2();




}

function showStart() {
    console.log("show start");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#settings_btn").addEventListener("click", showSettings);
}




function showSettings() {
    console.log("show settings");
    document.querySelector("#btn_click").play();
    document.querySelector("#settings_screen").classList.remove("hide");
    document.querySelector("#menu_foreground").classList.add("blur");
    document.querySelector("#menu_background").classList.add("blur");
    document.querySelector("#play").classList.add("blur");
    document.querySelector("#checkmark1").addEventListener("click", removeCheck1);
    document.querySelector("#checkmark2").addEventListener("click", removeCheck2);
    document.querySelector("#settings_btn").addEventListener("click", removeSettings);
}

function removeSettings() {
    console.log("remove settings");
    document.querySelector("#btn_click").play();
    document.querySelector("#settings_screen").classList.add("hide");
    document.querySelector("#settings_btn").removeEventListener("click", removeSettings);
    document.querySelector("#menu_foreground").classList.remove("blur");
    document.querySelector("#menu_background").classList.remove("blur");
    document.querySelector("#play").classList.remove("blur");
}

function toggleMusic() {

    console.log("toggleMusic");
    if (showSettingMusic == true) {
        console.log("true");
        showSettingMusic = false;
        muteMusic();
    } else {
        console.log("false");
        showSettingMusic = true;
        unmuteMusic();
    }

}

function toggleSFX() {
    console.log("toggleSFX");
    if (showSettingSound == true) {
        console.log("true");
        showSettingSound = false;
        muteSFX();
    } else {
        console.log("false");
        showSettingSound = true;
        unmuteSFX();
    }
}

function removeCheck1() {
    document.querySelector("#btn_click").play();
    console.log("remove check one")
    document.querySelector("#checkmark1").classList.add("hide")
    document.querySelector("#checkmark1").removeEventListener("click", removeCheck1);
    document.querySelector("#checkbox1").addEventListener("click", replaceCheck1);
    toggleSFX();
}

function removeCheck2() {
    document.querySelector("#btn_click").play();
    console.log("remove check two")
    document.querySelector("#checkmark2").classList.add("hide")
    document.querySelector("#checkmark2").removeEventListener("click", removeCheck2);
    document.querySelector("#checkbox2").addEventListener("click", replaceCheck2);
    toggleMusic();
}

function replaceCheck1() {
    document.querySelector("#btn_click").play();
    console.log("replace check one")
    document.querySelector("#checkmark1").classList.remove("hide")
    document.querySelector("#checkmark1").addEventListener("click", removeCheck1);
    document.querySelector("#checkbox1").removeEventListener("click", replaceCheck1);
    toggleSFX();
}

function replaceCheck2() {
    document.querySelector("#btn_click").play();
    console.log("replace check two")
    document.querySelector("#checkmark2").classList.remove("hide")
    document.querySelector("#checkmark2").addEventListener("click", removeCheck2);
    document.querySelector("#checkbox2").removeEventListener("click", replaceCheck2);
    toggleMusic();
}

function unmuteMusic() {
    document.querySelector("#game_music").muted = false;


}

function muteMusic() {
    document.querySelector("#game_music").muted = true;



}

function muteSFX() {
    document.querySelector("#btn_click").muted = true;
    document.querySelector("#send").muted = true;
    document.querySelector("#recieve").muted = true;
    document.querySelector("#win").muted = true;
    document.querySelector("#win2").muted = true;
    document.querySelector("#wee").muted = true;
    document.querySelector("#wee2").muted = true;
    document.querySelector("#juhu").muted = true;
    document.querySelector("#damage").muted = true;
    document.querySelector("#death").muted = true;
    document.querySelector("#rope").muted = true;
    document.querySelector("#folder_sound").muted = true;
    document.querySelector("#slurp").muted = true;
    document.querySelector("#new_stage").muted = true;
    document.querySelector("#power_stage").muted = true;
    document.querySelector("#alert").muted = true;


}

function unmuteSFX() {
    document.querySelector("#btn_click").muted = false;
    document.querySelector("#send").muted = false;
    document.querySelector("#recieve").muted = false;
    document.querySelector("#win").muted = false;
    document.querySelector("#win2").muted = false;
    document.querySelector("#wee").muted = false;
    document.querySelector("#wee2").muted = false;
    document.querySelector("#juhu").muted = false;
    document.querySelector("#damage").muted = false;
    document.querySelector("#death").muted = false;
    document.querySelector("#rope").muted = false;
    document.querySelector("#folder_sound").muted = false;
    document.querySelector("#slurp").muted = false;
    document.querySelector("#new_stage").muted = false;
    document.querySelector("#power_stage").muted = false;
    document.querySelector("#alert").muted = false;


}

function hideStart() {
    console.log("hide start");
    document.querySelector("#btn_click").play();
    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#level_1").classList.remove("hide");
    document.querySelector("#start").addEventListener("animationend", intro1);
    document.querySelector("#mes1").classList.add("hide");
    document.querySelector("#mes2").classList.add("hide");
    document.querySelector("#game_music").currentTime = 0;
    document.querySelector("#game_music").play();
    document.querySelector("#game_music").volume = 0.2;


}


function restartGame() {
    document.querySelector("#trash").classList.remove("trash_3");
    document.querySelector("#trash").classList.remove("trash_2");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#gameover_foreground").classList.add("hide");
    document.querySelector("#restart_btn1").classList.add("hide");
    document.querySelector("#restart_btn1").removeEventListener("click", restartGame);
    document.querySelector("#gameover").classList.remove("gameover_screen1");
    document.querySelector("#gameover_foreground").classList.remove("gameover_front1");
    document.querySelector("#gameover").classList.remove("gameover_screen2");
    document.querySelector("#gameover_foreground").classList.remove("gameover_front2");
    document.querySelector("#gameover").classList.remove("gameover_screen3");
    document.querySelector("#gameover_foreground").classList.remove("gameover_front3");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#levelcomplete").classList.remove("level1complete");
    document.querySelector("#levelcomplete").classList.remove("level2complete");
    document.querySelector("#levelcomplete").classList.remove("good_vic");
    document.querySelector("#replay_btn1").classList.add("hide");
    document.querySelector("#replay_btn1").removeEventListener("click", restartGame);



    document.querySelector("#nextlevel1").classList.add("hide");
    document.querySelector("#nextlevel2").classList.add("hide");
    document.querySelector("#nextlevel3").classList.add("hide");
    document.querySelector("#privatsnak").classList.add("hide");
    document.querySelector("#privatsnak_bad").classList.add("hide");
    document.querySelector("#privatsnak").classList.add("hide");
    document.querySelector("#alert_screen").classList.add("hide");


    document.querySelector("#billede1").classList.remove("hide");
    document.querySelector("#billede2").classList.remove("hide");
    document.querySelector("#billede4").classList.remove("hide");
    document.querySelector("#billede5").classList.remove("hide");
    document.querySelector("#billede6").classList.remove("hide");
    document.querySelector("#billede7").classList.remove("hide");
    document.querySelector("#billede8").classList.remove("hide");
    document.querySelector("#billede9").classList.remove("hide");
    document.querySelector("#billede10").classList.remove("hide");
    document.querySelector("#billede11").classList.remove("hide");
    document.querySelector("#billede12").classList.remove("hide");
    document.querySelector("#billede13").classList.remove("hide");
    document.querySelector("#billede14").classList.remove("hide");
    document.querySelector("#billede15").classList.remove("hide");
    document.querySelector("#billede16").classList.remove("hide");
    document.querySelector("#billede17").classList.remove("hide");
    document.querySelector("#billede18").classList.remove("hide");
    document.querySelector("#billede19").classList.remove("hide");
    document.querySelector("#billede20").classList.remove("hide");
    document.querySelector("#billede21").classList.remove("hide");
    document.querySelector("#billede22").classList.remove("hide");
    document.querySelector("#billede23").classList.remove("hide");
    document.querySelector("#billede24").classList.remove("hide");
    document.querySelector("#billede25").classList.remove("hide");
    document.querySelector("#billede26").classList.remove("hide");
    document.querySelector("#billede27").classList.remove("hide");
    document.querySelector("#billede28").classList.remove("hide");
    document.querySelector("#billede29").classList.remove("hide");
    document.querySelector("#billede30").classList.remove("hide");
    document.querySelector("#billede31").classList.remove("hide");
    document.querySelector("#folder").classList.remove("folder_stage1");
    document.querySelector("#folder").classList.remove("folder_stage2");
    document.querySelector("#folder").classList.remove("folder_stage3");
    document.querySelector("#stage_1").classList.add("hide");
    document.querySelector("#stage_2").classList.add("hide");
    document.querySelector("#stage_3").classList.add("hide");



    mesPoints = 0;
    mesGameTime = 30;
    mesTime = 4;
    mesTime2 = 4;
    mesGameTimeOut;
    mesTimeOut;
    greyMesTimeOut;
    blueMesTimeOut;
    mesLife = 3;
    position1;
    position2;
    points = 0;
    gameTime = 20;
    gameTimeOut;
    scoreSpacebar = 0;
    spaceGameTime = 30;
    spaceGameTimeOut;
    spaceTimeOut;
    spaceTimeOut2;
    showStart();

}

////-- -- -- -- -- -- -- -- -- -- -- -- - lvl 1-- -- -- -- -- -- -- -- -- -- -- --

let mesPoints = 0;
let mesGameTime = 30;
let mesTime = 4;
let mesTime2 = 4;
let mesGameTimeOut;
let mesTimeOut;
let greyMesTimeOut;
let blueMesTimeOut;
let mesLife = 3;
let position1;
let position2;


function intro1() {

    document.querySelector("#start").removeEventListener("animationend", intro1);
    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#intro1").classList.remove("hide");
    document.querySelector("#intro1_play").classList.remove("hide");
    document.querySelector("#intro1_play").addEventListener("click", hideIntro1);
}

function hideIntro1() {
    document.querySelector("#btn_click").play();
    document.querySelector("#intro1").classList.add("hide");
    document.querySelector("#intro1_play").classList.add("hide");
    document.querySelector("#intro1_play").removeEventListener("click", hideIntro1);
    startGame();
}


function startGame() {
    document.querySelector("#intro1_play").removeEventListener("click", startGame);
    document.querySelector("#intro1").classList.add("hide");
    console.log("start game");
    document.querySelector("#mes1").classList.remove("hide");
    document.querySelector("#mes2").classList.remove("hide");
    document.querySelector("#mes1").addEventListener("click", onClickMes);
    document.querySelector("#mes2").addEventListener("click", onClickMes2);
    newMes();
    newMes2();
    mesGameTimeFc();

}

function mesGameTimeFc() {
    console.log("Tid tilbage: " + mesGameTime);
    if (mesGameTime > 0) {
        mesGameTime--;
        mesGameTimeOut = setTimeout(mesGameTimeFc, 1000);
        //        timeBar();
    } else {
        clearTimeout(blueMesTimeOut, 1000);
        clearTimeout(greyMesTimeOut, 1000);
        scoreCheck();
    }
}

//function timeBar() {
//    if (mesGameTime == 59) {
//        document.querySelector("#mes_timer").classList.add("time1");
//        document.querySelector("#mes_timer").classList.remove("time2");
//        document.querySelector("#mes_timer").classList.remove("time3");
//        document.querySelector("#mes_timer").classList.remove("time4");
//        document.querySelector("#mes_timer").classList.remove("time5");
//        document.querySelector("#mes_timer").classList.remove("time6");
//        document.querySelector("#mes_timer").classList.remove("time7");
//        document.querySelector("#mes_timer").classList.remove("time8");
//        document.querySelector("#mes_timer").classList.remove("time9");
//        document.querySelector("#mes_timer").classList.remove("time10");
//
//    } else if (mesGameTime == 54) {
//        document.querySelector("#mes_timer").classList.remove("time1");
//        document.querySelector("#mes_timer").classList.add("time2");
//        document.querySelector("#mes_timer").classList.remove("time3");
//        document.querySelector("#mes_timer").classList.remove("time4");
//        document.querySelector("#mes_timer").classList.remove("time5");
//        document.querySelector("#mes_timer").classList.remove("time6");
//        document.querySelector("#mes_timer").classList.remove("time7");
//        document.querySelector("#mes_timer").classList.remove("time8");
//        document.querySelector("#mes_timer").classList.remove("time9");
//        document.querySelector("#mes_timer").classList.remove("time10");
//
//    } else if (mesGameTime == 48) {
//        document.querySelector("#mes_timer").classList.remove("time1");
//        document.querySelector("#mes_timer").classList.remove("time2");
//        document.querySelector("#mes_timer").classList.add("time3");
//        document.querySelector("#mes_timer").classList.remove("time4");
//        document.querySelector("#mes_timer").classList.remove("time5");
//        document.querySelector("#mes_timer").classList.remove("time6");
//        document.querySelector("#mes_timer").classList.remove("time7");
//        document.querySelector("#mes_timer").classList.remove("time8");
//        document.querySelector("#mes_timer").classList.remove("time9");
//        document.querySelector("#mes_timer").classList.remove("time10");
//    } else if (mesGameTime == 42) {
//        document.querySelector("#mes_timer").classList.remove("time1");
//        document.querySelector("#mes_timer").classList.remove("time2");
//        document.querySelector("#mes_timer").classList.remove("time3");
//        document.querySelector("#mes_timer").classList.add("time4");
//        document.querySelector("#mes_timer").classList.remove("time5");
//        document.querySelector("#mes_timer").classList.remove("time6");
//        document.querySelector("#mes_timer").classList.remove("time7");
//        document.querySelector("#mes_timer").classList.remove("time8");
//        document.querySelector("#mes_timer").classList.remove("time9");
//        document.querySelector("#mes_timer").classList.remove("time10");
//    } else if (mesGameTime == 36) {
//        document.querySelector("#mes_timer").classList.remove("time1");
//        document.querySelector("#mes_timer").classList.remove("time2");
//        document.querySelector("#mes_timer").classList.remove("time3");
//        document.querySelector("#mes_timer").classList.remove("time4");
//        document.querySelector("#mes_timer").classList.add("time5");
//        document.querySelector("#mes_timer").classList.remove("time6");
//        document.querySelector("#mes_timer").classList.remove("time7");
//        document.querySelector("#mes_timer").classList.remove("time8");
//        document.querySelector("#mes_timer").classList.remove("time9");
//        document.querySelector("#mes_timer").classList.remove("time10");
//    } else if (mesGameTime == 30) {
//        document.querySelector("#mes_timer").classList.remove("time1");
//        document.querySelector("#mes_timer").classList.remove("time2");
//        document.querySelector("#mes_timer").classList.remove("time3");
//        document.querySelector("#mes_timer").classList.remove("time4");
//        document.querySelector("#mes_timer").classList.remove("time5");
//        document.querySelector("#mes_timer").classList.add("time6");
//        document.querySelector("#mes_timer").classList.remove("time7");
//        document.querySelector("#mes_timer").classList.remove("time8");
//        document.querySelector("#mes_timer").classList.remove("time9");
//        document.querySelector("#mes_timer").classList.remove("time10");
//    } else if (mesGameTime == 24) {
//        document.querySelector("#mes_timer").classList.remove("time1");
//        document.querySelector("#mes_timer").classList.remove("time2");
//        document.querySelector("#mes_timer").classList.remove("time3");
//        document.querySelector("#mes_timer").classList.remove("time4");
//        document.querySelector("#mes_timer").classList.remove("time5");
//        document.querySelector("#mes_timer").classList.remove("time6");
//        document.querySelector("#mes_timer").classList.add("time7");
//        document.querySelector("#mes_timer").classList.remove("time8");
//        document.querySelector("#mes_timer").classList.remove("time9");
//        document.querySelector("#mes_timer").classList.remove("time10");
//    } else if (mesGameTime == 18) {
//        document.querySelector("#mes_timer").classList.remove("time1");
//        document.querySelector("#mes_timer").classList.remove("time2");
//        document.querySelector("#mes_timer").classList.remove("time3");
//        document.querySelector("#mes_timer").classList.remove("time4");
//        document.querySelector("#mes_timer").classList.remove("time5");
//        document.querySelector("#mes_timer").classList.remove("time6");
//        document.querySelector("#mes_timer").classList.remove("time7");
//        document.querySelector("#mes_timer").classList.add("time8");
//        document.querySelector("#mes_timer").classList.remove("time9");
//        document.querySelector("#mes_timer").classList.remove("time10");
//    } else if (mesGameTime == 12) {
//        document.querySelector("#mes_timer").classList.remove("time1");
//        document.querySelector("#mes_timer").classList.remove("time2");
//        document.querySelector("#mes_timer").classList.remove("time3");
//        document.querySelector("#mes_timer").classList.remove("time4");
//        document.querySelector("#mes_timer").classList.remove("time5");
//        document.querySelector("#mes_timer").classList.remove("time6");
//        document.querySelector("#mes_timer").classList.remove("time7");
//        document.querySelector("#mes_timer").classList.remove("time8");
//        document.querySelector("#mes_timer").classList.add("time9");
//        document.querySelector("#mes_timer").classList.remove("time10");
//    } else if (mesGameTime == 6) {
//        document.querySelector("#mes_timer").classList.remove("time1");
//        document.querySelector("#mes_timer").classList.remove("time2");
//        document.querySelector("#mes_timer").classList.remove("time3");
//        document.querySelector("#mes_timer").classList.remove("time4");
//        document.querySelector("#mes_timer").classList.remove("time5");
//        document.querySelector("#mes_timer").classList.remove("time6");
//        document.querySelector("#mes_timer").classList.remove("time7");
//        document.querySelector("#mes_timer").classList.remove("time8");
//        document.querySelector("#mes_timer").classList.remove("time9");
//        document.querySelector("#mes_timer").classList.add("time10");
//    } else if (mesGameTime == 0) {
//
//    }
//}

function blueTimeFc() {
    console.log("Tid til skade: " + mesTime);
    if (mesTime > 0) {
        mesTime--;
        blueMesTimeOut = setTimeout(blueTimeFc, 1000);
    } else {
        console.log("Du klikkede ikke! vær hurtigere!");
        mesGameTime -= 5;
        mesHide();

    }
}

function greyTimeFc() {
    console.log("Tid til skade: " + mesTime);
    if (mesTime > 0) {
        mesTime--;
        greyMesTimeOut = setTimeout(greyTimeFc, 1000);
    } else {
        console.log("du klikkede ikke! godt!");
        mesHide();
    }
}

function blueTimeFc2() {
    console.log("Tid til skade: " + mesTime2);
    if (mesTime2 > 0) {
        mesTime2--;
        blueMesTimeOut2 = setTimeout(blueTimeFc2, 1000);
    } else {
        console.log("Du klikkede ikke! vær hurtigere!");
        mesGameTime -= 5;
        mesHide2();

    }
}

function greyTimeFc2() {
    console.log("Tid til skade: " + mesTime2);
    if (mesTime2 > 0) {
        mesTime2--;
        greyMesTimeOut2 = setTimeout(greyTimeFc2, 1000);
    } else {
        console.log("du klikkede ikke! godt!");
        mesHide2();
    }
}

function onClickMes() {
    if (this.classList.contains("type1")) {
        console.log("clickblue");
        mesPoints++;
        console.log(mesPoints);
        document.querySelector("#mes_score").innerHTML = mesPoints;
        console.log(this);
        this.classList.add("death_ani");
        document.querySelector("#mes1").classList.remove("mes_in");
        this.addEventListener("animationend", removeClasses);
        clearTimeout(blueMesTimeOut);
        mesTime = 4;
    } else if (this.classList.contains("type2")) {
        console.log("clickwhite");
        mesPoints++;
        console.log(mesPoints);
        document.querySelector("#mes_score").innerHTML = mesPoints;
        console.log(this);
        this.classList.add("death_ani");
        document.querySelector("#mes1").classList.remove("mes_in");
        this.addEventListener("animationend", removeClasses);
        clearTimeout(blueMesTimeOut);
        mesTime = 4;
    } else if (this.classList.contains("type3")) {
        console.log("clickwhite");
        mesPoints++;
        console.log(mesPoints);
        document.querySelector("#mes_score").innerHTML = mesPoints;
        console.log(this);
        this.classList.add("death_ani");
        document.querySelector("#mes1").classList.remove("mes_in");
        this.addEventListener("animationend", removeClasses);
        clearTimeout(blueMesTimeOut);
        mesTime = 4;
    } else if (this.classList.contains("type4")) {
        console.log("clickwhite");
        mesPoints++;
        console.log(mesPoints);
        document.querySelector("#mes_score").innerHTML = mesPoints;
        console.log(this);
        this.classList.add("death_ani");
        document.querySelector("#mes1").classList.remove("mes_in");
        this.addEventListener("animationend", removeClasses);
        clearTimeout(blueMesTimeOut);
        mesTime = 4;
    } else if (this.classList.contains("type5")) {
        console.log("clickwhite");
        mesPoints--;
        console.log(mesPoints);
        document.querySelector("#mes_score").innerHTML = mesPoints;
        console.log(this);
        this.classList.add("death_ani");
        document.querySelector("#mes1").classList.remove("mes_in");
        this.addEventListener("animationend", removeClasses);
        clearTimeout(greyMesTimeOut);
        mesTime = 4;
    } else if (this.classList.contains("type6")) {
        console.log("clickwhite");
        mesPoints--;
        console.log(mesPoints);
        document.querySelector("#mes_score").innerHTML = mesPoints;
        console.log(this);
        this.classList.add("death_ani");
        document.querySelector("#mes1").classList.remove("mes_in");
        this.addEventListener("animationend", removeClasses);
        clearTimeout(greyMesTimeOut);
        mesTime = 4;
    }
}

function onClickMes2() {
    if (this.classList.contains("type1")) {
        console.log("clickblue");
        mesPoints++;
        console.log(mesPoints);
        document.querySelector("#mes_score").innerHTML = mesPoints;
        console.log(this);
        this.classList.add("death_ani");
        document.querySelector("#mes2").classList.remove("mes_in");
        this.addEventListener("animationend", removeClasses2);
        clearTimeout(blueMesTimeOut2);
        mesTime2 = 4;
    } else if (this.classList.contains("type2")) {
        console.log("clickblue");
        mesPoints++;
        console.log(mesPoints);
        document.querySelector("#mes_score").innerHTML = mesPoints;
        console.log(this);
        this.classList.add("death_ani");
        document.querySelector("#mes2").classList.remove("mes_in");
        this.addEventListener("animationend", removeClasses2);
        clearTimeout(blueMesTimeOut2);
        mesTime2 = 4;
    } else if (this.classList.contains("type3")) {
        console.log("clickblue");
        mesPoints++;
        console.log(mesPoints);
        document.querySelector("#mes_score").innerHTML = mesPoints;
        console.log(this);
        this.classList.add("death_ani");
        document.querySelector("#mes2").classList.remove("mes_in");
        this.addEventListener("animationend", removeClasses2);
        clearTimeout(blueMesTimeOut2);
        mesTime2 = 4;
    } else if (this.classList.contains("type4")) {
        console.log("clickblue");
        mesPoints++;
        console.log(mesPoints);
        document.querySelector("#mes_score").innerHTML = mesPoints;
        console.log(this);
        this.classList.add("death_ani");
        document.querySelector("#mes2").classList.remove("mes_in");
        this.addEventListener("animationend", removeClasses2);
        clearTimeout(blueMesTimeOut2);
        mesTime2 = 4;
    } else if (this.classList.contains("type5")) {
        console.log("clickwhite");
        mesPoints--;
        console.log(mesPoints);
        document.querySelector("#mes_score").innerHTML = mesPoints;
        console.log(this);
        this.classList.add("death_ani");
        document.querySelector("#mes2").classList.remove("mes_in");
        this.addEventListener("animationend", removeClasses2);
        clearTimeout(greyMesTimeOut2);
        mesTime2 = 4;
    } else if (this.classList.contains("type6")) {
        console.log("clickwhite");
        mesPoints--;
        console.log(mesPoints);
        document.querySelector("#mes_score").innerHTML = mesPoints;
        console.log(this);
        this.classList.add("death_ani");
        document.querySelector("#mes2").classList.remove("mes_in");
        this.addEventListener("animationend", removeClasses2);
        clearTimeout(greyMesTimeOut2);
        mesTime2 = 4;
    }
}

function scoreCheck() {
    if (mesPoints > 7) {
        levelComplete();
    } else {
        gameOver();
    }
}

function removeClasses() {
    if (mesGameTime > 0) {
        console.log("removeclasses");
        document.querySelector("#mes1").removeEventListener("animationend", removeClasses);
        document.querySelector("#mes1").removeAttribute("class");
        newMes();
    }
}

function removeClasses2() {
    if (mesGameTime > 0) {
        console.log("removeclasses");
        document.querySelector("#mes2").removeEventListener("animationend", removeClasses2);
        document.querySelector("#mes2").removeAttribute("class");
        newMes2();
    }
}


function newMes() {
    console.log("newMes");
    let typeNr = Math.floor((Math.random() * 6) + 1);
    position1 = Math.floor((Math.random() * 6) + 1);
    document.querySelector("#mes1").classList.add("mes_in");
    document.querySelector("#mes1").classList.add("pos" + position1);
    document.querySelector("#mes1").classList.add("type" + typeNr);
    if (position2 == position1) {
        console.log(position1 + " er ligmed " + position2);
        removeClasses();
    } else if (document.querySelector("#mes1").classList.contains("type1")) {
        document.querySelector("#send").play();
        mesTime = 4;
        blueTimeFc();
    } else if (document.querySelector("#mes1").classList.contains("type2")) {
        document.querySelector("#send").play();

        mesTime = 4;
        blueTimeFc();
    } else if (document.querySelector("#mes1").classList.contains("type3")) {
        document.querySelector("#send").play();

        mesTime = 4;
        blueTimeFc();
    } else if (document.querySelector("#mes1").classList.contains("type4")) {
        document.querySelector("#send").play();

        mesTime = 4;
        greyTimeFc();
    } else if (document.querySelector("#mes1").classList.contains("type5")) {
        document.querySelector("#recieve").play();

        mesTime = 4;
        greyTimeFc();
    } else if (document.querySelector("#mes1").classList.contains("type6")) {
        document.querySelector("#recieve").play();

        mesTime = 4;
        greyTimeFc();
    }
}

function newMes2() {
    console.log("newMes2");
    let typeNr2 = Math.floor((Math.random() * 6) + 1);
    position2 = Math.floor((Math.random() * 6) + 1);
    document.querySelector("#mes2").classList.add("mes_in");
    document.querySelector("#mes2").classList.add("pos" + position2);
    document.querySelector("#mes2").classList.add("type" + typeNr2);

    if (position2 == position1) {
        console.log(position1 + " er ligmed " + position2);
        removeClasses2();
    } else if (document.querySelector("#mes2").classList.contains("type1")) {
        document.querySelector("#send").play();

        mesTime2 = 4;
        blueTimeFc2();
    } else if (document.querySelector("#mes2").classList.contains("type2")) {
        document.querySelector("#send").play();

        mesTime2 = 4;
        blueTimeFc2();
    } else if (document.querySelector("#mes2").classList.contains("type3")) {
        document.querySelector("#send").play();

        mesTime2 = 4;
        blueTimeFc2();
    } else if (document.querySelector("#mes2").classList.contains("type4")) {
        document.querySelector("#send").play();

        mesTime2 = 4;
        greyTimeFc2();
    } else if (document.querySelector("#mes2").classList.contains("type5")) {
        document.querySelector("#recieve").play();

        mesTime2 = 4;
        greyTimeFc2();
    } else if (document.querySelector("#mes2").classList.contains("type6")) {
        document.querySelector("#recieve").play();

        mesTime2 = 4;
        greyTimeFc2();
    }
}

function mesHide() {
    document.querySelector("#mes1").classList.remove("mes_in");
    document.querySelector("#mes1").classList.add("mes_out");
    document.querySelector("#mes1").addEventListener("animationend", removeClasses);

}

function mesHide2() {
    console.log("hej");
    document.querySelector("#mes2").classList.remove("mes_in");
    document.querySelector("#mes2").classList.add("mes_out");
    document.querySelector("#mes2").addEventListener("animationend", removeClasses2);

}


function gameOver() {
    console.log("Du klarede ikke banen!");
    clearTimeout(mesGameTimeOut);
    clearTimeout(gameTimeOut);
    clearTimeout(spaceGameTimeOut);
    document.querySelector("#death").play();
    document.querySelector("#slurp").play();
    document.querySelector("#restart_btn1").classList.remove("hide");
    document.querySelector("#restart_btn1").addEventListener("click", restartGame);
    document.querySelector("#gameover").classList.add("gameover_screen1");
    document.querySelector("#gameover_foreground").classList.add("gameover_front1");
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#gameover_foreground").classList.remove("hide");
    document.querySelector("#level_1").classList.add("hide");
    document.querySelector("#level_2").classList.add("hide");
    document.querySelector("#level_3").classList.add("hide");



}

function levelComplete() {

    console.log("Du klarede banen!");
    clearTimeout(mesGameTimeOut);
    clearTimeout(gameTimeOut);
    clearTimeout(spaceGameTimeOut);
    document.querySelector("#win").play();
    document.querySelector("#win2").play();
    document.querySelector("#wee2").play();
    document.querySelector("#nextlevel1").classList.remove("hide");
    document.querySelector("#nextlevel1").addEventListener("click", hideLevel1);
    document.querySelector("#levelcomplete").classList.add("level1complete");
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#level_1").classList.add("hide");
    document.querySelector("#mes1").removeEventListener("click", onClickMes);
    document.querySelector("#mes2").removeEventListener("click", onClickMes2);

}

function hideLevel1() {
    document.querySelector("#btn_click").play();
    setTimeout(startCutscene, 1000);
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#nextlevel1").classList.add("hide");
    document.querySelector("#nextlevel1").removeEventListener("click", hideLevel1);

}

function startCutscene() {
    console.log("startCutscene");
    document.querySelector("#cutscene1").classList.remove("hide");
    document.querySelector("#part1").classList.remove("hide");
    document.querySelector("#part2").classList.add("hide");
    document.querySelector("#part3").classList.add("hide");
    document.querySelector("#part4").classList.add("hide");
    setTimeout(startPart2, 2000);


}

function startPart2() {
    console.log("startCutscene");
    setTimeout(startPart3, 2000);
    document.querySelector("#rope").play();
    document.querySelector("#part1").classList.add("hide");
    document.querySelector("#part2").classList.remove("hide");
    document.querySelector("#part3").classList.add("hide");
    document.querySelector("#part4").classList.add("hide");


}

function startPart3() {
    console.log("startCutscene");
    setTimeout(startPart4, 2000);
    document.querySelector("#wee").play();
    document.querySelector("#part1").classList.add("hide");
    document.querySelector("#part2").classList.add("hide");
    document.querySelector("#part3").classList.remove("hide");
    document.querySelector("#part4").classList.add("hide");


}

function startPart4() {
    console.log("startCutscene");
    setTimeout(stopCutscene, 2000)
    document.querySelector("#damage").play();
    document.querySelector("#part1").classList.add("hide");
    document.querySelector("#part2").classList.add("hide");
    document.querySelector("#part3").classList.add("hide");
    document.querySelector("#part4").classList.remove("hide");

}

function stopCutscene() {
    document.querySelector("#cutscene1").classList.add("hide");
    document.querySelector("#part1").classList.remove("hide");
    document.querySelector("#part2").classList.remove("hide");
    document.querySelector("#part3").classList.remove("hide");
    document.querySelector("#level_2").classList.remove("hide");
    intro2();

}
////-- -- -- -- -- -- -- -- -- -- -- -- - lvl 2-- -- -- -- -- -- -- -- -- -- -- --



let points = 0;
let gameTime = 20;
let gameTimeOut;

function intro2() {
    document.querySelector("#intro2").classList.remove("hide");
    document.querySelector("#intro2_play").classList.remove("hide");
    document.querySelector("#intro2_play").addEventListener("click", hideIntro2);
}

function hideIntro2() {
    console.log("hideIntro2");
    document.querySelector("#btn_click").play();
    document.querySelector("#intro2").classList.add("hide");
    document.querySelector("#intro2_play").classList.add("hide");

    document.querySelector("#intro2_play").removeEventListener("click", hideIntro2);
    startLevel2();
}

function startLevel2() {
    console.log("startLevel2");
    document.querySelector("#stage_1").classList.remove("hide");
    document.querySelector("#billede1").classList.add("picpos1");
    document.querySelector("#billede2").classList.add("picpos2");
    document.querySelector("#billede4").classList.add("picpos3");
    document.querySelector("#billede5").classList.add("picpos4");
    document.querySelector("#billede6").classList.add("picpos5");
    document.querySelector("#billede7").classList.add("picpos6");
    document.querySelector("#billede8").classList.add("picpos7");
    document.querySelector("#billede9").classList.add("picpos8");
    document.querySelector("#billede10").classList.add("picpos9");
    document.querySelector("#billede11").classList.add("picpos10");
    document.querySelector("#folder").classList.add("folder_stage1");
    //    document.querySelector("#stage_1").classList.add("fade_in");
    //    document.querySelector("#stage_1").addEventListener("animationend", startLevel2);
    gameTimeFc();
    document.querySelector("#timer").classList.add("timer_ani");

}

//function startLevel2() {
//    console.log("startGame");
//    document.querySelector("#stage_1").classList.remove("fade_in");
//}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById(data).classList.add("hide");
    document.querySelector("#folder_sound").play();

    points++;
    dropScoreCheck();
}

function gameTimeFc() {
    console.log("Tid tilbage: " + gameTime);
    if (gameTime > 0) {
        gameTime--;
        gameTimeOut = setTimeout(gameTimeFc, 1000);
    } else {
        gameOver2();
    }
}

function dropScoreCheck() {

    if (points == 10) {
        gameTime = 25;
        document.querySelector("#timer").classList.remove("timer_ani");
        setTimeout(addTimeAnimation, 200);
        showBub();
        stageTwo();
    } else if (points == 20) {
        document.querySelector("#timer").classList.remove("timer_ani");
        setTimeout(addTimeAnimation, 200);
        gameTime = 20;
        showBub();
        stageThree();
    } else if (points == 30) {
        document.querySelector("#timer").classList.add("ani_pause");
        setTimeout(addTimeAnimation, 200);
        level2Complete();
    }

}

function addTimeAnimation() {
    document.querySelector("#timer").classList.add("timer_ani");

}

function showBub() {
    document.querySelector("#speak_bub").classList.remove("hide");
    document.querySelector("#speak_bub").classList.add("fade_in2");
    setTimeout(hideBub, 5000);
}

function hideBub() {
    console.log("First speakbubble");
    document.querySelector("#speak_bub").classList.remove("fade_in2");
    editTxt();
}

function editTxt() {
    console.log("Second speakbubble");
    document.querySelector("#speak_bub").classList.add("hide");
    document.querySelector("#speak_bub").classList.remove("fade_out");
    document.querySelector("#stage2_txt").classList.add("hide");
    document.querySelector("#stage3_txt").classList.remove("hide");
    document.querySelector("#speak_bub").removeEventListener("animationend", editTxt);
    setTimeout(resetTxt, 15000);
}

function resetTxt() {
    document.querySelector("#stage2_txt").classList.add("hide");
    document.querySelector("#stage3_txt").classList.add("hide");
}




function stageTwo() {
    console.log("Du klarede stadie 1");
    document.querySelector("#new_stage").play();
    document.querySelector("#stage_2").classList.remove("hide");
    document.querySelector("#billede12").classList.add("picpos1");
    document.querySelector("#billede13").classList.add("picpos2");
    document.querySelector("#billede14").classList.add("picpos3");
    document.querySelector("#billede15").classList.add("picpos4");
    document.querySelector("#billede16").classList.add("picpos5");
    document.querySelector("#billede17").classList.add("picpos6");
    document.querySelector("#billede18").classList.add("picpos7");
    document.querySelector("#billede19").classList.add("picpos8");
    document.querySelector("#billede20").classList.add("picpos9");
    document.querySelector("#billede21").classList.add("picpos10");
    document.querySelector("#folder").classList.remove("folder_stage1");
    document.querySelector("#folder").classList.add("folder_stage2");

}

function stageThree() {
    console.log("Du klarede stadie 2");
    document.querySelector("#new_stage").play();
    document.querySelector("#stage_3").classList.remove("hide");
    document.querySelector("#billede22").classList.add("picpos1");
    document.querySelector("#billede23").classList.add("picpos2");
    document.querySelector("#billede24").classList.add("picpos3");
    document.querySelector("#billede25").classList.add("picpos4");
    document.querySelector("#billede26").classList.add("picpos5");
    document.querySelector("#billede27").classList.add("picpos6");
    document.querySelector("#billede28").classList.add("picpos7");
    document.querySelector("#billede29").classList.add("picpos8");
    document.querySelector("#billede30").classList.add("picpos9");
    document.querySelector("#billede31").classList.add("picpos10");
    document.querySelector("#folder").classList.remove("folder_stage2");
    document.querySelector("#folder").classList.add("folder_stage3");
}

function level2Complete() {
    console.log("Du klarede banen");
    clearTimeout(mesGameTimeOut);
    clearTimeout(gameTimeOut);
    clearTimeout(spaceGameTimeOut);
    document.querySelector("#win").play();
    document.querySelector("#win2").play();
    document.querySelector("#wee2").play();
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#levelcomplete").classList.remove("level1complete");
    document.querySelector("#levelcomplete").classList.add("level2complete");
    document.querySelector("#nextlevel1").classList.add("hide");

    document.querySelector("#nextlevel2").classList.remove("hide");
    document.querySelector("#timer").classList.remove("timer_ani");
    document.querySelector("#nextlevel2").addEventListener("click", hideLevel2);
    document.querySelector("#level_2").classList.add("hide");
}

function gameOver2() {
    console.log("Du klarede ikke banen!");
    clearTimeout(mesGameTimeOut);
    clearTimeout(gameTimeOut);
    clearTimeout(spaceGameTimeOut);
    document.querySelector("#death").play();
    document.querySelector("#slurp").play();

    document.querySelector("#restart_btn1").classList.remove("hide");
    document.querySelector("#restart_btn1").addEventListener("click", restartGame);
    document.querySelector("#gameover").classList.remove("gameover_screen1");
    document.querySelector("#gameover_foreground").classList.remove("gameover_front1");
    document.querySelector("#gameover").classList.add("gameover_screen2");
    document.querySelector("#gameover_foreground").classList.add("gameover_front2");
    document.querySelector("#gameover_foreground").classList.remove("hide");
    document.querySelector("#privatsnak_bad").classList.add("hide");
    document.querySelector("#privatsnak").classList.add("hide");

    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#timer").classList.remove("timer_ani");
    document.querySelector("#level_1").classList.add("hide");
    document.querySelector("#level_2").classList.add("hide");
    document.querySelector("#level_3").classList.add("hide");



}

function hideLevel2() {
    document.querySelector("#btn_click").play();
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#nextlevel2").classList.add("hide");
    document.querySelector("#nextlevel2").removeEventListener("click", hideLevel2);
    document.querySelector("#level_3").classList.remove("hide");
    document.querySelector("#trash").classList.remove("trash_3");
    document.querySelector("#trash").classList.remove("trash_2");
    intro3();
}

////-- -- -- -- -- -- -- -- -- -- -- -- - lvl 3-- -- -- -- -- -- -- -- -- -- -- -- -//
//
function intro3() {
    console.log("Intro3");
    document.querySelector("#alert_screen").classList.add("hide");
    document.querySelector("#intro3").classList.remove("hide");
    document.querySelector("#intro3_play").classList.remove("hide");
    document.querySelector("#space_score").classList.add("power1");
    document.querySelector("#intro3_play").addEventListener("click", hideIntro3);
    document.querySelector("#space_fill").classList.remove("fill_animation");
    document.querySelector("#space_fill").classList.remove("ani_pause");
    document.querySelector("#trash").classList.remove("trash_4");
    document.querySelector("#trash").classList.add("trash_1");
    checkSpacebar();

}

function hideIntro3() {
    console.log("hideIntro3");
    document.querySelector("#btn_click").play();
    document.querySelector("#intro3").classList.add("hide");
    document.querySelector("#intro3_play").classList.add("hide");
    document.querySelector("#intro3_play").removeEventListener("click", hideIntro3);
    showLevel3();
}

function showLevel3() {
    console.log("showLevel3");
    spaceGameTimeFc();
    trashAnimation();
    document.querySelector("#space_fill").classList.add("fill_animation");
}

window.addEventListener("keydown", checkKeyPressed, false);
let scoreSpacebar = 0;
let spaceGameTime = 30;
let spaceGameTimeOut;
let spaceTimeOut;
let spaceTimeOut2;

function checkKeyPressed(e) {
    if (e.keyCode == "32") {
        checkSpacebar();
        console.log("click");
        scoreSpacebar++;
        checkSpacebar();
    }
}

function spaceGameTimeFc() {
    console.log("Tid tilbage: " + spaceGameTime);
    if (spaceGameTime > 0) {
        spaceGameTime--;
        scoreSpacebar -= 2;
        spaceGameTimeOut = setTimeout(spaceGameTimeFc, 1000);

    } else {
        gameOver2();
    }
}

function checkSpacebar() {
    if (scoreSpacebar == 0) {


        document.querySelector("#space_score").classList.remove("power1");
        document.querySelector("#space_score").classList.add("power2");
        document.querySelector("#space_score").classList.remove("power3");
        document.querySelector("#space_score").classList.remove("power4");
        document.querySelector("#space_score").classList.remove("power5");
        document.querySelector("#space_score").classList.remove("power6");
        document.querySelector("#space_score").classList.remove("power7");
        document.querySelector("#space_score").classList.remove("power8");
        document.querySelector("#space_score").classList.remove("power9");
        document.querySelector("#space_score").classList.remove("power10");
    } else if (scoreSpacebar < 0) {


        document.querySelector("#space_score").classList.remove("power1");
        document.querySelector("#space_score").classList.add("power2");
        document.querySelector("#space_score").classList.remove("power3");
        document.querySelector("#space_score").classList.remove("power4");
        document.querySelector("#space_score").classList.remove("power5");
        document.querySelector("#space_score").classList.remove("power6");
        document.querySelector("#space_score").classList.remove("power7");
        document.querySelector("#space_score").classList.remove("power8");
        document.querySelector("#space_score").classList.remove("power9");
        document.querySelector("#space_score").classList.remove("power10");
    } else if (scoreSpacebar < 15) {


        document.querySelector("#space_score").classList.remove("power1");
        document.querySelector("#space_score").classList.remove("power2");
        document.querySelector("#space_score").classList.add("power3");
        document.querySelector("#space_score").classList.remove("power4");
        document.querySelector("#space_score").classList.remove("power5");
        document.querySelector("#space_score").classList.remove("power6");
        document.querySelector("#space_score").classList.remove("power7");
        document.querySelector("#space_score").classList.remove("power8");
        document.querySelector("#space_score").classList.remove("power9");
        document.querySelector("#space_score").classList.remove("power10");
    } else if (scoreSpacebar < 30) {


        document.querySelector("#space_score").classList.remove("power1");
        document.querySelector("#space_score").classList.remove("power2");
        document.querySelector("#space_score").classList.remove("power3");
        document.querySelector("#space_score").classList.add("power4");
        document.querySelector("#space_score").classList.remove("power5");
        document.querySelector("#space_score").classList.remove("power6");
        document.querySelector("#space_score").classList.remove("power7");
        document.querySelector("#space_score").classList.remove("power8");
        document.querySelector("#space_score").classList.remove("power9");
        document.querySelector("#space_score").classList.remove("power10");
    } else if (scoreSpacebar < 45) {


        document.querySelector("#space_score").classList.remove("power1");
        document.querySelector("#space_score").classList.remove("power2");
        document.querySelector("#space_score").classList.remove("power3");
        document.querySelector("#space_score").classList.remove("power4");
        document.querySelector("#space_score").classList.add("power5");
        document.querySelector("#space_score").classList.remove("power6");
        document.querySelector("#space_score").classList.remove("power7");
        document.querySelector("#space_score").classList.remove("power8");
        document.querySelector("#space_score").classList.remove("power9");
        document.querySelector("#space_score").classList.remove("power10");
    } else if (scoreSpacebar < 50) {

        document.querySelector("#power_stage").play();
        document.querySelector("#space_score").classList.remove("power1");
        document.querySelector("#space_score").classList.remove("power2");
        document.querySelector("#space_score").classList.remove("power3");
        document.querySelector("#space_score").classList.remove("power4");
        document.querySelector("#space_score").classList.remove("power5");
        document.querySelector("#space_score").classList.add("power6");
        document.querySelector("#space_score").classList.remove("power7");
        document.querySelector("#space_score").classList.remove("power8");
        document.querySelector("#space_score").classList.remove("power9");
        document.querySelector("#space_score").classList.remove("power10");
    } else if (scoreSpacebar < 65) {


        document.querySelector("#space_score").classList.remove("power1");
        document.querySelector("#space_score").classList.remove("power2");
        document.querySelector("#space_score").classList.remove("power3");
        document.querySelector("#space_score").classList.remove("power4");
        document.querySelector("#space_score").classList.remove("power5");
        document.querySelector("#space_score").classList.remove("power6");
        document.querySelector("#space_score").classList.add("power7");
        document.querySelector("#space_score").classList.remove("power8");
        document.querySelector("#space_score").classList.remove("power9");
        document.querySelector("#space_score").classList.remove("power10");
    } else if (scoreSpacebar < 80) {


        document.querySelector("#space_score").classList.remove("power1");
        document.querySelector("#space_score").classList.remove("power2");
        document.querySelector("#space_score").classList.remove("power3");
        document.querySelector("#space_score").classList.remove("power4");
        document.querySelector("#space_score").classList.remove("power5");
        document.querySelector("#space_score").classList.remove("power6");
        document.querySelector("#space_score").classList.remove("power7");
        document.querySelector("#space_score").classList.add("power8");
        document.querySelector("#space_score").classList.remove("power9");
        document.querySelector("#space_score").classList.remove("power10");
    } else if (scoreSpacebar < 95) {


        document.querySelector("#space_score").classList.remove("power1");
        document.querySelector("#space_score").classList.remove("power2");
        document.querySelector("#space_score").classList.remove("power3");
        document.querySelector("#space_score").classList.remove("power4");
        document.querySelector("#space_score").classList.remove("power5");
        document.querySelector("#space_score").classList.remove("power6");
        document.querySelector("#space_score").classList.remove("power7");
        document.querySelector("#space_score").classList.remove("power8");
        document.querySelector("#space_score").classList.add("power9");
        document.querySelector("#space_score").classList.remove("power10");
    } else if (scoreSpacebar > 110) {

        document.querySelector("#space_score").classList.remove("power1");
        document.querySelector("#space_score").classList.remove("power2");
        document.querySelector("#space_score").classList.remove("power3");
        document.querySelector("#space_score").classList.remove("power4");
        document.querySelector("#space_score").classList.remove("power5");
        document.querySelector("#space_score").classList.remove("power6");
        document.querySelector("#space_score").classList.remove("power7");
        document.querySelector("#space_score").classList.remove("power8");
        document.querySelector("#space_score").classList.remove("power9");
        document.querySelector("#space_score").classList.add("power10");
        document.querySelector("#space_fill").classList.add("ani_pause");
        clearTimeout(spaceGameTimeOut);
        setTimeout(showAlert, 1500);
    }

}



function trashAnimation() {
    if (scoreSpacebar > 110) {
        trashAnimationStage3();
    } else if (scoreSpacebar < 110) {
        document.querySelector("#trash").classList.remove("trash_1");
        document.querySelector("#trash").classList.add("trash_2");
        document.querySelector("#trash").classList.remove("trash_3");
        setTimeout(trashAnimationStage2, 500);
    }
}

function trashAnimationStage2() {
    document.querySelector("#trash").classList.remove("trash_2");
    document.querySelector("#trash").classList.add("trash_3");
    spaceTimeOut2 = setTimeout(trashAnimation, 500);
}

function trashAnimationStage3() {
    document.querySelector("#trash").classList.remove("trash_3");
    document.querySelector("#trash").classList.remove("trash_2");
    document.querySelector("#trash").classList.add("trash_4");
    clearTimeout(spaceTimeOut);
    clearTimeout(spaceTimeOut2);

}

function trashAnimationStage4() {
    document.querySelector("#trash").classList.remove("trash_4");
    document.querySelector("#trash").classList.add("trash_1");
}


function showAlert() {
    document.querySelector("#alert").play();
    document.querySelector("#alert_screen").classList.remove("hide");
    document.querySelector("#yes_btn").addEventListener("click", goodGameComplete);
    document.querySelector("#no_btn").addEventListener("click", badGameComplete);
}



function badGameComplete() {
    console.log("Du klarede ikke banen!");
    clearTimeout(mesGameTimeOut);
    clearTimeout(gameTimeOut);
    clearTimeout(spaceGameTimeOut);
    document.querySelector("#death").play();
    document.querySelector("#slurp").play();
    document.querySelector("#btn_click").play();
    document.querySelector("#restart_btn1").classList.remove("hide");
    document.querySelector("#restart_btn1").addEventListener("click", restartGame);
    document.querySelector("#gameover").classList.remove("gameover_screen2");
    document.querySelector("#gameover_foreground").classList.remove("gameover_front2");
    document.querySelector("#gameover").classList.add("gameover_screen3");
    document.querySelector("#gameover_foreground").classList.add("gameover_front3");
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#level_1").classList.add("hide");
    document.querySelector("#level_2").classList.add("hide");
    document.querySelector("#level_3").classList.add("hide");
    document.querySelector("#mes1").removeEventListener("click", onClickMes);
    document.querySelector("#mes2").removeEventListener("click", onClickMes2);
    document.querySelector("#privatsnak_bad").classList.remove("hide");
}

function goodGameComplete() {
    document.querySelector("#win").play();
    document.querySelector("#win2").play();
    document.querySelector("#wee2").play();
    document.querySelector("#btn_click").play();
    document.querySelector("#nextlevel1").classList.add("hide");
    document.querySelector("#levelcomplete").classList.remove("level2complete");
    document.querySelector("#levelcomplete").classList.add("good_vic");
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#nextlevel2").classList.add("hide");
    document.querySelector("#mes1").removeEventListener("click", onClickMes);
    document.querySelector("#mes2").removeEventListener("click", onClickMes2);
    document.querySelector("#replay_btn1").classList.remove("hide");
    document.querySelector("#replay_btn1").addEventListener("click", restartGame);
    document.querySelector("#level_1").classList.add("hide");
    document.querySelector("#level_2").classList.add("hide");
    document.querySelector("#level_3").classList.add("hide");
    document.querySelector("#trash").classList.remove("trash_4");
    document.querySelector("#privatsnak").classList.remove("hide");
    document.querySelector("#privatsnak").classList.add("privat_logo");

}

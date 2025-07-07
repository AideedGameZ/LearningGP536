function gotoPage(str){
    playSound('sound/click.wav');
    setTimeout(function(){
        window.location.href = `${str}.html`;
    },500);
}

function playSound(src){

    let audio = new Audio(src);

    audio.play();

}

function playMainMenuSong(){

    playSound('sound/music_menu.mp3');
}

let start = true;
document.addEventListener("mousedown", function() {
    if(start){
        playSound('sound/music_menu.mp3');
        start = false;
    }
});
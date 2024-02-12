let SoundButton = document.querySelectorAll('.platformi>div')
let sounds = document.querySelectorAll('audio');

for (let i = 0; i < SoundButton.length; i += 1) {
    SoundButton[i].addEventListener("click", playsound(i))
}
function playsound(item) {
    return function () {
        if (sounds[item].loop) {
            sounds[item].pause();
            sounds[item].loop = false;
        } else {
            sounds[item].currentTime = 0;
            sounds[item].play()
            sounds[item].loop = true;
        }
        SoundButton[item].classList.toggle('.choosen')
    }
}
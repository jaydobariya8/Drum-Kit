function playsound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //return if key is not right
    audio.currentTime = 0; //return to the zero
    audio.play(); //playing audio
    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown',playsound);
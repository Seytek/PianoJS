"use strict";

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'f', 'g', 'h', 'j'];

document.addEventListener('keydown', e => {
    const key = e.key;
    const whiteKeysIndex = WHITE_KEYS.indexOf(key);
    const blackKeysIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeysIndex > -1) { // -1 returns when we can't find anything
        playNote(whiteKeys[whiteKeysIndex]);
    }
    else if (blackKeysIndex > -1) {
        playNote(blackKeys[blackKeysIndex]);
    }
})

keys.forEach(element => {
    element.addEventListener('click', () => playNote(element));

})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.play();
    
    key.classList.add('active');
    key.addEventListener('click', () => {
        key.classList.remove('active');
    })
}

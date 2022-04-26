const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
    const button = document.createElement("button");
    button.innerText = sound;
    button.classList.add('btn')

    button.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.querySelector(".buttons").appendChild(button);
});

const stopSongs = () => {
    sounds.forEach(sound => {
        document.getElementById(sound).pause()
        document.getElementById(sound).currentTime = 0
    })
}
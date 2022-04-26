const container = document.querySelector(".container");

window.addEventListener("keydown", (e) => {
  container.innerHTML = `
    <div class="btn">
        ${e.key  === ' ' ? 'space' : e.key}
    <span>key</span>
        </div>
    <div class="btn">
        ${e.keyCode}
    <span>Keycode</span>
    </div>
    <div class="btn">
        ${e.code}
    <span>code</span>
    </div>
    `;
    console.log(e)
});

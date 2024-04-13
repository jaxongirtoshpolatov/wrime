// phone input mask
[].forEach.call(document.querySelectorAll(".tel-input"), function (input) {
  let keyCode;
  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    let pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    let matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 3);
      newValue = newValue.slice(0, i);
    }
    let reg = matrix
      .substr(0, this.value.length)
      .replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      })
      .replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (
      !reg.test(this.value) ||
      this.value.length < 5 ||
      (keyCode > 47 && keyCode < 58)
    )
      this.value = newValue;
    if (event.type == "blur" && this.value.length < 5) this.value = "";
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false);
  input.addEventListener("mouseup", (event) => {
    event.preventDefault();
    if (input.value.length < 4) {
      input.setSelectionRange(4, 4);
    } else {
      input.setSelectionRange(input.value.length, input.value.length);
    }
  });
});

// select button
let select, option, sellected;
select = document.querySelector(".select");
sellected = document.querySelector(".selected");
option = document.querySelectorAll(".option");

select.addEventListener("click", () => {
  select.classList.toggle("active");
});

option.forEach((item) => {
  item.addEventListener("click", () => {
    sellected.textContent = item.textContent;
  });
});

// ! play and pause video script
const introVideo = document.querySelector('.intro-video');
// play button
const playBtn = document.querySelector('.control button');
console.log(playBtn);
// play video event
playBtn.addEventListener('click', () =>{
  introVideo.play();
  playBtn.style.opacity = '0';
  playBtn.style.transition = '0.5s';
})

// pause event
introVideo.addEventListener("click", () => {
  playBtn.style.opacity = '1';
  introVideo.pause();
})

// end video event
introVideo.addEventListener('ended', () =>{
  playBtn.style.opacity = '1';
})




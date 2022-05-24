// ==========================  SECTION 1  Event ==========================


window.onscroll = function () { scrollFunction() };

function scrollFunction() {

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("P-header-js").style.backgroundColor = " #113448";
    document.getElementById("P-header-js").style.height = "60px";
    document.getElementById("P-header-js").style.position = "fixed";

  } else {
    document.getElementById("P-header-js").style.backgroundColor = "transparent";
    document.getElementById("P-header-js").style.height = "100px";
    document.getElementById("P-header-js").style.position = "static";
  };
}


// ==========================  SECTION 5  ==========================

// Event onclick Number

let xContent = document.getElementsByClassName("P-content-block");

for (let i = 0; i < xContent.length; i++) {
  xContent[i].addEventListener('click', () => {
    displayDate(xContent[i])
  });
}

function displayDate(element) {
  for (let i = 0; i < xContent.length; i++) {
    xContent[i].classList.remove('P-active-tab');
  }
  element.classList.add('P-active-tab')
}



// **************** Event onclick Title ****************



let y = document.getElementsByClassName("P-content-subchapter");

console.log(y);

for (let i = 0; i < y.length; i++) {
  y[i].addEventListener('click', () => {
    subchapterDate(y[i])
  });
}

function subchapterDate(element) {
  for (let i = 0; i < y.length; i++) {
    y[i].classList.add('P-subchapter-event');
  }
  element.classList.remove('P-subchapter-event');
}

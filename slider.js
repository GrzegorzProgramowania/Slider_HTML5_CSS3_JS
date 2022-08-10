function createSlider(slides) {
  console.log(slides);
  slides.forEach(function (item, index, array) {
    console.log(item, index);
  })
  const arrayLength = slides.length;
  console.log(arrayLength);
  console.log(slides);

  function drawSlider() {

    let body = document.getElementsByTagName(`body`);

    console.log(body)

    let content = ``;

    content += `<div class="contentDiv">`;


    for (let slide of slides) {
      content = `  
            
            <header>
            <img class="slider" src="images/img1.jpg" alt="">
            <h1 class="slider">Pierwszy tekst</h1>
            <div class="dots" id="spansConteiner">
              <div class="arrow"></div>
              <div class="arrowRight"></div>
            </div>
          </header>
            </div>`
        ;
    }

    content += "</div>";

    document.body.innerHTML += content;
    console.log(body);
    console.log(dots);
    addSpans();
  }

  //zamiana na tablice
  let dots = [];

 // Interfejs
  const time = 3000;
  let active = 0;
  

  
  function addSpans() {
    const spansConteiner = document.getElementById("spansConteiner");
    for (i = 1; i <= arrayLength; i++) {
      console.log(`ok`);
      const newSpan = document.createElement("span");
      newSpan.addEventListener(`click`, () => setActiveSlide(i));

      spansConteiner.appendChild(newSpan);
      dots.push(newSpan);
      console.log(dots);
    }
  }
  
  drawSlider();

  function setActiveSlide(index){


  }
  
  //zmienne
  const image = document.querySelector(`img.slider`);
  const h1 = document.querySelector(`h1.slider`);
  const arrow = document.querySelector(`.arrowRight`);
  const arrowRight = document.querySelector(`.arrow`);
  let buttonOne = document.getElementById(`first`);
  let buttonTwo = document.getElementById(`second`);
  let buttonThree = document.getElementById(`third`);
  let contrast = document.querySelector(`.contrast`);

 

  // // Implementacje
  const changeDot = () => {
    console.log(`zmiana kropki`);
    const activeDot = dots.findIndex(dot => dot.classList.contains(`active`));
    dots[active].classList.add(`active`);
    dots[activeDot].classList.remove(`active`);
  }



  const changeSlide = () => {
    active++;
    if (active === slides.length) {
      active = 0;
    }
    image.src = slides[active].img;
    h1.textContent = slides[active].text;
    changeDot()
  }


  const changeSlideDown = () => {
    active--;
    if (active === slides.length) {
    }
    image.src = slides[active].img;
    h1.textContent = slides[active].text;
    changeDot()
  }


  function changeSlideByKeys(e) {
    if (e.keyCode === 39) {
      stopInterval()
      changeSlide();
      startInterval();
    }
    if (e.keyCode === 37) {
      console.log(active)
      stopInterval()

      if (active <= 0) {
        active = dots.length;
      }
      console.log(active)
      changeSlideDown();
      startInterval();
    }
  }


  // //WYSZUKANIE KROPEK i przypisywanie
  let firstDot = document.querySelector(`.kropka1`);
  console.log(firstDot);
 

  function changeSlideByClickOnDots() {
    // for (i = 0; i <= dots.length; i++) {
    // console.log(dots[activeDot]);
    console.log(dots[active]);
    const activeDot = dots.findIndex(dot => dot.classList.remove(`active`));
    console.log(activeDot.classList)
    stopInterval();
    // active = dots.findIndex(dot => dot.classList.contains(`active`));

    console.log(activeDot);
    console.log(active);
    console.log(dots.classList);
    // startInterval();
    // }
  }

  function stopInterval() {
    clearInterval(Interval);
  }
  var Interval
  function startInterval() {
    Interval = setInterval(changeSlide, time);

  }

  startInterval();


  function changeSlideByArrow() {
    stopInterval()
    changeSlide();
    startInterval();
  }

  function changeSlideByArrowRight() {
    stopInterval()

    if (active <= 0) {
      active = dots.length;
    }
    console.log(active)
    changeSlideDown();
    startInterval();

  }


//strzałki
  arrow.addEventListener(`click`, changeSlideByArrow)
  arrowRight.addEventListener(`click`, changeSlideByArrowRight)

//strzałki
  window.addEventListener(`keydown`, changeSlideByKeys);

}


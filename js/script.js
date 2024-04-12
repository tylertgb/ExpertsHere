
/*USER PROFILE TOGGLE function */
let subMenu = document.getElementById("subMenu");
        function toggleMenu(){
            subMenu.classList.toggle("open-menu");
        }
/*END OF USER PROFILE TOGGLE function */



//************START OF SEARCH BOX FUNCTIONING */
//Getting all request elements
const searchwrapper = document.querySelector(".search-input");
const inputBox = searchwrapper.querySelector("input");
const suggBox = searchwrapper.querySelector(".autocom-box");

//If user press any key and release
inputBox.onkeyup = (e)=>{
  let userData = e.target.value; //User Entered Data
  let emptyArray = [];
  if(userData){
    emptyArray = suggestions.filter((data) =>{
      //Filtering array value and user char to lower case and return only those
      //start with the entered user words
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data)=>{
      return data = '<li>'+ data +'</li>';
    });
    console.log(emptyArray);
    searchwrapper.classList.add("active");//show autocomplete box
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++){
      //adding onclick attribut in all li tag
      allList[i].setAttribute("onclick","select(this)");
    }  
  }else{
    searchwrapper.classList.remove("active");//hide autocomplete box
  }
}

function select(element){
  let selectUserData = element.textContent;
  inputBox.value = selectUserData; //Passing the user selected list item data in text field
  searchwrapper.classList.remove("active");//hide autocomplete box
}

function showSuggestions(list){
  let listData;
  if(!list.length){
    userValue = inputBox.value;
    listData = '<li>' + userValue + '</li>';
  }else{
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}
//************END OF SEARCH BOX FUNCTIONING */


//************START OF HERO SLIDER FUNCTIONING */
const myslide = document.querySelectorAll('.myslider'),
       dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
      counter += 1;
      slidefun(counter);
}
function plusSlides(n){
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n){
  counter += n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoslide, 8000);
}

function slidefun(n){
  let i;
  for (i=0; i<myslide.length; i++) {
    myslide[i].style.display = 'none';
  }
  for (i=0; i<dot.length; i++) {
    dot[i].classList.remove('active');
  }
  if(n>myslide.length){
    counter=1;
  }
  if(n<1){
    counter = myslide.length;
  }else{
  myslide[counter-1].style.display="block";
  dot[counter-1].classList.add('active');
  }
}
//************END OF HERO SLIDER FUNCTIONING */

//************START OF SCROLL TO TOP FUNCTIONING */
// Get the button:
let mybutton = document.getElementById("topscroll");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//************END OF SCROLL TO TOP FUNCTIONING */

/**Swiper Slider */
let slideIndex = 0;
let timing; // To store the reference to the timer

showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n, n > 0 ? 'slide' : 'reverse-slide'); // Check slide direction
}

function currentSlide(index) {
  showSlide(slideIndex = index - 1); // Subtract 1 since slide index is 0-based
}

function showSlide(index, slideDirection) {
  const slides = document.getElementsByClassName('testimonial-slide');
  const dots = document.getElementsByClassName('dot');

  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    slides[i].classList.remove('slide');
    slides[i].classList.remove('reverse-slide');
    dots[i].classList.remove('active');
  }

  slides[slideIndex].style.display = 'block';
  slides[slideIndex].classList.add(slideDirection);
  dots[slideIndex].classList.add('active');

  // Clear the existing timer and restart it
  clearTimeout(timing);
  timing = setTimeout(changeSlide, 5000, 1); // Change slide every 5 seconds
}
// Handle mouseover and mouseout events for the slider
const sliderContainer = document.querySelector('.slideshow-container');
sliderContainer.addEventListener('mouseover', () => {
  clearTimeout(timing); // Pause the timer
});

sliderContainer.addEventListener('mouseout', () => {
  timing = setTimeout(changeSlide, 5000, 1); // Restart the timer
});

// Function to handle clicks on pagination dots
function currentSlide(index) {
  showSlide(slideIndex = index - 1); // Subtract 1 since slide index is 0-based
}

// Automatically start the slideshow
showSlide(slideIndex);

/**End of Swiper Slider */


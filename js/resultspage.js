
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


/*USER PROFILE TOGGLE function */
let subMenu = document.getElementById("subMenu");
        function toggleMenu(){
            subMenu.classList.toggle("open-menu");
        }
/*END OF USER PROFILE TOGGLE function */

//************START OF SCROLL TO TOP FUNCTIONING */
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

var static_words1="\"You cannot become thorough ";
var static_words2=" if you think of yourselves in ";
var static_words3=" does not consist of ";
var static_words4=". A ";
var static_words5=" who thinks of himself as belonging to a particular ";
var static_words6=" group in America has not yet become an American\". Woodrow Wilson"; 

var button= document.getElementById("submit");

button.addEventListener("click", onClick, false);

function onClick(evt)
{
  evt.preventDefault(evt);
  
  var element1  = document.getElementById("form1").elements.item(0).value;
  var element2  = document.getElementById("form1").elements.item(1).value;
  var element3  = document.getElementById("form1").elements.item(2).value;
  var element4  = document.getElementById("form1").elements.item(3).value;
  var element5  = document.getElementById("form1").elements.item(4).value;
  var element6  = document.getElementById("form1").elements.item(5).value;
  
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 +
              element4 + static_words5 + element5 + static_words6);
  
}
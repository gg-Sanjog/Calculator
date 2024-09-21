const display = document.getElementById("display")

function appendToDisplay(input){
  display.value += input;

}

function clearDisplay(input){
  display.value = ""

  
}
function aclearDisplay(input){
  
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(errorr){
    display.value = "Error"

  }
  
  
}
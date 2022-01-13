let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
  item.addEventListener('click', function(event){
    buttonText = event.target.innerText;
    console.log(buttonText);
    if(buttonText=='='){
      // evaluate
      screen.value = eval(screenValue);
      screenValue = screen.value;
    }
    else if(buttonText=='c'){
      screen.value = '';
      screenValue = '';
    }
    else if(buttonText=="bs"){
      screenValue = screenValue.slice(0,-1);
      screen.value = screenValue;
    }
    else{
      screenValue += buttonText;
      screen.value = screenValue;
    }

  })
}

let outputScreen=document.getElementById('output-screen');

function clr(){
  outputScreen.value=''
}

function display(num) {
  outputScreen.value+=num
}

function claculator(){

if(outputScreen.value!=0){
  try{
    outputScreen.value = eval(outputScreen.value)
    
  }catch (err){
    alert("akbor")
  }
}
}



function dle(){
  
  outputScreen.value=outputScreen.value.slice(0,-1)
}

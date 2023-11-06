const inputs = document.querySelector('.inputs')
console.log(inputs)

//event bubbling
inputs.addEventListener('keyup',function(e){
    let target;
    if(e.key=='Backspace'||e.key=='Delete'){
        
        e.target.value =""
     target=e.target.previousElementSibling
    }
    else if(e.key <= 9 && e.key >= 0){
        e.target.value = e.key;
     target=e.target.nextElementSibling
    }
    else{
        e.target.value =""
        return
    }
    if(target){
        target.focus();
    }
})


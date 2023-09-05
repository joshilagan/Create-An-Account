const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const checkbox = document.querySelector('.checkbox')
const submit = document.querySelector('.submit')
const inputs = document.querySelectorAll('.inputs');

//create an input event listener that switches the submit button's 'disabled' attribute to false whenever the checkbox is ticked and vice versa
//use disabled = false

const checking = () => {
    checkbox.checked === true ? submit.disabled = false : submit.disabled = true;
}
checkbox.addEventListener('input', checking)

//create a forEach loop for all the inputs
//create a focus event listener, then invoke a function that will color the outline of the selected input box
inputs.forEach((item) => {
    item.addEventListener('focus', (e) => {
        if(item.classList.contains('fNames')){           
            colorIt(e);
        }else if(item.classList.contains('lNames')){        
            colorIt(e);
        }else if(item.classList.contains('emails')){           
            colorIt(e);
        }else if(item.classList.contains('passwords')){        
            colorIt(e);
        }else if(item.classList.contains('confirmPasswords')){       
            colorIt(e);
        }
    })
})

function colorIt(e){
    e.target.style.outlineStyle = 'solid'
    e.target.style.outlineWidth = '3px'
    e.target.style.outlineColor = 'blue'
    e.target.style.border = 'none'
}

//create a forEach loop for all the inputs
//create a focus event listener, then invoke a function that will remove the outline color of the selected input box
inputs.forEach((item) => {
    item.addEventListener('blur', (e) => {       
        if(item.classList.contains('fNames')){         
            dontColorIt(e);
        }else if(item.classList.contains('lNames')){       
            dontColorIt(e);
        }else if(item.classList.contains('emails')){          
            dontColorIt(e);
        }else if(item.classList.contains('passwords')){           
            dontColorIt(e);
        }else if(item.classList.contains('confirmPasswords')){          
            dontColorIt(e);

             //for password matching, if the value in confirm password input doesn't match with the value in password input, display an alert
            if(confirmPassword.value !== password.value){
                alert("Passwords doesn't match!")
            }

        }
    })
})

function dontColorIt(e){
    e.target.style.outlineStyle = 'none'
    e.target.style.border = '2px solid black'
}

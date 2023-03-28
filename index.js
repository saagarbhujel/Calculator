let string = ""
let screen = document.querySelector(".screen ")
let buttons = document.querySelectorAll(".btn")

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e) =>{
        buttonText = e.target.innerText
        console.log(buttonText)

        if (buttonText === "+/-") {
            let num = parseFloat(screen.value);
            if (num > 0) {
              screen.value = "-" + num;
            } else if (num < 0) {
              screen.value = Math.abs(num);
            }
          } 


        else if (buttonText == 'X'){
            buttonText='*'
            string += buttonText
            screen.value = string
        }

        else if(buttonText =='='){
            screen.value= eval(string)
        }
        else if(buttonText== 'C'){
            string = ""
            screen.value = string
        }
        
        else if(buttonText == '%'){
            let num = parseFloat(screen.value)
            string += buttonText
            screen.value = num/100
        }
       
        else{
            string += buttonText
            screen.value = string 
        }

       
    })
})
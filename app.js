let input=document.querySelector("input")
let btns=document.querySelectorAll("button")
for(let button of btns){

    button.addEventListener("click",(e)=>{
        let btnText=e.target.innerText
        console.log(button.innerHTML)
        
        console.log(btnText)
        if(btnText=='C'){
            input.value=""
        } else if(btnText=="="){
            try{//sahi kaam likho
                input.value=eval(input.value)

            }
            catch(error){
                // warning wala kaam
                input.value="Invalid"
            }
            input.value=eval(input.value)
        } else{
            input.value+=btnText
        }

    })
}
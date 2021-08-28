import {InputGroup} from "./inputGr.js"

class signIn{
    constructor(){
        this.container = document.createElement('div')
        this.container.classList.add("container")
        this.title = document.createElement('h2')
        this.title.innerHTML = "Sign In"
        this.title.classList.add("title")

        this.formSignIn = document.createElement('form')
        this.formSignIn.addEventListener("submit",this.handleSubmit)       

        this.inputGroupEmail = new InputGroup("email","Email :","Email","Your email")

        this.inputGroupPassword = new InputGroup("password","Password :","password","Your password")

        

        this.btnSubmit = document.createElement('button')
        this.btnSubmit.type = "submit"
        this.btnSubmit.innerHTML = "SignIn"
        this.btnSubmit.classList.add("btn")
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        
        const email = this.inputGroupEmail.getInputValue()
        const password = this.inputGroupPassword.getInputValue()

        if(!email){
            this.inputGroupEmail.setMsg("Email không được bỏ trống")    
        }else{
            this.inputGroupEmail.setMsg("")
        }
        if(password.length<8){
            this.inputGroupPassword.setMsg("Password không được ngắn hơn 8 kí tự")
        }else{
            this.inputGroupPassword.setMsg("")
        }
    }
    render(){        
        this.formSignIn.appendChild(this.inputGroupEmail.render())
        this.formSignIn.appendChild(this.inputGroupPassword.render())
        this.formSignIn.appendChild(this.btnSubmit)

        this.container.appendChild(this.title)
        this.container.appendChild(this.formSignIn)

        return this.container
    }
}

export{signIn}
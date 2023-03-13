class InputField{
    constructor(type, id, name, size, aria, placeholder, required){
        this.type = type
        this.id = id
        this.name = name
        this.size = size
        this.aria = aria
        this.placeholder = placeholder
        this.required = required
    }
}

let inputFields = []

function loadContent(){

  

        let inputField = document.getElementById("inputField")
        
        let fieldSet = form.querySelector("fieldset")
	

       

        let firstNameLabel = document.createElement("label")
        let breakElem = document.createElement("br")
        firstNameLabel.setAttribute("for", "first-name")
        firstNameLabel.append("Full Name * ")
        firstNameLabel.append(breakElem)
        fieldSet.prepend(firstNameLabel)


        let requiredInfo = document.createElement("p")
        requiredInfo.append("Required information is marked with an asterisk. (*)")
        requiredInfo.classList.add("required-info")
        fieldSet.prepend(requiredInfo, )


        let legend = document.createElement("legend")
        legend.append("Contact Form")
        fieldSet.prepend(legend)


        let firstNameInput = document.createElement("input")
        firstNameInput.setAttribute("type", "text")
        firstNameInput.setAttribute("id", "first-name")
        firstNameInput.setAttribute("name", "name")
        firstNameInput.setAttribute("size", "10")
        firstNameInput.setAttribute("aria-required", "true")
        firstNameInput.setAttribute("placeholder", "Your First Name(s)")
        firstNameInput.setAttribute("required", "true")
        fieldSet.append(firstNameInput)


        let secondNameInput = document.createElement("input")
        secondNameInput.setAttribute("type", "text")
        secondNameInput.setAttribute("id", "second-name")
        secondNameInput.setAttribute("name", "name")
        secondNameInput.setAttribute("size", "10")
        secondNameInput.setAttribute("aria-required", "true")
        secondNameInput.setAttribute("placeholder", "Your Second Name")
        secondNameInput.setAttribute("required", "true")
        fieldSet.append(secondNameInput)

        
        let emailLabel = document.createElement("label")
        emailLabel.setAttribute("for", "email")
        emailLabel.append("Email *")
        fieldSet.appendChild(emailLabel)

        let emailInput = document.createElement("input")
        emailInput.setAttribute("type", "email")
        emailInput.setAttribute("id", "email")
        emailInput.setAttribute("name", "email")
        emailInput.setAttribute("aria-required", "true")
        emailInput.setAttribute("placeholder", "Your Email")
        emailInput.setAttribute("required", "true")
        fieldSet.append(emailInput)

        let messageLabel = document.createElement("label")
        messageLabel.setAttribute("for", "message")
        messageLabel.append("Message")
        fieldSet.appendChild(messageLabel)

        let messageInput = document.createElement("input")
        messageInput.setAttribute("type", "text")
        messageInput.setAttribute("id", "message")
        messageInput.setAttribute("name", "message")
        messageInput.setAttribute("aria-required", "true")
        messageInput.setAttribute("placeholder", "Write a message to use here (optional)")
        messageInput.setAttribute("required", "true")
        fieldSet.append(messageInput)

        
        let buttonDiv = document.getElementById("buttons")
        fieldSet.appendChild(buttonDiv)
        

    



}

window.addEventListener("DOMContentLoaded", loadContent, false)


function onTextReady(text){
    console.log(text);

    secondDiv = document.getElementById("formConfirmation")
    const formData = document.createElement("p");
    formData.append(text);
    secondDiv.appendChild(formData);
    
}

function onResponse(response){
    return response.text();
}

form = document.getElementById("form");
submitButton = document.getElementById("submit")
fieldSet = document.getElementById("fieldset");

function processSubmit(e) {
    e.preventDefault();
    console.log(e);

    inputs = fieldSet.querySelectorAll("input")
    currentFirstName = inputs[0].value;
    currentLastName = inputs[1].value;
    currentEmail = inputs[2].value;
    currentMessage = inputs[3].value

    const message = {
        firstname: currentFirstName,
        lastname: currentLastName,
        email: currentEmail,
        message: currentMessage
    }
    
    let serialisedMessage = JSON.stringify(message);  

    fetchOptions ={
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: serialisedMessage,        
    }
    
    fetch('http://localhost:3000/form', fetchOptions)
    .then(onResponse)
    .then(onTextReady);

}

(submitButton.addEventListener("click", processSubmit));





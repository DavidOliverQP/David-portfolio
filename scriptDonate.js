
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, setDoc, addDoc, doc, collection } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyB-ydXjwl-z25YZX7AkBnnVDbJSyytnPqc",
    authDomain: "portfolio-contact-1ad87.firebaseapp.com",
    projectId: "portfolio-contact-1ad87",
    storageBucket: "portfolio-contact-1ad87.appspot.com",
    messagingSenderId: "853953222478",
    appId: "1:853953222478:web:dc425d6230369387fdb01f",
    measurementId: "G-VCBCEZ25ZB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


window.addEventListener('load', () => {

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

})


const startInteractivity = () => {

    const submitForm = document.querySelector('.button-form');

    submitForm.addEventListener('click', () => { valideForm.validateFormValues() });

    const changeButton = document.querySelectorAll('.choice-donate');
    changeButton.forEach(button => button.addEventListener('click', () => { switchButton.changeButton(button) }))


}


const switchButton = {


    getValueButton() {

        

        let buttonValue = document.querySelector('.choice-donate.actives')

        if(buttonValue != null){
            let buttonReceive = buttonValue.innerHTML;

            if(buttonReceive.includes('Qualquer')){
                this.getButtonActive();
                buttonReceive = "qualquer valor";
                return buttonReceive;
            }
    
            else{
                
                buttonReceive = Number(buttonReceive.replace('R$', '').replace(',00', ''));
    
            }
    
            return buttonReceive;
        }

        else{
            return
        }

       


    },

    getButtonActive() {
        let buttonGet = document.querySelector(".choice-donate.actives");
        if (buttonGet != null) {
            buttonGet.classList.remove('actives');
        }

        else {
            return;
        }


    },

    changeButton(button) {
        let buttonGet = button;
        let buttonReceive = button.innerHTML;

        if(buttonReceive.includes('Qualquer')){
            this.getButtonActive();
            buttonGet = buttonGet.classList.add('actives');
            return;
        }

        else{
            
            buttonReceive = Number(buttonReceive.replace('R$', '').replace(',00', ''));

        }
       


        switch (buttonReceive) {
            case 2: {
                this.getButtonActive();
                buttonGet = buttonGet.classList.add('actives');
                break;
            }

            case 5: {
                this.getButtonActive();
                buttonGet = buttonGet.classList.add('actives');
                break;
            }

            case 10: {
                this.getButtonActive();
                buttonGet = buttonGet.classList.add('actives');
                break;
            }

            case NaN: {
                this.getButtonActive();
                buttonGet = buttonGet.classList.add('actives');
                break;
            }

            default: {
                this.getButtonActive();
                break;
            }
        }


    }


}

const valideForm = {

    validateFormValues() {

        let nameInput = document.getElementById('name');
        let emailInput = document.getElementById('email');
        let message = document.getElementById('message')
        let valor = switchButton.getValueButton();

        if ((nameInput.value).length <= 2) {
            console.log(nameInput)
            toastr.error('Invalid Name')
            this.errorForm(nameInput);

        }

        else {

            this.correctForm(nameInput);

        }

        if ((emailInput.value).length <= 2) {
            toastr.error('Invalid E-mail')
            this.errorForm(emailInput);

        }

        else {

            if (validateEmail(emailInput.value) == false) {

                toastr.error('Invalid E-mail')
                this.errorForm(emailInput);
            }

            else {
                this.correctForm(emailInput);
            }
        }


        if ((nameInput.value).length <= 2 && validateEmail(emailInput.value) == false && valor != null) {
            return;
        }

        else if ((nameInput.value).length > 2 && validateEmail(emailInput.value) != false && valor != null) {
            this.sendForm(nameInput.value, emailInput.value, message.value, valor);
        }



    },

    errorForm(input) {

        let inputError = input;
        let fatherElement = inputError.parentNode;
        fatherElement.classList.add('error');

    },

    correctForm(input) {
        let inputValide = input;
        let fatherElement = inputValide.parentNode;

        if (fatherElement.classList.contains('error')) {
            fatherElement.classList.remove('error');
        }

        else {
            return;
        }
    },

    sendForm(name, email, message, valor) {

        let validateName = name;
        let validateEmail = email;
        let validateMessage = message;

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        let hora = today.getHours(); // => 9
        let minuts = today.getMinutes(); // =>  30
        let segundos = today.getSeconds(); // => 51

        let horas = "";

        horas = hora + ":" + minuts + ":" + segundos;

        today = dd + '/' + mm + '/' + yyyy;

        addDoc(collection(db, "donate"), {
            name: validateName,
            email: validateEmail,
            message: validateMessage,
            value: valor,
            data: today,
            hora: horas,
        })

        toastr["success"]("Message sent")

    }
}





function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}




startInteractivity();




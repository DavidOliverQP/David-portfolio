
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

    const closeModal = document.querySelector('.fa-xmark');
    closeModal.addEventListener('click', ()=>{ renderQrCode.closeModal()});

    const copyQrValue = document.querySelector('.fa-copy');
    copyQrValue.addEventListener('click', () =>{ renderQrCode.copieValue()});
 


}


const switchButton = {


    getValueButton() {



        let buttonValue = document.querySelector('.choice-donate.actives')

        if (buttonValue != null) {
            let buttonReceive = buttonValue.innerHTML;

            if (buttonReceive.includes('Qualquer')) {
                this.getButtonActive();
                buttonReceive = "qualquer valor";
                return buttonReceive;
            }

            else {

                buttonReceive = Number(buttonReceive.replace('R$', '').replace(',00', ''));

            }

            return buttonReceive;
        }

        else {
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

        if (buttonReceive.includes('Qualquer')) {
            this.getButtonActive();
            buttonGet = buttonGet.classList.add('actives');
            return;
        }

        else {

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

        renderQrCode.qrCodeRender(valor)

    }
}

const renderQrCode = {
    qrCodeRender(valor) {

        let h3 = document.querySelector('.qrcode-render h3');

        let valorReceive = valor.toString();

        if(valorReceive.includes('qualquer')){
            h3.innerHTML = "Qualquer valor";
        }

        else{
            h3.innerHTML = "R$" + valor + ",00";
        }
           
        let chavePix = ""

        switch(valor){
            case 2:{
                chavePix = "00020126580014br.gov.bcb.pix01369269cebe-6906-43b2-a8dc-834dc7b06ac552040000530398654042.005802BR5925DAVID DENISSON DE OLIVEIR6015Sao Jose da Laj6211050726f787963043FA2";
                break;
            }
            case 5:{
                chavePix = "00020126580014br.gov.bcb.pix01369269cebe-6906-43b2-a8dc-834dc7b06ac552040000530398654045.005802BR5925DAVID DENISSON DE OLIVEIR6015Sao Jose da Laj6211050726f78796304F8EC";
                break;
            }

            case 10:{
                chavePix = "00020126580014br.gov.bcb.pix01369269cebe-6906-43b2-a8dc-834dc7b06ac5520400005303986540510.005802BR5925DAVID DENISSON DE OLIVEIR6015Sao Jose da Laj6211050726f787963048865";
                break;
            }

            default:{
                chavePix = "00020126580014br.gov.bcb.pix01369269cebe-6906-43b2-a8dc-834dc7b06ac55204000053039865802BR5925DAVID DENISSON DE OLIVEIR6015Sao Jose da Laj6211050726f787963045B04";
                break;
            }
        }


        var qrcode = new QRCode("qrcode", {
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });



        qrcode.makeCode(chavePix);

        let inputQr = document.querySelector('#chave-pix');

        inputQr.defaultValue = chavePix;

        let bodyContent = document.querySelector(".container-qrcode")
        bodyContent.classList.remove('hide');

    },

    closeModal() {
        let bodyContent = document.querySelector(".container-qrcode")

        if (bodyContent != null) {
            window.location.reload();
            bodyContent.classList.add('hide');
        }
        else{
            return
        }
    },

    copieValue(){
        let textoCopiado = document.getElementById("chave-pix");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
        toastr["success"]("Copiado com Sucesso")
    }

}




function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}








startInteractivity();




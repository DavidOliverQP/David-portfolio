
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

window.addEventListener('scroll',  () => {
    let navbar = document.querySelector('.navbar');

    let windowPosition = window.scrollY > 0;

    navbar.classList.toggle('scroll', windowPosition);
});

const startInteractivity = () => {


    const darkButton = document.querySelectorAll('i.fa-regular');
    darkButton.forEach(button => button.addEventListener('click', () => { switchTheme(button) }));
    
    const navbarLinkActive = document.querySelectorAll('.navbar-texts-link');
    navbarLinkActive.forEach(button => button.addEventListener('click', () => { switchButton.getButton(button) }));
    
    const scrollHoverContainer = document.querySelectorAll('.container');
    scrollHoverContainer.forEach(container => container.addEventListener('mouseover', () => { switchScroll.getScroll(container) }))
    
    const buttonOpenNavbar = document.querySelector('.hamburguer-button');
    buttonOpenNavbar.addEventListener('click', () => { navbarInteractive.openNavbar() })
    
    const buttonCloseNavbar = document.querySelector('.navbar-close');
    buttonCloseNavbar.addEventListener('click', () => { navbarInteractive.closeNavbar() })
    
    const formSend = document.querySelector('.button-form');
    formSend.addEventListener('click', () => { valideForm.validateFormValues() })
    


}

const navbarInteractive = {


    closeNavbar() {
        let navbar = document.querySelector('.navbar-items');

        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
        else {

        }
    },
    openNavbar() {
        let navbar = document.querySelector('.navbar-items');

        if (!navbar.classList.contains('show')) {
            navbar.classList.add('show');
        }
        else {

        }
    }

}

const switchScroll = {
    getScroll(value) {
        let container = value;
        this.switchScroll(container);
    },
    switchScroll(value) {
        let container = value;

        if (container.classList.contains('intro')) {
            this.deleteScroll("intro");

        }

        if (container.classList.contains('home')) {
            this.deleteScroll("home");

        }


        if (container.classList.contains('about')) {
            this.deleteScroll("about");

        }

        if (container.classList.contains('experienceaa')) {
            this.deleteScroll("experiences");

        }

        if (container.classList.contains('service')) {
            this.deleteScroll("services");

        }


        if (container.classList.contains('projects')) {
            this.deleteScroll("projects");

        }

        if (container.classList.contains('contact')) {
            this.deleteScroll("contact");

        }

    },
    deleteScroll(value) {
        let deleteActiveNav = document.querySelector('.navbar-texts-link.active');

        if (value == "intro") {
            if (deleteActiveNav != null) {
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-home');
                navActive.classList.add('active');
            }
            else {
                return;
            }
        }

        if (value == "home") {
            if (deleteActiveNav != null) {
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-home');
                navActive.classList.add('active');
            }
            else {
                return;
            }
        }

        if (value == "about") {
            if (deleteActiveNav != null) {
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-about');
                navActive.classList.add('active');
            }
            else {
                return;
            }
        }

        if (value == "services") {
            if (deleteActiveNav != null) {
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-services');
                navActive.classList.add('active');
            }
            else {
                return;
            }
        }

        if (value == "experiences") {
            if (deleteActiveNav != null) {
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-experiences');
                navActive.classList.add('active');
            }
            else {
                return;
            }
        }


        if (value == "projects") {
            if (deleteActiveNav != null) {
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-projects');
                navActive.classList.add('active');
            }
            else {
                return;
            }
        }


        if (value == "contact") {
            if (deleteActiveNav != null) {
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-contact');
                navActive.classList.add('active');
            }
            else {
                return;
            }
        }







    },
}

const switchButton = {

    getButton(button) {
        let buttonCalled = button;

        if (buttonCalled.classList.contains('active')) {
            return;
        }

        else {
            switchButton.removeActive();
            switchButton.modifyButton(buttonCalled);
        }
    },

    modifyButton(button) {
        let modifyButton = button;
        modifyButton.classList.add('active');
    },

    removeActive() {
        let remove = document.querySelector('.navbar-texts-link.active');
        remove.classList.remove('active');
    }

}

const valideForm = {

    validateFormValues() {

        let nameInput = document.getElementById('name');
        let emailInput = document.getElementById('Email');
        let phoneInput = document.getElementById('phone');
        let message = document.getElementById('message')

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

        if ((phoneInput.value).length < 11 || (phoneInput.value).length > 11) {
            toastr.error('Invalid Phone')
            this.errorForm(phoneInput);
        }

        else {
            this.correctForm(phoneInput);
        }

        if ((nameInput.value).length <= 2 && validateEmail(emailInput.value) == false && (phoneInput.value).length < 11 && (phoneInput.value).length > 11) {
            return;
        }

        else if ((nameInput.value).length > 2 && validateEmail(emailInput.value) != false && (phoneInput.value).length == 11) {
            this.sendForm(nameInput.value, emailInput.value, phoneInput.value, message.value);
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

    sendForm(name, email, phone, message) {

        let validateName = name;
        let validateEmail = email;
        let validatePhone = phone;
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

        addDoc(collection(db, "contact"), {
            name: validateName,
            email: validateEmail,
            phone: validatePhone,
            message: validateMessage,
            data: today,
            hora: horas,
        })

        toastr["success"]("Message sent")

    }
}


function switchTheme(button) {

    let buttonCall = button;

    if (buttonCall.classList.contains("dark")) {

        let body = document.querySelector('body');

        if (body.classList.contains("dark-theme")) {
            return;
        }

        else if (body.classList.contains("light-theme")) {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
        }

        else {
            body.classList.add("dark-theme");
        }

    }
    else if (buttonCall.classList.contains("light")) {

        let body = document.querySelector('body');

        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
        }

        else if (body.classList.contains("light-theme")) {
            return;
        }

        else {
            body.classList.add("dark-theme");
        }
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


startInteractivity();



$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoWidth: true,
        margin: 5,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 2
            },
            1280: {
                items: 3
            },
            1980: {
                items: 5
            }

        },
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause:true,

    });
})
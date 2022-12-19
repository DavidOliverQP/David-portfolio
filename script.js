window.addEventListener('scroll', function(){
    let navbar = document.querySelector('.navbar');

    let windowPosition = window.scrollY > 0;

    navbar.classList.toggle('scroll', windowPosition);
});

const navbarInteractive = {
    
   
    closeNavbar(){
        let navbar = document.querySelector('.navbar-items');

        if(navbar.classList.contains('show')){
            navbar.classList.remove('show');
        }
        else{
           
        }
    },
    openNavbar(){
        let navbar = document.querySelector('.navbar-items');

        if(!navbar.classList.contains('show')){
            navbar.classList.add('show');
        }
        else{
           
        }
    }

}

const switchScroll = {
    getScroll(value){
        let container = value;
        this.switchScroll(container);      
    },
    switchScroll(value){
        let container = value;

        if(container.classList.contains('intro')){
            this.deleteScroll("intro");
           
        }

        if(container.classList.contains('home')){
            this.deleteScroll("home");
           
        }


        if(container.classList.contains('about')){
            this.deleteScroll("about");
           
        }

        if(container.classList.contains('experienceaa')){
            this.deleteScroll("experiences");
           
        }

        if(container.classList.contains('service')){
            this.deleteScroll("services");
           
        }


        if(container.classList.contains('projects')){
            this.deleteScroll("projects");
           
        }

        if(container.classList.contains('contact')){
            this.deleteScroll("contact");
           
        }        

    },
    deleteScroll(value){
        let deleteActiveNav = document.querySelector('.navbar-texts-link.active');

        if(value == "intro"){
            if(deleteActiveNav != null){
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-home');
                navActive.classList.add('active');
            }
            else{
                return;
            }
        }

        if(value == "home"){
            if(deleteActiveNav != null){
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-home');
                navActive.classList.add('active');
            }
            else{
                return;
            }
        }

        if(value == "about"){
            if(deleteActiveNav != null){
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-about');
                navActive.classList.add('active');
            }
            else{
                return;
            }
        }

        if(value == "services"){
            if(deleteActiveNav != null){
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-services');
                navActive.classList.add('active');
            }
            else{
                return;
            }
        }

        if(value == "experiences"){
            if(deleteActiveNav != null){
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-experiences');
                navActive.classList.add('active');
            }
            else{
                return;
            }
        }


        if(value == "projects"){
            if(deleteActiveNav != null){
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-projects');
                navActive.classList.add('active');
            }
            else{
                return;
            }
        }


        if(value == "contact"){
            if(deleteActiveNav != null){
                deleteActiveNav.classList.remove('active');
                let navActive = document.querySelector('#navbar-contact');
                navActive.classList.add('active');
            }
            else{
                return;
            }
        }





       
      
    },
}

const switchButton = {

    getButton(button){
        let buttonCalled = button;

        if(buttonCalled.classList.contains('active')){
            return;
        }

        else{
           switchButton.removeActive();
           switchButton.modifyButton(buttonCalled);
        }
    },
    
    modifyButton(button){
        let modifyButton = button;
        modifyButton.classList.add('active');
    },

    removeActive(){
        let remove = document.querySelector('.navbar-texts-link.active');
        remove.classList.remove('active');
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


const darkButton = document.querySelectorAll('i.fa-regular');
darkButton.forEach(button => button.addEventListener('click', function () { switchTheme(button) }));

const navbarLinkActive = document.querySelectorAll('.navbar-texts-link');
navbarLinkActive.forEach(button => button.addEventListener('click', function(){ switchButton.getButton(button)}));

const scrollHoverContainer = document.querySelectorAll('.container');
scrollHoverContainer.forEach(container => container.addEventListener('mouseover', function(){switchScroll.getScroll(container)}))

const buttonOpenNavbar = document.querySelector('.hamburguer-button');
buttonOpenNavbar.addEventListener('click', function(){navbarInteractive.openNavbar()})

const buttonCloseNavbar = document.querySelector('.navbar-close');
buttonCloseNavbar.addEventListener('click', function(){navbarInteractive.closeNavbar()})



 $(".owl-carousel").owlCarousel({
                autoWidth:true,
                margin:5,
                loop: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    1000:{
                        items:2
                    },
                    1280: {
                        items: 3
                    },
                    1980: {
                        items: 5
                    }

                },
                autoplay:true,
                autoplayTimeout: 1500,
                

            });

            $(document).ready(function () {
                $(".owl-carousel").owlCarousel({
                    autoWidth:true,
                    margin:5,
                    loop: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        1000:{
                            items:2
                        },
                        1280: {
                            items: 3
                        },
                        1980: {
                            items: 5
                        }
    
                    },
                    autoplay:true,
                    autoplayTimeout: 1500,
                    
    
                });
            })
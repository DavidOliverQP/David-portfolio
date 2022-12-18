
const darkButton = document.querySelectorAll('i.fa-regular');
darkButton.forEach(button => button.addEventListener('click', function () { switchTheme(button) }))

window.addEventListener('scroll', function(){
    let navbar = document.querySelector('.navbar');

    let windowPosition = window.scrollY > 0;

    navbar.classList.toggle('scroll', windowPosition);
});




function switchTheme(button) {
    let buttonCall = button;
   
    if (buttonCall.classList.contains("dark")) {

        let body = document.querySelector('body');

        if (body.classList.contains("dark-theme")) {
           return
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
            return
        }

        else {
            body.classList.add("dark-theme");
        }
    }
}



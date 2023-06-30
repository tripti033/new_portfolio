(() => {
    const hamburgerbtn = document.querySelector(".hamburger-btn"),
        navMenu = document.querySelector(".nav-menu"),
        closeNavbtn = navMenu.querySelector(".close-nav-menu");

    hamburgerbtn.addEventListener("click", showNavMenu);
    closeNavbtn.addEventListener("click", hideNavmenu);

    function showNavMenu() {
        navMenu.classList.toggle("open");
        bodyScrollingToggle();
    }

    function hideNavmenu() {
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();

    }

    function fadeOutEffect() {
        document.querySelector("fade-out-effect").classList.add("active");
        setTimeout(() => {
            document.querySelector("fade-out-effect").classList.remove("active");

        }, 300)
    }

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains('link-item')) {
            if (event.target.hash !== "") {
                event.preventDefault();
                const hash = event.target.hash;
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");

                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active");
                event.target.classList.add("active");
                event.target.classList.remove("outer-shadow", "hover-in-shadow");
                hideNavmenu();
            }
        }
    })
})();


/*about section */

(
    ()=>{
        const aboutSection=document.querySelector(".about-section"),tabsContainer = document.querySelector(".about-tabs");

        tabsContainer.addEventListener("click" , (event) =>{

            if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){

                
                const target= event.target.getAttribute("data-target");
                console.log(target);
                
                tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");

                

                event.target.classList.add("active","outer-shadow");

                aboutSection.querySelector(".tab-content.active").classList.remove("active");

                aboutSection.querySelector(target).classList.add("active");
                
            }
        })
    }
)();




(() => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        if (!section.classList.contains("active")) {
            section.classList.add("hide");
        }
    })
})();

window.addEventListener("load", () => {
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 600)
})

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "tripti033bteceai21@igdtuw.ac.in",
        Password: "",
        To: 'tripti033bteceai21@igdtuw.ac.in',
        From: document.getElementById("email").value,
        Subject: "Enter the subject",
        Body: "Name: +" + document.getElementById("name").value +
            "<br> Email"
    }).then(
        message => alert(message)
    );
}



var typed = new Typed(".typing", {
    strings: ["Software Engineer", "Front-End Developer",  "UI/UX Designer","Community Builder", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
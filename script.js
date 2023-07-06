// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
});


// Typing Effect

let typed = new Typed('.auto-input',{
    strings: ['Srpski Pesnik', 'Tekstopisac', 'Pisac', 'Glumac'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
});


let navLinks = document.querySelectorAll('nav ul li a')

let sections = document.querySelectorAll('section')
console.log(sections)


window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});

function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

const serviceID = "service_vzgiitv";
const templateID = "template_n9owmqv";

emailjs.send(serviceID,templateID,params)
.them(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your text sent successfully")
    }
)
.catch((err) => console.log(err));
}


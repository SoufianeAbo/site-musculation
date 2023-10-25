const questions = document.querySelectorAll(".faq");

    questions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;

            if (answer.style.display === "block") {
                answer.style.display = "none";
                question.style.borderRadius = "30px";
            } else {
                answer.style.display = "block";
                question.style.borderRadius = "30px 30px 0px 0px";
            }
        });
    });

const hamburger = document.querySelector(".mobile");
const navmenu = document.querySelector(".burgerMenu");

hamburger.addEventListener("click", () =>{
    if (navmenu.style.display === "none") {
        navmenu.style.display = "block";
    } else {
        navmenu.style.display = "none";
    }
})

function saveData(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var cin = document.getElementById('cin').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var choice = document.getElementById('choice').value;


    if (name.length < 3) {
        alert("Le nom et prénom doivent contenir au moins 3 caractères.");
        return;
    }

    if (cin.length !== 7) {
        alert("Le CIN doit contenir exactement 7 caractères.");
        return;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("L'adresse email n'est pas valide.");
        return;
    }

    if (!phone.startsWith("+212")) {
        alert("Le numéro de téléphone doit commencer par +212.");
        return;
    }

    var formData = {
        name: name,
        cin: cin,
        email: email,
        phone: phone,
        choice: choice,
    };


    var existingData = localStorage.getItem('formData');
    if (existingData) {
        existingData = JSON.parse(existingData);
    } else {
        existingData = [];
    }


    existingData.push(formData);


    localStorage.setItem('formData', JSON.stringify(existingData));


    var successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
}
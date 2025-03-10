document.addEventListener("click", (event) => {
    if (event.target.id === "visiteur") {
        document.getElementById("un").style.display = "block"
        document.getElementById("deux").style.display = "none"

    } else if (event.target.id === "organisateur") {
        document.getElementById("deux").style.display = "block"
        document.getElementById("un").style.display = "none"
    } 
});


// document.querySelectorAll(".envoyer").forEach(button => {
//     button.onclick = (event) => {
//         event.preventDefault(); 

        
//         gsap.to(".inscription", {
//             x: 509, 
//             duration: 1,
//             onComplete: () => {
//                 document.getElementById("inscription").style.display = "none";
//             }
//         });

//         gsap.to(".pub", {
//             x: -509,
//             duration: 1,
//             onComplete: () => {
//                 document.getElementById("pub").style.display = "none";
//             }
//         });

//         setTimeout(() => {
//             event.target.closest("form").submit();
//         }, 1200);
        
//         setTimeout(() => {
//             window.location.href = "connexion.html";
//         }, 1200);
//     };
// });
document.querySelectorAll(".envoyer").forEach(button => {
    button.onclick = (event) => {
        event.preventDefault(); 

        let form = event.target.closest("form"); 
        let inputs = form.querySelectorAll("input[required], textarea[required]"); 
        let allFilled = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
                input.style.border = "2px solid red"; 
            } else {
                input.style.border = ""; 
            }
        });

        if (!allFilled) {
            alert("Veuillez remplir tous les champs avant d'envoyer.");
            return;
        }

        gsap.to(".inscription", {
            x: 509, 
            duration: 1,
            onComplete: () => {
                document.getElementById("inscription").style.display = "none";
            }
        });

        gsap.to(".pub", {
            x: -509,
            duration: 1,
            onComplete: () => {
                document.getElementById("pub").style.display = "none";
            }
        });

        setTimeout(() => {
            form.submit();
        }, 1200);

        setTimeout(() => {
            window.location.href = "connexion.html";
        }, 1200);
    };
});



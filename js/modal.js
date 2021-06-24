// grabbing DOM element 
const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");
const aboutLink = document.querySelector(".about-link");
const whyMeBtn = document.querySelector(".why-me");

// simple function that opens modal when about and why me links are pressed
function openModal() {
    aboutLink.addEventListener("click", () => {
        modal.style.display = "block";
    })
    whyMeBtn.addEventListener("click", () => {
        modal.style.display = "block";
    })
}

// close modal when close button is pressed
function closeModal() {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    })
}

// Calling functions
openModal();
closeModal();
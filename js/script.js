const section = document.querySelectorAll('.section');
const secbtns = document.querySelectorAll('.controls');
const secbtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');

function pageTransitions() {
    // Button click active class
    for (let i = 0; i < secbtn.length; i++) {
        secbtn[i].addEventListener('click', function () {
            let currentbtn = document.querySelector('.active-btn');
            if (currentbtn) {
                currentbtn.classList.remove('active-btn');
            }
            // Add the active class to the clicked button
            this.classList.add('active-btn');

            // Get the associated section using this button's data-id
            const sectionId = this.dataset.id;
            const currentSection = document.querySelector('.active');

            // Remove active class from the current section, if any
            if (currentSection) {
                currentSection.classList.remove('active');
            }

            // Add active class to the new section
            const newSection = document.getElementById(sectionId);
            if (newSection) {
                newSection.classList.add('active');
            }
        });
    }
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");});
}

pageTransitions();

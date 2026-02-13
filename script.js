// Scroll Progress Bar
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / height) * 100;
    document.querySelector(".progress-bar").style.width = scrollPercent + "%";
});

// Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(section => {
        const elementTop = section.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

reveals.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";
});

// Filter Gallery
const buttons = document.querySelectorAll(".filter-buttons button");
const items = document.querySelectorAll(".item");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".filter-buttons .active").classList.remove("active");
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        items.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / height) * 100;
    document.querySelector(".progress-bar").style.width = scrollPercent + "%";
});

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / height) * 100;
    document.querySelector(".progress-bar").style.width = scrollPercent + "%";
});

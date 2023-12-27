//Header fixed

window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 991) {
        if (docScrollTop > 100) {
            document.querySelector("header").classList.add("fixed");
        } else {
            document.querySelector("header").classList.remove("fixed");
        }
    }
}



//Navbar links

const navbar = document.querySelector("navbar");
a = navbar.querySelector("a");

a.forEach(function (element) {
    element.addEventListener("click", function () {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove("active")
        }
        this.classList.add("active");
        document.querySelector(".navbar").classList.toggle("show");
    })
})


//Hamburger


const hamBurger = document.querySelector(".hamburger");

hamBurger.addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("show")
});

//Portfolio Gallery

const filterBtn = document.querySelector("#filterBtn").children;
const item = document.querySelector(".gallery").children;



for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        for (let j = 0; j < filterBtn.length; j++) {
            filterBtn[j].classList.remove("active");
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target");
        for (let k = 0; k < item.length; k++) {
            item[k].style.display = "none";
            if (target == item[k].getAttribute("data-id")) {
                item[k].style.display = "block";
            }
            if (target == "all") {
                item[k].style.display = "block";
            }
        }
    });
}

const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

















































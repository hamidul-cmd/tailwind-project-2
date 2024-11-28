///responsive nav code start

let open = document.querySelector(".active")
let close = document.querySelector(".close")
let manu = document.querySelector(".manu")


open.addEventListener("click", () => {
    manu.classList.toggle("active");
    open.style.display = "none";
    close.style.display = "block";
    document.body.classList.toggle("active")

})
close.addEventListener("click", () => {
    manu.classList.toggle("active");
    close.style.display = "none";
    open.style.display = "block";
    document.body.classList.toggle("active")
})
// responsive nav code over
//slider code start

let left = document.querySelector(".left__arrow");
let right = document.querySelector(".right__arrow");
let slider = document.querySelector(".cird__box");
let cird = document.querySelectorAll(".cird");

let sliderNumber = 1;
const length = cird.length;

//start dots script
const buttons = document.querySelector(".buttons");

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "dots";
    buttons.appendChild(div);
}

const dots = document.querySelectorAll(".dots");
dots[0].style.backgroundColor = "#1F2B6C";
const resetbg = () => {
    dots.forEach((button) => {
        button.style.backgroundColor = "#BFD2F8"
    });
};

dots.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetbg();
        slider.style.transform = `translateX(-${i * 337}px)`;
        sliderNumber = i + 1;
        button.style.backgroundColor = "#1F2B6C";
    });
});

const changecolor = () =>  {
    resetbg()
    dots[sliderNumber-1].style .backgroundColor = "#1F2B6C";
}; 
//over dots script

//start arrow script

const nextslider = () => {
    slider.style.transform = `translateX(-${sliderNumber * 337}px)`;
    sliderNumber++;
}

const prevslider = () => {
    slider.style.transform = `translateX(-${(sliderNumber - 2) * 337}px)`;
    sliderNumber--;
}

const getfristslide = () => {
    slider.style.transform = `translateX(0px)`;
    sliderNumber = 1;
}

const getlastslide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 337}px)`;
    sliderNumber = length;
}

right.addEventListener("click", () => {
    sliderNumber < length ? nextslider() : getfristslide();
    changecolor();
});

left.addEventListener("click", () => {
    sliderNumber > 1 ? prevslider() : getlastslide();
    changecolor();
});


//over arrow script

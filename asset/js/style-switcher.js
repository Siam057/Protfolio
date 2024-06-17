/* =========================================== togol style swither ===============================================   */

const styleSwitherToggler = document.querySelector(".style-swither-toggler");
styleSwitherToggler.addEventListener("click", () => {
    document.querySelector('.style-swither').classList.toggle("open");
});

// hid style swither on scroll

window.addEventListener("scroll", () => {
    if(document.querySelector('.style-swither').classList.contains("open"))
        {
            document.querySelector('.style-swither').classList.remove("open");
        }
});



/* =========================================== thems colors ===============================================   */

const alternetstyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color)
{
    alternetstyle.forEach((style) => {
        if(color === style.getAttribute('title')){
            style.removeAttribute("disabled")
        }

        else
        {
            style.setAttribute("disabled", "true")
        }
    })
}

/* =========================================== thems light and drak mode ===============================================   */

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener( "click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");

    document.body.classList.toggle("dark")

})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
        {
            dayNight.querySelector("i").classList.add("fa-sun");
        }

        else{
            dayNight.querySelector("i").classList.add("fa-moon");
        }
});

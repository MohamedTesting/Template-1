let icon_toggle_Menu = document.querySelector(".header .links .icon");
let ul_toggle_Menu = document.querySelector(".header .links");
let ele_toggle = document.querySelectorAll(".header .links li a");
let arr_ele_toggle = Array.from(ele_toggle)



// let test = false

icon_toggle_Menu.onclick = function () {
    ul_toggle_Menu.classList.toggle("active")
}
arr_ele_toggle.forEach(ele => {
    ele.addEventListener("click", function () {
        ul_toggle_Menu.classList.remove("active")
        let test = true
        // if (test == true && ) {
        // console.log("anas");

        // ul_toggle_Menu.classList.remove("active")

        // }
    })

    // Hidden When Click any where in Body
})


// -----------------------------------------------------
/*
let body = document.querySelector("body")
let test = false
let testFunction = function () {
    test = true
}


body.onclick = function () {
    testFunction()
}
if (test == true) {
    console.log("gooooo");
}
*/
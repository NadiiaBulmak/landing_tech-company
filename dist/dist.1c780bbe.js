"use strict";
var form = document.getElementById("form");
form.addEventListener("submit", function(e) {
    e.preventDefault(), form.reset();
});
var menuToggle = document.querySelector(".icon--menu"), closeButton = document.querySelector(".icon--close"), body = document.body, menu = document.getElementById("menu"), menuLinks = document.querySelectorAll(".menu__nav a");
menuToggle.addEventListener("click", function() {
    body.classList.add("no-scroll"), menu.classList.add("open");
}), closeButton.addEventListener("click", function() {
    body.classList.remove("no-scroll"), menu.classList.remove("open");
}), menuLinks.forEach(function(e) {
    e.addEventListener("click", function() {
        body.classList.remove("no-scroll"), menu.classList.remove("open");
    });
});

//# sourceMappingURL=dist.1c780bbe.js.map

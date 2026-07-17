const btn = document.getElementById("toggleBtn");
const bio = document.getElementById("bio");

btn.addEventListener("click", function () {

    if (bio.classList.contains("hidden")) {
        bio.classList.remove("hidden");
        btn.textContent = "Show less";
    } else {
        bio.classList.add("hidden");
        btn.textContent = "Show more";
    }

});
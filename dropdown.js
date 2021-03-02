let dropBtn = document.getElementById("myDropdown")

let profileIcon = document.getElementById("profile-link")

dropBtn.addEventListener("click", function () {
    if (document.body.clientWidth <= 768) {
        document.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
        document.getElementById("profile-link").classList.toggle("dropdown-open");
    }
});

window.onclick = function(event) {
    if (!event.target.matches('#myDropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content")[0];
        if (dropdowns.classList.contains('show') ) {
            dropdowns.classList.remove('show');
            profileIcon.classList.remove("dropdown-open");            
        }
    }
}

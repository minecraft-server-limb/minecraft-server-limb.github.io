

const scrollLinks = document.querySelectorAll('.scroll');
scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        const offsetTop = target.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});


function mobile_navbar_link_hider() {
    var x = document.getElementById("mobile_navbar_links");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function copyText() {
    navigator.clipboard.writeText
    ("limb.mc-shock.com");
}

$(document).ready(function () {
    $('.main1_ipcopier').click(function () {
        var popup = $('<div>', {class: 'main1_popup'})
            .append($('<h3 class="copy_confirm">').text('Copied IP to clipboard'))
        $(this).after(popup);
        setTimeout(function () {
            popup.remove();
        }, 1000);
    });
});

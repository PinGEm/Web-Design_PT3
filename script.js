const aboutme_image = document.getElementById('marcus_pfp');
aboutme_image.addEventListener("mouseover", changeImage);

function changeImage(){
    aboutme_image.style.content = "url('Images/Marcus/nice.png')";
}





// When Site Loads Up
window.addEventListener('DOMContentLoaded', scrollSiteUp);

function scrollSiteUp()
{
    setTimeout(() => {
        window.scrollTo(0,0);
    }, 100);
}
// search bar 

const btn = document.querySelector('.searchbar');
const text = document.getElementById('searchText');
btn.style.position = 'relative';
btn.style.paddingTop = '10px';
btn.style.paddingBottom = '10px';
btn.addEventListener('click', function() {
    btn.style.border = '2px solid white';
    text.style.opacity = '1';
});
btn.addEventListener('blur', function() {
    btn.style.border = '';
    text.style.opacity = '0';
});

    // theme button
     
            const darkIcon = document.getElementById('darkModeIcon');
            const lightIcon = document.getElementById('lightModeIcon');
            const themeOptions = document.getElementById('themeOptions');
            const setDark = document.getElementById('setDark');
            const setLight = document.getElementById('setLight');

            darkIcon.onclick = () => {
                themeOptions.style.display = themeOptions.style.display === 'block' ? 'none' : 'block';
            };
            lightIcon.onclick = () => {
                themeOptions.style.display = themeOptions.style.display === 'block' ? 'none' : 'block';
            };
            setDark.onclick = () => {
                document.body.classList.add('dark-theme');
                document.body.classList.remove('light-theme');
                darkIcon.style.display = 'none';
                lightIcon.style.display = 'inline';
                themeOptions.style.display = 'none';
            };
            setLight.onclick = () => {
                document.body.classList.add('light-theme');
                document.body.classList.remove('dark-theme');
                darkIcon.style.display = 'inline';
                lightIcon.style.display = 'none';
                themeOptions.style.display = 'none';
            };
            // Optional: Hide themeOptions when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.theme-toggle')) {
                    themeOptions.style.display = 'none';
                }
            });

            



//hero section slide show 

let slideIndex = 1;
let slideTimer = null;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    resetTimer();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetTimer();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
    slideTimer = setTimeout(autoSlide, 2000);
}

function resetTimer() {
    clearTimeout(slideTimer);
    slideTimer = setTimeout(autoSlide, 2000);
}

resetTimer();
  

// HEART ICON //

                document.querySelectorAll('#heart10').forEach(function(icon) {
                    icon.addEventListener('click', function() {
                        this.classList.toggle('fa-solid');
                        this.classList.toggle('fa-regular');
                        this.style.color = this.classList.contains('fa-solid') ? 'red' : '#a8a8a8';
                    });
                });
             
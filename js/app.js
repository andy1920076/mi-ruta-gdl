// ====================
// HEADER
// ====================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header--scroll');
    } else {
        header.classList.remove('header--scroll');
    }
});
const btnMenu = document.querySelector('.header__hamburguesa');
const nav = document.querySelector('.header__nav');

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// ====================
// HERO
// ====================
const heroImg = document.querySelector('.hero__imagen img');

window.addEventListener('load', () => {
    heroImg.style.opacity = "0";
    heroImg.style.transform = "translateY(50px)";

    setTimeout(() => {
        heroImg.style.transition = "all 1s ease";
        heroImg.style.opacity = "1";
        heroImg.style.transform = "translateY(0)";
    }, 300);
});

// ====================
// BENEFICCIOS
// ====================
const beneficios = document.querySelectorAll('.beneficio');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

beneficios.forEach(b => {
    b.style.opacity = "0";
    b.style.transform = "translateY(40px)";
    b.style.transition = "all 0.6s ease";
    observer.observe(b);
});

// ====================
// COMOFUNCIONA
// ====================
const pasos = document.querySelectorAll('.paso');

const observerFunciona = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

pasos.forEach(p => {
    p.style.opacity = "0";
    p.style.transform = "translateY(60px)";
    p.style.transition = "all 0.7s ease";
    observerFunciona.observe(p);
});

// ====================
// PRECIOS
// ====================
const track = document.querySelector('.precios__track');
const slides = document.querySelectorAll('.plan');
const dots = document.querySelectorAll('.dot');

let index = 0;

function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
}

// Flechas
document.querySelector('.precios__arrow--left').onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
};

document.querySelector('.precios__arrow--right').onclick = () => {
    index = (index + 1) % slides.length;
    updateSlider();
};

// Dots
dots.forEach((dot, i) => {
    dot.onclick = () => {
        index = i;
        updateSlider();
    };
});

// Auto slider (🔥 5000 como pediste)
setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlider();
}, 7000);

// ====================
// SEGURIDAD
// ====================
const tabs = document.querySelectorAll('.seguridad__tab');
const contents = document.querySelectorAll('.seguridad__item');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        // quitar activos
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // activar actual
        tab.classList.add('active');

        const id = tab.getAttribute('data-tab');
        document.querySelector(`[data-content="${id}"]`).classList.add('active');
    });
});

// ====================
// CERRAR MENU AL HACER CLICK
// ====================
const links = document.querySelectorAll('.header__link');

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

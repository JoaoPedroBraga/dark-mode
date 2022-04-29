function mudaTema (){
    mudaClasses();
    mudaTexto();
}

function mudaClasses(){
    btn.classList.toggle(darkClass);
    h1.classList.toggle(darkClass);
    body.classList.toggle(darkClass);
    footer.classList.toggle(darkClass);
}

function mudaTexto(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkClass)){
        btn.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    btn.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}

const darkClass = 'dark-mode';
const btn = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


btn.addEventListener('click', mudaTema);


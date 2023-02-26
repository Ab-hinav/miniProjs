const panels = document.querySelectorAll('.panel');

const toggleActive = (panel) => {
    removeActiveClasses();
    panel.classList.add('active');
}

const removeActiveClasses = () => {
    panels.forEach(panel => panel.classList.remove('active'));
}

panels.forEach(panel => panel.addEventListener('click', toggleActive.bind(null, panel)));

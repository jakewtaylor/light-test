(() => {
    const TARGET_LIGHT_SIZE = 175;

    const root = document.documentElement;
    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
        duration: window.innerHeight * 2,
        offset: 1,
    });

    scene.setPin('#pinned')
        .addTo(controller)
        .setClassToggle('#lamp', 'lighting')

    scene.on('progress', ({ progress }) => {
        const size = progress * TARGET_LIGHT_SIZE;
        setVariable('light-size', `${size}vw`);
    });
})();

function getVariable (name) {
    return getComputedStyle(document.body).getPropertyValue(`--${name}`);
}

function setVariable (name, value) {
    document.documentElement.style.setProperty(`--${name}`, value);
}


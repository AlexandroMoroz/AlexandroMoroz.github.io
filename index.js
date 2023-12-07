window.sr = ScrollReveal();

sr.reveal('.yo', {
    duration: 1500,
    origin: window.innerWidth < 768 ? "top" : "top", 
    distance: window.innerWidth < 768 ? "50px" : "50px",
    reset: true,
    viewOffset: {
        top: 61
    }
})

sr.reveal('.bot-left', {
    duration: 1500,
    origin: window.innerWidth < 768 ? "bottom" : "left", 
    distance: window.innerWidth < 768 ? "50px" : "-50px",
    reset: true,
    viewOffset: {
        top: 61
    }
});

sr.reveal('.bot-right', {
    duration: 1500,
    origin: window.innerWidth < 768 ? "bottom" : "right", 
    distance: window.innerWidth < 768 ? "50px" : "-50px",
    reset: true,
    viewOffset: {
        top: 61
    }
});

sr.reveal('.bot-bot', {
    duration: 1500,
    origin: window.innerWidth < 768 ? "bottom" : "bottom", 
    distance: window.innerWidth < 768 ? "50px" : "50px",
    reset: true,
    viewOffset: {
        top: 61
    }
});

sr.reveal('.rep1', {
    duration: 2000,
    origin: window.innerWidth < 768 ? "bottom" : "right", 
    distance: window.innerWidth < 768 ? "50px" : "-50px",
    reset: true,
    viewOffset: {
        top: 61
    }
})

sr.reveal('.rep2', {
    duration: 2000,
    origin: window.innerWidth < 768 ? "bottom" : "left", 
    distance: window.innerWidth < 768 ? "50px" : "-50px",
    reset: true,
    viewOffset: {
        top: 61
    }
})

sr.reveal('.rep3', {
    duration: 2000,
    origin: "bottom", 
    distance: "50px",
    reset: true,
    viewOffset: {
        top: 61
    }
})
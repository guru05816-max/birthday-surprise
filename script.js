/* =================================
   GLOBAL MUSIC
================================= */

const music =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicControl");


/* =================================
   OPEN SURPRISE
================================= */

function openSurprise() {

    // Start music
    startMusic();


    // Show surprise
    const surprise =
        document.getElementById("surprise");


    if (surprise) {

        surprise.style.display = "block";

    }


    // Celebration
    createHearts();

    createConfetti();


    // Move to Page 2
    setTimeout(function () {

        showPage("page2");

    }, 1800);

}


/* =================================
   START MUSIC
================================= */

function startMusic() {

    if (!music) {
        return;
    }


    music.volume = 0.5;


    music.play()
        .then(function () {

            updateMusicButton(true);

        })
        .catch(function (error) {

            console.log(
                "Music could not start:",
                error
            );

        });

}


/* =================================
   MUSIC ON / OFF
================================= */

function toggleMusic() {

    if (!music) {
        return;
    }


    if (music.paused) {

        music.play()
            .then(function () {

                updateMusicButton(true);

            })
            .catch(function (error) {

                console.log(
                    "Music could not start:",
                    error
                );

            });

    } else {

        music.pause();

        updateMusicButton(false);

    }

}


/* =================================
   MUSIC BUTTON UPDATE
================================= */

function updateMusicButton(isPlaying) {

    if (!musicButton) {
        return;
    }


    if (isPlaying) {

        musicButton.innerHTML = "🎵";

        musicButton.classList.add(
            "playing"
        );

    } else {

        musicButton.innerHTML = "🔇";

        musicButton.classList.remove(
            "playing"
        );

    }

}


/* =================================
   PAGE NAVIGATION
================================= */

function showPage(pageId) {

    const screens =
        document.querySelectorAll(
            ".screen"
        );


    screens.forEach(function (screen) {

        screen.classList.remove(
            "active-screen"
        );

    });


    const page =
        document.getElementById(pageId);


    if (page) {

        page.classList.add(
            "active-screen"
        );

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =================================
   PAGE 2 → PAGE 3
================================= */

function goToFinalPage() {

    showPage("page3");

}


/* =================================
   FINAL CELEBRATION
================================= */

function celebrate() {

    // Keep music playing
    if (
        music &&
        music.paused
    ) {

        startMusic();

    }


    // Big celebration
    createBigCelebration();

}


/* =================================
   NORMAL CONFETTI
================================= */

function createConfetti() {

    const items = [

        "🎉",
        "✨",
        "💖",
        "🌹",
        "🎈",
        "💕"

    ];


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const item =
            document.createElement("div");


        item.className =
            "celebration-item";


        item.innerHTML =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];


        item.style.left =
            Math.random() * 100 + "vw";


        item.style.top =
            "-50px";


        item.style.fontSize =
            Math.random() * 15 + 14 + "px";


        const duration =
            Math.random() * 2.5 + 2.5;


        item.style.animationDuration =
            duration + "s";


        document.body.appendChild(
            item
        );


        setTimeout(function () {

            item.remove();

        }, duration * 1000 + 500);

    }

}


/* =================================
   FALLING HEARTS
================================= */

function createHearts() {

    const hearts = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💓"

    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.className =
            "celebration-item";


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.top =
            "-50px";


        heart.style.fontSize =
            Math.random() * 18 + 15 + "px";


        const duration =
            Math.random() * 3 + 3;


        heart.style.animationDuration =
            duration + "s";


        document.body.appendChild(
            heart
        );


        setTimeout(function () {

            heart.remove();

        }, duration * 1000 + 500);

    }

}


/* =================================
   BIG FINAL CELEBRATION
================================= */

function createBigCelebration() {

    const items = [

        "🎉",
        "🎈",
        "💖",
        "💕",
        "✨",
        "🌟",
        "⭐",
        "🌹",
        "❤️",
        "🎊"

    ];


    for (
        let i = 0;
        i < 130;
        i++
    ) {

        const item =
            document.createElement("div");


        item.className =
            "celebration-item";


        item.innerHTML =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];


        item.style.left =
            Math.random() * 100 + "vw";


        item.style.top =
            "-60px";


        item.style.fontSize =
            Math.random() * 22 + 14 + "px";


        const duration =
            Math.random() * 4 + 3;


        item.style.animationDuration =
            duration + "s";


        document.body.appendChild(
            item
        );


        setTimeout(function () {

            item.remove();

        }, duration * 1000 + 700);

    }


    // Extra hearts
    setTimeout(function () {

        createHearts();

    }, 500);


    // Extra confetti
    setTimeout(function () {

        createConfetti();

    }, 1000);

}


/* =================================
   BACKGROUND PARTICLES
================================= */

function createBackgroundParticles() {

    const container =
        document.getElementById(
            "backgroundParticles"
        );


    if (!container) {
        return;
    }


    const particles = [

        "✨",
        "💕",
        "🌹",
        "⭐",
        "💖"

    ];


    for (
        let i = 0;
        i < 20;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.className =
            "background-particle";


        particle.innerHTML =
            particles[
                Math.floor(
                    Math.random() *
                    particles.length
                )
            ];


        particle.style.left =
            Math.random() * 100 + "vw";


        particle.style.fontSize =
            Math.random() * 15 + 10 + "px";


        particle.style.animationDuration =
            Math.random() * 10 + 8 + "s";


        particle.style.animationDelay =
            Math.random() * 8 + "s";


        container.appendChild(
            particle
        );

    }

}


/* =================================
   MUSIC EVENTS
================================= */

if (music) {

    music.addEventListener(
        "play",
        function () {

            updateMusicButton(true);

        }
    );


    music.addEventListener(
        "pause",
        function () {

            updateMusicButton(false);

        }
    );

}


/* =================================
   START BACKGROUND EFFECTS
================================= */

createBackgroundParticles();
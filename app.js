var typed = new Typed(".multi-text", {
    strings:["Video Editor", "Frontend Developer", "Youtuber"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
})

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-fill');
    setTimeout(() => {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            if (targetWidth) {
                bar.style.width = targetWidth;
            }
        });
    }, 300);

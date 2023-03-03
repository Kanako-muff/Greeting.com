document.getElementById("js-dl-png").onclick = function() {
    const screenshotTarget = document.getElementById("js-result-design-container");
    
    html2canvas(screenshotTarget).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");

        /* create DL link */
        var anchor = document.createElement('a');
        anchor.setAttribute("href", base64image);
        anchor.setAttribute("download", "my-greeting-card.png") // ⬅︎ set the name of download file.
        anchor.click();
        anchor.remove();
    })
}
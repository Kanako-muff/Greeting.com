window.onload = function() {
    /* Current card-design-background */
    const cardDesignBackground = document.getElementsByClassName('card-design-background');
    // console.log(cardDesignBackground);

    // /* bg-img selector */
    const bgimgItemPanel = document.querySelectorAll('.bgimg-item-panel'); 

    /* bg-color selector */
    const bgclrItemPanels = document.querySelectorAll('.bgclr-item-panel'); //<img>
    const bgclrItemPanelsParent = document.querySelectorAll('.select-bgclr-item'); //<li>


    /* bg-image selector's click event */
    bgimgItemPanel.forEach((panel) => {
        panel.addEventListener("click", event => {
            console.log("clicked");
            const imgURL = panel.src;
            cardDesignBackground[0].style.backgroundImage = `url("${imgURL}")`;
            event.preventDefault();
            // ⬆︎Prevent loading(resetting) just after this event.
        })
    })

    /* bg-color selector's click event */
    bgclrItemPanels.forEach((panel) => {
        panel.addEventListener("click", event => {
            const imgURL = panel.src;
            cardDesignBackground[0].style.backgroundImage = `url("${imgURL}")`;
            event.preventDefault();
            // ⬆︎Prevent loading(resetting) just after this event.
        })
    })   
}
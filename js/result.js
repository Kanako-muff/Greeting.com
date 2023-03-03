const designDoneBtn = document.querySelector('#js-design-done-btn');   
   
    /* Clicking "Done!" button triggers events */
    designDoneBtn.addEventListener("click", event => {

        /* Prevent Bug */
        event.preventDefault();
        event.stopPropagation();


        /* Designing Section */
        const uploadedImage = document.querySelector('#js-image-preview');
        const selectedBgImage = document.querySelector('#js-design-background');
        const inputTitle = document.querySelector('#js-input-title').value;
        const inputMessage1 = document.querySelector('.card-design-message1').value;
        const inputMessage2 = document.querySelector('.card-design-message2').value;
        const inputMessage3 = document.querySelector('.card-design-message3').value;
        const inputMessage4 = document.querySelector('.card-design-message4').value;
        const inputMessage5 = document.querySelector('.card-design-message5').value;


        /* Result Section */
        const resultTitleElement = document.querySelector('#js-title');
        const resultImageParent = document.querySelector('#js-result-img-container');
        const resultBGimgElemet = document.querySelector('#js-design-background');
        const resultMessageParent = document.querySelector('#js-result-message-container');


        /* Event */
        resultTitleElement.innerText = inputTitle;
        resultImageParent.innerHTML = `<img id="js-image-preview" src="${uploadedImage.src}">`;
        resultMessageParent.innerHTML = 
        `
            <p class="card-design-message">${inputMessage1}</p>
            <p class="card-design-message">${inputMessage2}</p>
            <p class="card-design-message">${inputMessage3}</p>
            <p class="card-design-message">${inputMessage4}</p>
            <p class="card-design-message">${inputMessage5}</p>
        `;


        //【???】
        resultBGimgElemet.style.backgroundImage = `url("${selectedBgImage.style.backgroundImage}")`;

    })
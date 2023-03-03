const uploadImageModule = (() => {
    const inputElement = document.getElementById('js-image');
    const previewElement = document.getElementById('js-image-preview');

    inputElement.addEventListener("change", event => {
        /* Codes to prevent unexpected bug */
        event.preventDefault(); // ①
        event.stopPropagation(); // ②
        // ① Disables default events for the element.
        // ② Prevent influencing the event from the child to its parent element.
    
        /* "change" event on  <input type="file"> returns list of files */
        const file = event.target.files[0]; 
        //⬆︎ Values used in this event are stored in "target" property.
        //⬆︎ Multiple files can be uploaded, so they're stored as an array.
        //⬆︎ Only a file is needed in this time, so "files[0]";
    
        /* Checks if ①there is a file || ②the file is an image file or not */
        if(!file || !file.type.match(/image\/*/)) {
            /* ⬇︎ When you chose nothing or non-image file */
            alert('Choose a image file.');
            return false;
        }
    
        /* Generate an instance of fileReader, an object to read the local file */ 
        const reader = new FileReader();
        console.log(reader);
    
        /* Set the result of FileReader reading --uploaded image file data-- to src of img element */
        reader.addEventListener('load', event => {
            previewElement.setAttribute('src', event.target.result);
            console.log(`a`);
        });
    
        /* Read the set object */
        reader.readAsDataURL(file);
    });
})();
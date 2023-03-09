const link = encodeURI(window.location.href);
const msg = encodeURIComponent("Here's a greeting card for you!");
const title = encodeURIComponent(document.querySelector('title').textContent);

console.log([link, msg, title]);

const fb = document.querySelector('.js-facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector('.js-twitter');
twitter.href = `http://twitter.com/share?url=${link}`; //&hashtags=programming

const instagram = document.querySelector('.js-instagram');
twitter.href = `https://twitter.com/share?&url=${link}&text={msg}`;

const whatsapp = document.querySelector('.js-whatsapp');
whatsapp.href = `https://twitter.com/share?&url=${link}&text={msg}`;
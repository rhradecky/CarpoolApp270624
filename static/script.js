// Get a reference to the background div (for welcome page)
const backgroundDiv = document.getElementById('background');

// Change the background image dynamically (you can customize this logic)
function changeBackgroundImage() {
    const randomImage = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add your image filenames
    const randomIndex = Math.floor(Math.random() * randomImage.length);
    const imageUrl = `url(${randomImage[randomIndex]})`;
    backgroundDiv.style.backgroundImage = imageUrl;
}

// Call the function to change the background image (only on welcome page)
if (backgroundDiv) {
    changeBackgroundImage();
}
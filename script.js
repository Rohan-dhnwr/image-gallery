// Select main display image
const displayedImg = document.getElementById('displayed-img');

// Select all thumbnails
const thumbnails = document.querySelectorAll('.thumb');

// Add click event to each thumbnail
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    // Change the main image src to the clicked thumbnail's src
    displayedImg.src = thumbnail.src;
  });
});

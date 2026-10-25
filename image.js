
    document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('.enlargeable');
        const overlay = document.getElementById('imageOverlay');

        images.forEach(image => {
            image.addEventListener('click', () => {
                // Clone the image
                const clonedImage = image.cloneNode(true);
                clonedImage.classList.add('enlarged');

                // Remove any existing enlarged image
                const existingEnlarged = document.querySelector('.enlarged');
                if (existingEnlarged) {
                    existingEnlarged.remove();
                }

                // Add the cloned image to the overlay
                overlay.innerHTML = ''; // Clear previous content
                overlay.appendChild(clonedImage);

                // Show the overlay
                overlay.classList.add('active');
            });
        });

        overlay.addEventListener('click', () => {
            // Hide the overlay
            overlay.classList.remove('active');
            overlay.innerHTML = ''; // Remove cloned image
        });
    });


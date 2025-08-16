document.getElementById('rating-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    const feedbackList = document.getElementById('feedback-list');
    const newFeedback = document.createElement('li');
    newFeedback.textContent = `Étoiles: ${rating} - Commentaire: ${comment}`;
    feedbackList.appendChild(newFeedback);

    // Reset the form
    this.reset();
});

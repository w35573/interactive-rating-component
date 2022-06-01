const ratings = document.querySelectorAll('.dot');
const submit = document.querySelector('.btn');
const ratingCard = document.querySelector('.rating-card');
const thankCard = document.querySelector('.thank-container');
const yourRating = document.querySelector('.your-rating');

let ratingVal = "";

window.addEventListener('load', (event) => {
    thankCard.classList.add('display-none');
});

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        removeActiveClasses();
        ratingVal = rating.textContent;
        rating.classList.add('active');
    });
});

function removeActiveClasses() {
    ratings.forEach(rating => {
        rating.classList.remove('active');
    });
}

submit.addEventListener('click', () => {
    if (ratingVal === "") {
        alert('Please select a rating!');
    } else {
        setTimeout(() => {
            yourRating.innerHTML = `You selected ${ratingVal} out of 5`;
            thankCard.classList.remove('display-none');
            ratingCard.remove();
        }, 300);
    }
});
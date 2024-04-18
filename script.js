let currentSelection = {
    coffee: '',
    milk: '',
    syrup: ''
};


/* moving photos of the main page */


window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const images = document.querySelectorAll('.floating-image');

    images.forEach((img, index) => {
        const speed = (index % 2 === 0 ? 1 : -1) * (index + 1) * 5;
        img.style.transform = `translateY(${scrollY * speed}px)`;
    });
});
document.addEventListener('scroll', function() {
    const images = document.querySelectorAll('.dynamic-image');
    const scrollFactor = window.scrollY;

    images.forEach((img, index) => {
        const directionX = (index % 2 === 0 ? 1 : -1);  // Alternate direction
        const directionY = (index % 3 === 0 ? -1 : 1);  // Alternate direction
        img.style.transform = `translate(${directionX * scrollFactor}px, ${directionY * scrollFactor}px)`;
    });
});

/* end of moving photos of the main page */


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the 50px threshold as needed
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('transparent');
    }
});


function goToPaymentPage() {
    window.location.href = 'payment_page.html';  // Redirect to the payment page URL
}


function updateBasket() {
    const basketList = document.getElementById('basket-list');
    basketList.innerHTML = `<li>${currentSelection.coffee} with ${currentSelection.milk} and ${currentSelection.syrup} syrup</li>`;
}


document.querySelectorAll('#syrups .option').forEach(option => {
    option.addEventListener('click', function() {
        currentSelection.syrup = this.getAttribute('data-type');
        document.getElementById('syrups').classList.add('hidden');
        scrollToSection('milk-types')
        updateBasket(); // Now it will also add the price
    });
});

document.querySelectorAll('#milk-types .option').forEach(option => {
    option.addEventListener('click', function() {
        currentSelection.milk = this.getAttribute('data-type');
        document.getElementById('milk-types').classList.add('hidden');
        scrollToSection('coffee-types');
        updateBasket();
    });
});


document.querySelectorAll('#coffee-types .option').forEach(option => {
    option.addEventListener('click', function() {
        currentSelection.coffee = this.getAttribute('data-type');
        document.getElementById('coffee-types').classList.add('hidden');
        updateBasket();
    });
});



function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


function goToPaymentPage() {
    window.location.href = 'payment_page.html'; // Redirect to the payment page URL
}



document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name= document.getElementById('name').value;
    // Here you would normally integrate the payment API
    console.log('Form submitted'); // Placeholder for API call
    alert('Thank you for your payment '+name+'!');
});

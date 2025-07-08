document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // You would typically handle form submission here.
        // This could involve sending the data to a server using fetch or XMLHttpRequest.
        // For this simple example, let's just display a message.
        alert('Form submitted!  (This is a placeholder - you need to implement the actual submission logic.)');

        // Optionally clear the form fields
        form.reset();
    });
});
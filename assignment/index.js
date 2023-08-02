// Get the form element
const form = document.querySelector('#contact-form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  // Get the form data
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const mobile = formData.get('mobile');
  
  // Create the payload data
  const payload = {
    name: name,
    email: email,
    mobile: mobile,
    meta: 'meta data here' // Replace 'meta data here' with the actual meta data
  };
  
  // Make the POST request to the API
  fetch('https://api.propacity.in/api/v1/webhooks/integration/794d3601-ec97-454f-a3b8-6c5961ff8da8/insertLead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the API
    console.log(data);
    // You can perform any additional actions here, such as displaying a success message to the user
  })
  .catch(error => {
    // Handle any errors that occur during the API request
    console.error(error);
    // You can display an error message to the user or perform any other error handling actions
  });
});

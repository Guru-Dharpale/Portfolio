// Initialize EmailJS (already done in your HTML script tag)

document.getElementById('submit-btn').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent page reload
  
  emailjs.send("service_qnvrgeu", "template_no87lvp", {
    name: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(() => {
    alert("Message sent successfully!");
    document.getElementById("email-form").reset(); // Clear form
  })
  .catch((err) => {
    console.error("EmailJS Error:", err); 
    alert("Failed to send. Check console for details.");
  });
});
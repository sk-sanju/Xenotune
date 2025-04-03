document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission
  
    emailjs.init("JhxYdHXztTgi-xOLt"); // Replace with your EmailJS User ID
  
    let formData = {
      from_name: document.querySelector("[name='name']").value,
      from_email: document.querySelector("[name='email']").value,
      subject: document.querySelector("[name='subject']").value,
      message: document.querySelector("[name='message']").value
    };
  
    emailjs.send("service_f8vsaam", "template_q150t81", formData)
      .then(response => {
        alert("Email sent successfully!");
      })
      .catch(error => {
        alert("Error sending email: " + error);
      });
  });
  
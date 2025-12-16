document.getElementById("changeColorBtn").addEventListener("click", function () {     const 
colors = ["#f5c542", "#ff9ff3", "#7efff5", "#d980fa", "#ff7675"];     
document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];  
});  
document.getElementById("year").textContent = new Date().getFullYear(); 
document.getElementById("contactForm").addEventListener("submit", function(event){     
event.preventDefault();     document.getElementById("responseMessage").textContent = 
"Thank you! Your message has been received.";  
}); 
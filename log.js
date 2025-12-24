document.getElementById("sub-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const fname = document.getElementById("firstname").value;
    const lname = document.getElementById("lastname").value;
    const pass = document.getElementById("password").value;
    const emailAddr = document.getElementById("email").value;
    const num = document.getElementById("number").value;

    if (!fname || !lname || !pass || !emailAddr || !num) {
        alert("Please fill in all fields.");
        return;
    }
   alert(`Welcome, ${fname} ${lname}! Your login details have been captured.`)


});
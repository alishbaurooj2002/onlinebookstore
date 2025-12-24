document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener("click", function (event) {

        // Check if View More button is clicked
        if (event.target.classList.contains("view-more-btn")) {

            // Find the parent section
            const section = event.target.closest("section");
            if (!section) return;

            // Redirect based on section ID
            if (section.id === "fiction-section") {
                window.location.href = "fiction.html";
            } 
            else if (section.id === "non-fiction-section") {
                window.location.href = "non-fiction.html";
            } 
            else if (section.id === "sales-section") {
                window.location.href = "sales.html";
            } 
            else if (section.id === "children-section") {
                window.location.href = "children.html";
            } 
            else if (section.id === "newarrival-section") {
                window.location.href = "newarrival.html";
            } 
            else if (section.id === "urdu-section") {
                window.location.href = "urdu.html";
            } 
            else if (section.id === "acdamic-section") {
                window.location.href = "acdamic.html";
            } 
            else {
                // fallback
                window.location.href = "view-more.html";
            }
        }

    });

});

// Toggle display of additional text in About Me section
document.getElementById("toggleButton").addEventListener("click", function() {
    const moreText = document.getElementById("moreText");
    const button = document.getElementById("toggleButton");
    
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        button.textContent = "Read More";
    }
});

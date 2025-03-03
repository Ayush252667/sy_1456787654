document.getElementById("send-sorry").addEventListener("click", function() {
    let heart = document.getElementById("heart");
    heart.classList.remove("hidden");
    
    // Create a heart icon with the blue color
    heart.innerHTML = "<span style='color: blue;'>❤️</span> Tum Bhut achi ho Karuna ❤️";
});

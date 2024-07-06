// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  
    // Target the paragraph element with id="text" and replace its text content
    const textParagraph = document.getElementById("text");
    if (textParagraph) {
      textParagraph.textContent = "This is really cool!";
    }
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  
document.addEventListener("DOMContentLoaded", function() {
    const storyTexts = [
        "Hello Lecturer! This is a program I created that talks a little bit about my journey through mathematics and how it is useful in all fields of society. I have decided to code this story in order to utilise and improve my skills as a programmer. I am majoring in computer science, so I thought this would be a good way to test my skills outside my computer science courses. If you are interested, I used HTML, CSS, and JavaScript to construct this webpage and all the functions that are being used.",
        "Well first of all, I guess I should explain why I took this course and how I feel about maths. I took this course in order to improve my math skills (obviously) because it is really useful to have at least a basic understanding of mathematical concepts as a computer scientist. To be honest however, I never particularly enjoyed mathematics as I always found it difficult and boring, however, I do like to challenge myself and have always enjoyed problem solving in general which is another reason why I took this course.",
        "Mathematics is a huge part of science and technology and has advanced many things in society massively. The more I understand maths, the more I enjoy it and understand how deep and intricate it is.",
        "I know that mathematics has contributed to the person I am because it has helped improve my problem solving skills, research skills, learning techniques and overall improved me as a student. I understand that maths helps me in other subjects as it teaches me to persevere and allows me to improve my problem solving skills in general.",
        "I hope you found this program interesting, and have found what I have had to say about maths insightful. Have a great day!"
    ];

    let currentChapter = 0;
    const storyTextElement = document.getElementById("story-text");
    const beginButton = document.getElementById("begin-button");
    const nextButton = document.getElementById("next-button");

    if (!storyTextElement || !beginButton || !nextButton) {
        console.error("One or more required elements are missing.");
        return;
    }

    function printText(text, index = 0) {
        if (index < text.length) {
            storyTextElement.innerHTML += text.charAt(index);
            setTimeout(() => printText(text, index + 1), 30); // Adjusted for faster typing speed
        } else {
            if (currentChapter < storyTexts.length - 1) {
                nextButton.classList.remove("hidden"); // Show "Next Chapter" button
            } else {
                nextButton.innerText = "Close Program"; // Change button text to "Close Program"
                nextButton.removeEventListener("click", nextChapter);
                nextButton.addEventListener("click", closeProgram);
                nextButton.classList.remove("hidden"); // Ensure button is visible
            }
        }
    }

    function beginProgram() {
        beginButton.classList.add("hidden"); // Hide "Begin Program" button
        loadChapter();
    }

    function loadChapter() {
        storyTextElement.innerHTML = ''; // Clear previous text
        printText(storyTexts[currentChapter]);
    }

    function nextChapter() {
        nextButton.classList.add("hidden"); // Hide "Next Chapter" button while loading
        currentChapter++;
        loadChapter();
    }

    function closeProgram() {
        window.close(); // Close the window
    }

    beginButton.addEventListener("click", beginProgram);
    nextButton.addEventListener("click", nextChapter);
});

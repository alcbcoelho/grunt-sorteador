document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        
        const maxNum = parseInt(
            document.querySelector("#max-number").value
        );

        const randomNum = Math.floor(Math.random() * maxNum + 1);

        document.querySelector("#result-value").innerText = randomNum;

        const resultDiv = document.querySelector(".result");
        resultDiv.classList.contains("hidden") && resultDiv.classList.remove("hidden");
    })
})
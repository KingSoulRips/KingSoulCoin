let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resultText = document.querySelector("#result"); // Select the <p> element to display result

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    
    if (i) {
        setTimeout(function () {
            coin.style.animation = "spin-heads 3s forwards";
            setTimeout(function () {
                resultText.textContent = "HEADS"; // Display result text after 3 seconds
            }, 3000); // 3000 milliseconds = 3 seconds
        }, 100);
        heads++;
    } else {
        setTimeout(function () {
            coin.style.animation = "spin-tails 3s forwards";
            setTimeout(function () {
                resultText.textContent = "TAILS"; // Display result text after 3 seconds
            }, 3000); // 3000 milliseconds = 3 seconds
        }, 100);
        tails++;
    }
});

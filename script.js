let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");


flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    

});


flipButton.addEventListener('click', () => {
    coin.classList.toggle('flipped');
    isHeadsVisible = !isHeadsVisible; // Toggle the side

    if (isHeadsVisible) {
        headsDiv.textContent = 'Heads'; // Update text content
        tailsDiv.textContent = ''; // Clear text content
    } else {
        tailsDiv.textContent = 'Tails'; // Update text content
        headsDiv.textContent = ''; // Clear text content
    }
});


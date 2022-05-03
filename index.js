const startEl = document.querySelectorAll(".fa-star");
const emojisE1 = document.querySelectorAll(".far");

// For Updating Color
const colorsArray = ["red","orange", "lightblue","lightgreen", "green"];

updateRatinng(0);   // Function Call to by default index 0

startEl.forEach((startEl , index ) => {
    startEl.addEventListener("click",() => {
        updateRatinng(index);
    });
});

// Function for Star Rating

function updateRatinng(index) {
    startEl.forEach((startEl, idx) => {
        if(idx < index + 1) {
            startEl.classList.add("active");
        }else {
            startEl.classList.remove("active");
        }
    });

    emojisE1.forEach(emojiE1 => {
        emojiE1.style.transform = `translateX(-${index * 50}px)`;
        emojiE1.style.color = colorsArray[index];
    })
}
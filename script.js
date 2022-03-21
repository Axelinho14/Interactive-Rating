const button = document.getElementById("notes")


button.addEventListener("submit", function(e){
    e.preventDefault();
    const container = document.getElementById("container");
    const thankYou = document.getElementById("container-after-submit");
    const note = document.querySelectorAll('input[name="note"]');
    const text = document.getElementById("number-selected");
    let selectedNumber;

    for (const notes of note){
        if(notes.checked){
            selectedNumber = notes.value;
            container.style.display = "none";
            thankYou.style.display = "flex";
            break;
        }
    }
    text.innerText = selectedNumber ? `you selected ${selectedNumber} out of 5` : "";
});
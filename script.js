//your code here
document.addEventListener("DOMContentLoaded", () => {
    const divs = document.querySelectorAll(".image");
    let draggedElement = null;
    
    divs.forEach((div, index) => {
        div.setAttribute("id", `div${index + 1}`);
        div.style.backgroundImage = getComputedStyle(div).backgroundImage;
        
        div.addEventListener("dragstart", (event) => {
            draggedElement = event.target;
            event.dataTransfer.setData("text/plain", event.target.id);
        });

        div.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        div.addEventListener("drop", (event) => {
            event.preventDefault();
            
            if (draggedElement && draggedElement !== event.target) {
                let draggedBg = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = event.target.style.backgroundImage;
                event.target.style.backgroundImage = draggedBg;
            }
        });
    });
});
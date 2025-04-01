document.addEventListener("DOMContentLoaded", () => {
    const divs = document.querySelectorAll(".image");
    
    divs.forEach((div, index) => {
        div.setAttribute("id", `drag${index + 1}`); // Ensure correct IDs
        div.style.backgroundImage = getComputedStyle(div).backgroundImage;
        
        div.setAttribute("draggable", "true"); // Ensure elements are draggable

        div.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("dragId", event.target.id);
        });

        div.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        div.addEventListener("drop", (event) => {
            event.preventDefault();

            const draggedId = event.dataTransfer.getData("dragId");
            const draggedElement = document.getElementById(draggedId);
            const dropTarget = event.target;

            if (!draggedElement || !dropTarget || draggedElement === dropTarget) return;

            // Swap background images
            let draggedBg = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = dropTarget.style.backgroundImage;
            dropTarget.style.backgroundImage = draggedBg;
        });
    });
});

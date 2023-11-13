
const wrapper = document.querySelector('.wrapper')
const dragElement = document.querySelector('.drag')

// function onMouseDrag ({movementX, movementY}) {
//     let getWrapperStyle = window.getComputedStyle(contact)
//     let leftValue = parseInt(getWrapperStyle.left)
//     let topValue = parseInt(getWrapperStyle.top)
//     contact.style.left = `${leftValue + movementX}px`;
//     contact.style.top = `${topValue + movementY}px`;
// }

// contact.addEventListener("mousedown", () => {
//     contact.addEventListener("mousemove", onMouseDrag);

// });
// document.addEventListener("mouseup", () => {
//     contact.removeEventListener("mousemove", onMouseDrag);
// });

function onMouseDrag (e) {
    let leftValue = e.clientX
    let topValue = e.clientY
    dragElement.style.left = `${leftValue}px`;
    dragElement.style.top = `${topValue}px`;
}

dragElement.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", onMouseDrag);

});
wrapper.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMouseDrag);
});






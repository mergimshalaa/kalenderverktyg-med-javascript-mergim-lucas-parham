/**
 * Opens a dropdown listing 'to do' items.
 */
export function openToDos() {
    const toDoItemList = document.querySelector(".toDoItemList");
    toDoItemList.classList.toggle("displayBlock");
}
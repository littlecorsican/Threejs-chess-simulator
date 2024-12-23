export function appendToHistory(id, newLine) {
    const newListItem = document.createElement('li');
    // Set the text content of the <li>
    newListItem.textContent = newLine
    // Append the <li> to the <ol> with id "history"
    const historyList = document.getElementById(id);
    historyList.appendChild(newListItem);
}
export function appendToHistory(id, newLine) {
    const newListItem = document.createElement('li');
    // Set the text content of the <li>
    newListItem.textContent = newLine
    // Append the <li> to the <ol> with id "history"
    const historyList = document.getElementById(id);
    historyList.appendChild(newListItem);
}

export function getChessPieceName(pgn) {
    // Map of PGN short names to full names
    const pieceMap = new Map([
        ['p', 'Pawn'],
        ['n', 'Knight'],
        ['b', 'Bishop'],
        ['r', 'Rook'],
        ['q', 'Queen'],
        ['k', 'King']
    ]);

    // Return the full name, or a default message if the PGN is not recognized
    return pieceMap.get(pgn.toLowerCase()) || pgn;
}
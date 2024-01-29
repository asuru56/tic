let flag = 1; 

function check(){
    for (let i = 0; i < 9; i++) {
    const block = document.querySelectorAll('.block')[i];
    if(block.innerText == 'X'){
        console.log(block,"is X");

    }
    if(block.innerText == 'O'){
        console.log(block,"is O");
        
    }
    return checkForWinner() ; 
}
}

function checkForWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        const blocks = document.querySelectorAll('.block');
        if (blocks[a].innerText && blocks[a].innerText === blocks[b].innerText && blocks[a].innerText === blocks[c].innerText) {
            // We have a winner
            return blocks[a].innerText;
        }
    }

    return null; // No winner yet
}
      
   
 
// Add event listeners for all blocks
for (let i = 0; i < 9; i++) {
    const block = document.querySelectorAll('.block')[i];
    console.log("block:",block);
    block.addEventListener('click', function() {
        if (flag === 1 && block.innerText === '') {
            // Set 'X' if the block is empty and it's player 1's turn
            block.innerText = 'X';
            flag = 0; // Switch to player 2's turn
            check()
        } else if (flag === 0 && block.innerText === '') {
            // Set 'O' if the block is empty and it's player 2's turn
            block.innerText = 'O';
            flag = 1; // Switch to player 1's turn
            check()
        }
    });
}


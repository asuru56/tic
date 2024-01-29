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
}
function checkForWinner() {
    for(let i = 0 ; i < 9 ; i++){
        const block = document.querySelectorAll('.block')[i];
        if(block.innerText == "X"){

        }
    }
}
      
   
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


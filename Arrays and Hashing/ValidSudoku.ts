/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example 1:

Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:

Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
 */


/* First Version - 117ms (9.65%) | 51.1MB (9.65%) */
function isValidSudoku(board: string[][]): boolean {
    const rowContainsDuplicate = board.find(row => containsDuplicate(row));
    if(rowContainsDuplicate) return false;

    for(let i = 0; i < board.length; i++) {
        const column = board.map((value) => value[i]);
        if(containsDuplicate(column)) return false;
    }

    for(let i = 0; i < board.length; i+=3) {
        for(let j = 0; j < 3; j++) {
            const block = [];
            const leftBoundary = j*3
            block.push(...board[i].slice(leftBoundary, leftBoundary+3));
            block.push(...board[i+1].slice(leftBoundary, leftBoundary+3));
            block.push(...board[i+2].slice(leftBoundary, leftBoundary+3));
            console.log(block);

            if(containsDuplicate(block)) return false;
        }
    }

    return true;
};

function containsDuplicate(row: string[]) : boolean {
    for(let i = 0; i < row.length; i++) {
        const item = row[i];
        if(item === '.') continue;

        if(row.indexOf(item) !== i) return true;
    }
    return false;
}


/* Second Version - 64ms (87.85%) | 45.83MB (72.80%) */
function isValidSudoku(board: string[][]): boolean {
    for(let i = 0; i < board.length; i+=3) {
        for(let j = 0; j < 3; j++) {
            if(containsDuplicate(board[i+j])) return false;
            const column = board.map((value) => value[i+j]);
            if(containsDuplicate(column)) return false;
        }

        for(let j = 0; j < 3; j++) {
            const block = [];
            const leftBoundary = j*3
            block.push(...board[i].slice(leftBoundary, leftBoundary+3));
            block.push(...board[i+1].slice(leftBoundary, leftBoundary+3));
            block.push(...board[i+2].slice(leftBoundary, leftBoundary+3));

            if(containsDuplicate(block)) return false;
        }
    }

    return true;
};

function containsDuplicate(row: string[]) : boolean {
    for(let i = 0; i < row.length; i++) {
        const item = row[i];
        if(item === '.') continue;

        if(row.indexOf(item) !== i) return true;
    }
    return false;
}
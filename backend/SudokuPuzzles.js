// SudokuPuzzles.js
module.exports = {
  easy: [
    {
      puzzle: [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
      ],
      solution: [
        [5,3,4,6,7,8,9,1,2],
        [6,7,2,1,9,5,3,4,8],
        [1,9,8,3,4,2,5,6,7],
        [8,5,9,7,6,1,4,2,3],
        [4,2,6,8,5,3,7,9,1],
        [7,1,3,9,2,4,8,5,6],
        [9,6,1,5,3,7,2,8,4],
        [2,8,7,4,1,9,6,3,5],
        [3,4,5,2,8,6,1,7,9]
      ]
    },
    {
      puzzle: [
        [0,0,5,3,0,0,0,0,0],
        [8,0,0,0,0,0,0,2,0],
        [0,7,0,0,1,0,5,0,0],
        [4,0,0,0,0,5,3,0,0],
        [0,1,0,0,7,0,0,0,6],
        [0,0,3,2,0,0,0,8,0],
        [0,6,0,5,0,0,0,0,9],
        [0,0,4,0,0,0,0,3,0],
        [0,0,0,0,0,9,7,0,0]
      ],
      solution: [
        [1,4,5,3,2,7,6,9,8],
        [8,3,9,6,5,4,1,2,7],
        [6,7,2,8,1,9,5,4,3],
        [4,9,6,1,8,5,3,7,2],
        [2,1,8,9,7,3,4,5,6],
        [7,5,3,2,4,6,9,8,1],
        [3,6,1,5,9,8,2,4,7],
        [9,8,4,7,6,2,5,3,1],
        [5,2,7,4,3,1,8,6,9]
      ]
    }
  ],
  medium: [
    {
      puzzle: [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,3,0,8,5],
        [0,0,1,0,2,0,0,0,0],
        [0,0,0,5,0,7,0,0,0],
        [0,0,4,0,0,0,5,0,0],
        [0,9,0,0,0,0,0,0,0],
        [5,0,0,0,0,0,0,7,3],
        [1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,4,0]
      ],
      solution: [
        [9,8,7,6,5,4,3,2,1],
        [2,4,6,1,7,3,9,8,5],
        [3,5,1,9,2,8,7,4,6],
        [1,2,8,5,3,7,6,9,4],
        [6,3,4,8,9,2,5,1,7],
        [7,9,5,4,6,1,2,3,8],
        [5,1,9,2,8,6,4,7,3],
        [8,7,2,3,4,9,1,5,6],
        [4,6,3,7,1,5,8,9,2]
      ]
    },
    {
      puzzle: [
        [3,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0],
        [0,5,0,4,0,7,0,0,0],
        [0,0,0,0,0,0,0,9,0],
        [0,0,0,0,8,0,0,0,0],
        [0,2,0,0,0,0,0,0,0],
        [0,0,0,6,0,9,0,0,0],
        [0,0,0,0,5,0,0,0,0],
        [0,0,0,0,0,0,0,0,4]
      ],
      solution: [
        [3,1,6,8,9,5,2,4,7],
        [7,4,9,2,1,6,5,8,3],
        [2,5,8,4,3,7,9,6,1],
        [8,6,3,5,4,2,7,9,1],
        [9,7,4,3,8,1,6,5,2],
        [5,2,1,9,7,6,4,3,8],
        [1,8,7,6,2,9,3,5,4],
        [4,9,2,1,5,3,8,7,6],
        [6,3,5,7,9,8,1,2,4]
      ]
    }
  ],
  hard: [
    {
      puzzle: [
        [8,0,0,0,0,0,0,0,0],
        [0,0,3,6,0,0,0,0,0],
        [0,7,0,0,9,0,2,0,0],
        [0,5,0,0,0,7,0,0,0],
        [0,0,0,0,4,5,7,0,0],
        [0,0,0,1,0,0,0,3,0],
        [0,0,1,0,0,0,0,6,8],
        [0,0,8,5,0,0,0,1,0],
        [0,0,0,0,0,0,4,0,0]
      ],
      solution: [
        [8,5,9,7,6,1,4,2,3],
        [4,2,3,6,8,5,9,7,1],
        [6,7,1,4,9,3,2,8,5],
        [9,5,4,2,3,7,8,1,6],
        [3,6,8,9,4,5,7,2,9],
        [2,9,7,1,5,8,6,3,4],
        [5,3,1,8,7,4,9,6,2],
        [7,4,8,5,2,6,3,1,9],
        [1,8,6,3,9,2,4,5,7]
      ]
    },
    {
      puzzle: [
        [0,0,0,0,0,0,0,1,0],
        [0,2,0,0,0,8,0,0,0],
        [0,0,0,7,0,0,0,0,4],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,5,0,0,0,0],
        [0,0,0,0,0,0,0,3,0],
        [5,0,0,0,0,0,0,0,0],
        [0,0,0,2,0,0,0,6,0],
        [0,4,0,0,0,0,0,0,0]
      ],
      solution: [
        [8,7,4,5,3,9,6,1,2],
        [9,2,6,1,4,8,5,7,3],
        [3,5,1,7,2,6,9,8,4],
        [4,9,3,8,6,2,7,5,1],
        [6,1,8,9,5,7,3,4,2],
        [7,8,2,4,1,3,9,6,5],
        [5,6,9,3,7,1,2,4,8],
        [1,3,7,2,8,4,5,6,9],
        [2,4,5,6,9,5,8,3,7]
      ]
    }
  ]
};
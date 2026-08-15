const designWorkshopStage1Questions = [
  {
    id: "design_s1_01",
    stage: 1,
    instruction: "この模様を右に2マス、そのままずらすよ。どれになる？",
    rows: 3,
    cols: 5,
    start: [
      [1, 1, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    choices: [
      {
        grid: [
          [0, 0, 1, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0]
        ],
        correct: true
      },
      {
        grid: [
          [0, 1, 1, 0, 0],
          [0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ],
        correct: false
      },
      {
        grid: [
          [0, 0, 1, 0, 0],
          [0, 0, 1, 1, 0],
          [0, 0, 0, 0, 0]
        ],
        correct: false
      }
    ]
  },

  {
    id: "design_s1_02",
    stage: 1,
    instruction: "この模様を下に1マス、そのままずらすよ。どれになる？",
    rows: 4,
    cols: 4,
    start: [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    choices: [
      {
        grid: [
          [0, 0, 0, 0],
          [0, 1, 0, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 0]
        ],
        correct: true
      },
      {
        grid: [
          [0, 0, 0, 0],
          [1, 1, 1, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 0]
        ],
        correct: false
      },
      {
        grid: [
          [0, 1, 0, 0],
          [1, 1, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        correct: false
      }
    ]
  },

  {
    id: "design_s1_03",
    stage: 1,
    instruction: "この模様を右に1マス、下に1マスずらすよ。どれになる？",
    rows: 4,
    cols: 4,
    start: [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ],
    choices: [
      {
        grid: [
          [0, 0, 0, 0],
          [0, 1, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 1, 0]
        ],
        correct: true
      },
      {
        grid: [
          [0, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 1, 1, 1],
          [0, 0, 0, 0]
        ],
        correct: false
      },
      {
        grid: [
          [0, 1, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 0]
        ],
        correct: false
      }
    ]
  },
  { id: "design_s1_04", stage: 1, instruction: "この模様を左に2マス、そのままずらすよ。どれになる？", rows: 3, cols: 5, start: [[0,0,1,1,0],[0,0,0,1,0],[0,0,0,0,0]], choices: [
    { grid: [[1,1,0,0,0],[0,1,0,0,0],[0,0,0,0,0]], correct: true },
    { grid: [[0,1,1,0,0],[0,0,1,0,0],[0,0,0,0,0]], correct: false },
    { grid: [[1,0,0,0,0],[1,1,0,0,0],[0,0,0,0,0]], correct: false }
  ]},
  { id: "design_s1_05", stage: 1, instruction: "この模様を上に1マス、そのままずらすよ。どれになる？", rows: 4, cols: 4, start: [[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]], choices: [
    { grid: [[1,1,1,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]], correct: true },
    { grid: [[0,1,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]], correct: false },
    { grid: [[1,1,1,0],[1,0,0,0],[0,0,0,0],[0,0,0,0]], correct: false }
  ]},
  { id: "design_s1_06", stage: 1, instruction: "この模様を左に1マス、下に1マスずらすよ。どれになる？", rows: 5, cols: 5, start: [[0,0,1,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0]], choices: [
    { grid: [[0,0,0,0,0],[0,1,1,0,0],[0,1,0,0,0],[0,1,0,0,0],[0,0,0,0,0]], correct: true },
    { grid: [[0,1,1,0,0],[0,1,0,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]], correct: false },
    { grid: [[0,0,0,0,0],[0,1,0,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,0,0,0]], correct: false }
  ]},
  { id: "design_s1_07", stage: 1, instruction: "この模様を右に2マス、上に1マスずらすよ。どれになる？", rows: 5, cols: 5, start: [[0,0,0,0,0],[1,0,0,0,0],[1,1,0,0,0],[0,1,0,0,0],[0,0,0,0,0]], choices: [
    { grid: [[0,0,1,0,0],[0,0,1,1,0],[0,0,0,1,0],[0,0,0,0,0],[0,0,0,0,0]], correct: true },
    { grid: [[0,0,0,0,0],[0,0,1,0,0],[0,0,1,1,0],[0,0,0,1,0],[0,0,0,0,0]], correct: false },
    { grid: [[0,0,1,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0]], correct: false }
  ]},
  { id: "design_s1_08", stage: 1, instruction: "この模様を左に1マス、上に2マスずらすよ。どれになる？", rows: 5, cols: 5, start: [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0]], choices: [
    { grid: [[1,1,0,0,0],[0,1,0,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]], correct: true },
    { grid: [[0,0,0,0,0],[1,1,0,0,0],[0,1,0,0,0],[0,1,0,0,0],[0,0,0,0,0]], correct: false },
    { grid: [[0,1,0,0,0],[0,1,0,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]], correct: false }
  ]},
  { id: "design_s1_09", stage: 1, instruction: "この模様を右に1マス、下に2マスずらすよ。どれになる？", rows: 6, cols: 5, start: [[1,1,0,0,0],[1,0,0,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]], choices: [
    { grid: [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,0,0],[0,1,0,0,0],[0,1,1,0,0],[0,0,0,0,0]], correct: true },
    { grid: [[0,0,0,0,0],[0,1,1,0,0],[0,1,0,0,0],[0,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]], correct: false },
    { grid: [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,1,1,0,0],[0,0,0,0,0]], correct: false }
  ]},
  { id: "design_s1_10", stage: 1, instruction: "この模様を左に2マス、下に1マスずらすよ。どれになる？", rows: 5, cols: 6, start: [[0,0,1,1,0,0],[0,0,0,1,0,0],[0,0,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]], choices: [
    { grid: [[0,0,0,0,0,0],[1,1,0,0,0,0],[0,1,0,0,0,0],[1,1,0,0,0,0],[0,0,0,0,0,0]], correct: true },
    { grid: [[1,1,0,0,0,0],[0,1,0,0,0,0],[1,1,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]], correct: false },
    { grid: [[0,0,0,0,0,0],[1,0,0,0,0,0],[1,1,0,0,0,0],[1,0,0,0,0,0],[0,0,0,0,0,0]], correct: false }
  ]}
];

const designWorkshopStage2Questions = [
  {
    id: "design_s2_01",
    stage: 2,
    instruction: "この模様を右に90°くるっと回すよ。どれになる？",
    rows: 3,
    cols: 3,
    start: [
      [1, 0, 0],
      [1, 1, 0],
      [0, 0, 0]
    ],
    choices: [
      {
        grid: [
          [0, 1, 1],
          [0, 1, 0],
          [0, 0, 0]
        ],
        correct: true
      },
      {
        grid: [
          [0, 0, 0],
          [0, 1, 0],
          [1, 1, 0]
        ],
        correct: false
      },
      {
        grid: [
          [0, 0, 0],
          [0, 1, 1],
          [0, 0, 1]
        ],
        correct: false
      }
    ]
  },

  {
    id: "design_s2_02",
    stage: 2,
    instruction: "この模様を右に90°回すよ。どれになる？",
    rows: 3,
    cols: 3,
    start: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ],
    choices: [
      {
        grid: [
          [0, 0, 1],
          [0, 1, 1],
          [0, 0, 1]
        ],
        correct: true
      },
      {
        grid: [
          [1, 0, 0],
          [1, 1, 0],
          [1, 0, 0]
        ],
        correct: false
      },
      {
        grid: [
          [0, 0, 0],
          [0, 1, 0],
          [1, 1, 1]
        ],
        correct: false
      }
    ]
  },

  {
    id: "design_s2_03",
    stage: 2,
    instruction: "今度は左に90°回すよ。どれになる？",
    rows: 3,
    cols: 3,
    start: [
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    choices: [
      {
        grid: [
          [0, 1, 0],
          [1, 1, 0],
          [0, 0, 0]
        ],
        correct: true
      },
      {
        grid: [
          [0, 0, 0],
          [0, 1, 1],
          [0, 1, 0]
        ],
        correct: false
      },
      {
        grid: [
          [0, 0, 0],
          [1, 1, 0],
          [0, 1, 0]
        ],
        correct: false
      }
    ]
  },

  {
    id: "design_s2_04",
    stage: 2,
    instruction: "この模様を180°回すよ。どれになる？",
    rows: 3,
    cols: 3,
    start: [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ],
    choices: [
      {
        grid: [
          [0, 1, 0],
          [0, 1, 0],
          [0, 1, 1]
        ],
        correct: true
      },
      {
        grid: [
          [0, 0, 1],
          [1, 1, 1],
          [0, 0, 0]
        ],
        correct: false
      },
      {
        grid: [
          [0, 0, 0],
          [1, 1, 1],
          [1, 0, 0]
        ],
        correct: false
      }
    ]
  },

  {
    id: "design_s2_05",
    stage: 2,
    instruction: "この模様を右に90°回すよ。どれになる？",
    rows: 3,
    cols: 3,
    start: [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0]
    ],
    choices: [
      {
        grid: [
          [0, 1, 1],
          [1, 1, 0],
          [0, 0, 0]
        ],
        correct: true
      },
      {
        grid: [
          [0, 0, 0],
          [0, 1, 1],
          [1, 1, 0]
        ],
        correct: false
      },
      {
        grid: [
          [0, 1, 0],
          [0, 1, 1],
          [0, 0, 1]
        ],
        correct: false
      }
    ]
  },
  {
    id: "design_s2_06",
    stage: 2,
    instruction: "この模様を左に90°回すよ。どれになる？",
    rows: 4,
    cols: 4,
    start: [[0, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]],
    choices: [
      { grid: [[0, 0, 0, 0], [0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0]], correct: true },
      { grid: [[0, 0, 0, 0], [0, 0, 1, 1], [0, 1, 1, 0], [0, 0, 0, 0]], correct: false },
      { grid: [[0, 0, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 0]], correct: false }
    ]
  },

  {
    id: "design_s2_07",
    stage: 2,
    instruction: "この模様を180°回すよ。どれになる？",
    rows: 4,
    cols: 4,
    start: [[1, 1, 0, 0], [1, 0, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0]],
    choices: [
      { grid: [[0, 0, 0, 0], [0, 0, 1, 1], [0, 0, 0, 1], [0, 0, 1, 1]], correct: true },
      { grid: [[0, 1, 1, 1], [0, 1, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0]], correct: false },
      { grid: [[0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 1, 0], [1, 1, 1, 0]], correct: false }
    ]
  },

  {
    id: "design_s2_08",
    stage: 2,
    instruction: "この模様を右に90°回すよ。どれになる？",
    rows: 4,
    cols: 4,
    start: [[1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]],
    choices: [
      { grid: [[0, 0, 1, 1], [0, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]], correct: true },
      { grid: [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]], correct: false },
      { grid: [[0, 0, 0, 0], [0, 1, 0, 0], [0, 1, 1, 1], [0, 0, 0, 1]], correct: false }
    ]
  },

  {
    id: "design_s2_09",
    stage: 2,
    instruction: "この模様を左に90°回すよ。どれになる？",
    rows: 4,
    cols: 4,
    start: [[0, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0]],
    choices: [
      { grid: [[0, 0, 0, 0], [1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 1, 0]], correct: true },
      { grid: [[0, 1, 0, 0], [0, 1, 1, 1], [0, 0, 0, 1], [0, 0, 0, 0]], correct: false },
      { grid: [[0, 0, 0, 0], [0, 0, 1, 1], [0, 0, 1, 0], [0, 1, 1, 0]], correct: false }
    ]
  },

  {
    id: "design_s2_10",
    stage: 2,
    instruction: "この模様を180°回すよ。どれになる？",
    rows: 4,
    cols: 4,
    start: [[1, 1, 1, 0], [0, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]],
    choices: [
      { grid: [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 0, 0], [0, 1, 1, 1]], correct: true },
      { grid: [[0, 0, 0, 1], [0, 1, 0, 1], [0, 1, 1, 1], [0, 0, 0, 0]], correct: false },
      { grid: [[0, 0, 0, 0], [1, 1, 1, 0], [1, 0, 1, 0], [1, 0, 0, 0]], correct: false }
    ]
  },


];

const designWorkshopStage3Questions = [
  {
    id: "design_s3_01",
    stage: 3,
    instruction: "たての鏡にうつすよ。どれになる？",
    mirror: "vertical",
    rows: 3,
    cols: 3,
    start: [[1, 0, 0], [1, 1, 0], [0, 0, 0]],
    choices: [
      { grid: [[0, 0, 1], [0, 1, 1], [0, 0, 0]], correct: true },
      { grid: [[0, 0, 0], [0, 1, 1], [0, 0, 1]], correct: false },
      { grid: [[1, 0, 0], [1, 1, 0], [0, 0, 0]], correct: false }
    ]
  },

  {
    id: "design_s3_02",
    stage: 3,
    instruction: "たての鏡にうつすよ。どれになる？",
    mirror: "vertical",
    rows: 3,
    cols: 3,
    start: [[1, 1, 1], [0, 1, 0], [0, 0, 0]],
    choices: [
      { grid: [[1, 1, 1], [0, 1, 0], [0, 0, 0]], correct: true },
      { grid: [[0, 0, 0], [0, 1, 0], [1, 1, 1]], correct: false },
      { grid: [[1, 0, 0], [1, 1, 0], [1, 0, 0]], correct: false }
    ]
  },

  {
    id: "design_s3_03",
    stage: 3,
    instruction: "よこの鏡にうつすよ。どれになる？",
    mirror: "horizontal",
    rows: 3,
    cols: 3,
    start: [[0, 1, 0], [0, 1, 1], [0, 0, 0]],
    choices: [
      { grid: [[0, 0, 0], [0, 1, 1], [0, 1, 0]], correct: true },
      { grid: [[0, 0, 0], [1, 1, 0], [0, 1, 0]], correct: false },
      { grid: [[0, 1, 0], [0, 1, 1], [0, 0, 0]], correct: false }
    ]
  },

  {
    id: "design_s3_04",
    stage: 3,
    instruction: "たての鏡にうつすよ。どれになる？",
    mirror: "vertical",
    rows: 3,
    cols: 3,
    start: [[1, 1, 0], [0, 1, 0], [0, 1, 0]],
    choices: [
      { grid: [[0, 1, 1], [0, 1, 0], [0, 1, 0]], correct: true },
      { grid: [[0, 1, 0], [0, 1, 0], [0, 1, 1]], correct: false },
      { grid: [[1, 1, 0], [0, 1, 0], [0, 1, 0]], correct: false }
    ]
  },

  {
    id: "design_s3_05",
    stage: 3,
    instruction: "よこの鏡にうつすよ。どれになる？",
    mirror: "horizontal",
    rows: 4,
    cols: 4,
    start: [[1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]],
    choices: [
      { grid: [[0, 0, 0, 0], [0, 0, 1, 0], [1, 1, 1, 0], [1, 0, 0, 0]], correct: true },
      { grid: [[0, 0, 0, 0], [1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 1, 0]], correct: false },
      { grid: [[0, 0, 0, 0], [0, 1, 0, 0], [0, 1, 1, 1], [0, 0, 1, 0]], correct: false }
    ]
  },
  {
    id: "design_s3_06", stage: 3, instruction: "たての鏡にうつすよ。どれになる？", mirror: "vertical", rows: 4, cols: 4,
    start: [[0,0,1,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]],
    choices: [
      { grid: [[0,1,0,0],[0,1,1,0],[0,0,1,0],[0,0,0,0]], correct: true },
      { grid: [[0,0,0,0],[0,1,1,0],[0,1,0,0],[0,0,1,0]], correct: false },
      { grid: [[0,0,1,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]], correct: false }
    ]
  },
  {
    id: "design_s3_07", stage: 3, instruction: "よこの鏡にうつすよ。どれになる？", mirror: "horizontal", rows: 5, cols: 5,
    start: [[0,0,0,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,1,1,0],[0,0,0,0,0]],
    choices: [
      { grid: [[0,0,0,0,0],[0,0,1,1,0],[0,0,1,0,0],[0,1,1,0,0],[0,0,0,0,0]], correct: true },
      { grid: [[0,0,0,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,1,1,0],[0,0,0,0,0]], correct: false },
      { grid: [[0,0,0,0,0],[0,1,1,0,0],[0,1,0,0,0],[0,1,1,0,0],[0,0,0,0,0]], correct: false }
    ]
  },
  {
    id: "design_s3_08", stage: 3, instruction: "たての鏡にうつすよ。どれになる？", mirror: "vertical", rows: 4, cols: 4,
    start: [[0,1,0,0],[1,1,1,0],[0,0,1,0],[0,0,0,0]],
    choices: [
      { grid: [[0,0,1,0],[0,1,1,1],[0,1,0,0],[0,0,0,0]], correct: true },
      { grid: [[0,0,0,0],[0,0,1,0],[0,1,1,1],[0,0,1,0]], correct: false },
      { grid: [[0,1,0,0],[1,1,1,0],[0,0,1,0],[0,0,0,0]], correct: false }
    ]
  },
  {
    id: "design_s3_09", stage: 3, instruction: "よこの鏡にうつすよ。どれになる？", mirror: "horizontal", rows: 5, cols: 5,
    start: [[0,0,1,1,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],
    choices: [
      { grid: [[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,1,1,0,0],[0,0,1,1,0]], correct: true },
      { grid: [[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,1,1,0],[0,1,1,0,0]], correct: false },
      { grid: [[0,0,1,1,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0]], correct: false }
    ]
  },
  {
    id: "design_s3_10", stage: 3, instruction: "たての鏡にうつすよ。どれになる？", mirror: "vertical", rows: 5, cols: 5,
    start: [[0,1,1,0,0],[0,1,0,0,0],[0,1,1,1,0],[0,0,0,1,0],[0,0,0,0,0]],
    choices: [
      { grid: [[0,0,1,1,0],[0,0,0,1,0],[0,1,1,1,0],[0,1,0,0,0],[0,0,0,0,0]], correct: true },
      { grid: [[0,1,1,0,0],[0,1,0,0,0],[0,1,1,1,0],[0,0,0,1,0],[0,0,0,0,0]], correct: false },
      { grid: [[0,0,0,0,0],[0,1,0,0,0],[0,1,1,1,0],[0,0,0,1,0],[0,0,1,1,0]], correct: false }
    ]
  }
];

const designWorkshopStage4Questions = [
  { id: "design_s4_01", stage: 4, instruction: "2つの模様を同じ位置で重ねるよ。完成した形になるのはどれ？", rows: 3, cols: 3,
    target: [[1,1,0],[1,1,1],[0,0,0]], choices: [
      { parts: [[[1,1,0],[0,0,1],[0,0,0]],[[0,0,0],[1,1,0],[0,0,0]]], correct: true },
      { parts: [[[1,1,0],[0,0,0],[0,0,0]],[[0,0,0],[1,1,0],[0,0,0]]], correct: false },
      { parts: [[[1,0,0],[0,1,1],[0,0,0]],[[0,1,0],[1,0,0],[0,1,0]]], correct: false }
    ]
  },
  { id: "design_s4_02", stage: 4, instruction: "2つの模様を同じ位置で重ねるよ。完成した形になるのはどれ？", rows: 3, cols: 3,
    target: [[1,1,1],[0,1,0],[0,1,0]], choices: [
      { parts: [[[1,0,1],[0,1,0],[0,0,0]],[[0,1,0],[0,0,0],[0,1,0]]], correct: true },
      { parts: [[[1,0,1],[0,1,0],[0,0,0]],[[0,1,0],[0,0,0],[0,0,0]]], correct: false },
      { parts: [[[1,0,1],[0,0,0],[0,1,0]],[[0,1,0],[1,1,0],[0,0,0]]], correct: false }
    ]
  },
  { id: "design_s4_03", stage: 4, instruction: "2つの模様を同じ位置で重ねるよ。完成した形になるのはどれ？", rows: 4, cols: 4,
    target: [[1,1,0,0],[0,1,1,0],[0,0,1,0],[0,0,0,0]], choices: [
      { parts: [[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,0]],[[0,1,0,0],[0,0,1,0],[0,0,0,0],[0,0,0,0]]], correct: true },
      { parts: [[[1,0,0,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[0,0,1,0],[0,0,0,0],[0,0,0,0]]], correct: false },
      { parts: [[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,0]],[[0,1,0,0],[0,0,0,0],[0,1,0,0],[0,0,0,0]]], correct: false }
    ]
  },
  { id: "design_s4_04", stage: 4, instruction: "少しバラバラに見えるよ。重ねると完成するのはどれ？", rows: 4, cols: 4,
    target: [[1,0,1,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]], choices: [
      { parts: [[[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,0,1,0],[1,0,1,0],[0,0,0,0],[0,0,0,0]]], correct: true },
      { parts: [[[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,0,1,0],[1,0,0,0],[0,0,0,0],[0,0,0,0]]], correct: false },
      { parts: [[[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,0,1,0],[1,0,1,0],[0,0,0,1],[0,0,0,0]]], correct: false }
    ]
  },
  { id: "design_s4_05", stage: 4, instruction: "離れたマスもよく見てね。完成する組み合わせはどれ？", rows: 4, cols: 4,
    target: [[0,1,1,0],[1,1,0,0],[0,1,1,0],[0,0,0,0]], choices: [
      { parts: [[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,0]],[[0,0,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]]], correct: true },
      { parts: [[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,0]],[[0,0,1,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]]], correct: false },
      { parts: [[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,0]],[[0,0,1,0],[0,1,0,0],[1,1,0,0],[0,0,0,0]]], correct: false }
    ]
  },
  { id: "design_s4_06", stage: 4, instruction: "2つともバラバラの模様だよ。重ねると完成するのはどれ？", rows: 4, cols: 4, target: [[1,0,0,1],[0,1,1,0],[1,0,1,0],[0,1,0,0]], choices: [
    { parts: [[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,0]],[[0,0,0,1],[0,0,1,0],[1,0,0,0],[0,1,0,0]]], correct: true },
    { parts: [[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,0]],[[0,0,0,1],[0,0,1,0],[1,0,0,0],[0,0,0,0]]], correct: false },
    { parts: [[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,0]],[[0,0,0,1],[0,0,1,0],[1,0,0,0],[0,1,0,1]]], correct: false }
  ]},
  { id: "design_s4_07", stage: 4, instruction: "位置を1マスずつ確かめよう。ぴったり完成するのはどれ？", rows: 4, cols: 4, target: [[1,0,1,0],[0,1,0,1],[1,0,1,0],[0,1,0,1]], choices: [
    { parts: [[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,1,0,0]]], correct: true },
    { parts: [[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,1,0],[0,0,0,1],[1,0,0,0],[0,0,0,0]]], correct: false },
    { parts: [[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,1],[1,0,0,0],[0,1,0,0]]], correct: false }
  ]},
  { id: "design_s4_08", stage: 4, instruction: "同じマスに色が重なってもOK。完成するのはどれ？", rows: 4, cols: 4, target: [[0,1,1,0],[1,1,0,1],[0,1,1,0],[1,0,0,1]], choices: [
    { parts: [[[0,1,0,0],[1,1,0,0],[0,0,1,0],[1,0,0,0]],[[0,1,1,0],[0,1,0,1],[0,1,0,0],[0,0,0,1]]], correct: true },
    { parts: [[[0,1,0,0],[1,1,0,0],[0,0,1,0],[1,0,0,0]],[[0,1,1,0],[0,1,0,1],[0,0,0,0],[0,0,0,1]]], correct: false },
    { parts: [[[0,1,0,0],[1,1,0,0],[0,0,1,0],[1,0,0,0]],[[0,1,1,0],[0,1,0,1],[0,1,0,0],[0,0,1,1]]], correct: false }
  ]},
  { id: "design_s4_09", stage: 4, instruction: "重なるマスもあるよ。全部の位置をよく見てね。", rows: 4, cols: 4, target: [[1,0,1,1],[0,1,1,0],[1,1,0,1],[0,0,1,0]], choices: [
    { parts: [[[1,0,1,0],[0,1,0,0],[1,0,0,1],[0,0,1,0]],[[0,0,1,1],[0,0,1,0],[0,1,0,0],[0,0,1,0]]], correct: true },
    { parts: [[[1,0,1,0],[0,1,0,0],[1,0,0,1],[0,0,1,0]],[[0,0,1,1],[0,0,1,0],[0,0,0,0],[0,0,1,0]]], correct: false },
    { parts: [[[1,0,1,0],[0,1,0,0],[1,0,0,1],[0,0,1,0]],[[0,0,1,1],[0,0,1,0],[0,1,0,0],[1,0,1,0]]], correct: false }
  ]},
  { id: "design_s4_10", stage: 4, instruction: "最後はじっくり見よう。重ねてぴったり完成するのはどれ？", rows: 4, cols: 4, target: [[1,1,0,1],[0,1,1,0],[1,0,1,1],[0,1,0,0]], choices: [
    { parts: [[[1,0,0,1],[0,1,0,0],[1,0,1,0],[0,1,0,0]],[[0,1,0,1],[0,1,1,0],[0,0,1,1],[0,0,0,0]]], correct: true },
    { parts: [[[1,0,0,1],[0,1,0,0],[1,0,1,0],[0,1,0,0]],[[0,1,0,1],[0,1,1,0],[0,0,1,0],[0,0,0,0]]], correct: false },
    { parts: [[[1,0,0,1],[0,1,0,0],[1,0,1,0],[0,1,0,0]],[[0,1,0,1],[0,1,1,0],[0,0,1,1],[1,0,0,0]]], correct: false }
  ]}
];

const designWorkshopStage5Questions = [
  { id: "design_s5_01", stage: 5, type: "twoSteps", instruction: "2回変身させるよ。最後の形はどれ？", rows: 4, cols: 4,
    start: [[1,0,0,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]], steps: ["右に90°回す","右に1マスずらす"], choices: [
      { grid: [[0,0,1,1],[0,0,1,0],[0,0,0,0],[0,0,0,0]], correct: false },
      { grid: [[0,1,1,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]], correct: true },
      { grid: [[0,0,1,0],[0,0,1,1],[0,0,0,0],[0,0,0,0]], correct: false }
    ]},
  { id: "design_s5_02", stage: 5, type: "twoSteps", instruction: "順番に2回変身させるよ。最後はどれ？", rows: 4, cols: 4,
    start: [[0,1,0,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]], steps: ["たての鏡にうつす","下に1マスずらす"], choices: [
      { grid: [[0,0,0,0],[0,0,1,0],[0,1,1,0],[0,0,0,0]], correct: true },
      { grid: [[0,0,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]], correct: false },
      { grid: [[0,0,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]], correct: false }
    ]},
  { id: "design_s5_03", stage: 5, type: "twoSteps", instruction: "2つの変身を順番にやってみよう。最後はどれ？", rows: 4, cols: 4,
    start: [[1,1,0,0],[1,0,0,0],[0,0,0,0],[0,0,0,0]], steps: ["180°回す","上に1マスずらす"], choices: [
      { grid: [[0,0,0,0],[0,0,0,1],[0,0,1,1],[0,0,0,0]], correct: true },
      { grid: [[0,0,0,0],[0,0,0,0],[0,0,0,1],[0,0,1,1]], correct: false },
      { grid: [[0,0,0,0],[0,0,0,0],[0,0,1,1],[0,0,1,0]], correct: false }
    ]},
  {
    id: "design_s5_04",
    stage: 5,
    type: "findRule",
    instruction: "上と同じ変身を、下の模様にもしてみよう。？はどれ？",
    rows: 3,
    cols: 3,
    exampleStart: [[1,0,0],[1,1,0],[0,0,0]],
    exampleEnd: [[0,1,1],[0,1,0],[0,0,0]],
    start: [[0,1,0],[0,1,1],[0,0,0]],
    choices: [
      { grid: [[0,0,0],[0,1,1],[0,1,0]], correct: true },
      { grid: [[0,1,0],[1,1,0],[0,0,0]], correct: false },
      { grid: [[0,0,0],[1,1,0],[0,1,0]], correct: false }
    ],
    ruleHint: "rotateRight90"
  },
  {
    id: "design_s5_05",
    stage: 5,
    type: "findRule",
    instruction: "上の変身のルールを見つけてね。同じことをすると？",
    rows: 4,
    cols: 4,
    exampleStart: [[1,1,0,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]],
    exampleEnd: [[0,0,0,0],[0,0,0,0],[0,0,1,0],[0,0,1,1]],
    start: [[0,1,1,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]],
    choices: [
      { grid: [[0,0,0,0],[0,0,0,0],[0,0,1,0],[0,1,1,0]], correct: true },
      { grid: [[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,0,1,0]], correct: false },
      { grid: [[0,1,1,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]], correct: false }
    ],
    ruleHint: "rotate180"
  },
  { id: "design_s5_06", stage: 5, type: "twoSteps", instruction: "2回変身させるよ。最後の形はどれ？", rows: 4, cols: 4, start: [[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]], steps: ["右に90°回す","下に1マスずらす"], choices: [
    { grid: [[0,0,0,0],[0,0,1,1],[0,1,1,0],[0,0,0,0]], correct: true },
    { grid: [[0,0,1,1],[0,1,1,0],[0,0,0,0],[0,0,0,0]], correct: false },
    { grid: [[0,0,0,0],[0,1,1,0],[0,0,1,1],[0,0,0,0]], correct: false }
  ]},
  { id: "design_s5_07", stage: 5, type: "twoSteps", instruction: "鏡にうつしてから、もう1回変身するよ。最後はどれ？", rows: 4, cols: 4, start: [[0,0,1,0],[0,1,1,0],[0,0,1,0],[0,0,0,0]], steps: ["たての鏡にうつす","左に1マスずらす"], choices: [
    { grid: [[1,0,0,0],[1,1,0,0],[1,0,0,0],[0,0,0,0]], correct: true },
    { grid: [[0,1,0,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]], correct: false },
    { grid: [[0,0,1,0],[0,1,1,0],[0,0,1,0],[0,0,0,0]], correct: false }
  ]},
  { id: "design_s5_08", stage: 5, type: "twoSteps", instruction: "2つの変身を順番にやってみよう。最後はどれ？", rows: 4, cols: 4, start: [[1,1,0,0],[0,1,1,0],[0,0,1,0],[0,0,0,0]], steps: ["左に90°回す","よこの鏡にうつす"], choices: [
    { grid: [[1,0,0,0],[1,1,0,0],[0,1,1,0],[0,0,0,0]], correct: true },
    { grid: [[0,0,0,0],[0,1,1,0],[1,1,0,0],[1,0,0,0]], correct: false },
    { grid: [[0,0,0,0],[0,1,1,0],[0,0,1,1],[0,0,0,1]], correct: false }
  ]},
  { id: "design_s5_09", stage: 5, type: "findRule", instruction: "上の変身のルールを見つけてね。同じことをすると？", rows: 4, cols: 4, exampleStart: [[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]], exampleEnd: [[0,0,0,1],[0,0,1,1],[0,0,1,0],[0,0,0,0]], start: [[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]], choices: [
    { grid: [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]], correct: true },
    { grid: [[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]], correct: false },
    { grid: [[0,0,0,0],[0,0,1,0],[0,0,1,0],[0,1,1,0]], correct: false }
  ], ruleHint: "mirrorVertical"},
  { id: "design_s5_10", stage: 5, type: "findRule", instruction: "最後のチャレンジ！ 上と同じ変身をすると、？はどれ？", rows: 4, cols: 4, exampleStart: [[0,1,0,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]], exampleEnd: [[0,0,0,0],[0,1,0,0],[1,1,0,0],[0,0,0,0]], start: [[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]], choices: [
    { grid: [[0,0,0,0],[0,0,0,0],[1,1,1,0],[1,0,0,0]], correct: true },
    { grid: [[0,0,0,0],[1,0,0,0],[1,1,1,0],[0,0,0,0]], correct: false },
    { grid: [[0,0,0,0],[0,0,0,0],[0,1,1,1],[0,0,0,1]], correct: false }
  ], ruleHint: "rotateLeft90"}
];

    const fabricWorkshopQuestionPools = {
      1: [
        { id: "fabric-stage1-pink-fabric", stage: 1, type: "fraction-part", question: "ルナがバッグ用に20cmのピンクの生地を用意したよ。その3/5を使います。何cm使う？", total: 20, denominator: 5, numerator: 3, unit: "cm", choices: [12, 15, 4], answer: 12 },
        { id: "fabric-stage1-lace", stage: 1, type: "fraction-part", question: "28cmのレースの5/7を使います。何cm？", total: 28, denominator: 7, numerator: 5, unit: "cm", choices: [20, 24, 4], answer: 20 },
        { id: "fabric-stage1-ribbon", stage: 1, type: "fraction-part", question: "36cmのリボンの2/3を使います。何cm？", total: 36, denominator: 3, numerator: 2, unit: "cm", choices: [24, 18, 12], answer: 24 },
        { id: "fabric-stage1-flower-fabric", stage: 1, type: "fraction-part", question: "24cmの花柄生地の3/4を使います。何cm？", total: 24, denominator: 4, numerator: 3, unit: "cm", choices: [18, 12, 6], answer: 18 },
        { id: "fabric-stage1-beads", stage: 1, type: "fraction-part", question: "30このビーズの2/5を使います。何こ？", total: 30, denominator: 5, numerator: 2, unit: "こ", choices: [12, 18, 6], answer: 12 },
        { id: "fabric-stage1-buttons", stage: 1, type: "fraction-part", question: "42このボタンの5/7を使います。何こ？", total: 42, denominator: 7, numerator: 5, unit: "こ", choices: [30, 35, 6], answer: 30 },
        { id: "fabric-stage1-blue-lace", stage: 1, type: "fraction-part", question: "32cmのレースの3/4を使います。何cm？", total: 32, denominator: 4, numerator: 3, unit: "cm", choices: [24, 16, 8], answer: 24 },
        { id: "fabric-stage1-long-ribbon", stage: 1, type: "fraction-part", question: "45cmのリボンの4/5を使います。何cm？", total: 45, denominator: 5, numerator: 4, unit: "cm", choices: [36, 40, 9], answer: 36 },
        { id: "fabric-stage1-star-beads", stage: 1, type: "fraction-part", question: "48この星ビーズの5/6を使います。何こ？", total: 48, denominator: 6, numerator: 5, unit: "こ", choices: [40, 36, 8], answer: 40 },
        { id: "fabric-stage1-check-fabric", stage: 1, type: "fraction-part", question: "35cmのチェック生地の3/7を使います。何cm？", total: 35, denominator: 7, numerator: 3, unit: "cm", choices: [15, 20, 5], answer: 15 }
      ],
      2: [
        { id: "fabric-stage2-pink-fabric", stage: 2, type: "fraction-whole", question: "ルナが使ったピンクの生地は18cm。これは、もとの生地の3/5だよ。もとの生地は何cm？", partValue: 18, denominator: 5, numerator: 3, unit: "cm", choices: [30, 24, 15], answer: 30 },
        { id: "fabric-stage2-lace", stage: 2, type: "fraction-whole", question: "20cmは、もとのレースの4/7。もとのレースは何cm？", partValue: 20, denominator: 7, numerator: 4, unit: "cm", choices: [35, 28, 16], answer: 35 },
        { id: "fabric-stage2-ribbon", stage: 2, type: "fraction-whole", question: "16cmは、もとのリボンの2/3。もとのリボンは何cm？", partValue: 16, denominator: 3, numerator: 2, unit: "cm", choices: [24, 18, 8], answer: 24 },
        { id: "fabric-stage2-flower-fabric", stage: 2, type: "fraction-whole", question: "21cmは、もとの花柄生地の3/4。もとの生地は何cm？", partValue: 21, denominator: 4, numerator: 3, unit: "cm", choices: [28, 21, 16], answer: 28 },
        { id: "fabric-stage2-beads", stage: 2, type: "fraction-whole", question: "14このビーズは、もとのビーズの2/5。全部で何こ？", partValue: 14, denominator: 5, numerator: 2, unit: "こ", choices: [35, 28, 14], answer: 35 },
        { id: "fabric-stage2-buttons", stage: 2, type: "fraction-whole", question: "30このボタンは、もとのボタンの5/6。全部で何こ？", partValue: 30, denominator: 6, numerator: 5, unit: "こ", choices: [36, 30, 25], answer: 36 },
        { id: "fabric-stage2-lace-eight", stage: 2, type: "fraction-whole", question: "18cmは、もとのレースの3/8。もとのレースは何cm？", partValue: 18, denominator: 8, numerator: 3, unit: "cm", choices: [48, 24, 64], answer: 48 },
        { id: "fabric-stage2-ribbon-five", stage: 2, type: "fraction-whole", question: "28cmは、もとのリボンの4/5。もとのリボンは何cm？", partValue: 28, denominator: 5, numerator: 4, unit: "cm", choices: [35, 28, 40], answer: 35 },
        { id: "fabric-stage2-heart-beads", stage: 2, type: "fraction-whole", question: "25このハートビーズは、もとのビーズの5/7。全部で何こ？", partValue: 25, denominator: 7, numerator: 5, unit: "こ", choices: [35, 25, 49], answer: 35 },
        { id: "fabric-stage2-check-fabric", stage: 2, type: "fraction-whole", question: "24cmは、もとのチェック生地の3/5。もとの生地は何cm？", partValue: 24, denominator: 5, numerator: 3, unit: "cm", choices: [40, 30, 24], answer: 40 }
      ],
      3: [
        { id: "fabric-stage3-ribbons", stage: 3, type: "which-division", question: "ピンクのリボンは18cm、白いリボンは30cm。ピンクは白の何倍？", comparedLabel: "ピンクのリボン", baseLabel: "白いリボン", comparedValue: 18, baseValue: 30, unit: "cm", choices: ["18 ÷ 30", "30 ÷ 18", "30 − 18"], answer: 0, resultText: "3/5倍" },
        { id: "fabric-stage3-beads", stage: 3, type: "which-division", question: "ピンクのビーズは24こ、白いビーズは40こ。ピンクは白の何倍？", comparedLabel: "ピンクのビーズ", baseLabel: "白いビーズ", comparedValue: 24, baseValue: 40, unit: "こ", choices: ["24 ÷ 40", "40 ÷ 24", "40 − 24"], answer: 0, resultText: "3/5倍" },
        { id: "fabric-stage3-lace-ribbon", stage: 3, type: "which-division", question: "レースは35cm、リボンは50cm。レースはリボンの何倍？", comparedLabel: "レース", baseLabel: "リボン", comparedValue: 35, baseValue: 50, unit: "cm", choices: ["35 ÷ 50", "50 ÷ 35", "50 − 35"], answer: 0, resultText: "7/10倍" },
        { id: "fabric-stage3-blue-fabric", stage: 3, type: "which-division", question: "青い生地は16cm、白い生地は32cm。青は白の何倍？", comparedLabel: "青い生地", baseLabel: "白い生地", comparedValue: 16, baseValue: 32, unit: "cm", choices: ["16 ÷ 32", "32 ÷ 16", "32 − 16"], answer: 0, resultText: "1/2倍" },
        { id: "fabric-stage3-buttons", stage: 3, type: "which-division", question: "ピンクのボタンは24こ、白いボタンは36こ。ピンクは白の何倍？", comparedLabel: "ピンクのボタン", baseLabel: "白いボタン", comparedValue: 24, baseValue: 36, unit: "こ", choices: ["24 ÷ 36", "36 ÷ 24", "36 − 24"], answer: 0, resultText: "2/3倍" },
        { id: "fabric-stage3-ribbon-decorations", stage: 3, type: "which-division", question: "リボン飾りは30こ、レース飾りは40こ。リボン飾りはレース飾りの何倍？", comparedLabel: "リボン飾り", baseLabel: "レース飾り", comparedValue: 30, baseValue: 40, unit: "こ", choices: ["30 ÷ 40", "40 ÷ 30", "40 − 30"], answer: 0, resultText: "3/4倍" },
        { id: "fabric-stage3-star-beads", stage: 3, type: "which-division", question: "星ビーズは32こ、丸ビーズは40こ。星ビーズは丸ビーズの何倍？", comparedLabel: "星ビーズ", baseLabel: "丸ビーズ", comparedValue: 32, baseValue: 40, unit: "こ", choices: ["32 ÷ 40", "40 ÷ 32", "40 − 32"], answer: 0, resultText: "4/5倍" },
        { id: "fabric-stage3-lace-fabric", stage: 3, type: "which-division", question: "レースは21cm、生地は35cm。レースは生地の何倍？", comparedLabel: "レース", baseLabel: "生地", comparedValue: 21, baseValue: 35, unit: "cm", choices: ["21 ÷ 35", "35 ÷ 21", "35 − 21"], answer: 0, resultText: "3/5倍" },
        { id: "fabric-stage3-button-beads", stage: 3, type: "which-division", question: "ボタンは28こ、ビーズは42こ。ボタンはビーズの何倍？", comparedLabel: "ボタン", baseLabel: "ビーズ", comparedValue: 28, baseValue: 42, unit: "こ", choices: ["28 ÷ 42", "42 ÷ 28", "42 − 28"], answer: 0, resultText: "2/3倍" },
        { id: "fabric-stage3-ribbon-fabric", stage: 3, type: "which-division", question: "リボンは36cm、生地は45cm。リボンは生地の何倍？", comparedLabel: "リボン", baseLabel: "生地", comparedValue: 36, baseValue: 45, unit: "cm", choices: ["36 ÷ 45", "45 ÷ 36", "45 − 36"], answer: 0, resultText: "4/5倍" }
      ],
      4: [
        { id: "fabric-stage4-beads-three-two", stage: 4, type: "ratio-from-total", question: "ピンクと白のビーズの比は3：2。全部で25こ。ピンクは何こ？", labels: ["ピンクのビーズ", "白いビーズ"], ratio: [3, 2], total: 25, askIndex: 0, unit: "こ", choices: [15, 10, 20], answer: 15 },
        { id: "fabric-stage4-buttons-two-three", stage: 4, type: "ratio-from-total", question: "ピンクと白のボタンの比は2：3。全部で30こ。ピンクは何こ？", labels: ["ピンクのボタン", "白いボタン"], ratio: [2, 3], total: 30, askIndex: 0, unit: "こ", choices: [12, 18, 20], answer: 12 },
        { id: "fabric-stage4-beads-four-three", stage: 4, type: "ratio-from-total", question: "ピンクと白のビーズの比は4：3。全部で35こ。ピンクは何こ？", labels: ["ピンクのビーズ", "白いビーズ"], ratio: [4, 3], total: 35, askIndex: 0, unit: "こ", choices: [20, 15, 28], answer: 20 },
        { id: "fabric-stage4-ribbons-three-five", stage: 4, type: "ratio-from-total", question: "ピンクと白のリボン飾りの比は3：5。全部で40こ。ピンクは何こ？", labels: ["ピンクのリボン飾り", "白いリボン飾り"], ratio: [3, 5], total: 40, askIndex: 0, unit: "こ", choices: [15, 25, 8], answer: 15 },
        { id: "fabric-stage4-buttons-two-five", stage: 4, type: "ratio-from-total", question: "ピンクと白のボタンの比は2：5。全部で42こ。白は何こ？", labels: ["ピンクのボタン", "白いボタン"], ratio: [2, 5], total: 42, askIndex: 1, unit: "こ", choices: [30, 12, 35], answer: 30 },
        { id: "fabric-stage4-beads-five-three", stage: 4, type: "ratio-from-total", question: "ピンクと白のビーズの比は5：3。全部で48こ。ピンクは何こ？", labels: ["ピンクのビーズ", "白いビーズ"], ratio: [5, 3], total: 48, askIndex: 0, unit: "こ", choices: [30, 18, 24], answer: 30 },
        { id: "fabric-stage4-lace-four-five", stage: 4, type: "ratio-from-total", question: "ピンクと白のレース飾りの比は4：5。全部で45こ。白は何こ？", labels: ["ピンクのレース飾り", "白いレース飾り"], ratio: [4, 5], total: 45, askIndex: 1, unit: "こ", choices: [25, 20, 30], answer: 25 },
        { id: "fabric-stage4-ribbons-three-four", stage: 4, type: "ratio-from-total", question: "ピンクと白のリボン飾りの比は3：4。全部で42こ。白は何こ？", labels: ["ピンクのリボン飾り", "白いリボン飾り"], ratio: [3, 4], total: 42, askIndex: 1, unit: "こ", choices: [24, 18, 30], answer: 24 },
        { id: "fabric-stage4-buttons-five-two", stage: 4, type: "ratio-from-total", question: "ピンクと白のボタンの比は5：2。全部で35こ。ピンクは何こ？", labels: ["ピンクのボタン", "白いボタン"], ratio: [5, 2], total: 35, askIndex: 0, unit: "こ", choices: [25, 10, 20], answer: 25 },
        { id: "fabric-stage4-beads-two-seven", stage: 4, type: "ratio-from-total", question: "ピンクと白のビーズの比は2：7。全部で45こ。白は何こ？", labels: ["ピンクのビーズ", "白いビーズ"], ratio: [2, 7], total: 45, askIndex: 1, unit: "こ", choices: [35, 10, 28], answer: 35 }
      ],
      5: [
        { id: "fabric-stage5-bracelet", stage: 5, type: "ratio-from-part", question: "ルナがブレスレットを作ってるよ。ピンクと白のビーズは3：2。ピンクが18こなら、白は何こ？", labels: ["ピンクのビーズ", "白いビーズ"], ratio: [3, 2], knownIndex: 0, knownValue: 18, askIndex: 1, unit: "こ", choices: [12, 9, 27], answer: 12 },
        { id: "fabric-stage5-beads-two-five", stage: 5, type: "ratio-from-part", question: "ピンクと白のビーズは2：5。ピンクが8こなら、白は何こ？", labels: ["ピンクのビーズ", "白いビーズ"], ratio: [2, 5], knownIndex: 0, knownValue: 8, askIndex: 1, unit: "こ", choices: [20, 12, 16], answer: 20 },
        { id: "fabric-stage5-buttons-four-three", stage: 5, type: "ratio-from-part", question: "ピンクと白のボタンは4：3。白が15こなら、ピンクは何こ？", labels: ["ピンクのボタン", "白いボタン"], ratio: [4, 3], knownIndex: 1, knownValue: 15, askIndex: 0, unit: "こ", choices: [20, 15, 12], answer: 20 },
        { id: "fabric-stage5-ribbons-three-five", stage: 5, type: "ratio-from-part", question: "ピンクと白のリボン飾りは3：5。白が25こなら、ピンクは何こ？", labels: ["ピンクのリボン飾り", "白いリボン飾り"], ratio: [3, 5], knownIndex: 1, knownValue: 25, askIndex: 0, unit: "こ", choices: [15, 20, 10], answer: 15 },
        { id: "fabric-stage5-beads-five-two", stage: 5, type: "ratio-from-part", question: "ピンクと白のビーズは5：2。ピンクが30こなら、白は何こ？", labels: ["ピンクのビーズ", "白いビーズ"], ratio: [5, 2], knownIndex: 0, knownValue: 30, askIndex: 1, unit: "こ", choices: [12, 18, 20], answer: 12 },
        { id: "fabric-stage5-buttons-two-three", stage: 5, type: "ratio-from-part", question: "ピンクと白のボタンは2：3。白が18こなら、ピンクは何こ？", labels: ["ピンクのボタン", "白いボタン"], ratio: [2, 3], knownIndex: 1, knownValue: 18, askIndex: 0, unit: "こ", choices: [12, 9, 15], answer: 12 },
        { id: "fabric-stage5-lace-four-five", stage: 5, type: "ratio-from-part", question: "ピンクと白のレース飾りは4：5。ピンクが16こなら、白は何こ？", labels: ["ピンクのレース飾り", "白いレース飾り"], ratio: [4, 5], knownIndex: 0, knownValue: 16, askIndex: 1, unit: "こ", choices: [20, 16, 25], answer: 20 },
        { id: "fabric-stage5-ribbons-three-four", stage: 5, type: "ratio-from-part", question: "ピンクと白のリボン飾りは3：4。ピンクが21こなら、白は何こ？", labels: ["ピンクのリボン飾り", "白いリボン飾り"], ratio: [3, 4], knownIndex: 0, knownValue: 21, askIndex: 1, unit: "こ", choices: [28, 21, 24], answer: 28 },
        { id: "fabric-stage5-buttons-five-three", stage: 5, type: "ratio-from-part", question: "ピンクと白のボタンは5：3。白が12こなら、ピンクは何こ？", labels: ["ピンクのボタン", "白いボタン"], ratio: [5, 3], knownIndex: 1, knownValue: 12, askIndex: 0, unit: "こ", choices: [20, 15, 18], answer: 20 },
        { id: "fabric-stage5-beads-two-seven", stage: 5, type: "ratio-from-part", question: "ピンクと白のビーズは2：7。白が28こなら、ピンクは何こ？", labels: ["ピンクのビーズ", "白いビーズ"], ratio: [2, 7], knownIndex: 1, knownValue: 28, askIndex: 0, unit: "こ", choices: [8, 14, 10], answer: 8 }
      ]
    };

    function buildRibbonWorkshopIntegerChoices(answer, candidates) {
      const choices = [answer];

      candidates.forEach(candidate => {
        if (
          Number.isInteger(candidate) &&
          candidate > 0 &&
          candidate !== answer &&
          !choices.includes(candidate) &&
          choices.length < 3
        ) {
          choices.push(candidate);
        }
      });

      let fallback = Math.max(1, answer + 1);
      while (choices.length < 3) {
        if (!choices.includes(fallback)) {
          choices.push(fallback);
        }
        fallback += 1;
      }

      return choices;
    }

    const ribbonWorkshopQuestionPools = {
      1: [
        ...[["add8","+",8,20,12],["sub7","−",7,15,22],["add6","+",6,19,13],["sub9","−",9,14,23],["add12","+",12,30,18],["sub8","−",8,17,25],["add15","+",15,37,22],["sub13","−",13,19,32],["add17","+",17,42,25],["sub16","−",16,28,44]].map(([id, op, value, total, answer]) => ({ id: `ribbon-1-${id}`, stage: 1, type: op === "+" ? "balance-add" : "balance-sub", question: `□ ${op} ${value} = ${total}。□＝○の形にするには、左右に何をする？`, equation: `□ ${op} ${value} = ${total}`, choices: op === "+" ? [`両方から${value}をひく`, `両方に${value}をたす`, `両方を${value}でわる`] : [`両方に${value}をたす`, `両方から${value}をひく`, `両方を${value}でわる`], answer: op === "+" ? `両方から${value}をひく` : `両方に${value}をたす`, feedback: `□ ${op} ${value} = ${total}<br>□ = ${answer}✨` }))
      ],
      2: [
        ...[["mul4","×",4,28,7],["div3","÷",3,8,24],["mul5","×",5,35,7],["div4","÷",4,6,24],["mul6","×",6,48,8],["div5","÷",5,7,35],["mul7","×",7,63,9],["div6","÷",6,8,48],["mul8","×",8,72,9],["div7","÷",7,6,42]].map(([id, op, value, total, answer]) => ({ id: `ribbon-2-${id}`, stage: 2, type: op === "×" ? "balance-multiply" : "balance-divide", question: `□ ${op} ${value} = ${total}。□＝○の形にするには、左右に何をする？`, equation: `□ ${op} ${value} = ${total}`, choices: op === "×" ? [`両方を${value}でわる`, `両方に${value}をかける`, `両方から${value}をひく`] : [`両方に${value}をかける`, `両方を${value}でわる`, `両方に${value}をたす`], answer: op === "×" ? `両方を${value}でわる` : `両方に${value}をかける`, feedback: `□ ${op} ${value} = ${total}<br>□ = ${answer}✨` }))
      ],
      3: [
        { id: "ribbon-3-three", stage: 3, type: "group-operation", question: "🎁＝○の形にするには、左右に何をする？", equation: "□ × 3 + 5 = 26", groupEquation: "🎁 + 5 = 26", choices: ["左右から5をひく", "左右に5をたす", "左右を3でわる"], answer: "左右から5をひく", feedback: "🎁 + 5 = 26<br>🎁 = 21<br>🎁の中身は □ × 3<br>□ × 3 = 21<br>□ = 7 ✨" },
        { id: "ribbon-3-four", stage: 3, type: "group-operation", question: "🎁＝○の形にするには、左右に何をする？", equation: "□ × 4 + 6 = 30", groupEquation: "🎁 + 6 = 30", choices: ["左右から6をひく", "左右に6をたす", "両方を4でわる"], answer: "左右から6をひく", feedback: "🎁 + 6 = 30<br>🎁 = 24<br>🎁の中身は □ × 4<br>□ × 4 = 24<br>□ = 6 ✨" },
        { id: "ribbon-3-five", stage: 3, type: "group-operation", question: "🎁＝○の形にするには、左右に何をする？", equation: "□ × 5 + 7 = 32", groupEquation: "🎁 + 7 = 32", choices: ["左右から7をひく", "左右に7をたす", "両方を5でわる"], answer: "左右から7をひく", feedback: "🎁 + 7 = 32<br>🎁 = 25<br>🎁の中身は □ × 5<br>□ × 5 = 25<br>□ = 5 ✨" },
        ...[[2,9,25,8],[6,5,47,7],[3,8,32,8],[7,4,46,6],[4,9,37,7],[5,6,46,8],[8,3,59,7]].map(([a,b,c,x], index) => ({ id: `ribbon-3-extra-${index + 4}`, stage: 3, type: "group-operation", question: "🎁＝○の形にするには、左右に何をする？", equation: `□ × ${a} + ${b} = ${c}`, groupEquation: `🎁 + ${b} = ${c}`, choices: [`左右から${b}をひく`, `左右に${b}をたす`, `左右を${a}でわる`], answer: `左右から${b}をひく`, feedback: `🎁 + ${b} = ${c}<br>🎁 = ${c - b}<br>🎁の中身は □ × ${a}<br>□ × ${a} = ${c - b}<br>□ = ${x} ✨` }))
      ],
      4: [
        { id: "ribbon-4-four", stage: 4, type: "solve-group", question: "□ × 4 + 6 = 30。□はいくつ？", equation: "□ × 4 + 6 = 30", choices: [6, 9, 24], answer: 6, feedback: "左右から6をひく<br>□ × 4 = 24<br>左右を4でわる<br>□ = 6 ✨" },
        { id: "ribbon-4-three", stage: 4, type: "solve-group", question: "□ × 3 + 7 = 28。□はいくつ？", equation: "□ × 3 + 7 = 28", choices: [7, 9, 21], answer: 7, feedback: "左右から7をひく<br>□ × 3 = 21<br>左右を3でわる<br>□ = 7 ✨" },
        { id: "ribbon-4-five", stage: 4, type: "solve-group", question: "□ × 5 + 4 = 34。□はいくつ？", equation: "□ × 5 + 4 = 34", choices: [6, 7, 30], answer: 6, feedback: "左右から4をひく<br>□ × 5 = 30<br>左右を5でわる<br>□ = 6 ✨" },
        ...[[2,11,27,8],[6,3,45,7],[4,5,37,8],[7,6,55,7],[3,10,37,9],[5,8,48,8],[8,7,63,7]].map(([a,b,c,x], index) => ({ id: `ribbon-4-extra-${index + 4}`, stage: 4, type: "solve-group", question: `□ × ${a} + ${b} = ${c}。□はいくつ？`, equation: `□ × ${a} + ${b} = ${c}`, choices: buildRibbonWorkshopIntegerChoices(x, [c - b, c / a, a, x + a, x - 1, x + 1]), answer: x, feedback: `左右から${b}をひく<br>□ × ${a} = ${c - b}<br>左右を${a}でわる<br>□ = ${x} ✨` }))
      ],
      5: [
        { id: "ribbon-5-left", stage: 5, type: "solve-reordered", question: "5 + □ × 3 = 26。□はいくつ？", equation: "5 + □ × 3 = 26", choices: [7, 5, 21], answer: 7, feedback: "見た目が変わっても同じだね✨<br>左右から5をひく<br>□ × 3 = 21<br>□ = 7" },
        { id: "ribbon-5-right", stage: 5, type: "solve-reordered", question: "30 = □ × 4 + 6。□はいくつ？", equation: "30 = □ × 4 + 6", choices: [6, 9, 24], answer: 6, feedback: "見た目が変わっても同じだね✨<br>左右から6をひく<br>□ × 4 = 24<br>□ = 6" },
        { id: "ribbon-5-left-seven", stage: 5, type: "solve-reordered", question: "7 + □ × 5 = 32。□はいくつ？", equation: "7 + □ × 5 = 32", choices: [5, 7, 25], answer: 5, feedback: "見た目が変わっても同じだね✨<br>左右から7をひく<br>□ × 5 = 25<br>□ = 5" },
        ...[["B",2,9,25,8],["A",6,5,47,7],["B",3,8,32,8],["A",7,4,46,6],["B",4,9,37,7],["A",5,6,46,8],["B",8,3,59,7]].map(([form,a,b,c,x], index) => ({ id: `ribbon-5-extra-${index + 4}`, stage: 5, type: "solve-reordered", question: `${form === "A" ? `${b} + □ × ${a} = ${c}` : `${c} = □ × ${a} + ${b}`}。□はいくつ？`, equation: form === "A" ? `${b} + □ × ${a} = ${c}` : `${c} = □ × ${a} + ${b}`, choices: buildRibbonWorkshopIntegerChoices(x, [c - b, a, x + a, x - 1, x + 1]), answer: x, feedback: `見た目が変わっても同じだね✨<br>左右から${b}をひく<br>□ × ${a} = ${c - b}<br>□ = ${x}` }))
      ]
    };

    const beadsWorkshopQuestionPools = {
      1: [
        { id: "beads-1-pink-white", stage: 1, type: "pattern", question: "ルナとブレスレットを作るよ✨ くり返すひとまとまりはどれ？", pattern: ["🩷", "🤍", "🩷"], answer: "🩷 🤍 🩷", choices: ["🩷 🤍 🩷", "🩷 🤍", "🩷 🤍 🩷 🩷"], feedback: "🩷 🤍 🩷 ｜ 🩷 🤍 🩷 ｜ …<br><br>この3こで1セットだったんだね✨" },
        { id: "beads-1-blue-gold", stage: 1, type: "pattern", question: "ルナとブレスレットを作るよ✨ くり返すひとまとまりはどれ？", pattern: ["💙", "💛", "💛"], answer: "💙 💛 💛", choices: ["💙 💛 💛", "💙 💛", "💛 💛 💙 💛"], feedback: "💙 💛 💛 ｜ 💙 💛 💛 ｜ …<br><br>この3こで1セット✨" },
        { id: "beads-1-green-purple", stage: 1, type: "pattern", question: "ルナとブレスレットを作るよ✨ くり返すひとまとまりはどれ？", pattern: ["💚", "💜", "🤍", "💜"], answer: "💚 💜 🤍 💜", choices: ["💚 💜 🤍 💜", "💚 💜 🤍", "💚 💜 🤍 💜 💚"], feedback: "💚 💜 🤍 💜 ｜ 💚 💜 🤍 💜 ｜ …<br><br>この4こで1セットだったんだね✨" },
        { id: "beads-1-gold-blue-white", stage: 1, type: "pattern", question: "ルナとブレスレットを作るよ✨ くり返すひとまとまりはどれ？", pattern: ["💛", "💙", "🤍"], answer: "💛 💙 🤍", choices: ["💛 💙 🤍", "💛 💙", "💛 💙 🤍 💛"], feedback: "💛 💙 🤍 ｜ 💛 💙 🤍 ｜ …<br><br>この3こで1セットだったんだね✨" },
        { id: "beads-1-purple-pink-green", stage: 1, type: "pattern", question: "ルナとブレスレットを作るよ✨ くり返すひとまとまりはどれ？", pattern: ["💜", "🩷", "💚", "🤍"], answer: "💜 🩷 💚 🤍", choices: ["💜 🩷 💚 🤍", "💜 🩷 💚", "💜 🩷 💚 🤍 💜"], feedback: "💜 🩷 💚 🤍 ｜ 💜 🩷 💚 🤍 ｜ …<br><br>この4こで1セットだったんだね✨" },
        { id: "beads-1-white-gold-pink", stage: 1, type: "pattern", question: "ルナとブレスレットを作るよ✨ くり返すひとまとまりはどれ？", pattern: ["🤍", "💛", "🩷", "💙"], answer: "🤍 💛 🩷 💙", choices: ["🤍 💛 🩷 💙", "🤍 💛 🩷", "🤍 💛 🩷 💙 🤍"], feedback: "🤍 💛 🩷 💙 ｜ 🤍 💛 🩷 💙 ｜ …<br><br>この4こで1セットだったんだね✨" },
        { id: "beads-1-blue-green-gold-purple", stage: 1, type: "pattern", question: "ルナとブレスレットを作るよ✨ くり返すひとまとまりはどれ？", pattern: ["💙", "💚", "💛", "💜", "🤍"], answer: "💙 💚 💛 💜 🤍", choices: ["💙 💚 💛 💜 🤍", "💙 💚 💛 💜", "💙 💚 💛 💜 🤍 💙"], feedback: "💙 💚 💛 💜 🤍 ｜ 💙 💚 💛 💜 🤍 ｜ …<br><br>この5こで1セットだったんだね✨" },
        { id: "beads-1-pink-blue-gold", stage: 1, type: "pattern", question: "ルナとブレスレットを作るよ✨ くり返すひとまとまりはどれ？", pattern: ["🩷", "💙", "💛", "💙"], answer: "🩷 💙 💛 💙", choices: ["🩷 💙 💛 💙", "🩷 💙 💛", "🩷 💙 💛 💙 🩷"], feedback: "🩷 💙 💛 💙 ｜ 🩷 💙 💛 💙 ｜ …<br><br>この4こで1セットだったんだね✨" },
        { id: "beads-1-green-white-gold", stage: 1, type: "pattern", question: "ルナとブレスレットを作るよ✨ くり返すひとまとまりはどれ？", pattern: ["💚", "🤍", "💛"], answer: "💚 🤍 💛", choices: ["💚 🤍 💛", "💚 🤍", "💚 🤍 💛 💚"], feedback: "💚 🤍 💛 ｜ 💚 🤍 💛 ｜ …<br><br>この3こで1セットだったんだね✨" },
        { id: "beads-1-purple-white-pink-blue", stage: 1, type: "pattern", question: "ルナとブレスレットを作るよ✨ くり返すひとまとまりはどれ？", pattern: ["💜", "🤍", "🩷", "💙", "💛"], answer: "💜 🤍 🩷 💙 💛", choices: ["💜 🤍 🩷 💙 💛", "💜 🤍 🩷 💙", "💜 🤍 🩷 💙 💛 💜"], feedback: "💜 🤍 🩷 💙 💛 ｜ 💜 🤍 🩷 💙 💛 ｜ …<br><br>この5こで1セットだったんだね✨" }
      ],
      2: [
        { id: "beads-2-three-sets", stage: 2, type: "setcount", question: "同じ模様をここまで通したよ✨ 何セットできてる？", pattern: ["🩷", "💙", "💛", "🤍"], sets: 3, answer: "3セット", choices: ["2セット", "3セット", "4セット"], feedback: "🩷 💙 💛 🤍 ｜ 🩷 💙 💛 🤍 ｜ 🩷 💙 💛 🤍<br><br>1セット4こ。12 ÷ 4 = 3<br>3セットできてるね✨" },
        { id: "beads-2-four-sets", stage: 2, type: "setcount", question: "同じ模様をここまで通したよ✨ 何セットできてる？", pattern: ["💜", "💚", "🤍"], sets: 4, answer: "4セット", choices: ["3セット", "4セット", "5セット"], feedback: "💜 💚 🤍 ｜ 💜 💚 🤍 ｜ 💜 💚 🤍 ｜ 💜 💚 🤍<br><br>1セット3こ。12 ÷ 3 = 4<br>4セットできてるね✨" },
        { id: "beads-2-five-three", stage: 2, type: "setcount", question: "同じ模様をここまで通したよ✨ 何セットできてる？", pattern: ["💛", "🩷", "💙", "🤍", "💜"], sets: 3, answer: "3セット", choices: ["2セット", "3セット", "4セット"], feedback: "💛 🩷 💙 🤍 💜 ｜ 💛 🩷 💙 🤍 💜 ｜ 💛 🩷 💙 🤍 💜<br><br>1セット5こ。15 ÷ 5 = 3<br>3セットできてるね✨" },
        { id: "beads-2-three-five", stage: 2, type: "setcount", question: "同じ模様をここまで通したよ✨ 何セットできてる？", pattern: ["🩷", "💛", "🤍"], sets: 5, answer: "5セット", choices: ["4セット", "5セット", "6セット"], feedback: "🩷 💛 🤍 ｜ 🩷 💛 🤍 ｜ 🩷 💛 🤍 ｜ 🩷 💛 🤍 ｜ 🩷 💛 🤍<br><br>1セット3こ。15 ÷ 3 = 5<br>5セットできてるね✨" },
        { id: "beads-2-four-four", stage: 2, type: "setcount", question: "同じ模様をここまで通したよ✨ 何セットできてる？", pattern: ["💙", "💚", "💛", "🤍"], sets: 4, answer: "4セット", choices: ["3セット", "4セット", "5セット"], feedback: "💙 💚 💛 🤍 ｜ 💙 💚 💛 🤍 ｜ 💙 💚 💛 🤍 ｜ 💙 💚 💛 🤍<br><br>1セット4こ。16 ÷ 4 = 4<br>4セットできてるね✨" },
        { id: "beads-2-three-three", stage: 2, type: "setcount", question: "同じ模様をここまで通したよ✨ 何セットできてる？", pattern: ["💜", "💙", "🩷"], sets: 3, answer: "3セット", choices: ["2セット", "3セット", "4セット"], feedback: "💜 💙 🩷 ｜ 💜 💙 🩷 ｜ 💜 💙 🩷<br><br>1セット3こ。9 ÷ 3 = 3<br>3セットできてるね✨" },
        { id: "beads-2-five-four", stage: 2, type: "setcount", question: "同じ模様をここまで通したよ✨ 何セットできてる？", pattern: ["💚", "🤍", "💛", "💜", "💙"], sets: 4, answer: "4セット", choices: ["3セット", "4セット", "5セット"], feedback: "💚 🤍 💛 💜 💙 ｜ 💚 🤍 💛 💜 💙 ｜ 💚 🤍 💛 💜 💙 ｜ 💚 🤍 💛 💜 💙<br><br>1セット5こ。20 ÷ 5 = 4<br>4セットできてるね✨" },
        { id: "beads-2-four-three", stage: 2, type: "setcount", question: "同じ模様をここまで通したよ✨ 何セットできてる？", pattern: ["🩷", "💜", "🤍", "💛"], sets: 3, answer: "3セット", choices: ["2セット", "3セット", "4セット"], feedback: "🩷 💜 🤍 💛 ｜ 🩷 💜 🤍 💛 ｜ 🩷 💜 🤍 💛<br><br>1セット4こ。12 ÷ 4 = 3<br>3セットできてるね✨" },
        { id: "beads-2-three-five-blue", stage: 2, type: "setcount", question: "同じ模様をここまで通したよ✨ 何セットできてる？", pattern: ["💙", "🤍", "💚"], sets: 5, answer: "5セット", choices: ["4セット", "5セット", "6セット"], feedback: "💙 🤍 💚 ｜ 💙 🤍 💚 ｜ 💙 🤍 💚 ｜ 💙 🤍 💚 ｜ 💙 🤍 💚<br><br>1セット3こ。15 ÷ 3 = 5<br>5セットできてるね✨" },
        { id: "beads-2-four-five", stage: 2, type: "setcount", question: "同じ模様をここまで通したよ✨ 何セットできてる？", pattern: ["💛", "🩷", "💙", "💜"], sets: 5, answer: "5セット", choices: ["4セット", "5セット", "6セット"], feedback: "💛 🩷 💙 💜 ｜ 💛 🩷 💙 💜 ｜ 💛 🩷 💙 💜 ｜ 💛 🩷 💙 💜 ｜ 💛 🩷 💙 💜<br><br>1セット4こ。20 ÷ 4 = 5<br>5セットできてるね✨" }
      ],
      3: [
        { id: "beads-3-23", stage: 3, type: "nth", question: "この模様をずーっと続けるよ✨ 23番目のビーズはどれ？", pattern: ["🩷", "💙", "💛", "🤍"], position: 23, answer: "💛", choices: ["💛", "🩷", "🤍"], feedback: "1セット4こ<br>23 ÷ 4 = 5 あまり3<br><br>5セットのあと、3こ進むよ。<br>1セットの3番目は 💛<br>だから答えは 💛 ✨" },
        { id: "beads-3-20", stage: 3, type: "nth", question: "この模様をずーっと続けるよ✨ 20番目のビーズはどれ？", pattern: ["💜", "💚", "🤍"], position: 20, answer: "💚", choices: ["💚", "💜", "🤍"], feedback: "1セット3こ<br>20 ÷ 3 = 6 あまり2<br><br>1セットの2番目は 💚<br>だから答えは 💚 ✨" },
        { id: "beads-3-17", stage: 3, type: "nth", question: "この模様をずーっと続けるよ✨ 17番目のビーズはどれ？", pattern: ["💛", "🩷", "💙", "🤍", "💜"], position: 17, answer: "🩷", choices: ["🩷", "💛", "💜"], feedback: "1セット5こ<br>17 ÷ 5 = 3 あまり2<br><br>1セットの2番目は 🩷<br>だから答えは 🩷 ✨" },
        { id: "beads-3-29", stage: 3, type: "nth", question: "この模様をずーっと続けるよ✨ 29番目のビーズはどれ？", pattern: ["💚", "💜", "🤍", "💛"], position: 29, answer: "💚", choices: ["💚", "💜", "💛"], feedback: "1セット4こ<br>29 ÷ 4 = 7 あまり1<br><br>7セットのあと、1こ進むよ。<br>1セットの1番目は 💚<br>だから答えは 💚 ✨" },
        { id: "beads-3-32", stage: 3, type: "nth", question: "この模様をずーっと続けるよ✨ 32番目のビーズはどれ？", pattern: ["💙", "🩷", "💛", "🤍", "💜"], position: 32, answer: "🩷", choices: ["🩷", "💙", "🤍"], feedback: "1セット5こ<br>32 ÷ 5 = 6 あまり2<br><br>6セットのあと、2こ進むよ。<br>1セットの2番目は 🩷<br>だから答えは 🩷 ✨" },
        { id: "beads-3-25", stage: 3, type: "nth", question: "この模様をずーっと続けるよ✨ 25番目のビーズはどれ？", pattern: ["💛", "💚", "💙"], position: 25, answer: "💛", choices: ["💛", "💚", "💙"], feedback: "1セット3こ<br>25 ÷ 3 = 8 あまり1<br><br>8セットのあと、1こ進むよ。<br>1セットの1番目は 💛<br>だから答えは 💛 ✨" },
        { id: "beads-3-34", stage: 3, type: "nth", question: "この模様をずーっと続けるよ✨ 34番目のビーズはどれ？", pattern: ["💜", "🤍", "💚", "🩷"], position: 34, answer: "🤍", choices: ["🤍", "💜", "🩷"], feedback: "1セット4こ<br>34 ÷ 4 = 8 あまり2<br><br>8セットのあと、2こ進むよ。<br>1セットの2番目は 🤍<br>だから答えは 🤍 ✨" },
        { id: "beads-3-28", stage: 3, type: "nth", question: "この模様をずーっと続けるよ✨ 28番目のビーズはどれ？", pattern: ["🩷", "💛", "💙", "🤍", "💚"], position: 28, answer: "💙", choices: ["💙", "🩷", "💚"], feedback: "1セット5こ<br>28 ÷ 5 = 5 あまり3<br><br>5セットのあと、3こ進むよ。<br>1セットの3番目は 💙<br>だから答えは 💙 ✨" },
        { id: "beads-3-41", stage: 3, type: "nth", question: "この模様をずーっと続けるよ✨ 41番目のビーズはどれ？", pattern: ["💚", "💙", "🩷", "🤍", "💛", "💜"], position: 41, answer: "💛", choices: ["💛", "💚", "💜"], feedback: "1セット6こ<br>41 ÷ 6 = 6 あまり5<br><br>6セットのあと、5こ進むよ。<br>1セットの5番目は 💛<br>だから答えは 💛 ✨" },
        { id: "beads-3-27", stage: 3, type: "nth", question: "この模様をずーっと続けるよ✨ 27番目のビーズはどれ？", pattern: ["💙", "💛", "🩷", "🤍"], position: 27, answer: "🩷", choices: ["🩷", "💙", "🤍"], feedback: "1セット4こ<br>27 ÷ 4 = 6 あまり3<br><br>6セットのあと、3こ進むよ。<br>1セットの3番目は 🩷<br>だから答えは 🩷 ✨" }
      ],
      4: [
        { id: "beads-4-18", stage: 4, type: "count", question: "この模様で18こまで通すよ✨ 🩷 は全部で何こ必要？", pattern: ["🩷", "🩷", "💙", "🤍"], target: "🩷", total: 18, answer: 10, choices: [10, 8, 12], feedback: "1セット4こ<br>18 ÷ 4 = 4 あまり2<br><br>4セットの中には 🩷 が2こずつ。2 × 4 = 8こ<br>残り2こは 🩷 🩷。さらに2こ<br>8 + 2 = 10こ ✨" },
        { id: "beads-4-14", stage: 4, type: "count", question: "この模様で14こまで通すよ✨ 💛 は全部で何こ必要？", pattern: ["💛", "💙", "🤍", "💛"], target: "💛", total: 14, answer: 7, choices: [7, 6, 8], feedback: "1セット4こ<br>14 ÷ 4 = 3 あまり2<br><br>完全な3セット：2 × 3 = 6こ<br>余りは 💛 💙。さらに1こ<br>6 + 1 = 7こ ✨" },
        { id: "beads-4-17", stage: 4, type: "count", question: "この模様で17こまで通すよ✨ 💜 は全部で何こ必要？", pattern: ["💜", "💚", "💙", "💜", "🤍"], target: "💜", total: 17, answer: 7, choices: [7, 6, 8], feedback: "1セット5こ<br>17 ÷ 5 = 3 あまり2<br><br>完全な3セット：2 × 3 = 6こ<br>余りは 💜 💚。さらに1こ<br>6 + 1 = 7こ ✨" },
        { id: "beads-4-19", stage: 4, type: "count", question: "この模様で19こまで通すよ✨ 💚 は全部で何こ必要？", pattern: ["💚", "💙", "💚", "🤍"], target: "💚", total: 19, answer: 10, choices: [10, 8, 9], feedback: "1セット4こ<br>19 ÷ 4 = 4 あまり3<br><br>完全な4セット：💚 は2こずつ。2 × 4 = 8こ<br>余りは 💚 💙 💚。さらに2こ<br>8 + 2 = 10こ ✨" },
        { id: "beads-4-22", stage: 4, type: "count", question: "この模様で22こまで通すよ✨ 💛 は全部で何こ必要？", pattern: ["💙", "💛", "🤍", "💛"], target: "💛", total: 22, answer: 11, choices: [11, 10, 12], feedback: "1セット4こ<br>22 ÷ 4 = 5 あまり2<br><br>完全な5セット：💛 は2こずつ。2 × 5 = 10こ<br>余りは 💙 💛。さらに1こ<br>10 + 1 = 11こ ✨" },
        { id: "beads-4-23", stage: 4, type: "count", question: "この模様で23こまで通すよ✨ 🩷 は全部で何こ必要？", pattern: ["💙", "🩷", "💚", "🩷", "🤍"], target: "🩷", total: 23, answer: 9, choices: [9, 8, 10], feedback: "1セット5こ<br>23 ÷ 5 = 4 あまり3<br><br>完全な4セット：🩷 は2こずつ。2 × 4 = 8こ<br>余りは 💙 🩷 💚。さらに1こ<br>8 + 1 = 9こ ✨" },
        { id: "beads-4-27", stage: 4, type: "count", question: "この模様で27こまで通すよ✨ 💜 は全部で何こ必要？", pattern: ["💜", "💙", "💚", "💜", "🤍"], target: "💜", total: 27, answer: 11, choices: [11, 10, 12], feedback: "1セット5こ<br>27 ÷ 5 = 5 あまり2<br><br>完全な5セット：💜 は2こずつ。2 × 5 = 10こ<br>余りは 💜 💙。さらに1こ<br>10 + 1 = 11こ ✨" },
        { id: "beads-4-31", stage: 4, type: "count", question: "この模様で31こまで通すよ✨ 💛 は全部で何こ必要？", pattern: ["💛", "💙", "💚", "💛", "🤍"], target: "💛", total: 31, answer: 13, choices: [13, 12, 14], feedback: "1セット5こ<br>31 ÷ 5 = 6 あまり1<br><br>完全な6セット：💛 は2こずつ。2 × 6 = 12こ<br>余りは 💛。さらに1こ<br>12 + 1 = 13こ ✨" },
        { id: "beads-4-29", stage: 4, type: "count", question: "この模様で29こまで通すよ✨ 🩷 は全部で何こ必要？", pattern: ["🩷", "💙", "🩷", "💚", "🤍", "💜"], target: "🩷", total: 29, answer: 10, choices: [10, 8, 9], feedback: "1セット6こ<br>29 ÷ 6 = 4 あまり5<br><br>完全な4セット：🩷 は2こずつ。2 × 4 = 8こ<br>余りは 🩷 💙 🩷 💚 🤍。さらに2こ<br>8 + 2 = 10こ ✨" },
        { id: "beads-4-26", stage: 4, type: "count", question: "この模様で26こまで通すよ✨ 💜 は全部で何こ必要？", pattern: ["💙", "💜", "💚", "💜", "🤍"], target: "💜", total: 26, answer: 10, choices: [10, 11, 9], feedback: "1セット5こ<br>26 ÷ 5 = 5 あまり1<br><br>完全な5セット：💜 は2こずつ。2 × 5 = 10こ<br>余りは 💙。追加は0こ<br>10 + 0 = 10こ ✨" }
      ],
      5: [
        { id: "beads-5-pink", stage: 5, type: "setformula", question: "この模様を □セット作るよ✨ 🩷 は全部で何こ？ 何セットでも使える式はどれ？", pattern: ["🩷", "🩷", "💙", "🤍"], target: "🩷", perSet: 2, answer: "□ × 2", choices: ["□ × 2", "□ + 2", "□ × 4"], feedback: "1セット → 2こ<br>2セット → 4こ<br>5セット → 10こ<br><br>□セット → □ × 2こ<br>何セットでも使えるレシピになった〜✨" },
        { id: "beads-5-yellow", stage: 5, type: "setformula", question: "この模様を □セット作るよ✨ 💛 は全部で何こ？ 何セットでも使える式はどれ？", pattern: ["💛", "💙", "💛", "🤍"], target: "💛", perSet: 2, answer: "□ × 2", choices: ["□ × 2", "□ + 2", "□ × 4"], feedback: "1セット → 2こ<br>2セット → 4こ<br>5セット → 10こ<br><br>□セット → □ × 2こ<br>何セットでも使えるレシピになった〜✨" },
        { id: "beads-5-purple", stage: 5, type: "setformula", question: "この模様を □セット作るよ✨ 💜 は全部で何こ？ 何セットでも使える式はどれ？", pattern: ["💜", "💚", "💙", "💜", "🤍"], target: "💜", perSet: 2, answer: "□ × 2", choices: ["□ × 2", "□ + 2", "□ × 5"], feedback: "1セット → 2こ<br>2セット → 4こ<br>5セット → 10こ<br><br>□セット → □ × 2こ<br>何セットでも使えるレシピになった〜✨" },
        { id: "beads-5-green-three", stage: 5, type: "setformula", question: "この模様を □セット作るよ✨ 💚 は全部で何こ？ 何セットでも使える式はどれ？", pattern: ["💚", "💙", "💚", "🤍", "💚"], target: "💚", perSet: 3, answer: "□ × 3", choices: ["□ × 3", "□ + 3", "□ × 5"], feedback: "1セット → 3こ<br>2セット → 6こ<br>5セット → 15こ<br><br>□セット → □ × 3こ<br>何セットでも使えるレシピになった〜✨" },
        { id: "beads-5-pink-three", stage: 5, type: "setformula", question: "この模様を □セット作るよ✨ 🩷 は全部で何こ？ 何セットでも使える式はどれ？", pattern: ["🩷", "💛", "🩷", "💙", "🤍", "🩷"], target: "🩷", perSet: 3, answer: "□ × 3", choices: ["□ × 3", "□ × 6", "□ + 3"], feedback: "1セット → 3こ<br>2セット → 6こ<br>5セット → 15こ<br><br>□セット → □ × 3こ<br>何セットでも使えるレシピになった〜✨" },
        { id: "beads-5-yellow-three", stage: 5, type: "setformula", question: "この模様を □セット作るよ✨ 💛 は全部で何こ？ 何セットでも使える式はどれ？", pattern: ["💛", "💚", "💛", "🤍", "💙", "💛"], target: "💛", perSet: 3, answer: "□ × 3", choices: ["□ × 3", "□ + 3", "□ × 6"], feedback: "1セット → 3こ<br>2セット → 6こ<br>5セット → 15こ<br><br>□セット → □ × 3こ<br>何セットでも使えるレシピになった〜✨" },
        { id: "beads-5-blue-three", stage: 5, type: "setformula", question: "この模様を □セット作るよ✨ 💙 は全部で何こ？ 何セットでも使える式はどれ？", pattern: ["💙", "💜", "💙", "🤍", "💙", "💚"], target: "💙", perSet: 3, answer: "□ × 3", choices: ["□ × 3", "□ × 6", "□ + 3"], feedback: "1セット → 3こ<br>2セット → 6こ<br>5セット → 15こ<br><br>□セット → □ × 3こ<br>何セットでも使えるレシピになった〜✨" },
        { id: "beads-5-purple-three", stage: 5, type: "setformula", question: "この模様を □セット作るよ✨ 💜 は全部で何こ？ 何セットでも使える式はどれ？", pattern: ["💜", "💛", "💜", "💙", "🤍", "💜"], target: "💜", perSet: 3, answer: "□ × 3", choices: ["□ × 3", "□ + 3", "□ × 6"], feedback: "1セット → 3こ<br>2セット → 6こ<br>5セット → 15こ<br><br>□セット → □ × 3こ<br>何セットでも使えるレシピになった〜✨" },
        { id: "beads-5-white-two", stage: 5, type: "setformula", question: "この模様を □セット作るよ✨ 🤍 は全部で何こ？ 何セットでも使える式はどれ？", pattern: ["🤍", "💙", "💚", "🤍", "💛", "💜"], target: "🤍", perSet: 2, answer: "□ × 2", choices: ["□ × 2", "□ × 6", "□ + 2"], feedback: "1セット → 2こ<br>2セット → 4こ<br>5セット → 10こ<br><br>□セット → □ × 2こ<br>何セットでも使えるレシピになった〜✨" },
        { id: "beads-5-gold-two", stage: 5, type: "setformula", question: "この模様を □セット作るよ✨ 💛 は全部で何こ？ 何セットでも使える式はどれ？", pattern: ["💙", "💛", "💚", "💛", "🤍"], target: "💛", perSet: 2, answer: "□ × 2", choices: ["□ × 2", "□ + 2", "□ × 5"], feedback: "1セット → 2こ<br>2セット → 4こ<br>5セット → 10こ<br><br>□セット → □ × 2こ<br>何セットでも使えるレシピになった〜✨" }
      ]
    };

    const normalQuestionPools = {
      easy: [
  {
    question: "定価2000円のトップスが10％OFF。何円安くなる？",
    choices: ["200円", "1800円", "100円", "1900円"],
    answer: 0,
    explanation: "2000円の10％は、2000 × 0.1 ＝ 200円✨ 10％は10分の1と考えてもOKだよ〜💕",
    correctLine: "ナイス〜💕 まずは割引される金額を出せた〜✨",
    wrongLine: "今回は支払う金額じゃなくて、『何円安くなるか』を求めるよ〜✨"
  },
  {
    question: "定価2400円のバッグが25％OFF。支払う金額はいくら？",
    choices: ["600円", "1800円", "2400円", "2000円"],
    answer: 1,
    explanation: "25％OFFなら、支払うのは残りの75％✨ 2400 × 0.75 ＝ 1800円だよ〜💕",
    correctLine: "いいじゃ〜ん✨ 割引額じゃなくて、支払う金額を出せた〜💕",
    wrongLine: "25％引かれるから、支払うのは残りの75％だよ〜✨"
  },
  {
    question: "『3割引』は、何％OFFと同じ？",
    choices: ["3％OFF", "30％OFF", "70％OFF", "300％OFF"],
    answer: 1,
    explanation: "1割は10％だから、3割は30％✨ 3割引＝30％OFFだよ〜💕",
    correctLine: "ばっちり〜✨ 『割』と『％』をつなげられた〜💕",
    wrongLine: "1割＝10％だよ〜😊 だから3割は10％が3つ分✨"
  },
  {
    question: "定価2000円の帽子が1600円になりました。何％OFF？",
    choices: ["10％OFF", "20％OFF", "25％OFF", "40％OFF"],
    answer: 1,
    explanation: "まず2000−1600＝400円安くなったね✨ 400 ÷ 2000 ＝ 0.2だから、20％OFFだよ〜💕",
    correctLine: "やる〜✨ 安くなった金額から、何％OFFか見つけられた〜💕",
    wrongLine: "まず定価から売価を引いて、何円安くなったか出してみよ〜✨"
  }
],
      middle: [
  {
    question: "定価2400円のバッグが25％OFF。700円のチャームも買います。合計はいくら？",
    choices: ["1800円", "2500円", "3100円", "2300円"],
    answer: 1,
    explanation: "バッグは25％OFFだから、2400 × 0.75 ＝ 1800円✨ 1800＋700＝2500円だよ〜💕",
    correctLine: "いいじゃ〜ん✨ 割引したバッグとチャームをちゃんと合計できた〜💕",
    wrongLine: "まずバッグのセール価格を出してから、700円を足してみよ〜✨"
  },
  {
    question: "5000円を持っています。定価3600円のワンピースを20％OFFで買うと、残りはいくら？",
    choices: ["2120円", "2880円", "1400円", "3200円"],
    answer: 0,
    explanation: "ワンピースは3600 × 0.8 ＝ 2880円✨ 5000−2880＝2120円残るよ〜💕",
    correctLine: "お買い物後の残りまで出せた〜✨ お金の管理ばっちり💕",
    wrongLine: "まず20％OFF後の値段を出して、その金額を5000円から引こう〜✨"
  },
  {
    question: "定価3000円の商品。「20％OFF」と「500円引き」では、どちらが安い？",
    choices: [
      "500円引きの方が100円安い",
      "20％OFFの方が100円安い",
      "同じ金額",
      "20％OFFの方が500円安い"
    ],
    answer: 1,
    explanation: "20％OFFなら600円引きで2400円✨ 500円引きなら2500円だから、20％OFFの方が100円安いよ〜💕",
    correctLine: "セールを比べられた〜✨ 20％OFFの方がお得だったね💕",
    wrongLine: "20％OFFが何円引きになるか出して、500円引きと比べてみよ〜✨"
  },
  {
    question: "定価6000円のコートが30％OFF。さらに500円引きクーポンを使うと、いくら？",
    choices: ["3500円", "4200円", "5500円", "3700円"],
    answer: 3,
    explanation: "まず6000 × 0.7 ＝ 4200円✨ そこから500円引いて、3700円だよ〜💕",
    correctLine: "二段階のお値引きもできた〜✨ レジ担当ばっちりじゃ〜ん💕",
    wrongLine: "最初に30％OFFの価格を出してから、クーポンの500円を引こう〜✨"
  }
],

hard: [
  {
    question: "20％OFFで3200円になったバッグ。定価はいくら？",
    choices: ["3600円", "4000円", "3840円", "4200円"],
    answer: 1,
    explanation: "20％OFFなら、3200円は定価の80％✨ 3200 ÷ 0.8 ＝ 4000円だよ〜💕",
    correctLine: "セール価格から定価を逆算できた〜✨ 強いじゃ〜ん💕",
    wrongLine: "3200円が定価の80％分だと考えて、0.8で割ってみよ〜✨"
  },
  {
    question: "25％OFFで1200円安くなりました。定価はいくら？",
    choices: ["4000円", "5200円", "3600円", "4800円"],
    answer: 3,
    explanation: "1200円が定価の25％分✨ 1200 ÷ 0.25 ＝ 4800円だよ〜💕",
    correctLine: "割引された金額から定価を見つけた〜✨ 逆算ばっちり💕",
    wrongLine: "1200円は定価の25％分だよ〜✨ 25％にあたる金額から全体を求めよう💕"
  },
  {
    question: "定価5000円のコートを20％OFFにし、さらにその価格から10％OFFにします。最終価格はいくら？",
    choices: ["3500円", "3600円", "4000円", "4500円"],
    answer: 1,
    explanation: "まず5000 × 0.8 ＝ 4000円✨ 次に4000 × 0.9 ＝ 3600円だよ〜💕",
    correctLine: "二回の割引を順番に計算できた〜✨ めっちゃいいじゃん💕",
    wrongLine: "20％と10％をそのまま足さず、割引後の4000円からさらに10％引くよ〜✨"
  },
  {
    question: "5000円の商品に20％上乗せして定価をつけ、その定価から20％OFFで売ります。売値はいくら？",
    choices: ["5000円", "4000円", "4800円", "6000円"],
    answer: 2,
    explanation: "まず5000 × 1.2 ＝ 6000円✨ その20％OFFだから、6000 × 0.8 ＝ 4800円だよ〜💕",
    correctLine: "値上げと値下げを順番に考えられた〜✨ さすが〜💕",
    wrongLine: "20％上げて20％下げても元通りとは限らないよ〜✨ 6000円の80％を考えてみよ💕"
  }
]
    };

    const extraQuestionPools = {
      percentBasics: {
        easy: [
          {
            question: "100個のうち、20個がピンクです。これは何％？",
            choices: ["20％", "80％", "2％", "200％"],
            answer: 0,
            explanation: "そーそー♪ このイベントは100個の世界だから、20個なら20％ってことだよ✨",
            correctLine: "バッチリじゃん♡ その調子！",
            wrongLine: "だいじょうぶだよ♪ 100個のうち何個か、その数字を見てみよっか。"
          },
          {
            question: "100個のうち、65個に星のシールがついています。これは何％？",
            choices: ["65％", "35％", "6％", "100％"],
            answer: 0,
            explanation: "100個のうち65個なら、65％♪ 数字がそのままつながるの、わかりやすいでしょ？",
            correctLine: "ばっちり〜！ ルナ先輩うれしい♡",
            wrongLine: "おしいっ♪ 100個あるときは、個数の数字をそのまま％にしてみて。"
          },
          {
            question: "100個のうち、8個が青です。これは何％？",
            choices: ["80％", "8％", "92％", "18％"],
            answer: 1,
            explanation: "100個のうち8個だから、8％だよ♪ ちっちゃい数字でも同じルール〜！",
            correctLine: "そうそう！ その調子✨",
            wrongLine: "ゆっくりでOK♡ 100個のうちの個数を、そのまま％で言ってみよ。"
          },
          {
            question: "100個のうち、100個ぜんぶが丸です。これは何％？",
            choices: ["0％", "10％", "50％", "100％"],
            answer: 3,
            explanation: "ぜんぶで100個あって、ぜんぶ丸なら100％♪ ぜんぶあると100％ってことだね！",
            correctLine: "大正解〜！ バッチリじゃん♡",
            wrongLine: "あとちょっと♪ 100個ぜんぶあるときは、100％だよ。"
          }
        ],
        middle: [
          {
            question: "いちごが100個あります。そのうち30個が赤いいちごです。赤いいちごは何％？",
            choices: ["30％", "70％", "3％", "130％"],
            answer: 0,
            explanation: "いちごが100個あって、赤いのが30個。だから30％だよ♪ かわいいいちご、数えられたね！",
            correctLine: "いいね〜！ センスある♡",
            wrongLine: "おしいっ♪ 赤いいちごは何個だったか、もう一回見てみよ。"
          },
          {
            question: "ボタンが100個あります。そのうち42個がハートのボタンです。ハートのボタンは何％？",
            choices: ["24％", "42％", "58％", "100％"],
            answer: 1,
            explanation: "ハートのボタンは42個だから、42％♪ 100個の世界だと、そのまま言えるね！",
            correctLine: "その通り！ めっちゃいい感じ✨",
            wrongLine: "だいじょうぶ♡ ハートのボタンが何個あるか、そこを見てみて。"
          },
          {
            question: "お客さんが100人います。そのうち75人がリボンを見ています。リボンを見ている人は何％？",
            choices: ["25％", "75％", "7％", "100％"],
            answer: 1,
            explanation: "100人のうち75人なら、75％だよ♪ 人でも、100人なら同じ考え方〜！",
            correctLine: "ぴったり！ その調子だよ♡",
            wrongLine: "おしい〜！ 100人のうち何人かを、そのまま％で言ってみよ♪"
          },
          {
            question: "ビーズが100個あります。そのうち15個がキラキラです。キラキラのビーズは何％？",
            choices: ["15％", "85％", "5％", "150％"],
            answer: 0,
            explanation: "キラキラは15個だから、15％♪ 100個のうち何個か、ちゃんと見つけられてる！",
            correctLine: "正解〜！ バッチリじゃん♡",
            wrongLine: "もう一回いこ♪ 100個中のキラキラが何個か、見てみよう。"
          }
        ],
        hard: [
          {
            question: "40％は、100個のうち何個？",
            choices: ["4個", "40個", "60個", "100個"],
            answer: 1,
            explanation: "そーそー！ このイベントは100個の世界だから、40％は100個のうち40個ってことだよ♪",
            correctLine: "そう！ その調子〜♡",
            wrongLine: "だいじょうぶ♪ ％の数字は、100個のうちの個数を言ってるんだよ。"
          },
          {
            question: "100個のうち30個がピンクです。白は何個？ 白は何％？",
            choices: ["30個・30％", "70個・70％", "70個・30％", "100個・100％"],
            answer: 1,
            explanation: "そーそー♪ このイベントは100個の世界だから、のこりの白は70個。100個のうち70個だから、白は70％だよ♡",
            correctLine: "いいね〜！ のこりまで見つけられた♡",
            wrongLine: "ゆっくりでOK♪ 100個からピンクの30個をのぞくと、白が見えてくるよ。"
          },
          {
            question: "100人のお客さんのうち、55人が青いバッグを見ています。青いバッグを見ていない人は何人？ 何％？",
            choices: ["45人・45％", "55人・55％", "45人・55％", "100人・100％"],
            answer: 0,
            explanation: "100人の世界でも同じだよ♪ のこりは45人。100人のうち45人だから、45％ってこと♡",
            correctLine: "大正解〜！ のこりもバッチリ♡",
            wrongLine: "おしいっ♪ 100人から、青いバッグを見てる55人をのぞいてみよ。"
          },
          {
            question: "12％は、100個のうち何個？",
            choices: ["12個", "88個", "2個", "120個"],
            answer: 0,
            explanation: "このイベントは100個の世界だから、12％は100個のうち12個♪ バッチリつながったね〜！",
            correctLine: "その通り！ バッチリじゃん♡",
            wrongLine: "もう一回いこ♪ 100個の世界では、％の数字がそのまま個数になるよ。"
          }
        ]
       },
      moneyPercent: {
        easy: [
          {
            question: "100円の1％は何円？",
            choices: ["1円", "10円", "50円", "100円"],
            answer: 0,
            cardCount: 1,
            percent: 1,
            unitYen: 1,
            explanation: "そーそー♪ 100円だから、1％は1円！ 色のところが1円ぶんだよ♡",
            correctLine: "できた〜！ 100円のまとまり、見えてきたね✨",
            wrongLine: "だいじょうぶ♪ 100円カードの色のところを、よ〜く見てみよっか。"
          },
          {
            question: "100円の10％は何円？",
            choices: ["1円", "10円", "25円", "50円"],
            answer: 1,
            cardCount: 1,
            percent: 10,
            unitYen: 10,
            explanation: "100円だから、10％は10円♪ 100円の中の色のところが10円ぶんだよ！",
            correctLine: "バッチリじゃん♡ その調子〜！",
            wrongLine: "おしいっ♪ 100円のときは、10％は10円だよ。"
          },
          {
            question: "100円の25％は何円？",
            choices: ["10円", "25円", "50円", "75円"],
            answer: 1,
            cardCount: 1,
            percent: 25,
            unitYen: 25,
            explanation: "100円だから、25％は25円♪ 色のところ、ちょうど25円ぶんだね♡",
            correctLine: "いいね〜！ ぴったりできた✨",
            wrongLine: "ゆっくりでOK♪ 100円カードの色のところを見てみよ。"
          },
          {
            question: "100円の50％は何円？",
            choices: ["5円", "25円", "50円", "100円"],
            answer: 2,
            cardCount: 1,
            percent: 50,
            unitYen: 50,
            explanation: "100円だから、50％は50円！ カードの半分が色のところだね♪",
            correctLine: "大正解〜！ 半分、ちゃんと見つけたね♡",
            wrongLine: "あとちょっと♪ 100円カードの半分は50円だよ。"
          }
        ],
        middle: [
          {
            question: "200円の1％は何円？",
            choices: ["1円", "2円", "10円", "20円"],
            answer: 1,
            cardCount: 2,
            percent: 1,
            unitYen: 1,
            explanation: "200円は100円が2つ♪ 1円の色のところも2つあるから、ぜんぶで2円だよ♡",
            correctLine: "できた！ 100円カードを2つ数えられたね✨",
            wrongLine: "だいじょうぶ♪ 100円カードが何枚あるか、数えてみよっか。"
          },
          {
            question: "200円の10％は何円？",
            choices: ["10円", "20円", "25円", "50円"],
            answer: 1,
            cardCount: 2,
            percent: 10,
            unitYen: 10,
            explanation: "200円は100円が2つだから、10円の色のところも2つ♪ ぜんぶで20円だよ！",
            correctLine: "その調子✨ 10円が2つ、見えたね！",
            wrongLine: "おしいっ♪ 10円の色のところが、カードごとに1つずつあるよ。"
          },
          {
            question: "200円の25％は何円？",
            choices: ["25円", "50円", "75円", "100円"],
            answer: 1,
            cardCount: 2,
            percent: 25,
            unitYen: 25,
            explanation: "200円は100円が2つだから、25円も2つあるね♡ ぜんぶで50円、バッチリ！",
            correctLine: "いいね〜！ 25円が2つ、見つけた♡",
            wrongLine: "ゆっくりでOK♪ 25円の色のところが2つあるよ。"
          },
          {
            question: "200円の50％は何円？",
            choices: ["50円", "100円", "150円", "200円"],
            answer: 1,
            cardCount: 2,
            percent: 50,
            unitYen: 50,
            explanation: "200円は100円が2つ！ 50円の色のところも2つだから、ぜんぶで100円だよ♪",
            correctLine: "大正解〜！ 50円が2つ、バッチリじゃん♡",
            wrongLine: "おしいっ♪ 50円の色のところを2つ、ならべて見てみよ。"
          }
        ],
        hard: [
          {
            question: "300円の10％は何円？",
            choices: ["10円", "20円", "30円", "50円"],
            answer: 2,
            cardCount: 3,
            percent: 10,
            unitYen: 10,
            explanation: "300円は100円が3つ♪ 10円の色のところも3つあるから、ぜんぶで30円だよ！",
            correctLine: "バッチリ♡ 10円が3つ、数えられたね！",
            wrongLine: "だいじょうぶ♪ 100円カードは3枚。色のところも3つあるよ。"
          },
          {
            question: "300円の50％は何円？",
            choices: ["50円", "100円", "150円", "300円"],
            answer: 2,
            cardCount: 3,
            percent: 50,
            unitYen: 50,
            explanation: "300円は100円が3つだから、50円の色のところも3つ♪ ぜんぶで150円だよ♡",
            correctLine: "すごい〜！ 50円が3つ、きれいに見えたね✨",
            wrongLine: "おしいっ♪ 50円の色のところを、3つ数えてみよ。"
          },
          {
            question: "400円の25％は何円？",
            choices: ["25円", "50円", "100円", "200円"],
            answer: 2,
            cardCount: 4,
            percent: 25,
            unitYen: 25,
            explanation: "400円は100円が4つ♪ 25円の色のところも4つあるから、ぜんぶで100円だよ！",
            correctLine: "できた〜！ 25円が4つ、バッチリじゃん♡",
            wrongLine: "ゆっくりでOK♪ 100円カードが4枚あることから見てみよ。"
          },
          {
            question: "500円の10％は何円？",
            choices: ["10円", "25円", "50円", "100円"],
            answer: 2,
            cardCount: 5,
            percent: 10,
            unitYen: 10,
            explanation: "500円は100円が5つ！ 10円の色のところも5つあるから、ぜんぶで50円だよ♪",
            correctLine: "その調子〜！ 10円が5つ、数えられたね♡",
            wrongLine: "あとちょっと♪ 10円の色のところが5つあるよ。"
          }
        ]
      },
           trick: {
  easy: [
  {
    question: "25円のビーズを12個買います。25×12を工夫するとき、最初に作るとよいまとまりはどれ？",
    choices: [
      "25×4",
      "25×3",
      "12×4",
      "25＋4"
    ],
    answer: 0,
    explanation: "25×4＝100を作ると計算しやすいよ✨ 12個は4個ずつ3組だから、100×3＝300円だよ〜💕",
    correctLine: "25×4＝100を見つけた〜✨ まとまり作りばっちり💕",
    wrongLine: "25をいくつ集めると100になるか考えてみよ〜✨"
  },
  {
    question: "125円のアクセパーツを16個買います。125×16を工夫するとき、最初に作るとよいまとまりはどれ？",
    choices: [
      "125×4",
      "125×8",
      "16×8",
      "125＋8"
    ],
    answer: 1,
    explanation: "125×8＝1000を作ると計算しやすいよ✨ 16個は8個ずつ2組だから、1000×2＝2000円だよ〜💕",
    correctLine: "125×8＝1000を見つけた〜✨ これは便利なまとまり〜💕",
    wrongLine: "125をいくつ集めると1000になるか考えてみよ〜✨"
  },
  {
    question: "50円のチャームを18個買います。50×18を工夫するとき、最初に作るとよいまとまりはどれ？",
    choices: [
      "50×9",
      "18×2",
      "50×2",
      "50＋2"
    ],
    answer: 2,
    explanation: "50×2＝100を作ると計算しやすいよ✨ 18個は2個ずつ9組だから、100×9＝900円だよ〜💕",
    correctLine: "50×2＝100を見つけた〜✨ 9組にまとめられたね💕",
    wrongLine: "50をいくつ集めると100になるか考えてみよ〜✨"
  },
  {
    question: "250円のリボンを12本買います。250×12を工夫するとき、最初に作るとよいまとまりはどれ？",
    choices: [
      "250×3",
      "12×4",
      "250＋4",
      "250×4"
    ],
    answer: 3,
    explanation: "250×4＝1000を作ると計算しやすいよ✨ 12本は4本ずつ3組だから、1000×3＝3000円だよ〜💕",
    correctLine: "250×4＝1000を見つけた〜✨ きれいに3組できたね💕",
    wrongLine: "250をいくつ集めると1000になるか考えてみよ〜✨"
  }
],

  middle: [
  {
    question: "198円のシュシュを4個買います。198×4を工夫した式はどれ？",
    choices: [
      "200×4−2",
      "200×4−2×4",
      "198＋4",
      "200×4＋2×4"
    ],
    answer: 1,
    explanation: "198は200より2小さいよ✨ 4個分だから、200×4−2×4＝800−8＝792円だよ〜💕",
    correctLine: "198を200に近づけて、4個分の差も引けた〜✨",
    wrongLine: "198は200より2小さいよ〜✨ その差が4個分あることに注目してみよ💕"
  },
  {
    question: "1003円のバッグを5個仕入れます。1003×5を工夫した式はどれ？",
    choices: [
      "1000×5＋3",
      "1003＋5",
      "1000×5＋3×5",
      "1000×5−3×5"
    ],
    answer: 2,
    explanation: "1003は1000＋3✨ 5個分だから、1000×5＋3×5＝5000＋15＝5015円だよ〜💕",
    correctLine: "1003を1000と3に分けられた〜✨",
    wrongLine: "1003は1000より3大きいよ〜✨ 3円の差も5個分あるよ💕"
  },
  {
    question: "49円のビーズを20袋買います。49×20を工夫した式はどれ？",
    choices: [
      "49＋20",
      "50×20−1",
      "50×20＋20",
      "50×20−20"
    ],
    answer: 3,
    explanation: "49は50より1小さいよ✨ 20袋分では20円多く計算するから、50×20−20＝980円だよ〜💕",
    correctLine: "49を50に近づけて、20袋分の差を戻せた〜✨",
    wrongLine: "49円を50円として計算すると、1袋につき1円多くなるよ〜✨"
  },
  {
    question: "32円のパーツを25個買います。32×25を工夫した式はどれ？",
    choices: [
      "8×4×25",
      "32×20＋5",
      "32×100",
      "32＋25×4"
    ],
    answer: 0,
    explanation: "32を8×4に分けると、8×4×25✨ 4×25＝100だから、8×100＝800円だよ〜💕",
    correctLine: "32を8×4に分けて、100のまとまりを作れた〜✨",
    wrongLine: "32をかけ算に分けて、25と組み合わせやすい数を探してみよ〜✨"
  }
],

  hard: [
  {
    question: "398円のポーチを5個と、102円のチャームを5個買います。計算を工夫した式はどれ？",
    choices: [
      "398×5＋102",
      "500×5",
      "398×10＋102",
      "296×5"
    ],
    answer: 1,
    explanation: "398円と102円が5組あるよ✨ 398＋102＝500だから、500×5＝2500円だよ〜💕",
    correctLine: "398＋102＝500を見つけた〜✨ 5組まとめて計算できたね💕",
    wrongLine: "398円と102円を1組にすると、いくらになるか考えてみよ〜✨"
  },
  {
    question: "125円のパーツを7個買い、同じパーツをもう1個追加します。計算を工夫した式はどれ？",
    choices: [
      "125×7＋1",
      "125×9",
      "125×8",
      "125＋7＋125"
    ],
    answer: 2,
    explanation: "同じ125円のパーツが、7個＋1個で全部で8個✨ 125×8＝1000円だよ〜💕",
    correctLine: "同じ125円を8個にまとめられた〜✨ ぴったり1000円だね💕",
    wrongLine: "追加したものも125円だよ〜✨ 全部で何個になったか考えてみよ💕"
  },
  {
    question: "99円のリボンを37本と、1円の袋を37枚買います。計算を工夫した式はどれ？",
    choices: [
      "99×38",
      "100×37＋37",
      "99＋37",
      "100×37"
    ],
    answer: 3,
    explanation: "99円のリボンと1円の袋が37組あるよ✨ 1組100円だから、100×37＝3700円だよ〜💕",
    correctLine: "99＋1＝100を37組にできた〜✨ きれいな計算〜💕",
    wrongLine: "リボン1本と袋1枚を組にすると、いくらになるか考えてみよ〜✨"
  },
  {
    question: "36円のビーズを25個買います。36×25を工夫した式はどれ？",
    choices: [
      "9×4×25",
      "36×20＋5",
      "25×25＋36",
      "36×100"
    ],
    answer: 0,
    explanation: "36を9×4に分けるよ✨ 9×4×25＝9×100＝900円だよ〜💕",
    correctLine: "36を9×4に分けて、4×25＝100を作れた〜✨",
    wrongLine: "36をかけ算に分けて、25と組み合わせやすい数を探してみよ〜✨"
  }
],
},

            decimal: {
        easy: [
  {
    question: "1.25mのリボンと0.8mのリボンをつなぎます。全部で何m？",
    choices: [
      "2.05m",
      "1.33m",
      "2.5m",
      "0.45m"
    ],
    answer: 0,
    explanation: "0.8を0.80と考えて、小数点をそろえて足すよ✨ 1.25＋0.80＝2.05。全部で2.05mだよ〜💕",
    correctLine: "小数点をそろえて、きれいに足せたね〜✨",
    wrongLine: "0.8を0.80と書いて、小数点をそろえてみよ〜✨"
  },
  {
    question: "3Lのドリンクから1.45L使いました。残りは何L？",
    choices: [
      "2.45L",
      "1.55L",
      "1.65L",
      "0.55L"
    ],
    answer: 1,
    explanation: "3Lを3.00Lと考えて引こう✨ 3.00−1.45＝1.55。残りは1.55Lだよ〜💕",
    correctLine: "3を3.00にして、小数点をそろえられた〜✨",
    wrongLine: "3Lを3.00Lと書いてから引いてみよ〜✨"
  },
  {
    question: "1個の飾りに0.35mのひもを使います。4個では何m使う？",
    choices: [
      "0.39m",
      "0.14m",
      "1.4m",
      "14m"
    ],
    answer: 2,
    explanation: "0.35mを4個分だから、0.35×4だよ✨ 0.35×4＝1.40なので、1.4m使うよ〜💕",
    correctLine: "1個分を4倍して求められたね〜✨",
    wrongLine: "同じ長さを4個分使うから、0.35を4倍してみよ〜✨"
  },
  {
    question: "2.4kgのビーズを6袋に同じ重さずつ分けます。1袋は何kg？",
    choices: [
      "14.4kg",
      "0.04kg",
      "0.6kg",
      "0.4kg"
    ],
    answer: 3,
    explanation: "2.4kgを6袋に同じ重さずつ分けるから、2.4÷6だよ✨ 24÷6＝4なので、2.4÷6＝0.4。1袋は0.4kgだよ〜💕",
    correctLine: "同じ重さに分けるわり算ができた〜✨",
    wrongLine: "全部の2.4kgを6つに分けるから、2.4÷6を考えてみよ〜✨"
  }
],

                middle: [
  {
    question: "4.8Lのドリンクを、1本に0.6Lずつ入れます。何本作れる？",
    choices: [
      "8本",
      "0.8本",
      "28.8本",
      "4.2本"
    ],
    answer: 0,
    explanation: "0.6Lずつに分けるから、4.8÷0.6だよ✨ 小数をなくすために両方を10倍すると、48÷6＝8。だから8本作れるよ〜💕",
    correctLine: "小数を整数に直して、わり算できたね〜✨",
    wrongLine: "0.6Lが4.8Lの中にいくつ入るか、わり算で考えてみよ〜✨"
  },
  {
    question: "ビーズを全部で3kg集めたいです。今は2.35kgあります。あと何kg必要？",
    choices: [
      "0.55kg",
      "0.65kg",
      "1.65kg",
      "5.35kg"
    ],
    answer: 1,
    explanation: "目標の3kgから、今ある2.35kgを引くよ✨ 3を3.00と書くと、3.00−2.35＝0.65。あと0.65kg必要だよ〜💕",
    correctLine: "目標から今ある量を引けたね〜✨",
    wrongLine: "3kgを3.00kgと書いて、2.35kgを引いてみよ〜✨"
  },
  {
    question: "0.75と同じ大きさの分数はどれ？",
    choices: [
      "1/4",
      "2/3",
      "3/4",
      "3/5"
    ],
    answer: 2,
    explanation: "0.75は75/100と表せるよ✨ 分子と分母を25で割ると、75/100＝3/4。だから答えは3/4だよ〜💕",
    correctLine: "小数を分数に直して、約分までできた〜✨",
    wrongLine: "0.75は100分のいくつかに直して考えてみよ〜✨"
  },
  {
    question: "5mのリボンから、1個につき0.8m使って飾りを4個作ります。残りは何m？",
    choices: [
      "1.2m",
      "4.2m",
      "3.2m",
      "1.8m"
    ],
    answer: 3,
    explanation: "まず4個分で使う長さを求めるよ✨ 0.8×4＝3.2m。次に全体の5mから引いて、5.0−3.2＝1.8m。残りは1.8mだよ〜💕",
    correctLine: "使った長さを先に求めて、残りまで出せたね〜✨",
    wrongLine: "まず、0.8mを4個分使うと何mになるか求めてみよ〜✨"
  }
],

        hard: [
  {
    question: "2.5mのリボンの2/5を使います。使うリボンは何m？",
    choices: [
      "1m",
      "0.5m",
      "1.5m",
      "2m"
    ],
    answer: 0,
    explanation: "2/5は、全体を5つに分けたうちの2つ分だよ✨ まず1つ分を求めると、2.5÷5＝0.5m。2つ分だから、0.5×2＝1m。使うリボンは1mだよ〜💕",
    correctLine: "1つ分を求めてから、2つ分にできたね〜✨",
    wrongLine: "まず2.5mを5つに同じ長さずつ分けて、1つ分を求めてみよ〜✨"
  },
  {
    question: "4.8Lのドリンクがあります。全体の1/4と、全体の1/2を使いました。残りは何L？",
    choices: [
      "2.4L",
      "1.2L",
      "3.6L",
      "0.8L"
    ],
    answer: 1,
    explanation: "1/2は2/4と同じだよ✨ 使ったのは、1/4＋2/4＝3/4。残りは1/4だね。4.8Lの1/4だから、4.8÷4＝1.2L。残りは1.2Lだよ〜💕",
    correctLine: "分母を4にそろえて、残りの割合を見つけられた〜✨",
    wrongLine: "1/2を、分母が4の分数に直してから足してみよ〜✨"
  },
  {
    question: "全体の3/4にあたるリボンが1.5mです。リボン全体は何m？",
    choices: [
      "1.125m",
      "1.5m",
      "2m",
      "6m"
    ],
    answer: 2,
    explanation: "1.5mは、全体を4つに分けたうちの3つ分だよ✨ まず1つ分を求めると、1.5÷3＝0.5m。全体は4つ分だから、0.5×4＝2mだよ〜💕",
    correctLine: "3つ分から1つ分に戻して、全体を求められたね〜✨",
    wrongLine: "1.5mが3つ分だから、まず1つ分の長さを求めてみよ〜✨"
  },
  {
    question: "3.6mのひもの1/3を飾りに使い、残りを4人で同じ長さずつ分けます。1人分は何m？",
    choices: [
      "1.2m",
      "2.4m",
      "0.9m",
      "0.6m"
    ],
    answer: 3,
    explanation: "まず飾りに使う長さを求めるよ✨ 3.6÷3＝1.2m。残りは、3.6−1.2＝2.4mだね。それを4人で分けるから、2.4÷4＝0.6m。1人分は0.6mだよ〜💕",
    correctLine: "使った長さ、残り、1人分の順に求められたね〜✨",
    wrongLine: "まず、3.6mの1/3が何mなのかを求めてみよ〜✨"
  }
],
      },
            unit: {
        easy: [
  {
    question: "2.4mのリボンは何cm？",
    choices: [
      "240cm",
      "24cm",
      "204cm",
      "2400cm"
    ],
    answer: 0,
    explanation: "1m＝100cmだよ✨ 2.4mをcmに直すときは100倍して、2.4×100＝240。だから240cmだよ〜💕",
    correctLine: "mからcmへ、100倍して直せたね〜✨",
    wrongLine: "1m＝100cmだから、2.4を100倍してみよ〜✨"
  },
  {
    question: "350cmのリボンは何m？",
    choices: [
      "35m",
      "3.5m",
      "0.35m",
      "3500m"
    ],
    answer: 1,
    explanation: "100cm＝1mだよ✨ 350cmの中には100cmが3.5こ分あるから、350÷100＝3.5。答えは3.5mだよ〜💕",
    correctLine: "cmからmへ、100で割って直せたね〜✨",
    wrongLine: "100cmで1mだから、350を100で割ってみよ〜✨"
  },
  {
    question: "8.5cmのリボンは何mm？",
    choices: [
      "0.85mm",
      "8.05mm",
      "85mm",
      "850mm"
    ],
    answer: 2,
    explanation: "1cm＝10mmだよ✨ 8.5cmをmmに直すときは10倍して、8.5×10＝85。だから85mmだよ〜💕",
    correctLine: "cmからmmへ、10倍して直せたね〜✨",
    wrongLine: "1cm＝10mmだから、8.5を10倍してみよ〜✨"
  },
  {
    question: "2m35cmのリボンは、全部で何cm？",
    choices: [
      "205cm",
      "250cm",
      "2350cm",
      "235cm"
    ],
    answer: 3,
    explanation: "まず2mをcmに直すよ✨ 2m＝200cm。そこに35cmを足して、200＋35＝235。全部で235cmだよ〜💕",
    correctLine: "mをcmに直してから、35cmを足せたね〜✨",
    wrongLine: "まず2mを200cmに直して、35cmを足してみよ〜✨"
  }
],

        middle: [
  {
    question: "1.5mのリボンと80cmのリボンをつなぎます。全部で何cm？",
    choices: [
      "95cm",
      "158cm",
      "230cm",
      "800cm"
    ],
    answer: 2,
    explanation: "mとcmが混ざっているから、まずcmにそろえるよ✨ 1.5m＝150cm。150＋80＝230だから、全部で230cmだよ〜💕",
    correctLine: "単位をcmにそろえてから足せたね〜✨",
    wrongLine: "まず1.5mをcmに直してから、80cmを足してみよ〜✨"
  },
  {
    question: "3mのリボンから75cm使いました。残りは何cm？",
    choices: [
      "225cm",
      "275cm",
      "2.25cm",
      "375cm"
    ],
    answer: 0,
    explanation: "そのままでは引けないから、cmにそろえるよ✨ 3m＝300cm。300−75＝225だから、残りは225cmだよ〜💕",
    correctLine: "3mを300cmに直してから引けたね〜✨",
    wrongLine: "まず3mをcmに直して、75cmを引いてみよ〜✨"
  },
  {
    question: "1.2mのリボンと125cmのリボンでは、どちらがどれだけ長い？",
    choices: [
      "1.2mの方が5cm長い",
      "1.2mの方が25cm長い",
      "同じ長さ",
      "125cmの方が5cm長い"
    ],
    answer: 3,
    explanation: "同じ単位にそろえて比べよう✨ 1.2m＝120cm。125cmは120cmより5cm長いから、125cmの方が5cm長いよ〜💕",
    correctLine: "同じ単位にそろえて、長さの差まで分かったね〜✨",
    wrongLine: "1.2mを120cmに直して、125cmと比べてみよ〜✨"
  },
  {
    question: "2.4mのリボンを30cmずつに切ります。何本できる？",
    choices: [
      "6本",
      "8本",
      "12本",
      "80本"
    ],
    answer: 1,
    explanation: "まず単位をcmにそろえるよ✨ 2.4m＝240cm。30cmずつに分けるから、240÷30＝8。8本できるよ〜💕",
    correctLine: "cmにそろえてから、何本取れるか求められたね〜✨",
    wrongLine: "まず2.4mをcmに直して、30cmがいくつ入るか考えてみよ〜✨"
  }
],

        hard: [
  {
    question: "35cmのリボンを8本使います。全部で何m？",
    choices: [
      "28m",
      "2.8m",
      "0.28m",
      "280m"
    ],
    answer: 1,
    explanation: "まず8本分の長さをcmで求めるよ✨ 35×8＝280cm。次に、100cm＝1mだから、280÷100＝2.8。全部で2.8mだよ〜💕",
    correctLine: "8本分を求めてから、cmをmに直せたね〜✨",
    wrongLine: "まず35cmを8本使うと、全部で何cmになるか求めてみよ〜✨"
  },
  {
    question: "5mのリボンから、45cmのリボンを6本切ります。残りは何cm？",
    choices: [
      "455cm",
      "300cm",
      "270cm",
      "230cm"
    ],
    answer: 3,
    explanation: "まず5mをcmに直すと、5m＝500cm✨ 次に、切る長さは45×6＝270cm。500−270＝230だから、残りは230cmだよ〜💕",
    correctLine: "全体と使う長さをcmにそろえて、残りを求められたね〜✨",
    wrongLine: "まず5mを500cmに直して、45cmを6本分使う長さを求めてみよ〜✨"
  },
  {
    question: "1.2mのリボンを3本と、75cmのリボンを2本使います。全部で何cm？",
    choices: [
      "510cm",
      "435cm",
      "285cm",
      "195cm"
    ],
    answer: 0,
    explanation: "まず単位をcmにそろえるよ✨ 1.2m＝120cmだから、120×3＝360cm。75cmは2本なので、75×2＝150cm。360＋150＝510だから、全部で510cmだよ〜💕",
    correctLine: "2種類のリボンをcmにそろえて、全部の長さを求められたね〜✨",
    wrongLine: "まず1.2mを120cmに直して、それぞれ何cm使うか求めてみよ〜✨"
  },
  {
    question: "3mのリボンを40cmずつ切ります。何本できて、何cm余る？",
    choices: [
      "6本できて60cm余る",
      "7本できて2cm余る",
      "7本できて20cm余る",
      "8本できて20cm余る"
    ],
    answer: 2,
    explanation: "まず3mをcmに直すと、3m＝300cm✨ 40cmを7本切ると、40×7＝280cm。40cmを8本では320cmになって足りないよ。300−280＝20だから、7本できて20cm余るよ〜💕",
    correctLine: "作れる本数と、残りの長さの両方を求められたね〜✨",
    wrongLine: "まず3mを300cmに直して、40cmが何本取れるか考えてみよ〜✨"
  }
],
      },
            average: {
        easy: [
  {
    question: "3日間の来店人数は、12人、15人、18人でした。1日あたりの平均は何人？",
    choices: [
      "15人",
      "45人",
      "12人",
      "18人"
    ],
    answer: 0,
    explanation: "まず3日間の人数を全部足すよ✨ 12＋15＋18＝45人。3日分なので、45÷3＝15。1日あたりの平均は15人だよ〜💕",
    correctLine: "合計を3日分で割って、平均を求められたね〜✨",
    wrongLine: "まず3日間の人数を全部足してから、日数の3で割ってみよ〜✨"
  },
  {
    question: "4日間に売れたバッグの数は、8個、12個、9個、15個でした。1日あたりの平均は何個？",
    choices: [
      "9個",
      "11個",
      "44個",
      "12個"
    ],
    answer: 1,
    explanation: "まず4日間に売れた数を全部足すよ✨ 8＋12＋9＋15＝44個。4日分なので、44÷4＝11。1日あたりの平均は11個だよ〜💕",
    correctLine: "4日分の合計を4で割れたね〜✨",
    wrongLine: "4日間に売れた数を全部足してから、4で割ってみよ〜✨"
  },
  {
    question: "4本のリボンの長さは、36cm、42cm、48cm、54cmです。1本あたりの平均は何cm？",
    choices: [
      "48cm",
      "42cm",
      "45cm",
      "180cm"
    ],
    answer: 2,
    explanation: "まず4本の長さを全部足すよ✨ 36＋42＋48＋54＝180cm。4本分なので、180÷4＝45。1本あたりの平均は45cmだよ〜💕",
    correctLine: "長さの合計を4本分で割れたね〜✨",
    wrongLine: "まず4本の長さを全部足してから、本数の4で割ってみよ〜✨"
  },
  {
    question: "4回のミニテストの点数は、70点、80点、90点、100点でした。平均は何点？",
    choices: [
      "340点",
      "80点",
      "90点",
      "85点"
    ],
    answer: 3,
    explanation: "まず4回の点数を全部足すよ✨ 70＋80＋90＋100＝340点。4回分なので、340÷4＝85。平均は85点だよ〜💕",
    correctLine: "点数の合計を回数で割って、平均を出せたね〜✨",
    wrongLine: "まず4回の点数を全部足してから、回数の4で割ってみよ〜✨"
  }
],

        middle: [
  {
    question: "4日間に売れた帽子の数は、8個、9個、10個、11個でした。1日あたりの平均は何個？",
    choices: [
      "9.5個",
      "9個",
      "10個",
      "38個"
    ],
    answer: 0,
    explanation: "まず4日間に売れた数を全部足すよ✨ 8＋9＋10＋11＝38個。4日分なので、38÷4＝9.5。1日あたりの平均は9.5個だよ〜💕",
    correctLine: "合計を4日分で割って、小数の平均も求められたね〜✨",
    wrongLine: "まず4日間に売れた数を全部足してから、日数の4で割ってみよ〜✨"
  },
  {
    question: "5日間の来店人数は、1日あたり平均14人でした。5日間の合計は何人？",
    choices: [
      "19人",
      "70人",
      "2.8人",
      "75人"
    ],
    answer: 1,
    explanation: "平均14人は、1日あたり14人ということだよ✨ それが5日分あるから、14×5＝70。5日間の合計は70人だよ〜💕",
    correctLine: "平均に日数をかけて、合計に戻せたね〜✨",
    wrongLine: "1日あたり14人の日が5日あると考えて、14×5をしてみよ〜✨"
  },
  {
    question: "4日間の来店人数を、1日あたり平均16人にしたいです。最初の3日間は12人、15人、18人でした。4日目は何人必要？",
    choices: [
      "16人",
      "18人",
      "19人",
      "21人"
    ],
    answer: 2,
    explanation: "まず、平均16人を4日間にするための合計を求めるよ✨ 16×4＝64人。最初の3日間の合計は、12＋15＋18＝45人。あと必要なのは、64−45＝19人。4日目は19人必要だよ〜💕",
    correctLine: "目標の合計を先に求めて、足りない人数を出せたね〜✨",
    wrongLine: "まず、平均16人が4日間続くと合計何人になるか求めてみよ〜✨"
  },
  {
    question: "4種類のアクセサリーの売れた数の平均は13個でした。3種類は9個、12個、14個です。残りの1種類は何個売れた？",
    choices: [
      "13個",
      "16個",
      "48個",
      "17個"
    ],
    answer: 3,
    explanation: "平均13個が4種類だから、全部の合計は13×4＝52個だよ✨ 分かっている3種類の合計は、9＋12＋14＝35個。残りは52−35＝17個。答えは17個だよ〜💕",
    correctLine: "平均から全体の合計に戻して、分からない数を求められたね〜✨",
    wrongLine: "まず、平均13個が4種類分では合計何個になるか求めてみよ〜✨"
  }
],

        hard: [
  {
    question: "最初の4日間の来店人数は、1日あたり平均14人でした。5日目を入れると、5日間の平均は16人になりました。5日目の来店人数は何人？",
    choices: [
      "24人",
      "22人",
      "18人",
      "30人"
    ],
    answer: 0,
    explanation: "まず、最初の4日間の合計を求めるよ✨ 平均14人が4日分だから、14×4＝56人。次に、5日間の平均が16人なので、5日間の合計は16×5＝80人。80−56＝24だから、5日目は24人だよ〜💕",
    correctLine: "2つの平均をそれぞれ合計に戻して、5日目の人数を求められたね〜✨",
    wrongLine: "まず、最初の4日間の合計と、5日間全部の合計をそれぞれ求めてみよ〜✨"
  },
  {
    question: "6種類のアクセサリーは、1種類あたり平均18個売れました。さらに別のアクセサリーが25個売れたとき、7種類の平均は何個？",
    choices: [
      "18個",
      "19個",
      "21個",
      "25個"
    ],
    answer: 1,
    explanation: "まず、最初の6種類の合計を求めるよ✨ 平均18個が6種類分だから、18×6＝108個。そこに25個を足すと、108＋25＝133個。全部で7種類なので、133÷7＝19。平均は19個だよ〜💕",
    correctLine: "もとの合計に新しい数を足して、新しい平均を求められたね〜✨",
    wrongLine: "まず、平均18個が6種類分では、合計何個になるか求めてみよ〜✨"
  },
  {
    question: "前半3日間の来店人数は1日あたり平均12人、後半5日間は1日あたり平均18人でした。8日間全体の平均は何人？",
    choices: [
      "14人",
      "15人",
      "15.75人",
      "16人"
    ],
    answer: 2,
    explanation: "平均どうしをそのまま足したり、2で割ったりはできないよ✨ まず前半の合計は、12×3＝36人。後半の合計は、18×5＝90人。8日間の合計は36＋90＝126人。126÷8＝15.75だから、全体の平均は15.75人だよ〜💕",
    correctLine: "日数の違う2つのグループを、合計に戻してから平均を出せたね〜✨",
    wrongLine: "前半と後半は日数が違うよ✨ それぞれの合計を求めてから考えてみよ〜💕"
  },
  {
    question: "5日間の来店人数の平均を計算すると16人でした。しかし、11人と記録した日は、本当は21人でした。正しい平均は何人？",
    choices: [
      "16人",
      "17人",
      "20人",
      "18人"
    ],
    answer: 3,
    explanation: "まず、間違った記録での5日間の合計を求めるよ✨ 平均16人が5日分だから、16×5＝80人。11人を21人に直すと、合計は10人増えるので、80＋10＝90人。90÷5＝18だから、正しい平均は18人だよ〜💕",
    correctLine: "記録の差を合計に足して、正しい平均を求められたね〜✨",
    wrongLine: "11人が21人になると、合計は何人増えるか考えてみよ〜✨"
  }
],
      },
            ratio: {
        easy: [
  {
    question: "赤いビーズ2個と青いビーズ3個で、飾りを1セット作ります。2セット作るには、青いビーズは何個必要？",
    choices: [
      "6個",
      "5個",
      "4個",
      "9個"
    ],
    answer: 0,
    explanation: "1セットに青いビーズを3個使うよ✨ 2セット作るので、3×2＝6。青いビーズは6個必要だよ〜💕",
    correctLine: "1セット分を2倍して考えられたね〜✨",
    wrongLine: "青いビーズは1セットに3個だよ✨ それが2セット分あると考えてみよ〜💕"
  },
  {
    question: "ピンクのリボン4本と白いリボン1本で、ラッピングを1セット作ります。3セット作るには、ピンクのリボンは何本必要？",
    choices: [
      "7本",
      "12本",
      "8本",
      "3本"
    ],
    answer: 1,
    explanation: "1セットにピンクのリボンを4本使うよ✨ 3セット作るので、4×3＝12。ピンクのリボンは12本必要だよ〜💕",
    correctLine: "4本を3セット分に増やせたね〜✨",
    wrongLine: "ピンクのリボンは1セットに4本✨ 3セット分なので、4を3倍してみよ〜💕"
  },
  {
    question: "金色のビーズ3個と銀色のビーズ2個で、チャームを1セット作ります。金色のビーズを9個使うとき、銀色のビーズは何個必要？",
    choices: [
      "4個",
      "9個",
      "6個",
      "8個"
    ],
    answer: 2,
    explanation: "金色3個で1セットだから、9÷3＝3セット分だよ✨ 銀色は1セットに2個なので、2×3＝6。銀色のビーズは6個必要だよ〜💕",
    correctLine: "金色の数から何セット分か見つけて、銀色の数も求められたね〜✨",
    wrongLine: "まず、金色のビーズ9個が何セット分なのか考えてみよ〜✨"
  },
  {
    question: "黒いボタン2個と白いボタン5個で、飾りを1セット作ります。2セット分の組み合わせはどれ？",
    choices: [
      "黒2個・白10個",
      "黒4個・白7個",
      "黒5個・白10個",
      "黒4個・白10個"
    ],
    answer: 3,
    explanation: "2セット分なので、黒も白も同じように2倍するよ✨ 黒は2×2＝4個、白は5×2＝10個。黒4個・白10個だよ〜💕",
    correctLine: "2つの数をどちらも同じように2倍できたね〜✨",
    wrongLine: "2セット分だから、黒いボタンも白いボタンも両方2倍してみよ〜✨"
  }
],

        middle: [
  {
    question: "赤いビーズ2個と青いビーズ3個の組み合わせを、赤：青の順に比で表すとどれ？",
    choices: [
      "2：3",
      "3：2",
      "2：5",
      "5：3"
    ],
    answer: 0,
    explanation: "赤2個と青3個の組み合わせは、赤：青＝2：3と書くよ✨ 「：」の左に赤、右に青の数を書くんだよ〜💕",
    correctLine: "赤、青の順番どおりに2：3と表せたね〜✨",
    wrongLine: "「赤：青」の順番だから、赤の数を左、青の数を右に書いてみよ〜✨"
  },
  {
    question: "ピンクのリボン4本と白いリボン1本があります。白：ピンクの比はどれ？",
    choices: [
      "4：1",
      "1：4",
      "4：5",
      "1：5"
    ],
    answer: 1,
    explanation: "今回は白：ピンクの順番だよ✨ 白は1本、ピンクは4本だから、白：ピンク＝1：4だよ〜💕",
    correctLine: "聞かれた順番を確認して、1：4と表せたね〜✨",
    wrongLine: "今回はピンク：白ではなく、白：ピンクの順番だよ〜✨"
  },
  {
    question: "赤：青＝2：3と同じ組み合わせになっているものはどれ？",
    choices: [
      "赤2個・青6個",
      "赤3個・青4個",
      "赤4個・青6個",
      "赤6個・青4個"
    ],
    answer: 2,
    explanation: "2：3の赤と青を、どちらも2倍すると4：6になるよ✨ 両方を同じ数倍した組み合わせは、同じ比になるんだよ〜💕",
    correctLine: "赤も青も同じように2倍された組み合わせを見つけられたね〜✨",
    wrongLine: "赤の2と青の3を、どちらも同じ数倍しているものを探してみよ〜✨"
  },
  {
    question: "黄色：緑＝3：2の組み合わせでビーズを使います。黄色が9個のとき、緑は何個必要？",
    choices: [
      "3個",
      "4個",
      "8個",
      "6個"
    ],
    answer: 3,
    explanation: "黄色3個と緑2個で1セットだよ✨ 黄色9個は、9÷3＝3セット分。緑も3セット分なので、2×3＝6個必要だよ〜💕",
    correctLine: "黄色から3セット分だと分かって、緑の数も求められたね〜✨",
    wrongLine: "まず、黄色9個が「黄色3個」の何セット分か考えてみよ〜✨"
  }
],

        hard: [
  {
    question: "赤：青＝2：3になるように、ビーズを全部で15個使います。青いビーズは何個？",
    choices: [
      "9個",
      "6個",
      "5個",
      "10個"
    ],
    answer: 0,
    explanation: "赤2個分と青3個分なので、全部では2＋3＝5個分だよ✨ 15個が5個分だから、1個分は15÷5＝3個。青は3個分なので、3×3＝9個だよ〜💕",
    correctLine: "全部が5個分だと考えて、青の3個分を求められたね〜✨",
    wrongLine: "まず、赤の2個分と青の3個分を合わせると、全部で何個分になるか考えてみよ〜✨"
  },
  {
    question: "Aのリボン：Bのリボン＝3：2になるように、全部で25m用意します。Aのリボンは何m？",
    choices: [
      "10m",
      "15m",
      "5m",
      "20m"
    ],
    answer: 1,
    explanation: "Aは3個分、Bは2個分だから、全部では3＋2＝5個分だよ✨ 25mが5個分なので、1個分は25÷5＝5m。Aは3個分だから、5×3＝15mだよ〜💕",
    correctLine: "全体を5個分に分けて、Aの3個分を求められたね〜✨",
    wrongLine: "まず、3：2を合わせると全部で何個分になるか考えてみよ〜✨"
  },
  {
    question: "黄色：緑＝4：1になるように、ビーズを全部で20個使います。黄色は緑より何個多い？",
    choices: [
      "4個",
      "8個",
      "12個",
      "16個"
    ],
    answer: 2,
    explanation: "黄色4個分と緑1個分なので、全部では4＋1＝5個分だよ✨ 1個分は20÷5＝4個。黄色は4×4＝16個、緑は4個。16−4＝12なので、黄色は緑より12個多いよ〜💕",
    correctLine: "黄色と緑の数をそれぞれ求めて、差まで出せたね〜✨",
    wrongLine: "まず20個を、黄色4個分と緑1個分の全部で5個分に分けてみよ〜✨"
  },
  {
    question: "ピンク：白＝2：3の組み合わせでリボンを使います。白いリボンが12本のとき、全部で何本？",
    choices: [
      "15本",
      "18本",
      "24本",
      "20本"
    ],
    answer: 3,
    explanation: "白の3個分が12本だよ✨ まず1個分を求めると、12÷3＝4本。ピンクと白を合わせると2＋3＝5個分なので、4×5＝20本。全部で20本だよ〜💕",
    correctLine: "白の3個分から1個分を求めて、全部の5個分にできたね〜✨",
    wrongLine: "白12本が3個分だから、まず1個分が何本か求めてみよ〜✨"
  }
],
      }
    };

    const catPlayPools = {
  coordinate: [
    {
      question: "今日のレオンにつけてもらうなら、どれがいい？",
      choices: [
        "深緑の蝶ネクタイ",
        "赤チェックのベレー帽",
        "キャメル色のマフラー",
        "今日は何もつけず、ふわふわを楽しむ"
      ],
      responses: [
        "ルナ「深緑、レオンの毛色にめっちゃ似合う〜✨」<br>レオン「ちょっと大人っぽいかにゃ？」",
        "ルナ「芸術家レオン爆誕〜🤣💕」<br>レオン「絵は描けないけど、モデルならできるにゃ」",
        "ルナ「ぬくぬくコーデ、かわいすぎ〜🧣」<br>レオン「これなら冬も安心だにゃ✨」",
        "ルナ「そのままのレオンも最高だよね〜💕」<br>レオン「ふわふわをほめられたにゃ✨」"
      ]
    },
    {
      question: "今日のコッタにつけてもらうなら、どれがいい？",
      choices: [
        "水色のリボン",
        "花柄のスカーフ",
        "いちご帽子",
        "ふわふわピンクのケープ"
      ],
      responses: [
        "ルナ「水色、コッタのやさしい雰囲気にぴったり〜💕」<br>コッタ「さわやかですにゃ✨」",
        "ルナ「お花いっぱいで春っぽ〜い🌸」<br>コッタ「いいにおいがしそうですにゃ」",
        "ルナ「いちごコッタ、かわいさ反則〜🍓」<br>コッタ「食べられないいちごですにゃ」",
        "ルナ「プリンセス感すご〜い🤣💕」<br>コッタ「ぼく、ふわふわですにゃ✨」"
      ]
    },
    {
      question: "レオンとコッタのおそろいコーデ、どれにする？",
      choices: [
        "色違いの蝶ネクタイ",
        "おそろいの星柄バンダナ",
        "レオンは帽子、コッタはリボン",
        "ふたりとも何もつけない"
      ],
      responses: [
        "ルナ「色違いのおそろい、めっちゃおしゃれ〜🎀」<br>レオン「ぼくは落ち着いた色がいいにゃ」<br>コッタ「ぼくは明るい色ですにゃ」",
        "ルナ「星柄コンビ、写真映えしすぎ〜⭐」<br>レオン「ちょっとキラキラだにゃ」<br>コッタ「スターですにゃ✨」",
        "ルナ「それぞれ似合うものを選ぶのもいいね〜💕」<br>レオン「ぼくは帽子担当にゃ」<br>コッタ「リボン担当ですにゃ」",
        "ルナ「ナチュラルねこコーデだ〜🐾」<br>レオン「いつものぼくたちにゃ」<br>コッタ「ふわふわで勝負ですにゃ✨」"
      ]
    },
    {
      question: "ふたりの記念写真を撮るなら、どんなテーマにする？",
      choices: [
        "王子様とお姫様",
        "探偵コンビ",
        "夏の麦わら帽子コーデ",
        "お昼寝中の自然な写真"
      ],
      responses: [
        "ルナ「お城のポスターみたい〜👑✨」<br>レオン「王子様はちょっと緊張するにゃ」<br>コッタ「お姫様もやってみたいですにゃ」",
        "ルナ「消えたおやつを探す名探偵コンビ〜🕵️」<br>レオン「犯人はコッタかもしれないにゃ」<br>コッタ「まだ食べてないですにゃ！」",
        "ルナ「夏休み感めっちゃ出てる〜👒」<br>レオン「日差し対策もばっちりにゃ」<br>コッタ「海にも行きたいですにゃ✨」",
        "ルナ「それ絶対かわいい写真になる〜💕」<br>レオン「寝てるところはこっそり撮ってにゃ」<br>コッタ「もう眠いですにゃ……」"
      ]
    }
    ,
{
  question: "雨の日のねこコーデ、どれにする？",
  choices: [
    "レオンは紺色ケープ、コッタは黄色フード",
    "ふたりとも水玉バンダナ",
    "レオンは青、コッタはピンクのリボン",
    "窓辺で雨を見る、ふわふわ自然体コーデ"
  ],
  responses: [
    "ルナ「雨の日カラー、めっちゃ似合ってる〜☔✨」<br>レオン「紺色なら落ち着くにゃ」<br>コッタ「黄色で明るくするですにゃ！」",
    "ルナ「おそろいの水玉、雨粒みたいでかわい〜💕」<br>レオン「派手すぎない水玉ならいいにゃ」<br>コッタ「おそろいですにゃ✨」",
    "ルナ「色違いリボン、写真撮りた〜い🎀」<br>レオン「ぼくは青がいいにゃ」<br>コッタ「ピンクも似合うですにゃ💕」",
    "ルナ「雨を見ながらのんびりするのも最高〜✨」<br>レオン「静かな雨なら好きだにゃ」<br>コッタ「窓がぽつぽつしてるですにゃ」"
  ]
},
{
  question: "レオンとコッタにお店を手伝ってもらうなら、どんなコーデ？",
  choices: [
    "レオン店長は蝶ネクタイ、コッタ助手はリボン",
    "ふたりともおそろいの名札",
    "小さなエプロンをつけてもらう",
    "自由に店内を見回る、いつものふたり"
  ],
  responses: [
    "ルナ「レオン店長とコッタ助手、頼もしすぎ〜🤣💕」<br>レオン「静かなお店にするにゃ」<br>コッタ「元気に接客するですにゃ！」",
    "ルナ「名札つきのスタッフさんだ〜✨」<br>レオン「名前を覚えてもらえるにゃ」<br>コッタ「コッタですって書くですにゃ💕」",
    "ルナ「ねこ店員さんのエプロン、かわいすぎ〜！」<br>レオン「汚れないように気をつけるにゃ」<br>コッタ「ポケットにおやつ入るですにゃ？」",
    "ルナ「自由な店内パトロールも大事なお仕事〜🐾」<br>レオン「安全確認するにゃ」<br>コッタ「全部のお部屋を見るですにゃ！」"
  ]
},
{
  question: "今日はねこパジャマパーティ！どんなスタイルにする？",
  choices: [
    "レオンは月、コッタは星のナイトキャップ",
    "ふたりでおそろいのふわふわ毛布",
    "色違いのやわらかい首元リボン",
    "パジャマなしで、そのまま丸くなる"
  ],
  responses: [
    "ルナ「月と星のコンビ、夜空みたい〜🌙⭐」<br>レオン「そろそろ眠くなってきたにゃ」<br>コッタ「まだパーティするですにゃ！」",
    "ルナ「ふたりで毛布に入ってるの、尊すぎ〜💕」<br>レオン「コッタ、こっちに寄りすぎにゃ」<br>コッタ「あったかいですにゃ✨」",
    "ルナ「眠る前でもおしゃれを忘れないね〜🎀」<br>レオン「やわらかいならつけるにゃ」<br>コッタ「寝相で取れるかもですにゃ」",
    "ルナ「ふわふわそのものがパジャマみたい〜🤣💕」<br>レオン「いつでも寝られるにゃ」<br>コッタ「もう丸くなるですにゃ……」"
  ]
},
{
  question: "ふたりの特別な記念日。どんなコーデでお祝いする？",
  choices: [
    "レオンは王冠、コッタはティアラ",
    "ふたりともベルベットの蝶ネクタイ",
    "お花を使った華やかなコーデ",
    "飾りなしで、ルナと一緒に記念写真"
  ],
  responses: [
    "ルナ「王様と王女様みたい〜👑✨」<br>レオン「王冠はちょっと重いにゃ」<br>コッタ「キラキラうれしいですにゃ💕」",
    "ルナ「大人っぽいおそろいコーデ、すてき〜🎀」<br>レオン「これなら落ち着いて見えるにゃ」<br>コッタ「ぼくもお兄さんですにゃ✨」",
    "ルナ「お花いっぱいで、お祝い感すご〜い🌼💕」<br>レオン「においを確認するにゃ」<br>コッタ「お花畑みたいですにゃ！」",
    "ルナ「みんな一緒の写真が一番の記念かも〜📷✨」<br>レオン「すぐ撮ってにゃ」<br>コッタ「ルナのとなりに座るですにゃ💕」"
  ]
}
  ],

  together: [
    {
      question: "コッタとゆっくり過ごすなら、何をする？",
      choices: [
        "おなかでふみふみしてもらう",
        "おもちゃで遊ぶ",
        "窓の外を一緒に見る",
        "となりでお昼寝する"
      ],
      responses: [
        "ルナ「コッタのふみふみ、癒やし効果すごそう〜💕」<br>コッタ「やわらかくしてあげますにゃ✨」",
        "ルナ「コッタ、意外と本気で追いかけそう🤣」<br>コッタ「絶対につかまえますにゃ！」",
        "ルナ「何が見えるのかな〜？🐦」<br>コッタ「鳥さんが来るまで待つですにゃ」",
        "ルナ「最高の休憩時間じゃ〜ん💕」<br>コッタ「となり、あいてますにゃ✨」"
      ]
    },
    {
      question: "ちょっと緊張しているレオンと過ごすなら、どうする？",
      choices: [
        "少し離れて静かに待つ",
        "優しく名前を呼ぶ",
        "近くにおやつを置く",
        "同じ部屋で自分のことをして過ごす"
      ],
      responses: [
        "ルナ「レオンのペースを待ってあげるの、やさしい〜✨」<br>レオン「ゆっくりなら近づけそうだにゃ」",
        "ルナ「やさしい声なら安心するかも〜💕」<br>レオン「ねぇねの声なら知ってるにゃ」",
        "ルナ「おやつ作戦、レオンも気になってる〜🤣」<br>レオン「食べるかどうか、もう少し考えるにゃ」",
        "ルナ「かまいすぎず一緒にいるのもいいね〜✨」<br>レオン「その距離なら落ち着くにゃ」"
      ]
    },
    {
      question: "レオンとコッタがお店に遊びに来ました。最初に何をする？",
      choices: [
        "店内を自由に探検してもらう",
        "ふたりの休憩場所を作る",
        "新しい商品を見せる",
        "ルナと一緒に記念撮影する"
      ],
      responses: [
        "ルナ「ふたりとも店内チェックに出発〜🐾」<br>レオン「安全な場所を探すにゃ」<br>コッタ「全部見るですにゃ！」",
        "ルナ「ふわふわクッション用意しよ〜💕」<br>レオン「静かな場所がいいにゃ」<br>コッタ「大きいクッションがいいですにゃ」",
        "ルナ「ねこ店長たちに新作チェックしてもらお〜✨」<br>レオン「品質確認するにゃ」<br>コッタ「まずにおいを確認ですにゃ」",
        "ルナ「みんなで撮ろ撮ろ〜📷💕」<br>レオン「すぐ終わるならいいにゃ」<br>コッタ「真ん中に座るですにゃ✨」"
      ]
    },
    {
      question: "今日のねこ休憩タイム、何を用意する？",
      choices: [
        "ふわふわのクッション",
        "大きな段ボール箱",
        "窓辺のあったかスペース",
        "静かな秘密基地"
      ],
      responses: [
        "ルナ「ふわふわ度、最高にしておこ〜💕」<br>コッタ「すぐ寝られそうですにゃ」",
        "ルナ「高いベッドより箱が人気だったりするよね〜🤣」<br>レオン「まず中を確認するにゃ」",
        "ルナ「日なたぼっこ席、予約入りました〜☀️」<br>コッタ「ぽかぽかですにゃ✨」",
        "ルナ「レオン専用の落ち着く場所になりそう〜✨」<br>レオン「ここなら安心できるにゃ」"
      ]
    }
    ,
{
  question: "レオンとコッタのために遊び場を作るなら、どれにする？",
  choices: [
    "段ボールの迷路",
    "クッションいっぱいの山",
    "布をかけた秘密のトンネル",
    "窓辺まで続く探検コース"
  ],
  responses: [
    "ルナ「段ボール迷路、どっちが先にゴールするかな〜🤣🐾」<br>レオン「行き止まりがないか確認するにゃ」<br>コッタ「どんどん進むですにゃ！」",
    "ルナ「ふわふわの山、飛び込みた〜い💕」<br>レオン「いちばん静かな場所を選ぶにゃ」<br>コッタ「てっぺんに登るですにゃ✨」",
    "ルナ「秘密基地みたいでワクワクする〜✨」<br>レオン「暗くて落ち着くにゃ」<br>コッタ「向こう側から出てくるですにゃ！」",
    "ルナ「お店の中をぐるっと探検だ〜🐾」<br>レオン「ゆっくり進むにゃ」<br>コッタ「窓まで競争するですにゃ！」"
  ]
},
{
  question: "ふたりと静かに過ごすなら、何をする？",
  choices: [
    "ねこの写真集を一緒に見る",
    "やさしい音楽を聴く",
    "ルナが本を読んであげる",
    "何もせず、そばでのんびりする"
  ],
  responses: [
    "ルナ「このねこ、レオンにちょっと似てない〜？📖💕」<br>レオン「ぼくの方がかっこいいにゃ」<br>コッタ「ぼくに似た子も探すですにゃ！」",
    "ルナ「ゆったりした音楽で、お店がねこカフェみたい〜🎵」<br>レオン「静かな曲なら好きだにゃ」<br>コッタ「だんだん眠くなるですにゃ……」",
    "ルナ「今日のお話は、ねこ店長の大冒険〜✨」<br>レオン「ぼくが主人公かにゃ？」<br>コッタ「ぼくも出してほしいですにゃ！」",
    "ルナ「同じ場所でのんびりするだけでも最高だよね〜💕」<br>レオン「それがいちばん落ち着くにゃ」<br>コッタ「近くで丸くなるですにゃ✨」"
  ]
},
{
  question: "窓の外に鳥さんが来ました。ふたりとどう楽しむ？",
  choices: [
    "少し離れて一緒に眺める",
    "鳥さんに名前をつける",
    "何羽いるかゆっくり探す",
    "鳥さんが飛び立つまで静かに待つ"
  ],
  responses: [
    "ルナ「ふたりとも目がまんまるになってる〜🐦💕」<br>レオン「動きをよく見るにゃ」<br>コッタ「もっと近くに来てほしいですにゃ！」",
    "ルナ「今日の鳥さんは、ピッピちゃんに決定〜🤣」<br>レオン「勝手に決めていいのかにゃ」<br>コッタ「お友だちですにゃ✨」",
    "ルナ「窓辺の鳥さん探し、スタート〜🐾」<br>レオン「静かに数えるにゃ」<br>コッタ「あっちにもいるですにゃ！」",
    "ルナ「ふたりともすっごく集中してる〜✨」<br>レオン「最後まで見届けるにゃ」<br>コッタ「また来てほしいですにゃ💕」"
  ]
},
{
  question: "お店が少し暇になりました。ふたりと何をして遊ぶ？",
  choices: [
    "商品棚の間でかくれんぼ",
    "紙ボールを転がして遊ぶ",
    "店内をゆっくりパトロール",
    "みんなで記念写真を撮る"
  ],
  responses: [
    "ルナ「ふたりとも隠れるの上手すぎ〜🤣」<br>レオン「見つからない場所を知ってるにゃ」<br>コッタ「しっぽが出ちゃったですにゃ！」",
    "ルナ「ころころ紙ボール、どっちが取るかな〜✨」<br>レオン「動きをよく見てから行くにゃ」<br>コッタ「ぼくが先に追いかけるですにゃ！」",
    "ルナ「ねこスタッフの店内チェックお願いしま〜す🐾」<br>レオン「静かな場所も確認するにゃ」<br>コッタ「全部のお部屋を見るですにゃ！」",
    "ルナ「はい、みんなこっち見て〜📷💕」<br>レオン「一枚だけにしてにゃ」<br>コッタ「かわいく撮るですにゃ✨」"
  ]
}
  ],

  reaction: [
    {
      question: "レオンがお店のすみから、こちらを見ています。どうする？",
      choices: [
        "目が合ったらゆっくりまばたきする",
        "近くに座って静かにする",
        "優しく名前を呼ぶ",
        "レオンが動くまで待つ"
      ],
      responses: [
        "ルナ「ゆっくりまばたき、安心の合図っぽい〜✨」<br>レオン「こわくない人みたいだにゃ」",
        "ルナ「同じ空間で静かに待つの、いい感じ〜💕」<br>レオン「もう少ししたら近づくかにゃ」",
        "ルナ「レオン、耳がこっち向いたよ〜🐾」<br>レオン「呼ばれたのは分かったにゃ」",
        "ルナ「レオンのタイミングを大事にしよ〜✨」<br>レオン「自分から行けそうになったら行くにゃ」"
      ]
    },
    {
      question: "コッタがレジカウンターの上に座っています。どうする？",
      choices: [
        "店長さんになってもらう",
        "商品のモデルになってもらう",
        "となりに小さなイスを置く",
        "しばらくそのまま見守る"
      ],
      responses: [
        "ルナ「コッタ店長、本日のおすすめお願いしま〜す🤣」<br>コッタ「全部おすすめですにゃ✨」",
        "ルナ「モデルさん、目線こっちお願いしま〜す📷」<br>コッタ「かわいく撮るですにゃ」",
        "ルナ「コッタ専用席できた〜💕」<br>コッタ「ここからお店を見るですにゃ」",
        "ルナ「なんか満足そうな顔してる〜🤣」<br>コッタ「ここが気に入りましたにゃ」"
      ]
    },
    {
      question: "レオンとコッタが紙袋をじっと見ています。どうする？",
      choices: [
        "袋を横にして置いてみる",
        "中にやわらかい布を入れる",
        "袋のそばでおもちゃを動かす",
        "ふたりがどうするか静かに見る"
      ],
      responses: [
        "ルナ「ねこ用トンネルになった〜🐾」<br>コッタ「入ってみるですにゃ！」<br>レオン「先に安全確認してにゃ」",
        "ルナ「ふわふわ紙袋ベッド完成〜💕」<br>コッタ「ここで寝るですにゃ」",
        "ルナ「紙袋からおもちゃが出てきた〜🤣」<br>レオン「動きが気になるにゃ」",
        "ルナ「どっちが先に入るかな〜？✨」<br>レオン「コッタが先でいいにゃ」<br>コッタ「行ってきますにゃ！」"
      ]
    },
    {
      question: "ふたりとも眠そうです。どこで寝てもらう？",
      choices: [
        "お店の窓辺",
        "ルナのカウンターの下",
        "大きなクッションの上",
        "それぞれ好きな場所"
      ],
      responses: [
        "ルナ「日なたぼっこしながらお昼寝だ〜☀️」<br>コッタ「ぽかぽかですにゃ……」",
        "ルナ「秘密のねこスペースみたい〜🐾」<br>レオン「暗くて落ち着くにゃ」",
        "ルナ「ふたりで使ってもまだ広い〜💕」<br>コッタ「レオンのとなりで寝るですにゃ」",
        "ルナ「レオンは静かな場所、コッタはふわふわの場所かな〜✨」<br>レオン「好きな場所がいちばんにゃ」"
      ]
    }
    ,
{
  question: "レオンが商品棚の後ろに隠れて、しっぽだけ見えています。どうする？",
  choices: [
    "見えていないふりをして待つ",
    "しっぽに向かって小さく手を振る",
    "少し離れた場所から名前を呼ぶ",
    "コッタと一緒に探すふりをする"
  ],
  responses: [
    "ルナ「レオン、自分では完璧に隠れてるつもりかも〜🤣」<br>レオン「ぼくはどこにもいないにゃ」",
    "ルナ「しっぽがちょっと動いた〜💕」<br>レオン「しっぽには気づかないでほしいにゃ」",
    "ルナ「レオン、耳だけこっち向いたよ〜🐾」<br>レオン「呼ばれた気はするにゃ」",
    "ルナ「コッタ探偵、レオンを見つけられるかな〜？✨」<br>コッタ「しっぽを発見したですにゃ！」<br>レオン「それは内緒にゃ」"
  ]
},
{
  question: "コッタが新しいクッションの上で、得意そうな顔をしています。どうする？",
  choices: [
    "『コッタ専用だね』とほめる",
    "となりにもう1枚クッションを置く",
    "写真を撮らせてもらう",
    "そっとなでながら一緒にくつろぐ"
  ],
  responses: [
    "ルナ「コッタ専用席に決定〜💕」<br>コッタ「ぼくにぴったりですにゃ✨」",
    "ルナ「レオンの席も用意できた〜🐾」<br>レオン「少し離れた方の席にするにゃ」<br>コッタ「となりも空いてるですにゃ！」",
    "ルナ「その得意そうなお顔、残しておこ〜📷」<br>コッタ「かっこよく撮るですにゃ✨」",
    "ルナ「ふわふわクッションで、みんな一緒に休憩〜💕」<br>コッタ「なでなでもお願いしますにゃ」"
  ]
},
{
  question: "レオンが遠くからおもちゃをじっと見ています。どうする？",
  choices: [
    "レオンの近くでゆっくり動かす",
    "少し離れた場所に置いて待つ",
    "コッタに先に遊んでもらう",
    "レオンが見ているだけでもそっとしておく"
  ],
  responses: [
    "ルナ「レオンの目が、おもちゃを追いかけてる〜✨」<br>レオン「もう少しゆっくりなら触れそうにゃ」",
    "ルナ「自分から近づける距離がいいかもね〜💕」<br>レオン「誰も見ていないときに確認するにゃ」",
    "ルナ「コッタが全力で遊び始めた〜🤣」<br>コッタ「ぼくがお手本を見せるですにゃ！」<br>レオン「ちょっと楽しそうだにゃ」",
    "ルナ「見て楽しむのも、立派なねこタイム〜🐾」<br>レオン「今日は見学にしておくにゃ」"
  ]
},
{
  question: "レオンとコッタが同じ箱に入ろうとしています。どうなると思う？",
  choices: [
    "ぎゅうぎゅうでも一緒に入る",
    "レオンがコッタに箱をゆずる",
    "コッタが別の箱を探しに行く",
    "もっと大きな箱を用意してもらう"
  ],
  responses: [
    "ルナ「ふたりとも入ったけど、箱がねこでいっぱい〜🤣💕」<br>レオン「コッタ、もう少しそっちに行ってにゃ」<br>コッタ「もう動けないですにゃ！」",
    "ルナ「レオン、やさしいお兄ちゃん〜✨」<br>レオン「ぼくは静かな別の場所を探すにゃ」<br>コッタ「この箱はぼくが使うですにゃ💕」",
    "ルナ「コッタ、次の箱を探して出発〜🐾」<br>コッタ「もっと大きいのを見つけるですにゃ！」<br>レオン「これでゆっくりできるにゃ」",
    "ルナ「ふたりで入れる特大サイズ持ってきたよ〜📦✨」<br>レオン「これなら余裕があるにゃ」<br>コッタ「レオンのとなりに入るですにゃ💕」"
  ]
}
    
  ]
};

    const percentPracticeQuestionBank = [
      {
        id: "money-800-25",
        category: "money",
        theme: "bag",
        total: 800,
        unit: "円",
        percent: 25,
        question: "800円のバッグの25％はいくら？",
        choices: [100, 200, 300, 400],
        answer: 200
      },
      {
        id: "ribbon-120-50",
        category: "ribbon",
        theme: "ribbon",
        total: 120,
        unit: "cm",
        percent: 50,
        question: "120cmのリボンの50％は何cm？",
        choices: [30, 50, 60, 80],
        answer: 60
      },
      {
        id: "beads-40-25",
        category: "beads",
        theme: "beads",
        total: 40,
        unit: "こ",
        percent: 25,
        question: "40このビーズの25％は何こ？",
        choices: [5, 10, 15, 20],
        answer: 10
      },
      {
        id: "glitter-50-20",
        category: "glitter",
        theme: "glitter",
        total: 50,
        unit: "g",
        percent: 20,
        question: "50gのラメの20％は何g？",
        choices: [5, 10, 15, 20],
        answer: 10
      },
      {
        id: "perfume-200-30",
        category: "perfume",
        theme: "perfume",
        total: 200,
        unit: "mL",
        percent: 30,
        question: "200mLの香水の30％は何mL？",
        choices: [40, 50, 60, 80],
        answer: 60
      },
      {
        id: "button-60-50",
        category: "button",
        theme: "button",
        total: 60,
        unit: "こ",
        percent: 50,
        question: "60このボタンの50％は何こ？",
        choices: [15, 20, 30, 40],
        answer: 30
      },
      {
        id: "customer-20-40",
        category: "customer",
        theme: "customer",
        total: 20,
        unit: "人",
        percent: 40,
        question: "20人のお客さんの40％は何人？",
        choices: [4, 6, 8, 10],
        answer: 8
      },
      {
        id: "ribbon-150-20",
        category: "ribbon",
        theme: "ribbon",
        total: 150,
        unit: "cm",
        percent: 20,
        question: "150cmのレースの20％は何cm？",
        choices: [20, 30, 40, 50],
        answer: 30
      },
      {
        id: "perfume-80-25",
        category: "perfume",
        theme: "perfume",
        total: 80,
        unit: "mL",
        percent: 25,
        question: "80mLのネイルオイルの25％は何mL？",
        choices: [10, 20, 30, 40],
        answer: 20
      },
      {
        id: "money-1500-20",
        category: "money",
        theme: "bag",
        total: 1500,
        unit: "円",
        percent: 20,
        question: "1500円の商品代の20％はいくら？",
        choices: [150, 200, 300, 400],
        answer: 300
      },
      {
        id: "money-1200-50",
        category: "money",
        theme: "bag",
        total: 1200,
        unit: "円",
        percent: 50,
        question: "1200円のワンピースの50％はいくら？",
        choices: [400, 500, 600, 700],
        answer: 600
      },
      {
        id: "money-2000-30",
        category: "money",
        theme: "bag",
        total: 2000,
        unit: "円",
        percent: 30,
        question: "2000円のセール用バッグの30％はいくら？",
        choices: [400, 500, 600, 700],
        answer: 600
      },
      {
        id: "ribbon-200-25",
        category: "ribbon",
        theme: "ribbon",
        total: 200,
        unit: "cm",
        percent: 25,
        question: "200cmのラッピングひもの25％は何cm？",
        choices: [25, 40, 50, 60],
        answer: 50
      },
      {
        id: "ribbon-300-40",
        category: "ribbon",
        theme: "ribbon",
        total: 300,
        unit: "cm",
        percent: 40,
        question: "300cmの飾りテープの40％は何cm？",
        choices: [90, 100, 120, 150],
        answer: 120
      },
      {
        id: "beads-60-50",
        category: "beads",
        theme: "beads",
        total: 60,
        unit: "こ",
        percent: 50,
        question: "60このパールの50％は何こ？",
        choices: [20, 25, 30, 35],
        answer: 30
      },
      {
        id: "beads-80-25",
        category: "beads",
        theme: "beads",
        total: 80,
        unit: "こ",
        percent: 25,
        question: "80このチャームの25％は何こ？",
        choices: [10, 15, 20, 25],
        answer: 20
      },
      {
        id: "beads-100-30",
        category: "beads",
        theme: "beads",
        total: 100,
        unit: "こ",
        percent: 30,
        question: "100このデコパーツの30％は何こ？",
        choices: [20, 25, 30, 40],
        answer: 30
      },
      {
        id: "glitter-80-25",
        category: "glitter",
        theme: "glitter",
        total: 80,
        unit: "g",
        percent: 25,
        question: "80gのジェルの25％は何g？",
        choices: [10, 15, 20, 25],
        answer: 20
      },
      {
        id: "glitter-120-50",
        category: "glitter",
        theme: "glitter",
        total: 120,
        unit: "g",
        percent: 50,
        question: "120gのデコ用パウダーの50％は何g？",
        choices: [40, 50, 60, 70],
        answer: 60
      },
      {
        id: "glitter-150-40",
        category: "glitter",
        theme: "glitter",
        total: 150,
        unit: "g",
        percent: 40,
        question: "150gのラメの40％は何g？",
        choices: [40, 50, 60, 70],
        answer: 60
      },
      {
        id: "perfume-120-50",
        category: "perfume",
        theme: "perfume",
        total: 120,
        unit: "mL",
        percent: 50,
        question: "120mLのハンドジェルの50％は何mL？",
        choices: [40, 50, 60, 70],
        answer: 60
      },
      {
        id: "perfume-300-20",
        category: "perfume",
        theme: "perfume",
        total: 300,
        unit: "mL",
        percent: 20,
        question: "300mLのルームミストの20％は何mL？",
        choices: [40, 50, 60, 70],
        answer: 60
      },
      {
        id: "button-80-25",
        category: "button",
        theme: "button",
        total: 80,
        unit: "こ",
        percent: 25,
        question: "80このヘアゴムの25％は何こ？",
        choices: [10, 15, 20, 25],
        answer: 20
      },
      {
        id: "button-100-40",
        category: "button",
        theme: "button",
        total: 100,
        unit: "こ",
        percent: 40,
        question: "100このヘアピンの40％は何こ？",
        choices: [30, 35, 40, 50],
        answer: 40
      },
      {
        id: "button-120-50",
        category: "button",
        theme: "button",
        total: 120,
        unit: "こ",
        percent: 50,
        question: "120このアクセサリーパーツの50％は何こ？",
        choices: [40, 50, 60, 70],
        answer: 60
      },
      {
        id: "customer-30-50",
        category: "customer",
        theme: "customer",
        total: 30,
        unit: "人",
        percent: 50,
        question: "30人の予約したお客さんの50％は何人？",
        choices: [10, 12, 15, 20],
        answer: 15
      },
      {
        id: "customer-40-25",
        category: "customer",
        theme: "customer",
        total: 40,
        unit: "人",
        percent: 25,
        question: "40人の試着したお客さんの25％は何人？",
        choices: [5, 8, 10, 12],
        answer: 10
      },
      {
        id: "customer-50-20",
        category: "customer",
        theme: "customer",
        total: 50,
        unit: "人",
        percent: 20,
        question: "50人の商品を購入したお客さんの20％は何人？",
        choices: [5, 8, 10, 15],
        answer: 10
      }
    ];

    let percentPracticeQuestions = [];

    function shufflePercentPracticeItems(items) {
      const shuffled = [...items];

      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
      }

      return shuffled;
    }

    function buildPercentPracticeQuestionSet() {
      const categories = ["money", "ribbon", "beads", "glitter", "perfume", "button", "customer"];
      const selected = categories.map(category =>
        shufflePercentPracticeItems(
          percentPracticeQuestionBank.filter(question => question.category === category)
        )[0]
      );
      const selectedIds = new Set(selected.map(question => question.id));
      const remaining = percentPracticeQuestionBank.filter(question => !selectedIds.has(question.id));
      const extraQuestions = shufflePercentPracticeItems(remaining).slice(0, 3);

      return shufflePercentPracticeItems([...selected, ...extraQuestions]);
    }

    const normalEvents = [
      {
        key: "percent-basics",
        title: "🔢 ％ってなあに？",
        badge: "100個のうち何個かを、％で言ってみよう",
        brand: "PERCENT BASICS",
        quizLabel: "🔢 ％ってなあに？",
        introTitle: "％は、100個のうち何個かを表すマークだよ",
        introSpeech: "今日は、100個の世界をのぞいてみよう。<br>％はむずかしい計算じゃなくて、100個のうち何個あるかを言うマークなんだ。",
        customerAvatar: "🍓",
        customerBadge: "100個の世界を見てみたい",
        customerTitle: "％って、どういう意味なの？",
        customerSpeech: "100個あるときに、何個あるかを％で言えるんだって。<br>いっしょに見つけてみよう！",
        tip: "<b>％は、100個（100人）のうち何個かを表すマーク</b><br>100個中20個なら20％。数字がそのままつながるよ。",
        questionPool: "percentBasics"
      },
      {
        key: "percent-yen",
        title: "💗 ％って何円？",
        badge: "100円のまとまりで、％を円にしてみよう",
        brand: "PERCENT & YEN",
        quizLabel: "💗 ％って何円？",
        introTitle: "100円のまとまりで見てみよっか♪",
        introSpeech: "％ってなあに？で見た、100個の世界を思い出してみて♡<br>今度は100円カードをならべて、色のところが何円になるか見つけちゃお！",
        customerAvatar: "💗",
        customerBadge: "％と円をつなげたい",
        customerTitle: "100円の25％って、何円なの？",
        customerSpeech: "100円カードを見たら、なんだかわかりそう！<br>ルナ先輩、いっしょに見てほしいな♪",
        tip: "<b>100円が何個あるか、カードを数えてみよ♡</b><br>100円の25％は25円。200円なら、25円のところも2つあるよ♪",
        questionPool: "moneyPercent"
      },
      {
        key: "percent-split",
        title: "100%を100こに分けよう",
        badge: "100こに分けた1つぶんを見つけよう",
        brand: "RIBBON PERCENT",
        quizLabel: "100%のひみつ",
        introTitle: "リボンを100こに分けてみよ〜！",
        introSpeech: "今日は、お店のなが〜いリボンを分けてみるよ〜<br>このリボン全部で100%だよ〜✨<br>全部を100%って呼ぶんだよ〜！",
        customerAvatar: "",
        customerBadge: "ラッピングのお手伝い",
        customerTitle: "この長いリボン、細かく分けられる？",
        customerSpeech: "プレゼント用に、リボンを細かく分けたいんだ〜✨<br>全部を100こに分けると、どうなるのかな？",
        tip: "<b>今日は計算しなくてOK〜</b><br>リボンが細かく分かれていく様子を見て、1%のひみつを見つけよう✨"
      },
      {
        key: "percent-collect",
        title: "✨ 1%を集めてみよう",
        badge: "1%を集めて、いろいろな%を作ろう",
        brand: "PERCENT COLLECTION",
        quizLabel: "✨ 1%コレクション",
        introTitle: "1%を集めてみよ〜！",
        introSpeech: "前のお仕事で、100%を100こに分けたね〜<br>その1つぶんが1%だったよ✨<br>今日は、この1%をいくつか集めてみよう〜！",
        customerAvatar: "✨",
        customerBadge: "リボンの色分け",
        customerTitle: "1%を集めたら、何%になるの？",
        customerSpeech: "リボンの1%ずつに色をつけたいんだ〜✨<br>色をつけた数と、%の数字にはどんな関係があるのかな？",
        tip: "<b>1%を1こずつ集めてみよう〜</b><br>集めた数が、そのまま%の数字になるか見てみよう✨"
      },
      {
        key: "percent-money-build",
        title: "🎀 %ぶんの金額を見つけよう",
        badge: "1%ぶんの金額を集めてみよう",
        brand: "PERCENT MONEY",
        quizLabel: "PERCENT MONEY",
        introTitle: "%ぶんの金額を見つけよう",
        introSpeech: "前のお仕事で、1%を集めると好きな%を作れたね〜<br>今日は、その1%が何円ぶんなのか見てみよう✨",
        customerAvatar: "🎀",
        customerBadge: "今日のお仕事",
        customerTitle: "30%ぶんって何円になるの？",
        customerSpeech: "全部で1500円ぶんのリボンを使って、<br>30%ぶんの金額を見つけてみよう〜",
        tip: "まず1%ぶんの金額を見つければ、<br>あとはその1%を集めればOKだよ〜✨"
      },
      {
        key: "percent-discount-build",
        title: "🏷️ 30%OFFのねだんを見つけよう",
        badge: "30%ぶんを元のねだんから取りのぞこう",
        brand: "DISCOUNT PRICE",
        quizLabel: "DISCOUNT PRICE",
        introTitle: "30%OFFのねだんを見つけよう",
        introSpeech: "前のお仕事で、1500円の30%ぶんは450円って分かったね〜<br>今日は、その450円をどうするのか見てみよう✨",
        customerAvatar: "🏷️",
        customerBadge: "セールのお客さん",
        customerTitle: "30%OFFだと、いくら払うの？",
        customerSpeech: "1500円のリボンが30%OFFなんだって〜<br>セールのねだんを見つけてみよう！",
        tip: "「30%OFF」は、30%ぶんの金額が安くなるってことだよ〜✨"
      },
      {
        key: "percent-practice",
        title: "✨ ％チャレンジ！",
        badge: "割合の計算にチャレンジしよう",
        brand: "PERCENT CHALLENGE",
        quizLabel: "％チャレンジ！",
        introTitle: "％の計算にチャレンジ！",
        introSpeech: "全部の中から、何％ぶんかを見つけてみよう♪",
        customerAvatar: "✨",
        customerBadge: "割合チャレンジ",
        customerTitle: "800円の25％は、いくらかな？",
        customerSpeech: "割合バーを見ながら、答えを選んでみよう！",
        tip: "全部を100％として、25％ぶんを見つけよう♪"
      },
      {
        key: "spring",
        title: "🌸 春のセール",
        badge: "🏷️ 今日のお仕事：セールのお手伝い",
        brand: "SPRING SALE",
        quizLabel: "🌸 春セール",
        introTitle: "春セール、はじまるよ〜！",
        introSpeech: "おはよ〜💕(∩´∀｀)∩<br>今日は春セールでちょいバタバタかも〜！<br>お客さんのお買い物、いっしょに手伝って〜✨",
        customerAvatar: "🛍️",
        customerBadge: "最初のお客さん",
        customerTitle: "この服、いくらになるの？",
        customerSpeech: "このワンピかわい〜🥺💕<br>セールになってるんだけど、いくらになるんだろ？<br>一緒に見て〜！",
        tip: "セールって、<b>引く金額</b>と<b>払う金額</b>を間違えやすいんだよね〜😂<br>問題がどっちを聞いてるか、最初にチェック〜(๑•̀ㅂ•́)و"
      },
      {
        key: "bag",
        title: "👜 バッグフェア",
        badge: "👜 今日のお仕事：バッグ売り場をお手伝い",
        brand: "BAG FAIR",
        quizLabel: "👜 バッグフェア",
        introTitle: "今日はバッグ祭り〜💕",
        introSpeech: "新作バッグがいっぱい入った〜！(∩´∀｀)∩<br>かわいいの多すぎて、ルナも欲しくなってる😂💕<br>今日も接客お願いしま〜す✨",
        customerAvatar: "👛",
        customerBadge: "バッグ大好きなお客さん",
        customerTitle: "セール価格、見てほしい〜！",
        customerSpeech: "こっちのバッグもかわいいし、あっちも気になる〜🥺💕<br>まず値段見てから決めよ〜！",
        tip: "○％OFFは、<b>100％から引いて残りを考える</b>とラク〜✨<br>20％OFFなら80％払う、って感じだよ〜💕"
      },
      {
        key: "accessory",
        title: "🎀 アクセサリーDAY",
        badge: "🎀 今日のお仕事：アクセ売り場をお手伝い",
        brand: "ACCESSORY DAY",
        quizLabel: "🎀 アクセサリーDAY",
        introTitle: "キラキラ多すぎ〜✨",
        introSpeech: "今日はアクセサリーDAY〜💕<br>リボンもピアスもネックレスも、全部かわい〜( *´艸｀)<br>値札チェック、手伝って〜✨",
        customerAvatar: "💍",
        customerBadge: "迷い中のお客さん",
        customerTitle: "どれがお得かな〜？",
        customerSpeech: "予算もあるし、ちゃんと計算して選びたい〜🥺<br>いっしょに見てくれる？💕",
        tip: "10％は10分の1、25％は4分の1、50％は半分✨<br>見慣れた割合は、ラクな考え方を使っていいんだよ〜(∩´∀｀)∩",
        questionPool: "percent"
      },
      {
        key: "trick",
        title: "🧺 まとめ買いフェア",
        badge: "🧺 今日のお仕事：まとめ買いをお手伝い",
        brand: "BUNDLE FAIR",
        quizLabel: "🧺 まとめ買い",
        introTitle: "計算、もっとラクにできそう〜✨",
introSpeech: "今日はまとめ買いや仕入れの計算が多そう〜💕<br>そのまま計算する前に、まとめやすい数や組み合わせを探してみよ〜✨",
customerAvatar: "🛍️",
customerBadge: "計算を早く終わらせたいお客さん",
customerTitle: "これ、もっとラクに計算できないかな？",
customerSpeech: "数が多くて、そのまま計算すると大変そう〜🥺💕<br>パッと分かるやり方、一緒に探してほしいな",
tip: "そのまま計算する前に、<b>100や1000になる組み合わせ</b>や<b>きりのいい数</b>を探してみよ〜✨<br>同じ数ずつあるものは、まとめて考えるとラクだよ〜💕",
        questionPool: "trick"
      },
      {
        key: "decimal",
        title: "🧁 ドリンク&お菓子DAY",
        badge: "🧁 今日のお仕事：量の計算をお手伝い",
        brand: "DRINK & SNACK DAY",
        quizLabel: "🧁 量の計算",
        introTitle: "これ、どれくらいあれば足りるかな〜？✨",
        introSpeech: "今日はリボンやドリンクの量を考えるお客さんが多そう〜💕<br>合わせたり、分けたり、少しだけ使ったり……いっしょに見てこ〜(∩´∀｀)∩",
        customerAvatar: "☕",
        customerBadge: "量に迷うお客さん",
        customerTitle: "この量で足りるかな〜？",
customerSpeech: "リボンとかドリンクって、ちょっとずつ計算するのむずかし〜🥺💕<br>一緒に見てもらえる？",
tip: "小数も分数も、<b>何を求めるか</b>を先に見るとわかりやすいよ〜✨<br>合わせる？分ける？残りを出す？って考えてみよ〜💕",
        questionPool: "decimal"
      },
      {
  key: "unit",
  title: "📏 サイズ確認フェア",
  badge: "📏 今日のお仕事：量やサイズを分かりやすくする",
  brand: "SIZE CHECK FAIR",
  quizLabel: "📏 単位をそろえる",
  introTitle: "この量、どれくらいなんだろ〜？✨",
  introSpeech: "今日はリボンや荷物、ドリンクの量を確認する相談が多そう〜💕<br>分かりにくいときは、見やすい単位にそろえてこ〜✨",
  customerAvatar: "📏",
  customerBadge: "サイズに迷うお客さん",
  customerTitle: "これって、どれくらいの量なの？",
  customerSpeech: "数字は書いてあるんだけど、いまいちピンとこなくて〜🥺💕<br>分かりやすくしてもらえる？",
  tip: "長さや重さ、量を計算するときは、<b>同じ単位にそろえる</b>のがコツ〜✨<br>そろえてから足したり引いたりすると分かりやすいよ〜💕",
  questionPool: "unit"
},

      {
        key: "average",
        title: "📊 1週間の来店数",
        badge: "📊 今日のお仕事：平均をお手伝い",
        brand: "WEEKLY VISITORS",
        quizLabel: "📊 平均",
        introTitle: "お店の記録、まとめて見てこ〜✨",
introSpeech: "今日は本部から、来店人数や売上のチェック依頼が届いてるよ〜💕<br>日によってバラバラな数字を、ひとつの目安にまとめてみよ〜✨",
customerAvatar: "📊",
customerBadge: "本部からのチェック依頼",
customerTitle: "お店の様子を、ひと目で分かるようにしてほしいな",
customerSpeech: "日によって人数や売上が違うから、そのままだと比べにくくて〜🥺<br>みんな同じくらいだったらどれくらいか、まとめてもらえる？",
tip: "平均は、<b>全部を同じ数ずつに分けたときの1つ分</b>だよ〜✨<br>逆に合計を知りたいときは、平均を個数分集めればOK〜💕",
        questionPool: "average"
      },
      {
        key: "ratio",
        title: "🎀 比例のコーディネート",
        badge: "🎀 今日のお仕事：比例をお手伝い",
        brand: "PROPORTION STYLE",
        quizLabel: "🎀 比例",
        introTitle: "色のバランス、いい感じにそろえよ〜✨",
introSpeech: "今日はリボンやアクセを、決まったバランスで用意するお仕事だよ〜💕<br>「こっちが2つなら、こっちは3つ」みたいに組み合わせて見てこ〜✨",
customerAvatar: "🎀",
customerBadge: "組み合わせに迷うお客さん",
customerTitle: "この2色、どれくらいずつ使えばいいかな？",
customerSpeech: "ピンクと白を、同じバランスでそろえたいんだけど〜🥺💕<br>いくつずつにすればいいか一緒に見てほしいな",
tip: "2：3なら、<b>2つ分と3つ分のセット</b>って考えると分かりやすいよ〜✨<br>数が大きくなっても、同じバランスならOK〜💕",
        questionPool: "ratio"
      }
    ];

    const catEvent = {
  key: "cats",
  title: "🐾 今日のねこタイム",
  badge: "🐱 今日のごほうび：ねこタイム",
  brand: "CAT PLAY TIME",
  quizLabel: "🐾 レオン＆コッタ",

  introTitle: "算数おつかれさま〜！ねこタイムだよ🐾",

  introSpeech:
    "今日のお仕事、最後までがんばったね〜💕<br>" +
    "レオンとコッタが遊びに来てくれたよ〜(∩´∀｀)∩",

  customerAvatar: "🐱🐱",

  customerBadge: "今日の遊び相手",

  customerTitle: "レオンとコッタが待ってるよ〜！",

  customerSpeech:
    "レオン「ねぇね、今日は何して遊ぶにゃ？✨」<br>" +
    "コッタ「いっしょにのんびりするですにゃ💕」",

  tip:
    "<b>正解も不正解もなし！</b><br>" +
    "好きなものを選ぶだけでOKだよ〜🐾💕<br>" +
    "今日はゆる〜く、ふたりとの時間を楽しも〜✨"
};

    /* ATELIERねこタイム。レオンは慎重で短く「〜にゃ」、コッタは積極的に「〜ですにゃ」。 */
    const atelierCatEvents = [
      { key: "pompon-sensor", title: "ポンポンセンサー発動！", story: "<strong>ルナ</strong><br>「レオンの腰、ポンポンしてるよ〜」<br><br>レオン「そこ、いいにゃ〜」<br><br><strong>ルナ</strong><br>「あれ？ コッタが来たよ！」<br><br>コッタ「ポンポンの気配がしたですにゃ！」", choices: [
        ["ふたり交互にポンポンする", "<strong>ルナ</strong><br>「じゃあ、ふたり交互にポンポンするね！」<br><br><strong>レオン</strong><br>「ぼくが先だったにゃ」<br><br><strong>コッタ</strong><br>「順番なら待つですにゃ！」<br><br><strong>ルナ</strong><br>「あれ？ コッタ、レオンの番でも近づいてるよ」<br><br><strong>レオン</strong><br>「近いにゃ……」<br><br><strong>コッタ</strong><br>「次の番に備えてるですにゃ✨」"],
        ["両手でふたりをポンポンする", "<strong>ルナ</strong><br>「両手で、ふたり同時にポンポン！」<br><br><strong>コッタ</strong><br>「最高ですにゃ〜！」<br><br><strong>レオン</strong><br>「忙しいポンポンだにゃ……」<br><br><strong>ルナ</strong><br>「コッタ、どんどんこっちに寄ってきたよ」<br><br><strong>レオン</strong><br>「ぼくのスペースが減ってるにゃ」<br><br><strong>コッタ</strong><br>「気のせいですにゃ♪」"],
        ["コッタ、どうして分かったの？と聞く", "<strong>ルナ</strong><br>「コッタ、どうして分かったの？」<br><br><strong>コッタ</strong><br>「ぼくのポンポンセンサーはすごいですにゃ！」<br><br><strong>レオン</strong><br>「そんなセンサーあったのかにゃ」<br><br><strong>コッタ</strong><br>「家じゅう対応ですにゃ✨」<br><br><strong>レオン</strong><br>「それはすごすぎるにゃ……」"] ] },
      { key: "leon-trap", title: "レオンについていくと…？", story: "<strong>ルナ</strong><br>「ねえ、レオンがにいにのこと、ちらちら見てるよ」<br><br><strong>にいに</strong><br>「ん？ ついて来いってこと？」<br><br>レオン「こっちにゃ」<br><br><strong>にいに</strong><br>「いつものポンポン場所だな」<br><br>レオン「ここにゃ」", choices: [
        ["たっぷりポンポンする", "<strong>にいに</strong><br>「はいはい、頼まれたとおりにポンポンするよ」<br><br><strong>レオン</strong><br>「そこにゃ。いい感じにゃ」<br><br>しばらくして――<br><br><strong>レオン</strong><br>「もういいにゃ💢！」<br><br><strong>にいに</strong><br>「呼んだのそっちじゃん！」<br><br><strong>ルナ</strong><br>「あれ？ レオン、またにいにを見てるよ」<br><br><strong>にいに</strong><br>「……また呼ぶ気？」"],
        ["ほどほどでやめてみる", "<strong>にいに</strong><br>「今日は少し早めにやめよう」<br><br><strong>レオン</strong><br>「……終わりかにゃ？」<br><br><strong>にいに</strong><br>「今日は罠にかからない」<br><br><strong>ルナ</strong><br>「レオン、またちらって見たよ」<br><br><strong>レオン</strong><br>「もう少しでもよかったにゃ」<br><br><strong>にいに</strong><br>「どっちなんだよ」"],
        ["コッタも呼んでみる", "<strong>にいに</strong><br>「コッタも来る？」<br><br>その瞬間――<br><br><strong>コッタ</strong><br>「もう来てるですにゃ！」<br><br><strong>レオン</strong><br>「呼ぶ前からいたにゃ……」<br><br><strong>にいに</strong><br>「足もとでしっぽ、ぴんってしてるな」<br><br><strong>コッタ</strong><br>「ポンポンの場所は把握済みですにゃ✨」"] ] },
      { key: "watching", title: "視線を感じる…", story: "<strong>ルナ</strong><br>「パパ、コッタをなでなでしてるよ」<br><br>コッタ「もっとですにゃ〜♪」<br><br><strong>ルナ</strong><br>「あれ？ レオンがずーっと見てるよ」<br><br>レオン「…………にゃ」", choices: [
        ["レオンもおいで、と呼ぶ", "<strong>パパ</strong><br>「レオンもおいで」<br><br><strong>レオン</strong><br>「……行ってもいいのかにゃ」<br><br><strong>ルナ</strong><br>「レオン、ちょっとずつ近づいてきたよ」<br><br><strong>コッタ</strong><br>「レオンもなでなでですにゃ！」<br><br><strong>レオン</strong><br>「コッタに言われなくても行くにゃ」<br><br><strong>パパ</strong><br>「すぐ横に座ったな」"],
        ["コッタのあとでレオンをなでる", "<strong>コッタ</strong><br>「ぼくは満足ですにゃ〜♪」<br><br><strong>パパ</strong><br>「じゃあ、次はレオンの番だな」<br><br><strong>レオン</strong><br>「……待ってたにゃ」<br><br><strong>ルナ</strong><br>「見て見て！ レオンの切ない顔、消えちゃった」<br><br><strong>コッタ</strong><br>「レオン、顔が違うですにゃ」"],
        ["パパが両手を使う", "<strong>パパ</strong><br>「右手はレオン、左手はコッタ」<br><br><strong>コッタ</strong><br>「両手なでなでですにゃ！」<br><br><strong>レオン</strong><br>「それなら悪くないにゃ」<br><br><strong>ルナ</strong><br>「ふたりとも、パパにくっついてきたよ」<br><br><strong>パパ</strong><br>「両側から圧がすごい」"] ] },
      { key: "washroom", title: "コッタ、侵入成功！？", story: "<strong>ルナ</strong><br>「洗面所のドア、開いたよ」<br><br>コッタ「いまだ！ですにゃ！」<br><br><strong>ルナ</strong><br>「あれ？ もう、もーりの着替えの籠に入ってる〜！」<br><br>コッタ「いいお部屋を見つけたですにゃ♪」", choices: [
        ["そこ、コッタのお部屋じゃないよ", "<strong>ルナ</strong><br>「コッタ、そこはもーりの着替えの籠だよ」<br><br><strong>コッタ</strong><br>「ぼくにぴったりですにゃ？」<br><br><strong>レオン</strong><br>「たぶん違うにゃ」<br><br><strong>ルナ</strong><br>「コッタ、もう丸くなってるよ」<br><br><strong>コッタ</strong><br>「では少し寝るですにゃ♪」"],
        ["ちょっとだけくつろがせる", "<strong>ルナ</strong><br>「少しだけだよ」<br><br><strong>コッタ</strong><br>「では遠慮なくですにゃ♪」<br><br><strong>ルナ</strong><br>「もう、すっかりくつろいでる〜」<br><br><strong>レオン</strong><br>「もう自分の部屋だと思ってるにゃ」<br><br><strong>コッタ</strong><br>「今日からここも別荘ですにゃ✨」"],
        ["もっといい猫ベッドを作ってあげる", "<strong>ルナ</strong><br>「じゃあコッタ用に、もっとふかふかのベッド作ろうか」<br><br><strong>コッタ</strong><br>「ふかふか希望ですにゃ！」<br><br><strong>レオン</strong><br>「ぼくの分もあるのかにゃ？」<br><br><strong>コッタ</strong><br>「レオンは隣ですにゃ！」<br><br><strong>レオン</strong><br>「勝手に決められたにゃ……」"] ] },
      { key: "carrier", title: "レオンが消えた！", story: "<strong>ルナ</strong><br>「アトリエのすみにキャリーを置いたよ」<br><br><strong>ルナ</strong><br>「あれ？ さっきまでいたレオンがいない！」<br><br>コッタ「レオンがものすごい速さで消えたですにゃ！」<br><br>ベッドの下から――<br><br>レオン「今日は見学にしておくにゃ……」", choices: [
        ["今日は病院じゃないよ、と教える", "<strong>ルナ</strong><br>「今日は病院じゃないよ」<br><br><strong>ルナ</strong><br>「見て見て！ ベッドの下から顔が少し出てきたよ」<br><br><strong>レオン</strong><br>「……ほんとかにゃ？」<br><br><strong>コッタ</strong><br>「今日は大丈夫ですにゃ！」<br><br><strong>レオン</strong><br>「コッタが言うと、逆にちょっと不安にゃ」"],
        ["キャリーを見えないところへ片づける", "<strong>ルナ</strong><br>「キャリー、見えないところへ片づけたよ」<br><br>しばらくして――<br><br><strong>ルナ</strong><br>「レオンが、そーっと出てきたよ」<br><br><strong>レオン</strong><br>「安全確認するにゃ」<br><br><strong>コッタ</strong><br>「もう大丈夫ですにゃ！」<br><br><strong>レオン</strong><br>「まずぼくが確認するにゃ」"],
        ["コッタにキャリーへ入ってもらう", "<strong>コッタ</strong><br>「入ってみるですにゃ！」<br><br><strong>ルナ</strong><br>「コッタ、迷わず入っちゃった！」<br><br><strong>レオン</strong><br>「勇気あるにゃ……」<br><br><strong>コッタ</strong><br>「なかなか落ち着くですにゃ♪」<br><br><strong>レオン</strong><br>「ぼくは遠慮するにゃ」"] ] },
      { key: "kotta-belly-up", title: "コッタのへそ天", story: "<strong>ルナ</strong><br>「今日はあついね〜。あれ？ 廊下のまんなかにコッタが落ちてるよ！」<br><br><strong>コッタ</strong><br>「落ちてないですにゃ。ひんやり休憩ですにゃ〜♪」<br><br><strong>ルナ</strong><br>「おなか、ぜーんぶ出てるよ」<br><br><strong>レオン</strong><br>「そこ、ぼくも通りたいにゃ」", choices: [
        ["そのまま見守る", "<strong>ルナ</strong><br>「コッタ、ぜんぜん動く気ないね〜」<br><br><strong>コッタ</strong><br>「ここが一番ひんやりですにゃ」<br><br><strong>レオン</strong><br>「でも通り道にゃ」<br><br><strong>コッタ</strong><br>「横をどうぞですにゃ♪」<br><br><strong>レオン</strong><br>「ぜんぜんどく気ないにゃ……」"],
        ["そっと写真を撮る", "<strong>ルナ</strong><br>「今のうちに、へそ天写真を一枚……」<br><br><strong>コッタ</strong><br>「撮るなら、かわいくですにゃ」<br><br><strong>ルナ</strong><br>「あ、起きてないのに気づいてる！」<br><br><strong>レオン</strong><br>「カメラは分かるのかにゃ」<br><br><strong>コッタ</strong><br>「モデルは休憩中もお仕事ですにゃ✨」"],
        ["レオンにも涼しい場所をすすめる", "<strong>ルナ</strong><br>「レオンもこっち、涼しいよ」<br><br><strong>レオン</strong><br>「コッタの隣はちょっと狭いにゃ」<br><br><strong>コッタ</strong><br>「半分あけるですにゃ！」<br><br><strong>ルナ</strong><br>「あ、ちょっとだけ転がった」<br><br><strong>レオン</strong><br>「それで半分なのかにゃ」"] ] },
      { key: "kotta-kneading", title: "コッタのふみふみ", story: "<strong>ルナ</strong><br>「今日はさむいね。コッタ、毛布をずーっとふみふみしてるよ」<br><br><strong>コッタ</strong><br>「大事な作業ですにゃ」<br><br><strong>レオン</strong><br>「ずいぶん真剣にゃ」<br><br><strong>ルナ</strong><br>「何を作ってるのかな？」", choices: [
        ["ふみふみを見守る", "<strong>ルナ</strong><br>「まだ終わらないの？」<br><br><strong>コッタ</strong><br>「まだ仕上げ中ですにゃ」<br><br><strong>レオン</strong><br>「何が完成するのかにゃ」<br><br><strong>コッタ</strong><br>「最高の寝床ですにゃ！」<br><br><strong>ルナ</strong><br>「自分で作って、自分で寝るんだね」<br><br><strong>コッタ</strong><br>「職人ですにゃ✨」"],
        ["もっとふわふわの毛布を足す", "<strong>ルナ</strong><br>「もう一枚、ふわふわ毛布を重ねてみようか」<br><br><strong>コッタ</strong><br>「新素材ですにゃ！」<br><br><strong>レオン</strong><br>「急にアトリエっぽくなったにゃ」<br><br><strong>コッタ</strong><br>「試作するですにゃ！」<br><br><strong>ルナ</strong><br>「あ〜、また最初からふみふみ始まった！」"],
        ["レオンも呼んでみる", "<strong>ルナ</strong><br>「レオンも一緒にふみふみする？」<br><br><strong>レオン</strong><br>「ぼくは見てるにゃ」<br><br><strong>コッタ</strong><br>「では、ぼくがふたり分ふみふみするですにゃ！」<br><br><strong>レオン</strong><br>「頼んでないにゃ」<br><br><strong>ルナ</strong><br>「あれ？ コッタが寝たら、レオンも毛布に乗ったよ」<br><br><strong>レオン</strong><br>「見るだけの予定だったにゃ……」"] ] },
      { key: "papa-homecoming", title: "パパ帰宅！レオン大喜び", story: "<strong>ルナ</strong><br>「玄関で音がしたよ。パパかな？」<br><br><strong>レオン</strong><br>「にゃああああー！」<br><br><strong>ルナ</strong><br>「わっ！ レオン、玄関まで走っていった！」<br><br><strong>コッタ</strong><br>「ぼくもお迎えするですにゃ！」", choices: [
  ["玄関までついていく", "<strong>パパ</strong><br>「ただいま」<br><br><strong>レオン</strong><br>「にゃーー！」<br><br><strong>パパ</strong><br>「今日も声でかいな」<br><br><strong>ルナ</strong><br>「レオン、パパの足もとから離れないよ」<br><br><strong>レオン</strong><br>「待ってたにゃ！」<br><br><strong>ルナ</strong><br>「さっきまで静かだったのに、パパが帰ると別猫みたい！」"],
  ["パパにポンポンしてもらう", "<strong>パパ</strong><br>「はいはい。帰ってすぐポンポンな」<br><br><strong>レオン</strong><br>「ここにゃ」<br><br><strong>コッタ</strong><br>「ポンポンセンサー反応ですにゃ！」<br><br><strong>ルナ</strong><br>「コッタまで来た〜！」<br><br><strong>パパ</strong><br>「まだ靴も脱ぎきってないんだけど」<br><br><strong>レオン</strong><br>「それはあとでいいにゃ"],
  ["コッタの反応も見る", "<strong>コッタ</strong><br>「ぼくもパパのところに行くですにゃ！」<br><br><strong>ルナ</strong><br>「あっ、コッタがレオンとパパの間に入った！」<br><br><strong>レオン</strong><br>「今はぼくの番にゃ」<br><br><strong>パパ</strong><br>「はいはい、ふたりともただいま」<br><br><strong>コッタ</strong><br>「パパには両手があるですにゃ！」<br><br><strong>レオン</strong><br>「そういう問題じゃないにゃ……"]
] },
      { key: "ribbon-pull", title: "リボンを引っぱるのはだれ？", story: "<strong>ルナ</strong><br>「あれ？ さっきまで短かったリボンが、床まで伸びてるよ」<br><br><strong>コッタ</strong><br>「勝手に伸びたですにゃ」<br><br><strong>レオン</strong><br>「コッタの手が乗ってたにゃ」<br><br><strong>ルナ</strong><br>「レオン、見てたんだ！」", choices: [
  ["コッタを止める", "<strong>ルナ</strong><br>「これは作品用だから、ここでストップね」<br><br><strong>コッタ</strong><br>「もう少しで全部出たですにゃ」<br><br><strong>レオン</strong><br>「全部出す気だったのかにゃ」<br><br><strong>ルナ</strong><br>「代わりに遊び用を持ってくるね」<br><br><strong>コッタ</strong><br>「切り替え早いですにゃ！」<br><br><strong>レオン</strong><br>「反省も早いといいにゃ"],
  ["レオンの様子を見る", "<strong>ルナ</strong><br>「レオンはリボン、触らないの？」<br><br><strong>レオン</strong><br>「急に動くかもしれないにゃ」<br><br><strong>コッタ</strong><br>「じゃあ動かすですにゃ！」<br><br><strong>ルナ</strong><br>「コッタ、それは協力じゃないよ〜！」<br><br><strong>レオン</strong><br>「やっぱり遠くから見るにゃ」<br><br><strong>コッタ</strong><br>「ではぼくが代表ですにゃ♪"],
  ["余りリボンで少し遊ぶ", "<strong>ルナ</strong><br>「余りリボンを持って、ちょっとだけ遊ぼう」<br><br><strong>コッタ</strong><br>「つかまえるですにゃ！」<br><br><strong>レオン</strong><br>「……少しだけなら見るにゃ」<br><br><strong>ルナ</strong><br>「あ、レオンも一歩近づいた！」<br><br><strong>コッタ</strong><br>「レオンもセンサー反応ですにゃ！」<br><br><strong>レオン</strong><br>「それはポンポン用にゃ"]
] },
      { key: "bead-box", title: "ビーズ箱が気になる！", story: "<strong>ルナ</strong><br>「コッタ、閉じたビーズ箱をずーっとのぞいてるよ」<br><br><strong>コッタ</strong><br>「きらきらがいっぱいですにゃ！」<br><br><strong>レオン</strong><br>「小さいものだから、ふたは閉めたままにゃ」<br><br><strong>コッタ</strong><br>「見るだけですにゃ！」", choices: [
  ["ふたの上から一緒に見る", "<strong>ルナ</strong><br>「じゃあ、ふたの上から一緒に見よう」<br><br><strong>コッタ</strong><br>「ピンク発見ですにゃ！」<br><br><strong>レオン</strong><br>「ぼくは青がいいにゃ」<br><br><strong>ルナ</strong><br>「あれ？ コッタ、箱じゃなくてふたの留め具を触ってるよ」<br><br><strong>コッタ</strong><br>「こっちも気になるですにゃ！」<br><br><strong>レオン</strong><br>「結局そこなのかにゃ"],
  ["箱を棚にしまう", "<strong>ルナ</strong><br>「ビーズは棚にしまっておこうね」<br><br><strong>コッタ</strong><br>「わかったですにゃ」<br><br><strong>レオン</strong><br>「これで安心にゃ」<br><br><strong>ルナ</strong><br>「……コッタ、棚の前に座ったままだよ」<br><br><strong>コッタ</strong><br>「場所は覚えたですにゃ」<br><br><strong>レオン</strong><br>「全然あきらめてないにゃ"],
  ["キラキラボールで遊ぶ", "<strong>ルナ</strong><br>「かわりにキラキラボールはどう？」<br><br><strong>コッタ</strong><br>「追いかけるですにゃ！」<br><br><strong>ルナ</strong><br>「わっ、すごい勢いで行った！」<br><br><strong>レオン</strong><br>「作戦成功にゃ」<br><br><strong>コッタ</strong><br>「いっぱい遊んだですにゃ！」<br><br><strong>ルナ</strong><br>「……でも戻ってきた場所、ビーズ箱の棚の前だね"]
] },
      { key: "fabric-nap", title: "布の上でお昼寝", story: "<strong>ルナ</strong><br>「さあ、この布を広げて作業しよ〜！」<br><br><strong>コッタ</strong><br>「ふわふわ発見ですにゃ♪」<br><br><strong>ルナ</strong><br>「あっ！ コッタ、もう真ん中に寝てる！」<br><br><strong>レオン</strong><br>「ぼくは端にするにゃ」<br><br><strong>ルナ</strong><br>「レオンまで来た〜！」", choices: [
  ["そのまま寝かせる", "<strong>ルナ</strong><br>「今日はこのまま寝かせてあげようかな」<br><br><strong>コッタ</strong><br>「品質チェックするですにゃ」<br><br><strong>レオン</strong><br>「ぼくも確認中にゃ」<br><br><strong>ルナ</strong><br>「ふたりとも目、閉じてるけど？」<br><br><strong>コッタ</strong><br>「念入りなチェックですにゃ」<br><br><strong>ルナ</strong><br>「作業、しばらく始められそうにないね〜"],
  ["クッションへ案内する", "<strong>ルナ</strong><br>「こっちのふわふわクッションはどう？」<br><br><strong>コッタ</strong><br>「こっちもいいですにゃ！」<br><br><strong>ルナ</strong><br>「よし、布が空いた！」<br><br><strong>レオン</strong><br>「じゃあ、ぼくがここにいるにゃ」<br><br><strong>ルナ</strong><br>「レオンが真ん中に移動した〜！」<br><br><strong>コッタ</strong><br>「交代ですにゃ♪"],
  ["そっと写真を撮る", "<strong>ルナ</strong><br>「ふたり並んでるから、一枚だけ撮ろう」<br><br><strong>コッタ</strong><br>「寝顔もかわいくですにゃ？」<br><br><strong>レオン</strong><br>「静かならいいにゃ」<br><br><strong>ルナ</strong><br>「撮れた！ じゃあ作業を……」<br><br><strong>コッタ</strong><br>「まだ撮影中ですにゃ」<br><br><strong>ルナ</strong><br>「起きる気はないんだね"]
] },
      { key: "wrapping-box", title: "ラッピング箱に入りたい！", story: "<strong>ルナ</strong><br>「ラッピング用の箱を出したよ」<br><br><strong>コッタ</strong><br>「入れそうですにゃ！」<br><br><strong>ルナ</strong><br>「あっ、もう前足入ってる！」<br><br><strong>レオン</strong><br>「ぼくは先に様子を見るにゃ」", choices: [
  ["コッタを入れてみる", "<strong>ルナ</strong><br>「じゃあコッタ、入ってみる？」<br><br><strong>コッタ</strong><br>「ぴったりですにゃ！」<br><br><strong>ルナ</strong><br>「……おしり、半分出てるよ？」<br><br><strong>レオン</strong><br>「それはぴったりなのかにゃ」<br><br><strong>コッタ</strong><br>「気持ちが入ってれば大丈夫ですにゃ♪」<br><br><strong>レオン</strong><br>「箱のサイズは気持ちじゃ変わらないにゃ"],
  ["レオンも誘う", "<strong>ルナ</strong><br>「レオンも箱、入ってみる？」<br><br><strong>レオン</strong><br>「まずにおいを確認するにゃ」<br><br><strong>コッタ</strong><br>「安全ですにゃ！」<br><br><strong>ルナ</strong><br>「わっ！ コッタが箱から飛び出した！」<br><br><strong>レオン</strong><br>「……今ので入りたくなくなったにゃ」<br><br><strong>コッタ</strong><br>「安全確認できたですにゃ？"],
  ["箱を2つ用意する", "<strong>ルナ</strong><br>「じゃあ、箱をふたつ用意しよう！」<br><br><strong>コッタ</strong><br>「こっちがぼくのですにゃ！」<br><br><strong>レオン</strong><br>「じゃあぼくは隣にゃ」<br><br><strong>コッタ</strong><br>「こっちの箱も確認するですにゃ！」<br><br><strong>レオン</strong><br>「それはぼくの箱にゃ」<br><br><strong>ルナ</strong><br>「コッタ、ふたつとも自分のにする気だったでしょ〜"]
] },
      { key: "paw-print", title: "作業机に肉球スタンプ", story: "<strong>ルナ</strong><br>「あれ？ 机に広げたふわふわの布、肉球の形にへこんでるよ」<br><br><strong>コッタ</strong><br>「ぼく、歩いただけですにゃ」<br><br><strong>レオン</strong><br>「証拠がずっと並んでるにゃ」<br><br><strong>ルナ</strong><br>「ほんとだ。端から端まである〜！」", choices: [
  ["きれいに押せたね、と言う", "<strong>ルナ</strong><br>「すごい、きれいな肉球スタンプだね！」<br><br><strong>コッタ</strong><br>「作品に参加したですにゃ」<br><br><strong>レオン</strong><br>「勝手に参加したにゃ」<br><br><strong>コッタ</strong><br>「もう一列つけるですにゃ？」<br><br><strong>ルナ</strong><br>「一列で十分だよ〜！」<br><br><strong>レオン</strong><br>「止めるなら今にゃ"],
  ["机から降りてもらう", "<strong>ルナ</strong><br>「コッタ、作業するからこっちで待っててね」<br><br><strong>コッタ</strong><br>「わかったですにゃ」<br><br><strong>ルナ</strong><br>「ちゃんと降りてくれた！」<br><br><strong>レオン</strong><br>「でも机をずっと見てるにゃ」<br><br><strong>コッタ</strong><br>「次の参加タイミングを待つですにゃ」<br><br><strong>ルナ</strong><br>「反省してる顔じゃないね〜"],
  ["肉球あとを作品に残す", "<strong>ルナ</strong><br>「この肉球あと、ひとつだけデザインに残そうかな」<br><br><strong>コッタ</strong><br>「ぼくのサインですにゃ！」<br><br><strong>レオン</strong><br>「コッタブランドにゃ」<br><br><strong>ルナ</strong><br>「じゃあ小さなタグにしてみよう」<br><br><strong>コッタ</strong><br>「店長になったですにゃ✨」<br><br><strong>レオン</strong><br>「ルナのアトリエだったはずにゃ"]
] },
      { key: "photo-bomb", title: "完成品の撮影に乱入！", story: "<strong>ルナ</strong><br>「完成した作品、写真を撮ろう！」<br><br><strong>コッタ</strong><br>「ぼくも写るですにゃ！」<br><br><strong>ルナ</strong><br>「コッタ、作品の前に来ちゃった！」<br><br><strong>レオン</strong><br>「ぼくは後ろから見てるにゃ」", choices: [
  ["ねこたちと一緒に撮る", "<strong>ルナ</strong><br>「じゃあ、みんなで一枚撮ろう！」<br><br><strong>コッタ</strong><br>「主役はここですにゃ！」<br><br><strong>ルナ</strong><br>「コッタ、カメラに近すぎる〜！」<br><br><strong>レオン</strong><br>「ぼく、ほとんど写ってないにゃ」<br><br><strong>コッタ</strong><br>「次はもっと前に来るですにゃ！」<br><br><strong>レオン</strong><br>「これ以上前はないにゃ"],
  ["作品だけで撮り直す", "<strong>ルナ</strong><br>「今度は作品だけで撮ってみよう」<br><br><strong>コッタ</strong><br>「ぼくは待つですにゃ」<br><br><strong>ルナ</strong><br>「よし、今度こそ……あれ？」<br><br><strong>レオン</strong><br>「コッタのしっぽが写ってるにゃ」<br><br><strong>コッタ</strong><br>「しっぽだけ参加ですにゃ♪」<br><br><strong>ルナ</strong><br>「猫なし写真、むずかしいね〜"],
  ["レオンも前に呼ぶ", "<strong>ルナ</strong><br>「レオンも作品の横においで」<br><br><strong>レオン</strong><br>「少しだけならいいにゃ」<br><br><strong>ルナ</strong><br>「いい感じ！ そのまま、そのまま……」<br><br><strong>コッタ</strong><br>「ぼくも隣ですにゃ！」<br><br><strong>レオン</strong><br>「近いにゃ……」<br><br><strong>ルナ</strong><br>「レオンが一歩下がって、コッタが一歩前に出た。ふたりらしい写真になったね"]
] },
      { key: "fluffy-cat-bed", title: "ふかふか猫ベッドを作ろう", story: "<strong>ルナ</strong><br>「余り布で、ふかふか猫ベッドを作ってみたよ！」<br><br><strong>コッタ</strong><br>「すぐ試すですにゃ！」<br><br><strong>ルナ</strong><br>「あっ、まだ置いたばっかりなのに入った！」<br><br><strong>レオン</strong><br>「ぼくは先に確認するにゃ」", choices: [
        ["コッタに先に試してもらう", "<strong>ルナ</strong><br>「コッタ、寝心地どう？」<br><br><strong>コッタ</strong><br>「ふかふかですにゃ〜♪」<br><br><strong>レオン</strong><br>「コッタが大丈夫なら安心にゃ」<br><br><strong>ルナ</strong><br>「レオンも入りたい？」<br><br><strong>レオン</strong><br>「入りたいけど、場所がないにゃ」<br><br><strong>コッタ</strong><br>「詰めれば入れるですにゃ！」"],
        ["レオンの好みを聞く", "<strong>ルナ</strong><br>「レオンは、どんなベッドがいい？」<br><br><strong>レオン</strong><br>「静かなところで、ふかふかがいいにゃ」<br><br><strong>コッタ</strong><br>「ぼくはみんなが見える場所がいいですにゃ！」<br><br><strong>ルナ</strong><br>「あれ？ 好みがぜんぜん違うね」<br><br><strong>レオン</strong><br>「別々に作った方が早そうにゃ」<br><br><strong>コッタ</strong><br>「ぼくは両方試すですにゃ！」"],
        ["ふたり用の大きさにする", "<strong>ルナ</strong><br>「じゃあ、ふたりで入れる大きさにしよう！」<br><br><strong>コッタ</strong><br>「ぼく、真ん中ですにゃ！」<br><br><strong>レオン</strong><br>「もう少し端に行ってほしいにゃ」<br><br><strong>コッタ</strong><br>「半分あけたですにゃ！」<br><br><strong>ルナ</strong><br>「レオン、すみっこにちょこんって入ったよ」<br><br><strong>レオン</strong><br>「それ、半分じゃないにゃ……」"] ] },
    ];

const magicWorkshopStage1Questions = [
  {
    id: "magic_s1_01",
    stage: 1,
    examples: [
      { before: 2, after: 6 },
      { before: 4, after: 12 },
      { before: 7, after: 21 }
    ],
    choices: [
      {
        before: 5,
        after: 15,
        correct: true
      },
      {
        before: 5,
        after: 10,
        correct: false
      },
      {
        before: 5,
        after: 20,
        correct: false
      }
    ]
  },

  {
    id: "magic_s1_02",
    stage: 1,
    examples: [
      { before: 2, after: 7 },
      { before: 5, after: 13 },
      { before: 8, after: 19 }
    ],
    choices: [
      {
        before: 4,
        after: 11,
        correct: true
      },
      {
        before: 4,
        after: 12,
        correct: false
      },
      {
        before: 4,
        after: 9,
        correct: false
      }
    ]
  },

  {
    id: "magic_s1_03",
    stage: 1,
    examples: [
      { before: 3, after: 10 },
      { before: 6, after: 19 },
      { before: 9, after: 28 }
    ],
    choices: [
      {
        before: 4,
        after: 13,
        correct: true
      },
      {
        before: 5,
        after: 13,
        correct: false
      },
      {
        before: 7,
        after: 20,
        correct: false
      }
    ]
  },

  {
    id: "magic_s1_04",
    stage: 1,
    examples: [
      { before: 2, after: 9 },
      { before: 5, after: 21 },
      { before: 9, after: 37 }
    ],
    choices: [
      { before: 6, after: 25, correct: true },
      { before: 6, after: 24, correct: false },
      { before: 6, after: 19, correct: false }
    ]
  },

  {
    id: "magic_s1_05",
    stage: 1,
    examples: [
      { before: 3, after: 8 },
      { before: 7, after: 16 },
      { before: 10, after: 22 }
    ],
    choices: [
      { before: 5, after: 12, correct: true },
      { before: 5, after: 10, correct: false },
      { before: 5, after: 13, correct: false }
    ]
  },

  {
    id: "magic_s1_06",
    stage: 1,
    examples: [
      { before: 2, after: 5 },
      { before: 6, after: 17 },
      { before: 11, after: 32 }
    ],
    choices: [
      { before: 8, after: 23, correct: true },
      { before: 8, after: 24, correct: false },
      { before: 8, after: 17, correct: false }
    ]
  },

  {
    id: "magic_s1_07",
    stage: 1,
    examples: [
      { before: 4, after: 9 },
      { before: 7, after: 15 },
      { before: 12, after: 25 }
    ],
    choices: [
      { before: 9, after: 19, correct: true },
      { before: 8, after: 18, correct: false },
      { before: 10, after: 20, correct: false }
    ]
  },

  {
    id: "magic_s1_08",
    stage: 1,
    examples: [
      { before: 2, after: 10 },
      { before: 5, after: 22 },
      { before: 8, after: 34 }
    ],
    choices: [
      { before: 6, after: 26, correct: true },
      { before: 7, after: 26, correct: false },
      { before: 9, after: 34, correct: false }
    ]
  },

  {
    id: "magic_s1_09",
    stage: 1,
    examples: [
      { before: 3, after: 11 },
      { before: 6, after: 20 },
      { before: 10, after: 32 }
    ],
    choices: [
      { before: 8, after: 26, correct: true },
      { before: 7, after: 24, correct: false },
      { before: 9, after: 28, correct: false }
    ]
  },

  {
    id: "magic_s1_10",
    stage: 1,
    examples: [
      { before: 3, after: 14 },
      { before: 7, after: 30 },
      { before: 12, after: 50 }
    ],
    choices: [
      { before: 5, after: 22, correct: true },
      { before: 6, after: 25, correct: false },
      { before: 8, after: 33, correct: false }
    ]
  }
];

const magicWorkshopStage2Questions = [
  {
    id: "magic_s2_01",
    stage: 2,
    choices: [
      { before: 2, after: 7, correct: false },
      { before: 5, after: 13, correct: false },
      { before: 8, after: 18, correct: true },
      { before: 11, after: 25, correct: false }
    ]
  },
  {
    id: "magic_s2_02",
    stage: 2,
    choices: [
      { before: 2, after: 7, correct: false },
      { before: 4, after: 13, correct: false },
      { before: 7, after: 22, correct: false },
      { before: 9, after: 29, correct: true }
    ]
  },
  {
    id: "magic_s2_03",
    stage: 2,
    choices: [
      { before: 2, after: 7, correct: false },
      { before: 5, after: 19, correct: false },
      { before: 8, after: 31, correct: false },
      { before: 11, after: 42, correct: true }
    ]
  },
  {
    id: "magic_s2_04",
    stage: 2,
    choices: [
      { before: 3, after: 7, correct: false },
      { before: 6, after: 13, correct: false },
      { before: 9, after: 18, correct: true },
      { before: 12, after: 25, correct: false }
    ]
  },
  {
    id: "magic_s2_05",
    stage: 2,
    choices: [
      { before: 2, after: 4, correct: false },
      { before: 5, after: 14, correct: true },
      { before: 8, after: 22, correct: false },
      { before: 11, after: 31, correct: false }
    ]
  },
  {
    id: "magic_s2_06",
    stage: 2,
    choices: [
      { before: 2, after: 9, correct: false },
      { before: 4, after: 17, correct: false },
      { before: 7, after: 29, correct: false },
      { before: 10, after: 40, correct: true }
    ]
  },
  {
    id: "magic_s2_07",
    stage: 2,
    choices: [
      { before: 1, after: 5, correct: true },
      { before: 4, after: 12, correct: false },
      { before: 7, after: 18, correct: false },
      { before: 10, after: 24, correct: false }
    ]
  },
  {
    id: "magic_s2_08",
    stage: 2,
    choices: [
      { before: 2, after: 8, correct: false },
      { before: 6, after: 20, correct: false },
      { before: 9, after: 28, correct: true },
      { before: 12, after: 38, correct: false }
    ]
  },
  {
    id: "magic_s2_09",
    stage: 2,
    choices: [
      { before: 3, after: 11, correct: false },
      { before: 5, after: 20, correct: true },
      { before: 8, after: 31, correct: false },
      { before: 11, after: 43, correct: false }
    ]
  },
  {
    id: "magic_s2_10",
    stage: 2,
    choices: [
      { before: 4, after: 7, correct: false },
      { before: 7, after: 13, correct: false },
      { before: 10, after: 19, correct: false },
      { before: 13, after: 26, correct: true }
    ]
  }
];

const magicWorkshopStage3Questions = [
  {
    id: "magic_s3_01",
    stage: 3,
    steps: [
      { type: "multiply", value: 2 },
      { type: "add", value: 3 }
    ],
    result: 17,
    choices: [
      { value: 7, correct: true },
      { value: 8, correct: false },
      { value: 10, correct: false }
    ]
  },
  {
    id: "magic_s3_02",
    stage: 3,
    steps: [
      { type: "multiply", value: 3 },
      { type: "subtract", value: 2 }
    ],
    result: 19,
    choices: [
      { value: 7, correct: true },
      { value: 6, correct: false },
      { value: 8, correct: false }
    ]
  },
  {
    id: "magic_s3_03",
    stage: 3,
    steps: [
      { type: "add", value: 4 },
      { type: "multiply", value: 3 }
    ],
    result: 27,
    choices: [
      { value: 5, correct: true },
      { value: 7, correct: false },
      { value: 9, correct: false }
    ]
  },
  {
    id: "magic_s3_04",
    stage: 3,
    steps: [
      { type: "multiply", value: 2 },
      { type: "add", value: 5 }
    ],
    result: 19,
    choices: [
      { value: 7, correct: true },
      { value: 6, correct: false },
      { value: 9, correct: false }
    ]
  },
  {
    id: "magic_s3_05",
    stage: 3,
    steps: [
      { type: "multiply", value: 4 },
      { type: "subtract", value: 3 }
    ],
    result: 21,
    choices: [
      { value: 6, correct: true },
      { value: 5, correct: false },
      { value: 7, correct: false }
    ]
  },
  {
    id: "magic_s3_06",
    stage: 3,
    steps: [
      { type: "add", value: 3 },
      { type: "multiply", value: 2 }
    ],
    result: 20,
    choices: [
      { value: 7, correct: true },
      { value: 8, correct: false },
      { value: 10, correct: false }
    ]
  },
  {
    id: "magic_s3_07",
    stage: 3,
    steps: [
      { type: "subtract", value: 2 },
      { type: "multiply", value: 3 }
    ],
    result: 24,
    choices: [
      { value: 10, correct: true },
      { value: 8, correct: false },
      { value: 6, correct: false }
    ]
  },
  {
    id: "magic_s3_08",
    stage: 3,
    steps: [
      { type: "add", value: 5 },
      { type: "multiply", value: 3 }
    ],
    result: 36,
    choices: [
      { value: 7, correct: true },
      { value: 9, correct: false },
      { value: 12, correct: false }
    ]
  },
  {
    id: "magic_s3_09",
    stage: 3,
    steps: [
      { type: "multiply", value: 3 },
      { type: "add", value: 4 }
    ],
    result: 31,
    choices: [
      { value: 9, correct: true },
      { value: 7, correct: false },
      { value: 11, correct: false }
    ]
  },
  {
    id: "magic_s3_10",
    stage: 3,
    steps: [
      { type: "subtract", value: 4 },
      { type: "multiply", value: 4 }
    ],
    result: 32,
    choices: [
      { value: 12, correct: true },
      { value: 10, correct: false },
      { value: 8, correct: false }
    ]
  }
];

const magicWorkshopStage4Questions = [
  {
    id: "magic_s4_01",
    stage: 4,
    start: 4,
    goal: 14,
    choices: [
      {
        steps: [
          { type: "add", value: 3 },
          { type: "multiply", value: 2 }
        ],
        correct: true
      },
      {
        steps: [
          { type: "multiply", value: 2 },
          { type: "add", value: 3 }
        ],
        correct: false
      }
    ]
  },
  {
    id: "magic_s4_02",
    stage: 4,
    start: 5,
    goal: 18,
    choices: [
      {
        steps: [
          { type: "add", value: 4 },
          { type: "multiply", value: 2 }
        ],
        correct: true
      },
      {
        steps: [
          { type: "multiply", value: 2 },
          { type: "add", value: 4 }
        ],
        correct: false
      }
    ]
  },
  {
    id: "magic_s4_03",
    stage: 4,
    start: 6,
    goal: 25,
    choices: [
      {
        steps: [
          { type: "multiply", value: 4 },
          { type: "add", value: 1 }
        ],
        correct: true
      },
      {
        steps: [
          { type: "add", value: 1 },
          { type: "multiply", value: 4 }
        ],
        correct: false
      }
    ]
  },
  {
    id: "magic_s4_04",
    stage: 4,
    start: 3,
    goal: 20,
    choices: [
      {
        steps: [
          { type: "add", value: 2 },
          { type: "multiply", value: 4 }
        ],
        correct: true
      },
      {
        steps: [
          { type: "multiply", value: 4 },
          { type: "add", value: 2 }
        ],
        correct: false
      }
    ]
  },
  {
    id: "magic_s4_05",
    stage: 4,
    start: 5,
    goal: 28,
    choices: [
      {
        steps: [
          { type: "multiply", value: 4 },
          { type: "add", value: 8 }
        ],
        correct: true
      },
      {
        steps: [
          { type: "add", value: 8 },
          { type: "multiply", value: 4 }
        ],
        correct: false
      }
    ]
  },
  {
    id: "magic_s4_06",
    stage: 4,
    start: 8,
    goal: 18,
    choices: [
      {
        steps: [
          { type: "subtract", value: 2 },
          { type: "multiply", value: 3 }
        ],
        correct: true
      },
      {
        steps: [
          { type: "multiply", value: 3 },
          { type: "subtract", value: 2 }
        ],
        correct: false
      }
    ]
  },
  {
    id: "magic_s4_07",
    stage: 4,
    start: 4,
    goal: 15,
    choices: [
      {
        steps: [
          { type: "multiply", value: 3 },
          { type: "add", value: 3 }
        ],
        correct: true
      },
      {
        steps: [
          { type: "add", value: 3 },
          { type: "multiply", value: 3 }
        ],
        correct: false
      }
    ]
  },
  {
    id: "magic_s4_08",
    stage: 4,
    start: 10,
    goal: 24,
    choices: [
      {
        steps: [
          { type: "subtract", value: 4 },
          { type: "multiply", value: 4 }
        ],
        correct: true
      },
      {
        steps: [
          { type: "multiply", value: 4 },
          { type: "subtract", value: 4 }
        ],
        correct: false
      }
    ]
  },
  {
    id: "magic_s4_09",
    stage: 4,
    start: 6,
    goal: 25,
    choices: [
      {
        steps: [
          { type: "multiply", value: 4 },
          { type: "add", value: 1 }
        ],
        correct: true
      },
      {
        steps: [
          { type: "add", value: 1 },
          { type: "multiply", value: 4 }
        ],
        correct: false
      }
    ]
  },
  {
    id: "magic_s4_10",
    stage: 4,
    start: 9,
    goal: 28,
    choices: [
      {
        steps: [
          { type: "add", value: 5 },
          { type: "multiply", value: 2 }
        ],
        correct: true
      },
      {
        steps: [
          { type: "multiply", value: 2 },
          { type: "add", value: 5 }
        ],
        correct: false
      }
    ]
  }
];

const magicWorkshopStage5Questions = [
  {
    id: "magic_s5_01",
    stage: 5,
    examples: [
      { before: 2, after: 8 },
      { before: 4, after: 14 },
      { before: 7, after: 23 }
    ],
    choices: [
      { multiplier: 3, operation: "add", value: 2, correct: true },
      { multiplier: 2, operation: "add", value: 4, correct: false },
      { multiplier: 2, operation: "add", value: 6, correct: false }
    ]
  },
  {
    id: "magic_s5_02",
    stage: 5,
    examples: [
      { before: 2, after: 5 },
      { before: 5, after: 14 },
      { before: 8, after: 23 }
    ],
    choices: [
      { multiplier: 3, operation: "subtract", value: 1, correct: true },
      { multiplier: 2, operation: "add", value: 1, correct: false },
      { multiplier: 2, operation: "add", value: 4, correct: false }
    ]
  },
  {
    id: "magic_s5_03",
    stage: 5,
    examples: [
      { before: 3, after: 14 },
      { before: 6, after: 26 },
      { before: 10, after: 42 }
    ],
    choices: [
      { multiplier: 4, operation: "add", value: 2, correct: true },
      { multiplier: 3, operation: "add", value: 5, correct: false },
      { multiplier: 3, operation: "add", value: 8, correct: false }
    ]
  },
  {
    id: "magic_s5_04",
    stage: 5,
    examples: [
      { before: 3, after: 9 },
      { before: 6, after: 15 },
      { before: 10, after: 23 }
    ],
    choices: [
      { multiplier: 2, operation: "add", value: 3, correct: true },
      { multiplier: 3, operation: "add", value: 0, correct: false },
      { multiplier: 3, operation: "subtract", value: 3, correct: false }
    ]
  },
  {
    id: "magic_s5_05",
    stage: 5,
    examples: [
      { before: 2, after: 7 },
      { before: 5, after: 16 },
      { before: 9, after: 28 }
    ],
    choices: [
      { multiplier: 3, operation: "add", value: 1, correct: true },
      { multiplier: 2, operation: "add", value: 3, correct: false },
      { multiplier: 2, operation: "add", value: 6, correct: false }
    ]
  },
  {
    id: "magic_s5_06",
    stage: 5,
    examples: [
      { before: 2, after: 7 },
      { before: 5, after: 19 },
      { before: 8, after: 31 }
    ],
    choices: [
      { multiplier: 4, operation: "subtract", value: 1, correct: true },
      { multiplier: 3, operation: "add", value: 1, correct: false },
      { multiplier: 3, operation: "add", value: 4, correct: false }
    ]
  },
  {
    id: "magic_s5_07",
    stage: 5,
    examples: [
      { before: 4, after: 13 },
      { before: 7, after: 19 },
      { before: 11, after: 27 }
    ],
    choices: [
      { multiplier: 2, operation: "add", value: 5, correct: true },
      { multiplier: 3, operation: "add", value: 1, correct: false },
      { multiplier: 3, operation: "subtract", value: 2, correct: false }
    ]
  },
  {
    id: "magic_s5_08",
    stage: 5,
    examples: [
      { before: 3, after: 7 },
      { before: 6, after: 16 },
      { before: 10, after: 28 }
    ],
    choices: [
      { multiplier: 3, operation: "subtract", value: 2, correct: true },
      { multiplier: 2, operation: "add", value: 1, correct: false },
      { multiplier: 2, operation: "add", value: 4, correct: false }
    ]
  },
  {
    id: "magic_s5_09",
    stage: 5,
    examples: [
      { before: 2, after: 10 },
      { before: 5, after: 22 },
      { before: 9, after: 38 }
    ],
    choices: [
      { multiplier: 4, operation: "add", value: 2, correct: true },
      { multiplier: 3, operation: "add", value: 4, correct: false },
      { multiplier: 3, operation: "add", value: 7, correct: false }
    ]
  },
  {
    id: "magic_s5_10",
    stage: 5,
    examples: [
      { before: 5, after: 9 },
      { before: 8, after: 15 },
      { before: 12, after: 23 }
    ],
    choices: [
      { multiplier: 2, operation: "subtract", value: 1, correct: true },
      { multiplier: 3, operation: "subtract", value: 6, correct: false },
      { multiplier: 3, operation: "subtract", value: 9, correct: false }
    ]
  }
];

const balanceWorkshopStage1Questions = [
  {
    id: "balance_s1_01",
    type: "same-balance",
    sampleLeft: [{ icon: "\u{1F338}", count: 2 }],
    sampleRight: [{ icon: "\u{2B50}", count: 1 }],
    question: "右には、どれを飾る？",
    targetSide: "right",
    fixedLeft: [{ icon: "\u{1F338}", count: 2 }],
    choices: [
      { parts: [{ icon: "\u{2B50}", count: 1 }], correct: true, balance: "equal" },
      { parts: [{ icon: "\u{2B50}", count: 2 }], correct: false, balance: "heavy" },
      { parts: [{ icon: "\u{2B50}", count: 3 }], correct: false, balance: "heavy" }
    ]
  },
  {
    id: "balance_s1_02",
    type: "complete-left",
    sampleLeft: [{ icon: "\u{1F48E}", count: 3 }],
    sampleRight: [{ icon: "\u{1F380}", count: 1 }],
    question: "左には、どれを飾る？",
    targetSide: "left",
    fixedRight: [{ icon: "\u{1F380}", count: 1 }],
    choices: [
      { parts: [{ icon: "\u{1F48E}", count: 1 }], correct: false, balance: "light" },
      { parts: [{ icon: "\u{1F48E}", count: 2 }], correct: false, balance: "light" },
      { parts: [{ icon: "\u{1F48E}", count: 3 }], correct: true, balance: "equal" }
    ]
  },
  {
    id: "balance_s1_03",
    type: "complete-right",
    sampleLeft: [{ icon: "\u{1FA77}", count: 2 }],
    sampleRight: [{ icon: "\u{1F319}", count: 3 }],
    question: "右には、どれを飾る？",
    targetSide: "right",
    fixedLeft: [{ icon: "\u{1F319}", count: 3 }],
    choices: [
      { parts: [{ icon: "\u{1FA77}", count: 1 }], correct: false, balance: "light" },
      { parts: [{ icon: "\u{1FA77}", count: 2 }], correct: true, balance: "equal" },
      { parts: [{ icon: "\u{1FA77}", count: 3 }], correct: false, balance: "heavy" }
    ]
  },
  {
    id: "balance_s1_04", type: "same-balance",
    sampleLeft: [{ icon: "\u{1F380}", count: 2 }], sampleRight: [{ icon: "\u{1F48E}", count: 3 }],
    question: "右には、どれを飾る？", targetSide: "right", fixedLeft: [{ icon: "\u{1F380}", count: 2 }],
    choices: [
      { parts: [{ icon: "\u{1F48E}", count: 2 }], correct: false, balance: "light" },
      { parts: [{ icon: "\u{1F48E}", count: 3 }], correct: true, balance: "equal" },
      { parts: [{ icon: "\u{1F48E}", count: 4 }], correct: false, balance: "heavy" }
    ]
  },
  {
    id: "balance_s1_05", type: "complete-left",
    sampleLeft: [{ icon: "\u{2B50}", count: 2 }], sampleRight: [{ icon: "\u{1F338}", count: 3 }],
    question: "左には、どれを飾る？", targetSide: "left", fixedRight: [{ icon: "\u{1F338}", count: 3 }],
    choices: [
      { parts: [{ icon: "\u{2B50}", count: 1 }], correct: false, balance: "light" },
      { parts: [{ icon: "\u{2B50}", count: 2 }], correct: true, balance: "equal" },
      { parts: [{ icon: "\u{2B50}", count: 3 }], correct: false, balance: "heavy" }
    ]
  },
  {
    id: "balance_s1_06", type: "complete-right",
    sampleLeft: [{ icon: "\u{1F48E}", count: 2 }], sampleRight: [{ icon: "\u{1F319}", count: 1 }],
    question: "右には、どれを飾る？", targetSide: "right", fixedLeft: [{ icon: "\u{1F319}", count: 1 }],
    choices: [
      { parts: [{ icon: "\u{1F48E}", count: 1 }], correct: false, balance: "light" },
      { parts: [{ icon: "\u{1F48E}", count: 2 }], correct: true, balance: "equal" },
      { parts: [{ icon: "\u{1F48E}", count: 3 }], correct: false, balance: "heavy" }
    ]
  },
  {
    id: "balance_s1_07", type: "complete-left",
    sampleLeft: [{ icon: "\u{1FA77}", count: 3 }], sampleRight: [{ icon: "\u{1F380}", count: 2 }],
    question: "左には、どれを飾る？", targetSide: "left", fixedRight: [{ icon: "\u{1F380}", count: 2 }],
    choices: [
      { parts: [{ icon: "\u{1FA77}", count: 2 }], correct: false, balance: "light" },
      { parts: [{ icon: "\u{1FA77}", count: 3 }], correct: true, balance: "equal" },
      { parts: [{ icon: "\u{1FA77}", count: 4 }], correct: false, balance: "heavy" }
    ]
  },
  {
    id: "balance_s1_08", type: "complete-right",
    sampleLeft: [{ icon: "\u{1F338}", count: 3 }], sampleRight: [{ icon: "\u{1F381}", count: 1 }],
    question: "右には、どれを飾る？", targetSide: "right", fixedLeft: [{ icon: "\u{1F381}", count: 1 }],
    choices: [
      { parts: [{ icon: "\u{1F338}", count: 2 }], correct: false, balance: "light" },
      { parts: [{ icon: "\u{1F338}", count: 3 }], correct: true, balance: "equal" },
      { parts: [{ icon: "\u{1F338}", count: 4 }], correct: false, balance: "heavy" }
    ]
  },
  {
    id: "balance_s1_09", type: "complete-left",
    sampleLeft: [{ icon: "\u{1F319}", count: 2 }], sampleRight: [{ icon: "\u{2B50}", count: 3 }],
    question: "左には、どれを飾る？", targetSide: "left", fixedRight: [{ icon: "\u{2B50}", count: 3 }],
    choices: [
      { parts: [{ icon: "\u{1F319}", count: 1 }], correct: false, balance: "light" },
      { parts: [{ icon: "\u{1F319}", count: 2 }], correct: true, balance: "equal" },
      { parts: [{ icon: "\u{1F319}", count: 3 }], correct: false, balance: "heavy" }
    ]
  },
  {
    id: "balance_s1_10", type: "complete-right",
    sampleLeft: [{ icon: "\u{1F380}", count: 3 }], sampleRight: [{ icon: "\u{1FA77}", count: 2 }],
    question: "右には、どれを飾る？", targetSide: "right", fixedLeft: [{ icon: "\u{1FA77}", count: 2 }],
    choices: [
      { parts: [{ icon: "\u{1F380}", count: 2 }], correct: false, balance: "light" },
      { parts: [{ icon: "\u{1F380}", count: 3 }], correct: true, balance: "equal" },
      { parts: [{ icon: "\u{1F380}", count: 4 }], correct: false, balance: "heavy" }
    ]
  }
];

const balanceWorkshopStage2Questions = [
  {
    id: "balance_s2_01",
    leftItems: [
      { type: "star", icon: "\u{2B50}" },
      { type: "flower", icon: "\u{1F338}" }
    ],
    rightItems: [
      { type: "gem", icon: "\u{1F48E}" },
      { type: "flower", icon: "\u{1F338}" }
    ],
    removableType: "flower",
    removableCount: 1
  },
  {
    id: "balance_s2_02",
    leftItems: [
      { type: "ribbon", icon: "\u{1F380}" },
      { type: "moon", icon: "\u{1F319}" }
    ],
    rightItems: [
      { type: "heart", icon: "\u{1FA77}" },
      { type: "heart", icon: "\u{1FA77}" },
      { type: "moon", icon: "\u{1F319}" }
    ],
    removableType: "moon",
    removableCount: 1
  },
  {
    id: "balance_s2_03",
    leftItems: [
      { type: "star", icon: "\u{2B50}" },
      { type: "flower", icon: "\u{1F338}" },
      { type: "flower", icon: "\u{1F338}" }
    ],
    rightItems: [
      { type: "gem", icon: "\u{1F48E}" },
      { type: "flower", icon: "\u{1F338}" },
      { type: "flower", icon: "\u{1F338}" }
    ],
    removableType: "flower",
    removableCount: 2
  },
  {
    id: "balance_s2_04",
    leftItems: [{ type: "star", icon: "\u{2B50}" }, { type: "flower", icon: "\u{1F338}" }],
    rightItems: [{ type: "gem", icon: "\u{1F48E}" }, { type: "flower", icon: "\u{1F338}" }],
    removableType: "flower",
    removableCount: 1
  },
  {
    id: "balance_s2_05",
    leftItems: [{ type: "ribbon", icon: "\u{1F380}" }, { type: "moon", icon: "\u{1F319}" }],
    rightItems: [{ type: "heart", icon: "\u{1FA77}" }, { type: "heart", icon: "\u{1FA77}" }, { type: "moon", icon: "\u{1F319}" }],
    removableType: "moon",
    removableCount: 1
  },
  {
    id: "balance_s2_06",
    leftItems: [{ type: "gem", icon: "\u{1F48E}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }],
    rightItems: [{ type: "star", icon: "\u{2B50}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }],
    removableType: "flower",
    removableCount: 2
  },
  {
    id: "balance_s2_07",
    leftItems: [{ type: "present", icon: "\u{1F381}" }, { type: "star", icon: "\u{2B50}" }],
    rightItems: [{ type: "ribbon", icon: "\u{1F380}" }, { type: "ribbon", icon: "\u{1F380}" }, { type: "star", icon: "\u{2B50}" }],
    removableType: "star",
    removableCount: 1
  },
  {
    id: "balance_s2_08",
    leftItems: [{ type: "moon", icon: "\u{1F319}" }, { type: "moon", icon: "\u{1F319}" }, { type: "gem", icon: "\u{1F48E}" }],
    rightItems: [{ type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }, { type: "gem", icon: "\u{1F48E}" }],
    removableType: "gem",
    removableCount: 1
  },
  {
    id: "balance_s2_09",
    leftItems: [{ type: "heart", icon: "\u{1FA77}" }, { type: "ribbon", icon: "\u{1F380}" }, { type: "ribbon", icon: "\u{1F380}" }],
    rightItems: [{ type: "star", icon: "\u{2B50}" }, { type: "ribbon", icon: "\u{1F380}" }, { type: "ribbon", icon: "\u{1F380}" }],
    removableType: "ribbon",
    removableCount: 2
  },
  {
    id: "balance_s2_10",
    leftItems: [{ type: "present", icon: "\u{1F381}" }, { type: "flower", icon: "\u{1F338}" }],
    rightItems: [{ type: "gem", icon: "\u{1F48E}" }, { type: "gem", icon: "\u{1F48E}" }, { type: "gem", icon: "\u{1F48E}" }, { type: "flower", icon: "\u{1F338}" }],
    removableType: "flower",
    removableCount: 1
  }
];

const balanceWorkshopStage3Questions = [
  {
    id: "balance_s3_01",
    targetItem: { type: "present", icon: "\u{1F381}", name: "プレゼント" },
    comparisonItem: { type: "gem", icon: "\u{1F48E}", name: "宝石" },
    leftItems: [
      { type: "present", icon: "\u{1F381}" },
      { type: "gem", icon: "\u{1F48E}" },
      { type: "gem", icon: "\u{1F48E}" }
    ],
    rightItems: [
      { type: "gem", icon: "\u{1F48E}" },
      { type: "gem", icon: "\u{1F48E}" },
      { type: "gem", icon: "\u{1F48E}" },
      { type: "gem", icon: "\u{1F48E}" },
      { type: "gem", icon: "\u{1F48E}" }
    ],
    removableType: "gem",
    removableCount: 2,
    resultCount: 3,
    resultText: "プレゼントは 宝石3こ分！✨"
  },
  {
    id: "balance_s3_02",
    targetItem: { type: "star", icon: "\u{2B50}", name: "星" },
    comparisonItem: { type: "flower", icon: "\u{1F338}", name: "花" },
    leftItems: [
      { type: "star", icon: "\u{2B50}" },
      { type: "flower", icon: "\u{1F338}" },
      { type: "flower", icon: "\u{1F338}" },
      { type: "flower", icon: "\u{1F338}" }
    ],
    rightItems: [
      { type: "flower", icon: "\u{1F338}" },
      { type: "flower", icon: "\u{1F338}" },
      { type: "flower", icon: "\u{1F338}" },
      { type: "flower", icon: "\u{1F338}" },
      { type: "flower", icon: "\u{1F338}" },
      { type: "flower", icon: "\u{1F338}" },
      { type: "flower", icon: "\u{1F338}" }
    ],
    removableType: "flower",
    removableCount: 3,
    resultCount: 4,
    resultText: "星は 花4こ分！✨"
  },
  {
    id: "balance_s3_03",
    targetItem: { type: "ribbon", icon: "\u{1F380}", name: "リボン" },
    comparisonItem: { type: "moon", icon: "\u{1F319}", name: "月" },
    leftItems: [
      { type: "ribbon", icon: "\u{1F380}" },
      { type: "moon", icon: "\u{1F319}" },
      { type: "moon", icon: "\u{1F319}" }
    ],
    rightItems: [
      { type: "moon", icon: "\u{1F319}" },
      { type: "moon", icon: "\u{1F319}" },
      { type: "moon", icon: "\u{1F319}" },
      { type: "moon", icon: "\u{1F319}" },
      { type: "moon", icon: "\u{1F319}" },
      { type: "moon", icon: "\u{1F319}" }
    ],
    removableType: "moon",
    removableCount: 2,
    resultCount: 4,
    resultText: "リボンは 月4こ分！✨"
  },
  {
    id: "balance_s3_04",
    targetItem: { type: "gem", icon: "\u{1F48E}", name: "宝石" }, comparisonItem: { type: "flower", icon: "\u{1F338}", name: "花" },
    leftItems: [{ type: "gem", icon: "\u{1F48E}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }],
    rightItems: [{ type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }],
    removableType: "flower", removableCount: 2, resultCount: 4, resultText: "宝石は 花4こ分！✨"
  },
  {
    id: "balance_s3_05",
    targetItem: { type: "ribbon", icon: "\u{1F380}", name: "リボン" }, comparisonItem: { type: "star", icon: "\u{2B50}", name: "星" },
    leftItems: [{ type: "ribbon", icon: "\u{1F380}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }],
    rightItems: [{ type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }],
    removableType: "star", removableCount: 3, resultCount: 5, resultText: "リボンは 星5こ分！✨"
  },
  {
    id: "balance_s3_06",
    targetItem: { type: "present", icon: "\u{1F381}", name: "プレゼント" }, comparisonItem: { type: "moon", icon: "\u{1F319}", name: "月" },
    leftItems: [{ type: "present", icon: "\u{1F381}" }, { type: "moon", icon: "\u{1F319}" }],
    rightItems: [{ type: "moon", icon: "\u{1F319}" }, { type: "moon", icon: "\u{1F319}" }, { type: "moon", icon: "\u{1F319}" }, { type: "moon", icon: "\u{1F319}" }],
    removableType: "moon", removableCount: 1, resultCount: 3, resultText: "プレゼントは 月3こ分！✨"
  },
  {
    id: "balance_s3_07",
    targetItem: { type: "star", icon: "\u{2B50}", name: "星" }, comparisonItem: { type: "gem", icon: "\u{1F48E}", name: "宝石" },
    leftItems: [{ type: "star", icon: "\u{2B50}" }, { type: "gem", icon: "\u{1F48E}" }, { type: "gem", icon: "\u{1F48E}" }],
    rightItems: [{ type: "gem", icon: "\u{1F48E}" }, { type: "gem", icon: "\u{1F48E}" }, { type: "gem", icon: "\u{1F48E}" }, { type: "gem", icon: "\u{1F48E}" }, { type: "gem", icon: "\u{1F48E}" }],
    removableType: "gem", removableCount: 2, resultCount: 3, resultText: "星は 宝石3こ分！✨"
  },
  {
    id: "balance_s3_08",
    targetItem: { type: "heart", icon: "\u{1FA77}", name: "ハート" }, comparisonItem: { type: "flower", icon: "\u{1F338}", name: "花" },
    leftItems: [{ type: "heart", icon: "\u{1FA77}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }],
    rightItems: [{ type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }, { type: "flower", icon: "\u{1F338}" }],
    removableType: "flower", removableCount: 3, resultCount: 4, resultText: "ハートは 花4こ分！✨"
  },
  {
    id: "balance_s3_09",
    targetItem: { type: "moon", icon: "\u{1F319}", name: "月" }, comparisonItem: { type: "ribbon", icon: "\u{1F380}", name: "リボン" },
    leftItems: [{ type: "moon", icon: "\u{1F319}" }, { type: "ribbon", icon: "\u{1F380}" }, { type: "ribbon", icon: "\u{1F380}" }],
    rightItems: [{ type: "ribbon", icon: "\u{1F380}" }, { type: "ribbon", icon: "\u{1F380}" }, { type: "ribbon", icon: "\u{1F380}" }, { type: "ribbon", icon: "\u{1F380}" }, { type: "ribbon", icon: "\u{1F380}" }, { type: "ribbon", icon: "\u{1F380}" }],
    removableType: "ribbon", removableCount: 2, resultCount: 4, resultText: "月は リボン4こ分！✨"
  },
  {
    id: "balance_s3_10",
    targetItem: { type: "flower", icon: "\u{1F338}", name: "花" }, comparisonItem: { type: "star", icon: "\u{2B50}", name: "星" },
    leftItems: [{ type: "flower", icon: "\u{1F338}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }],
    rightItems: [{ type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }, { type: "star", icon: "\u{2B50}" }],
    removableType: "star", removableCount: 4, resultCount: 5, resultText: "花は 星5こ分！✨"
  }
];

const balanceWorkshopStage4Questions = [
  {
    id: "balance_s4_01",
    initialLeft: [{ icon: "\u{1F338}", count: 2 }],
    initialRight: [{ icon: "\u{2B50}", count: 1 }],
    options: [
      {
        leftChange: { action: "add", parts: [{ icon: "\u{1F380}", count: 1 }] },
        rightChange: { action: "add", parts: [{ icon: "\u{1F380}", count: 1 }] },
        correctState: "kept"
      },
      {
        leftChange: { action: "add", parts: [{ icon: "\u{1F380}", count: 1 }] },
        rightChange: { action: "add", parts: [] },
        correctState: "broken"
      },
      {
        leftChange: { action: "add", parts: [] },
        rightChange: { action: "add", parts: [{ icon: "\u{1F380}", count: 1 }] },
        correctState: "broken"
      }
    ]
  },
  {
    id: "balance_s4_02",
    initialLeft: [{ icon: "\u{1F48E}", count: 1 }, { icon: "\u{1F338}", count: 1 }],
    initialRight: [{ icon: "\u{2B50}", count: 1 }, { icon: "\u{1F338}", count: 1 }],
    options: [
      {
        leftChange: { action: "remove", parts: [{ icon: "\u{1F338}", count: 1 }] },
        rightChange: { action: "remove", parts: [{ icon: "\u{1F338}", count: 1 }] },
        correctState: "kept"
      },
      {
        leftChange: { action: "remove", parts: [{ icon: "\u{1F338}", count: 1 }] },
        rightChange: { action: "remove", parts: [] },
        correctState: "broken"
      },
      {
        leftChange: { action: "remove", parts: [] },
        rightChange: { action: "remove", parts: [{ icon: "\u{1F338}", count: 1 }] },
        correctState: "broken"
      }
    ]
  },
  {
    id: "balance_s4_03",
    relationSample: {
      left: [{ icon: "\u{1F338}", count: 2 }],
      right: [{ icon: "\u{2B50}", count: 1 }]
    },
    initialLeft: [{ icon: "\u{1F48E}", count: 1 }],
    initialRight: [{ icon: "\u{1F380}", count: 1 }],
    options: [
      {
        leftChange: { action: "add", parts: [{ icon: "\u{1F338}", count: 2 }] },
        rightChange: { action: "add", parts: [{ icon: "\u{2B50}", count: 1 }] },
        correctState: "kept"
      },
      {
        leftChange: { action: "add", parts: [{ icon: "\u{1F338}", count: 1 }] },
        rightChange: { action: "add", parts: [{ icon: "\u{2B50}", count: 1 }] },
        correctState: "broken"
      },
      {
        leftChange: { action: "add", parts: [{ icon: "\u{2B50}", count: 1 }] },
        rightChange: { action: "add", parts: [{ icon: "\u{1F338}", count: 2 }] },
        correctState: "kept"
      }
    ]
  },
  {
    id: "balance_s4_04",
    initialLeft: [{ icon: "\u{1F380}", count: 1 }], initialRight: [{ icon: "\u{1FA77}", count: 2 }],
    options: [
      { leftChange: { action: "add", parts: [{ icon: "\u{1F48E}", count: 1 }] }, rightChange: { action: "add", parts: [{ icon: "\u{1F48E}", count: 1 }] }, correctState: "kept" },
      { leftChange: { action: "add", parts: [{ icon: "\u{1F48E}", count: 1 }] }, rightChange: { action: "add", parts: [] }, correctState: "broken" },
      { leftChange: { action: "add", parts: [] }, rightChange: { action: "add", parts: [{ icon: "\u{1F48E}", count: 1 }] }, correctState: "broken" }
    ]
  },
  {
    id: "balance_s4_05",
    initialLeft: [{ icon: "\u{1F381}", count: 1 }, { icon: "\u{1F319}", count: 1 }], initialRight: [{ icon: "\u{2B50}", count: 1 }, { icon: "\u{1F319}", count: 1 }],
    options: [
      { leftChange: { action: "remove", parts: [{ icon: "\u{1F319}", count: 1 }] }, rightChange: { action: "remove", parts: [{ icon: "\u{1F319}", count: 1 }] }, correctState: "kept" },
      { leftChange: { action: "remove", parts: [{ icon: "\u{1F319}", count: 1 }] }, rightChange: { action: "remove", parts: [] }, correctState: "broken" },
      { leftChange: { action: "remove", parts: [] }, rightChange: { action: "remove", parts: [{ icon: "\u{1F319}", count: 1 }] }, correctState: "broken" }
    ]
  },
  {
    id: "balance_s4_06",
    relationSample: { left: [{ icon: "\u{1F48E}", count: 2 }], right: [{ icon: "\u{1F380}", count: 1 }] },
    initialLeft: [{ icon: "\u{2B50}", count: 1 }], initialRight: [{ icon: "\u{1F381}", count: 1 }],
    options: [
      { leftChange: { action: "add", parts: [{ icon: "\u{1F48E}", count: 2 }] }, rightChange: { action: "add", parts: [{ icon: "\u{1F380}", count: 1 }] }, correctState: "kept" },
      { leftChange: { action: "add", parts: [{ icon: "\u{1F380}", count: 1 }] }, rightChange: { action: "add", parts: [{ icon: "\u{1F48E}", count: 2 }] }, correctState: "kept" },
      { leftChange: { action: "add", parts: [{ icon: "\u{1F48E}", count: 1 }] }, rightChange: { action: "add", parts: [{ icon: "\u{1F380}", count: 1 }] }, correctState: "broken" }
    ]
  },
  {
    id: "balance_s4_07",
    initialLeft: [{ icon: "\u{1F319}", count: 2 }], initialRight: [{ icon: "\u{1F338}", count: 3 }],
    options: [
      { leftChange: { action: "add", parts: [{ icon: "\u{2B50}", count: 1 }] }, rightChange: { action: "add", parts: [] }, correctState: "broken" },
      { leftChange: { action: "add", parts: [{ icon: "\u{2B50}", count: 1 }] }, rightChange: { action: "add", parts: [{ icon: "\u{2B50}", count: 1 }] }, correctState: "kept" },
      { leftChange: { action: "add", parts: [] }, rightChange: { action: "add", parts: [{ icon: "\u{2B50}", count: 1 }] }, correctState: "broken" }
    ]
  },
  {
    id: "balance_s4_08",
    initialLeft: [{ icon: "\u{1F380}", count: 1 }, { icon: "\u{1F338}", count: 2 }], initialRight: [{ icon: "\u{1F48E}", count: 1 }, { icon: "\u{1F338}", count: 2 }],
    options: [
      { leftChange: { action: "remove", parts: [{ icon: "\u{1F338}", count: 2 }] }, rightChange: { action: "remove", parts: [{ icon: "\u{1F338}", count: 2 }] }, correctState: "kept" },
      { leftChange: { action: "remove", parts: [{ icon: "\u{1F338}", count: 2 }] }, rightChange: { action: "remove", parts: [{ icon: "\u{1F338}", count: 1 }] }, correctState: "broken" },
      { leftChange: { action: "remove", parts: [{ icon: "\u{1F338}", count: 1 }] }, rightChange: { action: "remove", parts: [{ icon: "\u{1F338}", count: 2 }] }, correctState: "broken" }
    ]
  },
  {
    id: "balance_s4_09",
    relationSample: { left: [{ icon: "\u{1FA77}", count: 3 }], right: [{ icon: "\u{1F319}", count: 2 }] },
    initialLeft: [{ icon: "\u{1F381}", count: 1 }], initialRight: [{ icon: "\u{1F380}", count: 1 }],
    options: [
      { leftChange: { action: "add", parts: [{ icon: "\u{1FA77}", count: 2 }] }, rightChange: { action: "add", parts: [{ icon: "\u{1F319}", count: 2 }] }, correctState: "broken" },
      { leftChange: { action: "add", parts: [{ icon: "\u{1FA77}", count: 3 }] }, rightChange: { action: "add", parts: [{ icon: "\u{1F319}", count: 2 }] }, correctState: "kept" },
      { leftChange: { action: "add", parts: [{ icon: "\u{1F319}", count: 2 }] }, rightChange: { action: "add", parts: [{ icon: "\u{1FA77}", count: 3 }] }, correctState: "kept" }
    ]
  },
  {
    id: "balance_s4_10",
    initialLeft: [{ icon: "\u{2B50}", count: 1 }, { icon: "\u{1F338}", count: 1 }], initialRight: [{ icon: "\u{1F48E}", count: 1 }, { icon: "\u{1F338}", count: 1 }],
    options: [
      { leftChange: { action: "remove", parts: [{ icon: "\u{1F338}", count: 1 }] }, rightChange: { action: "remove", parts: [{ icon: "\u{1F338}", count: 1 }] }, correctState: "kept" },
      { leftChange: { action: "add", parts: [{ icon: "\u{1F380}", count: 1 }] }, rightChange: { action: "add", parts: [{ icon: "\u{1F380}", count: 1 }] }, correctState: "kept" },
      { leftChange: { action: "remove", parts: [{ icon: "\u{1F338}", count: 1 }] }, rightChange: { action: "add", parts: [{ icon: "\u{1F380}", count: 1 }] }, correctState: "broken" }
    ]
  }
];

const balanceWorkshopStage5Questions = [
  {
    id: "balance_s5_01",
    mobileLeft: [{ icon: "\u{1F338}", count: 2 }],
    mobileRight: [{ icon: "\u{2B50}", count: 1 }],
    choices: [
      { left: [{ icon: "\u{1F338}", count: 2 }], right: [{ icon: "\u{2B50}", count: 1 }], correct: true },
      { left: [{ icon: "\u{1F338}", count: 1 }], right: [{ icon: "\u{2B50}", count: 1 }], correct: false },
      { left: [{ icon: "\u{1F338}", count: 3 }], right: [{ icon: "\u{2B50}", count: 1 }], correct: false }
    ],
    prompt: "このモビールを『＝』で表すと？",
    successText: "ぴったり！✨"
  },
  {
    id: "balance_s5_02",
    mobileLeft: [{ icon: "\u{1F338}", count: 2 }],
    mobileRight: [{ icon: "\u{2B50}", count: 1 }],
    beforeExpression: { left: [{ icon: "\u{1F338}", count: 2 }], right: [{ icon: "\u{2B50}", count: 1 }] },
    afterMobile: {
      left: [{ icon: "\u{1F338}", count: 2 }, { icon: "\u{1F380}", count: 1 }],
      right: [{ icon: "\u{2B50}", count: 1 }, { icon: "\u{1F380}", count: 1 }]
    },
    choices: [
      { left: [{ icon: "\u{1F338}", count: 2 }, { icon: "\u{1F380}", count: 1 }], right: [{ icon: "\u{2B50}", count: 1 }, { icon: "\u{1F380}", count: 1 }], correct: true },
      { left: [{ icon: "\u{1F338}", count: 2 }, { icon: "\u{1F380}", count: 1 }], right: [{ icon: "\u{2B50}", count: 1 }], correct: false },
      { left: [{ icon: "\u{1F338}", count: 2 }], right: [{ icon: "\u{2B50}", count: 1 }, { icon: "\u{1F380}", count: 1 }], correct: false }
    ],
    prompt: "アレンジしたあとの『＝』はどれ？",
    successText: "アレンジしても『＝』のまま！✨"
  },
  {
    id: "balance_s5_03",
    relationSample: {
      left: [{ icon: "\u{1F338}", count: 2 }],
      right: [{ icon: "\u{2B50}", count: 1 }]
    },
    replacementProblem: {
      left: [{ icon: "\u{1F380}", count: 1 }, { icon: "\u{2B50}", count: 1 }],
      right: [{ icon: "\u{1F380}", count: 1 }]
    },
    choices: [
      { parts: [{ icon: "\u{1F338}", count: 2 }], correct: true },
      { parts: [{ icon: "\u{1F338}", count: 1 }], correct: false },
      { parts: [{ icon: "\u{1F380}", count: 1 }], correct: false }
    ],
    prompt: "この『＝』もぴったりにできるかな？",
    successText: "ぴったり！✨",
    successExpression: {
      left: [{ icon: "\u{2B50}", count: 1 }],
      right: [{ icon: "\u{1F338}", count: 2 }]
    }
  },
  {
    id: "balance_s5_04",
    mobileLeft: [{ icon: "\u{1F48E}", count: 2 }], mobileRight: [{ icon: "\u{1F380}", count: 1 }],
    choices: [
      { left: [{ icon: "\u{1F48E}", count: 2 }], right: [{ icon: "\u{1F380}", count: 1 }], correct: true },
      { left: [{ icon: "\u{1F48E}", count: 1 }], right: [{ icon: "\u{1F380}", count: 1 }], correct: false },
      { left: [{ icon: "\u{1F48E}", count: 3 }], right: [{ icon: "\u{1F380}", count: 1 }], correct: false }
    ],
    prompt: "このモビールを『＝』で表すと？", successText: "ぴったり！✨"
  },
  {
    id: "balance_s5_05",
    mobileLeft: [{ icon: "\u{1F319}", count: 3 }], mobileRight: [{ icon: "\u{1FA77}", count: 2 }],
    choices: [
      { left: [{ icon: "\u{1F319}", count: 3 }], right: [{ icon: "\u{1FA77}", count: 2 }], correct: true },
      { left: [{ icon: "\u{1F319}", count: 2 }], right: [{ icon: "\u{1FA77}", count: 2 }], correct: false },
      { left: [{ icon: "\u{1F319}", count: 3 }], right: [{ icon: "\u{1FA77}", count: 1 }], correct: false }
    ],
    prompt: "このモビールを『＝』で表すと？", successText: "ぴったり！✨"
  },
  {
    id: "balance_s5_06",
    mobileLeft: [{ icon: "\u{1F48E}", count: 1 }], mobileRight: [{ icon: "\u{2B50}", count: 1 }],
    beforeExpression: { left: [{ icon: "\u{1F48E}", count: 1 }], right: [{ icon: "\u{2B50}", count: 1 }] },
    afterMobile: { left: [{ icon: "\u{1F48E}", count: 1 }, { icon: "\u{1F380}", count: 1 }], right: [{ icon: "\u{2B50}", count: 1 }, { icon: "\u{1F380}", count: 1 }] },
    choices: [
      { left: [{ icon: "\u{1F48E}", count: 1 }, { icon: "\u{1F380}", count: 1 }], right: [{ icon: "\u{2B50}", count: 1 }, { icon: "\u{1F380}", count: 1 }], correct: true },
      { left: [{ icon: "\u{1F48E}", count: 1 }, { icon: "\u{1F380}", count: 1 }], right: [{ icon: "\u{2B50}", count: 1 }], correct: false },
      { left: [{ icon: "\u{1F48E}", count: 1 }], right: [{ icon: "\u{2B50}", count: 1 }, { icon: "\u{1F380}", count: 1 }], correct: false }
    ],
    prompt: "アレンジしたあとの『＝』はどれ？", successText: "アレンジしても『＝』のまま！✨"
  },
  {
    id: "balance_s5_07",
    mobileLeft: [{ icon: "\u{1F381}", count: 1 }], mobileRight: [{ icon: "\u{1F319}", count: 2 }],
    beforeExpression: { left: [{ icon: "\u{1F381}", count: 1 }], right: [{ icon: "\u{1F319}", count: 2 }] },
    afterMobile: { left: [{ icon: "\u{1F381}", count: 1 }, { icon: "\u{1F338}", count: 1 }], right: [{ icon: "\u{1F319}", count: 2 }, { icon: "\u{1F338}", count: 1 }] },
    choices: [
      { left: [{ icon: "\u{1F381}", count: 1 }, { icon: "\u{1F338}", count: 1 }], right: [{ icon: "\u{1F319}", count: 2 }, { icon: "\u{1F338}", count: 1 }], correct: true },
      { left: [{ icon: "\u{1F381}", count: 1 }, { icon: "\u{1F338}", count: 1 }], right: [{ icon: "\u{1F319}", count: 2 }], correct: false },
      { left: [{ icon: "\u{1F381}", count: 1 }], right: [{ icon: "\u{1F319}", count: 2 }, { icon: "\u{1F338}", count: 1 }], correct: false }
    ],
    prompt: "アレンジしたあとの『＝』はどれ？", successText: "アレンジしても『＝』のまま！✨"
  },
  {
    id: "balance_s5_08",
    mobileLeft: [{ icon: "\u{2B50}", count: 1 }, { icon: "\u{1F338}", count: 3 }], mobileRight: [{ icon: "\u{1F48E}", count: 1 }, { icon: "\u{1F338}", count: 3 }],
    beforeExpression: { left: [{ icon: "\u{2B50}", count: 1 }, { icon: "\u{1F338}", count: 3 }], right: [{ icon: "\u{1F48E}", count: 1 }, { icon: "\u{1F338}", count: 3 }] },
    afterMobile: { left: [{ icon: "\u{2B50}", count: 1 }], right: [{ icon: "\u{1F48E}", count: 1 }] },
    choices: [
      { left: [{ icon: "\u{2B50}", count: 1 }], right: [{ icon: "\u{1F48E}", count: 1 }], correct: true },
      { left: [{ icon: "\u{2B50}", count: 1 }, { icon: "\u{1F338}", count: 1 }], right: [{ icon: "\u{1F48E}", count: 1 }], correct: false },
      { left: [{ icon: "\u{2B50}", count: 1 }], right: [{ icon: "\u{1F48E}", count: 1 }, { icon: "\u{1F338}", count: 1 }], correct: false }
    ],
    prompt: "外したあとの『＝』はどれ？", successText: "外しても『＝』のまま！✨"
  },
  {
    id: "balance_s5_09",
    mobileLeft: [{ icon: "\u{1F380}", count: 1 }, { icon: "\u{1F48E}", count: 2 }], mobileRight: [{ icon: "\u{1FA77}", count: 3 }, { icon: "\u{1F48E}", count: 2 }],
    beforeExpression: { left: [{ icon: "\u{1F380}", count: 1 }, { icon: "\u{1F48E}", count: 2 }], right: [{ icon: "\u{1FA77}", count: 3 }, { icon: "\u{1F48E}", count: 2 }] },
    afterMobile: { left: [{ icon: "\u{1F380}", count: 1 }], right: [{ icon: "\u{1FA77}", count: 3 }] },
    choices: [
      { left: [{ icon: "\u{1F380}", count: 1 }], right: [{ icon: "\u{1FA77}", count: 3 }], correct: true },
      { left: [{ icon: "\u{1F380}", count: 1 }], right: [{ icon: "\u{1FA77}", count: 2 }], correct: false },
      { left: [{ icon: "\u{1F380}", count: 1 }, { icon: "\u{1F48E}", count: 1 }], right: [{ icon: "\u{1FA77}", count: 3 }], correct: false }
    ],
    prompt: "外したあとの『＝』はどれ？", successText: "外しても『＝』のまま！✨"
  },
  {
    id: "balance_s5_10",
    relationSample: { left: [{ icon: "\u{1F48E}", count: 2 }], right: [{ icon: "\u{1F380}", count: 1 }] },
    replacementProblem: { left: [{ icon: "\u{1F338}", count: 1 }, { icon: "\u{1F380}", count: 1 }], right: [{ icon: "\u{1F338}", count: 1 }] },
    choices: [
      { parts: [{ icon: "\u{1F48E}", count: 2 }], correct: true },
      { parts: [{ icon: "\u{1F48E}", count: 1 }], correct: false },
      { parts: [{ icon: "\u{1F48E}", count: 3 }], correct: false }
    ],
    prompt: "？に入るパーツをえらんで、左右を同じにしよう", successText: "ぴったり！✨",
    successExpression: { left: [{ icon: "\u{1F380}", count: 1 }], right: [{ icon: "\u{1F48E}", count: 2 }] }
  }
];

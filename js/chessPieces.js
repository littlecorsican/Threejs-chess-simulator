import { addBishop } from "./addBishop.js"
import { addKing } from "./addKing.js"
import { addQueen } from "./addQueen.js"
import { addCastle } from "./addCastle.js"
import { addCavalry } from "./addCavalry.js"
import { addPawn } from "./addPawn.js"

export const chessPieces = [
  {
    name: "Castle_1",
    x: -7,
    y: 0,
    z: 7,
    func: addCastle,
    colour: "#ffffff",
    code: "R",
    side: "w",
    startingLocation: "A1"
  },
  {
    name: "Bishop_1",
    x: -3,
    y: 0,
    z: 7,
    func: addBishop,
    colour: "#ffffff",
    code: "B",
    side: "w",
    startingLocation: "C1"
  },
  {
    name: "Horse_1",
    x: 5,
    y: 0,
    z: 7,
    func: addCavalry,
    colour: "#ffffff",
    code: "N",
    side: "w",
    startingLocation: "G1"
  },
  {
    name: "Queen",
    x: -1,
    y: 0,
    z: 7,
    func: addQueen,
    colour: "#ffffff",
    code: "N",
    side: "w",
    startingLocation: "E1"
  },
  {
    name: "King",
    x: 1,
    y: 0,
    z: 7,
    func: addKing,
    colour: "#ffffff",
    code: "K",
    side: "w",
    startingLocation: "D1"
  },
  {
    name: "Horse_2",
    x: -5,
    y: 0,
    z: 7,
    func: addCavalry,
    colour: "#ffffff",
    code: "N",
    side: "w",
    startingLocation: "B1"
  },
  {
    name: "Bishop_2",
    x: 3,
    y: 0,
    z: 7,
    func: addBishop,
    colour: "#ffffff",
    code: "B",
    side: "w",
    startingLocation: "F1"
  },
  {
    name: "Castle_2",
    x: 7,
    y: 0,
    z: 7,
    func: addCastle,
    colour: "#ffffff",
    code: "R",
    side: "w",
    startingLocation: "H1"
  },
  {
    name: "Castle_1",
    x: -7,
    y: 0,
    z: -7,
    func: addCastle,
    colour: "#7f7f7d",
    code: "R",
    side: "b",
    startingLocation: "A8"
  },
  {
    name: "Bishop_1",
    x: -3,
    y: 0,
    z: -7,
    func: addBishop,
    colour: "#7f7f7d",
    code: "B",
    side: "b",
    startingLocation: "C8"
  },
  {
    name: "Horse_1",
    x: 5,
    y: 0,
    z: -7,
    func: addCavalry,
    colour: "#7f7f7d",
    code: "N",
    side: "b",
    startingLocation: "G8"
  },
  {
    name: "Queen",
    x: -1,
    y: 0,
    z: -7,
    func: addQueen,
    colour: "#7f7f7d",
    code: "Q",
    side: "b",
    startingLocation: "E8"
  },
  {
    name: "King",
    x: 1,
    y: 0,
    z: -7,
    func: addKing,
    colour: "#7f7f7d",
    code: "K",
    side: "b",
    startingLocation: "D8"
  },
  {
    name: "Horse_2",
    x: -5,
    y: 0,
    z: -7,
    func: addCavalry,
    colour: "#7f7f7d",
    code: "N",
    side: "b",
    startingLocation: "B8"
  },
  {
    name: "Bishop_2",
    x: 3,
    y: 0,
    z: -7,
    func: addBishop,
    colour: "#7f7f7d",
    code: "B",
    side: "b",
    startingLocation: "F8"
  },
  {
    name: "Castle_2",
    x: 7,
    y: 0,
    z: -7,
    func: addCastle,
    colour: "#7f7f7d",
    code: "R",
    side: "b",
    startingLocation: "H8"
  },
  {
    name: "Pawn_1",
    x: -7,
    y: 0,
    z: 5,
    func: addPawn,
    colour: "#ffffff",
    code: "p",
    side: "w",
    startingLocation: "A2"
  },
  {
    name: "Pawn_2",
    x: -5,
    y: 0,
    z: 5,
    func: addPawn,
    colour: "#ffffff",
    code: "p",
    side: "w",
    startingLocation: "B2"
  },
  {
    name: "Pawn_3",
    x: -3,
    y: 0,
    z: 5,
    func: addPawn,
    colour: "#ffffff",
    code: "p",
    side: "w",
    startingLocation: "C2"
  },
  {
    name: "Pawn_4",
    x: -1,
    y: 0,
    z: 5,
    func: addPawn,
    colour: "#ffffff",
    code: "p",
    side: "w",
    startingLocation: "D2"
  },
  {
    name: "Pawn_5",
    x: 1,
    y: 0,
    z: 5,
    func: addPawn,
    colour: "#ffffff",
    code: "p",
    side: "w",
    startingLocation: "E2"
  },
  {
    name: "Pawn_6",
    x: 3,
    y: 0,
    z: 5,
    func: addPawn,
    colour: "#ffffff",
    code: "p",
    side: "w",
    startingLocation: "F2"
  },
  {
    name: "Pawn_7",
    x: 5,
    y: 0,
    z: 5,
    func: addPawn,
    colour: "#ffffff",
    code: "p",
    side: "w",
    startingLocation: "G2"
  },
  {
    name: "Pawn_8",
    x: 7,
    y: 0,
    z: 5,
    func: addPawn,
    colour: "#ffffff",
    code: "p",
    side: "w",
    startingLocation: "H2"
  },
  {
    name: "Pawn_1",
    x: -7,
    y: 0,
    z: -5,
    func: addPawn,
    colour: "#7f7f7d",
    code: "p",
    side: "b",
    startingLocation: "A7"
  },
  {
    name: "Pawn_2",
    x: -5,
    y: 0,
    z: -5,
    func: addPawn,
    colour: "#7f7f7d",
    code: "p",
    side: "b",
    startingLocation: "B7"
  },
  {
    name: "Pawn_3",
    x: -3,
    y: 0,
    z: -5,
    func: addPawn,
    colour: "#7f7f7d",
    code: "p",
    side: "b",
    startingLocation: "C7"
  },
  {
    name: "Pawn_4",
    x: -1,
    y: 0,
    z: -5,
    func: addPawn,
    colour: "#7f7f7d",
    code: "p",
    side: "b",
    startingLocation: "D7"
  },
  {
    name: "Pawn_5",
    x: 1,
    y: 0,
    z: -5,
    func: addPawn,
    colour: "#7f7f7d",
    code: "p",
    side: "b",
    startingLocation: "E7"
  },
  {
    name: "Pawn_6",
    x: 3,
    y: 0,
    z: -5,
    func: addPawn,
    colour: "#7f7f7d",
    code: "p",
    side: "b",
    startingLocation: "F7"
  },
  {
    name: "Pawn_7",
    x: 5,
    y: 0,
    z: -5,
    func: addPawn,
    colour: "#7f7f7d",
    code: "p",
    side: "b",
    startingLocation: "G7"
  },
  {
    name: "Pawn_8",
    x: 7,
    y: 0,
    z: -5,
    func: addPawn,
    colour: "#7f7f7d",
    code: "p",
    side: "b",
    startingLocation: "H7"
  },
]

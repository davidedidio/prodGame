export enum Moves {
  LEFT = "left", RIGHT = "right", UP = "up", DOWN = "down", MINE = "mine", RESET = "reset"
}

export let KEYS_TO_MOVES_DICT: { [key: string]: Moves } = {
  "a": Moves.LEFT,
  "d": Moves.RIGHT,
  "s": Moves.DOWN,
  "w": Moves.UP,
  " ": Moves.MINE
}

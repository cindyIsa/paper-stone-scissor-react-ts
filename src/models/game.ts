

export enum gameOption{
    stone,
    scissor,
    paper,
}

export const gameSelections = {
    [gameOption.stone] : 'assets/stone_s.png',
    [gameOption.scissor]:'assets/scissor_s.png',
    [gameOption.paper]:'assets/paper_s.png',
}

export enum gameResult{
    win = "win",
    lose = "lose",
    draw = "draw",
}
export interface game{
    userSelection:string,
    randomSelection:string,
    result:gameResult
}
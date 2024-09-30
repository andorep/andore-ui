export const convertPTToRem = (pt: number) => {
    return convertPTtoPx(pt) / 16;
}
// 0.75pt = 1px
export const convertPTtoPx = (pt: number) => {
    return pt * 0.75;
}

export const getOrder = ({ index, pos, numItems }) => {
    return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

export const initialState = { pos: 0, sliding: false, dir: "NEXT" };
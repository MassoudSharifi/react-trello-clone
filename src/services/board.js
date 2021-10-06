import { db } from '../firebase';
import { getUser } from './auth';

const boardsRef = db.ref('boards');

export const deleteBoard = async (boardKey) => {
    const uid = getUser().uid;
    await boardsRef.child(uid).child(boardKey).remove();
};

export const updateBoard = async (boardKey, title) => {
    const uid = getUser().uid;
    await boardsRef
        .child(uid)
        .child(boardKey)
        .update({
            ...title,
        });
};

export const editBoard = async (boardKey, board) => {
    const uid = getUser().uid;

    await boardsRef
        .child(uid)
        .child(boardKey)
        .update({
            ...board,
        });
    return board;
};

export const getBoard = (key) => {
    const uid = getUser().uid;

    return boardsRef.child(uid).child(`${key}`).once('value');
};

export const createBoard = async (board) => {
    const uid = getUser().uid;
    const id = boardsRef.push().key;
    await boardsRef.child(uid).child(id).set(board);
    board.key = id;
    return board;
};

export const getBoards = () => {
    const uid = getUser().uid;
    return boardsRef.child(uid).once('value');
};

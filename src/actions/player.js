import * as PlayerActionTypes from '../actiontypes/player';

export const addPlayer = name => {
    return {
        type: PlayerActionTypes.ADD_PLAYER,
        name
    };
};

export const removePlayer = index => {
    return {
        type: PlayerActionTypes.REMOVE_PLAYER,
        index
    };
};

export const updatePlayer = (score, index) => {
    return {
        type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
        index,
        score
    };
};
import {createSelector} from 'reselect';

export const selectRepositories = createSelector(
    (state, props) => {
        console.log(state, props)
    }
);
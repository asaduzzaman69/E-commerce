import { createSelector } from 'reselect'

const userSelector = state => state.user;

export const currenUserSelector = createSelector(
    [userSelector],
    user => user.currentUser
)
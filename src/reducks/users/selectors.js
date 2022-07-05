import { createSelector } from '@reduxjs/toolkit'

const usersSelector = (state) => state.users

export const getUserId = createSelector([usersSelector], (state) => state.uid)
export const getUsername = createSelector([usersSelector], (state) => state.username)

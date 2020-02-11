import React from 'react'
import { TEST } from './types'

export const TestFunc = () => dispatch => {
    const test_data_from_action = [
        { 'id': 1, 'name': 'mossa', 'email': 'email@gmail.com' },
        { 'id': 2, 'name': 'mossa', 'email': 'email@gmail.com' },
        { 'id': 3, 'name': 'mossa', 'email': 'email@gmail.com' },
        { 'id': 4, 'name': 'mossa', 'email': 'email@gmail.com' },
    ]

    console.log("TEST Function is called")
    dispatch({
        type:"TEST",
        payload: test_data_from_action
    })
}

﻿import { ADD_VALIDATION_ERROR_MESSAGE } from '../constants/ActionTypes';

export const AddErrorMessage = (fieldName:string, errorMessage:string) => ({
    type: ADD_VALIDATION_ERROR_MESSAGE,
        fieldName,
        errorMessage
})

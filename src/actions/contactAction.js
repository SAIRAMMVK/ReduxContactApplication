import * as actionTypes from '../actions/actionTypes';

export const createContact  = (contact) => {
    return {
        type:actionTypes.CREATE_NEW_CONTACT,
        contact:contact
    }
    
}

import { createStore } from "redux";

import {composeWithDevTools} from "redux-devtools-extension";

// action

export const addContact = (contact) =>{
        return{
            type : " CREATE_CONTACT ",
            payload : contact,

        };

};



const initialState = [


        {
            "id":1,
        "employee_name":"Tiger Nixon",
        "employee_salary":320800,
        "employee_age":61,
        "profile_image":"pick12.jpg"
        },
        
        {"id":2,"employee_name":"Garrett Winters","employee_salary":170750,"employee_age":63,"profile_image":"pick11.jpg"},
        {"id":3,"employee_name":"Ashton Cox","employee_salary":86000,"employee_age":66,"profile_image":"pick12.jpg"},
        {"id":4,"employee_name":"Cedric Kelly","employee_salary":433060,"employee_age":22,"profile_image":"pick.jpg"},
        {"id":5,"employee_name":"Airi Satou","employee_salary":162700,"employee_age":33,"profile_image":"pick11.jpg"},
        {"id":6,"employee_name":"Brielle Williamson","employee_salary":372000,"employee_age":61,"profile_image":"pick12.jpg"},
        {"id":7,"employee_name":"Herrod Chandler","employee_salary":137500,"employee_age":59,"profile_image":"pick4.jpg"},
        {"id":8,"employee_name":"Rhona Davidson","employee_salary":327900,"employee_age":55,"profile_image":"pick11.jpg"},
        {"id":9,"employee_name":"Colleen Hurst","employee_salary":205500,"employee_age":39,"profile_image":"pick12.jpg"},
        {"id":10,"employee_name":"Sonya Frost","employee_salary":103600,"employee_age":23,"profile_image":"pick.jpg"},
        {"id":11,"employee_name":"Jena Gaines","employee_salary":90560,"employee_age":30,"profile_image":"pick4.jpg"},
        {"id":12,"employee_name":"Quinn Flynn","employee_salary":342000,"employee_age":22,"profile_image":"pick5.jpg"},
        {"id":13,"employee_name":"Charde Marshall","employee_salary":470600,"employee_age":36,"profile_image":"pick12.jpg"},
        {"id":14,"employee_name":"Haley Kennedy","employee_salary":313500,"employee_age":43,"profile_image":"pick8.jpg"},
    
    
    ] 



const contactReducer = (state=initialState, action) =>{

    switch(action.type){

            case "CREATE_CONTACT":
                return{
                   contacts:  [ action.payload, ...state.contacts]
                }
        default:
            return state;
    }
    
}

const store = createStore(contactReducer, composeWithDevTools())
 export default store;
 
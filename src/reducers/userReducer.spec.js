import userReducer from './userReducer.js';

const initialState = {
    userInfo: {},
    userChild: {},
    loading: false,
    childActive: false
};

describe("user reducer", () => {
    it('should return the inital state', () => {
        expect(userReducer(undefined, {})).toEqual(initialState)
    })

    it('should handle SET_USER action', () => {
        const actionPayload = {
            member_id: 3,
            points: null,
            token: "Ah74kdlsfhjdkslkjdfshjksdasdfasdfas",
            username: "Micah"
        } 
        expect(userReducer(initialState, { type: "SET_USER", payload: actionPayload }))
              .toEqual({ ...initialState, userInfo: { member_id: 3,
                points: null,
                token: "Ah74kdlsfhjdkslkjdfshjksdasdfasdfas",
                username: "Micah"
            } })
    })

    // it('should handle the FETCH_MEMBERS_SUCCESS action', () => {
    //     const actionPayload = [
    //         {
    //             id: 3,
    //             username: "Micah",
    //             email: 'micah@testing.com',
    //             points: null
    //         },
    //         {
    //             id: 5,
    //             username: "new child",
    //             points: null,
    //             child: true,
    //         }
    //     ]
    //     expect(householdReducer(initialState, { type: FETCH_MEMBERS_SUCCESS, payload: actionPayload }))
    //             .toEqual({   
    //                 members: [{
    //                     id: 3,
    //                     username: "Micah",
    //                     email: 'micah@testing.com',
    //                     points: null
    //                 },
    //                 {
    //                     id: 5,
    //                     username: "new child",
    //                     points: null,
    //                     child: true,
    //                 }],
    //                 error: '',
    //                 loading: false})
    // })
})
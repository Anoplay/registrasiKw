import { GET_STUDENTS, ADD_STUDENT, DELETE_STUDENT, GET_STUDENT, UPDATE_STUDENT } from '../actions/type';
const initialState = {
    students: [
        // {
        //     id: 1,
        //     name: 'anoplay',
        //     email: 'anoplay@gmail.com',
        //     phone: 111111
        // },
        // {
        //     id: 2,
        //     name: 'yada',
        //     email: 'yada@gmail.com',
        //     phone: 222222
        // },
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_STUDENTS:
            return {
                ...state,
                students: action.payload
            }
        case ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            }
        case DELETE_STUDENT:
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.payload)
            }
        case GET_STUDENT:
            return {
                ...state,
                students: state.students.filter(student => student.id === action.payload)
            }
        case UPDATE_STUDENT:
            return {
                ...state,
                students: state.students.map((student) => student.id === action.payload.id ? action.payload : student)
            }
        default:
            return state
    }
}
import { createStore } from 'redux';

const initialState = {
  counter: 0,
  counter1: 0, // Add a new state property
  counter2: 0,
  counter3: 0,
  userData: {
    name: "",
    email: "",
    phone: "",
    password: "",
    collegeName: "",
    graduationYear: "",
    
},

    
  userData2:{
    instituteName:"",
    type:"",
    email:"",
    phoneNumber:"",
    instituteAddr:"",
    institutePassword:"",
  }
};

const reducerFn = (state = initialState, action) => {
  if (action.type === 'INC') {
    return { ...state, counter: state.counter + 1 };
  }
  if (action.type === 'DEC') {
    return { ...state, counter: state.counter - 1 };
  }
  if (action.type === 'INC_COUNTER1') { // Add an action for counter1
    return { ...state, counter1: state.counter1 + 1 };
  }
  if (action.type === 'DEC_COUNTER1') { // Add an action for counter1
    return { ...state, counter1: state.counter1 - 1 };
  }
  if (action.type === 'RES_COUNTER1') { // Add an action for counter1
    return { ...state, counter1: 0};
  }
  if (action.type === 'INC_COUNTER2') { // Add an action for counter1
    return { ...state, counter2: state.counter2 + 1 };
  }
  if (action.type === 'RES_COUNTER2') { // Add an action for counter1
    return { ...state, counter2: 0 };
  }
  if (action.type === 'INC_COUNTER3') { // Add an action for counter1
    return { ...state, counter3: state.counter3 + 1 };
  }
  if (action.type === 'RES_COUNTER3') { // Add an action for counter1
    return { ...state, counter3: 0 };
  }
  if (action.type === 'UPDATE_INDIVIDUAL1') {
    return {
      ...state,
      userData: {
        ...state.userData,
        name: action.payload.name,         // Assuming 'name' is a property in action.payload
        email: action.payload.email,       // Assuming 'email' is a property in action.payload
        phone: action.payload.phone, // Assuming 'phoneNumber' is a property in action.payload
      },
    };
  }

  if (action.type === 'UPDATE_INDIVIDUAL2') {
    return {
      ...state,
      userData: {
        ...state.userData,
        password: action.payload.password,         // Assuming 'name' is a property in action.payload
        
      },
    };
  }
  if (action.type === 'UPDATE_INDIVIDUAL3') {
    return {
      ...state,
      userData: {
        ...state.userData,
        collegeName: action.payload.collegeName,         // Assuming 'name' is a property in action.payload
        graduationYear:action.payload.graduationYear, // Assuming 'year' is a property in action
      },
    };
  }
  if (action.type === 'UPDATE_INSTITUTE1') {
    return {
      ...state,
      userData2: {
        ...state.userData2,
        instituteName:action.payload.instituteName,
        type:action.payload.type,
        email:action.payload.email,
      },
    };
  }
  if (action.type === 'UPDATE_INSTITUTE2') {
    return {
      ...state,
      userData2: {
        ...state.userData2,
        phoneNumber:action.payload.phoneNumber,
        instituteAddr:action.payload.instituteAddr,
        
      },
    };
  }
  if (action.type === 'UPDATE_INSTITUTE3') {
    return {
      ...state,
      userData2: {
        ...state.userData2,
        institutePassword:action.payload.institutePassword,
        
      },
    };
  }





  return state;
};

const store = createStore(reducerFn);

export default store;

import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { add } from "date-fns";
import { FastfoodOutlined } from "@material-ui/icons";

// actions

export const changeAccountFlag = (flag: boolean) => ({
  type: "CHANGE_ACCOUNT_FRAG",
  payload: flag,
});

export const setCurrentUser = (uid: string, displayName?: string) => ({
  type: "SET_CURRENT_USER",
  payload: { uid: uid, displayName: displayName },
});

export const signOut = () => ({
  //[TODO]使っているところがないか確認して削除する
  type: "SIGN_OUT",
  payload: { uid: "", displayName: "" },
});

export const willMovePrefectureForm = (prefecture: string) => ({
  type: "CHANGE_WILL_MOVE_PREFECTURE",
  payload: prefecture,
});

export const willMoveAddressForm = (address: string) => ({
  type: "CHANGE_WILL_MOVE_ADDRESS",
  payload: address,
});

export const moveFromPrefectureForm = (prefecture: string) => ({
  type: "CHANGE_MOVE_FROM_PREFECTURE",
  payload: prefecture,
});
export const moveFromAddressForm = (address: string) => ({
  type: "CHANGE_MOVE_FROM_ADDRESS",
  payload: address,
});
export const willMoveDateForm = (date: Date) => ({
  type: "CHANGE_WILL_MOVE_DATE",
  payload: date,
});
export const isNotEmployeeForm = (check: boolean) => ({
  type: "CHANGE_IS_NOT_EMPLOYEE",
  payload: check,
});
export const isStudentForm = (check: boolean) => ({
  type: "CHANGE_IS_STUDENT",
  payload: check,
});
export const isPetForm = (check: boolean) => ({
  type: "CHANGE_IS_PET",
  payload: check,
});
export const isScooterForm = (check: boolean) => ({
  type: "CHANGE_IS_SCOOTER",
  payload: check,
});
export const isCarForm = (check: boolean) => ({
  type: "CHANGE_IS_CAR",
  payload: check,
});
export const isParkingForm = (check: boolean) => ({
  type: "CHANGE_IS_PARKING",
  payload: check,
});
export const isUnderFifteenForm = (check: boolean) => ({
  type: "CHANGE_IS_UNDER_FIFTEEN",
  payload: check,
});
export const isFireInsuranceForm = (check: boolean) => ({
  type: "CHANGE_IS_FIRE_INSURANCE",
  payload: check,
});
export const isFixedPhoneForm = (check: boolean) => ({
  type: "CHANGE_IS_FIXED_PHONE",
  payload: check,
});
export const isMynumberForm = (check: boolean) => ({
  type: "CHANGE_IS_MYNUMBER",
  payload: check,
});
export const isStampRegistrationForm = (check: boolean) => ({
  type: "CHANGE_IS_STAMP_REGISTRATION",
  payload: check,
});
export const isDrivingLicenseForm = (check: boolean) => ({
  type: "CHANGE_IS_DRIVING_LICENSE",
  payload: check,
});

export const refreshProjectForm = () => ({
  type: "REFRESH_PROJECT",
  payload: {
    formWillMovePrefecture: "",
    formWillMoveAddress: "",
    formMoveFromPrefecture: "",
    formMoveFromAddress: "",
    formWillMoveDate: add(new Date(), { months: 1 }),
    formIsNotEmployee: false,
    formIsStudent: false,
    formIsPet: false,
    formIsScooter: false,
    formIsCar: false,
    formIsParking: false,
    formIsUnderFifteen: false,
    formIsFireInsurance: false,
    formIsFixedPhone: false,
    formIsMynumber: false,
    formIsStampRegistration: false,
    formIsDrivingLicense: false,
  },
});

export const createNewProject = (
  projectId: string,
  moveDate: number,
  moveFrom: string,
  moveTo: string
) => ({
  type: "CREATE_NEW_PROJECT",
  payload: {
    projectId: projectId,
    moveDate: moveDate,
    moveFrom: moveFrom,
    moveTo: moveTo,
  },
});

export const handleNext = () => ({
  type: "HANDLE_NEXT",
  payload: 1,
});
export const handleBack = () => ({
  type: "HANDLE_BACK",
  payload: -1,
});

export const listenProcedures = (procedures: procedureType[]) => ({
  type: "LISTEN_PROCEDURES",
  payload: procedures,
});

export const isDeleteTodoOpen = (is: boolean) => ({
  type: "IS_DELETE_TODO_OPEN",
  payload: is,
});

export const setTodoId = (id: string) => ({
  type: "SET_TODO_ID",
  payload: id,
});

export const setTodoTitle = (title: string) => ({
  type: "SET_TODO_TITLE",
  payload: title,
});

export const isDetailOpen = (is: boolean) => ({
  type: "IS_DETAIL_OPEN",
  payload: is,
});

export const setTodoDetail = (
  id: string,
  title: string,
  startDate: number,
  deadline: number,
  confirmationSource: string,
  memo: string,
  submitDestination: string,
  targetPerson: string,
  complete: boolean
) => ({
  type: "SET_TODO_DETAIL",
  payload: {
    id: id,
    title: title,
    startDate: startDate,
    deadline: deadline,
    confirmationSource: confirmationSource,
    memo: memo,
    submitDestination: submitDestination,
    targetPerson: targetPerson,
    complete: complete,
  },
});

// #region
export const initialState: stateType = {
  user: { uid: "", displayName: "" },
  projectForm: {
    formWillMovePrefecture: "",
    formWillMoveAddress: "",
    formMoveFromPrefecture: "",
    formMoveFromAddress: "",
    formWillMoveDate: add(new Date(), { months: 1 }),
    formIsNotEmployee: false,
    formIsStudent: false,
    formIsPet: false,
    formIsScooter: false,
    formIsCar: false,
    formIsParking: false,
    formIsUnderFifteen: false,
    formIsFireInsurance: false,
    formIsFixedPhone: false,
    formIsMynumber: false,
    formIsStampRegistration: false,
    formIsDrivingLicense: false,
  },
  project: {
    projectId: "",
    moveDate: undefined,
    moveFrom: undefined,
    moveTo: undefined,
  },
  step: {
    stepNum: 0,
  },
  procedures: [],
  editTodo: {
    isOpen: false,
    todoId: "",
    todoTitle: "",
  },
  todoDetail: {
    isDetailOpen: false,
    id: "",
    title: "",
    startDate: Date.now(),
    deadline: Date.now(),
    confirmationSource: "",
    memo: "",
    submitDestination: "",
    targetPerson: "",
    complete: false,
  },
};

// これはinitialStateからReturnTypeで持ってこないようにあえて書いている。
// なぜなら、formUserNameをnullでもOKにしたいから
export interface userType {
  uid: string;
  displayName: string;
}

export interface procedureType {
  id: string;
  title: string;
  startDate: number; // プロジェクト作成日か関数で計算した日付
  deadline: number;
  submitDestination: string;
  targetPerson: string; // [TODO]TARGET_PERSONにしたい本当は。
  confirmationSource: string;
  memo: string;
  complete: boolean;
  isNotEmployee: boolean;
  isStudent: boolean;
  isPet: boolean;
  isScooter: boolean;
  isCar: boolean;
  isParking: boolean;
  isUnderFifteen: boolean;
  isFireInsurance: boolean;
  isFixedPhone: boolean;
  isMynumber: boolean;
  isStampRegistration: boolean;
  isDrivingLicense: boolean;
}

export interface stateType {
  user: userType;
  projectForm: {
    formWillMovePrefecture: string;
    formWillMoveAddress: string;
    formMoveFromPrefecture: string;
    formMoveFromAddress: string;
    formWillMoveDate: Date;
    formIsNotEmployee: boolean;
    formIsStudent: boolean;
    formIsPet: boolean;
    formIsScooter: boolean;
    formIsCar: boolean;
    formIsParking: boolean;
    formIsUnderFifteen: boolean;
    formIsFireInsurance: boolean;
    formIsFixedPhone: boolean;
    formIsMynumber: boolean;
    formIsStampRegistration: boolean;
    formIsDrivingLicense: boolean;
  };
  project: {
    projectId: string;
    moveDate: number | undefined;
    moveFrom: string | undefined;
    moveTo: string | undefined;
  };
  step: {
    stepNum: number;
  };
  procedures: procedureType[];
  editTodo: {
    isOpen: boolean;
    todoId: string;
    todoTitle: string;
  };
  todoDetail: {
    isDetailOpen: boolean;
    id: string;
    title: string;
    startDate: number;
    deadline: number;
    confirmationSource: string;
    memo: string;
    submitDestination: string;
    targetPerson: string;
    complete: boolean;
  };
}

// reducer
export const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    // sign-in form
    case "SET_CURRENT_USER":
      return {
        ...state,
        user: {
          ...state.user,
          uid: action.payload.uid,
          displayName: action.payload.displayName,
        },
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          uid: action.payload.uid,
          displayName: action.payload.displayName,
        },
      };
    case "CHANGE_WILL_MOVE_PREFECTURE":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formWillMovePrefecture: action.payload,
        },
      };
    case "CHANGE_WILL_MOVE_ADDRESS":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formWillMoveAddress: action.payload,
        },
      };
    case "CHANGE_MOVE_FROM_PREFECTURE":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formMoveFromPrefecture: action.payload,
        },
      };
    case "CHANGE_MOVE_FROM_ADDRESS":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formMoveFromAddress: action.payload,
        },
      };
    case "CHANGE_WILL_MOVE_DATE":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formWillMoveDate: action.payload,
        },
      };
    case "CHANGE_IS_NOT_EMPLOYEE":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formIsNotEmployee: action.payload,
        },
      };
    case "CHANGE_IS_STUDENT":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formIsStudent: action.payload,
        },
      };
    case "CHANGE_IS_PET":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formIsPet: action.payload,
        },
      };
    case "CHANGE_IS_SCOOTER":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formIsScooter: action.payload,
        },
      };
    case "CHANGE_IS_CAR":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formIsCar: action.payload,
        },
      };
    case "CHANGE_IS_PARKING":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formIsParking: action.payload,
        },
      };
    case "CHANGE_IS_UNDER_FIFTEEN":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formIsUnderFifteen: action.payload,
        },
      };
    case "CHANGE_IS_FIRE_INSURANCE":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formIsFireInsurance: action.payload,
        },
      };
    case "CHANGE_IS_FIXED_PHONE":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formIsFixedPhone: action.payload,
        },
      };
    case "CHANGE_IS_MYNUMBER":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formIsMynumber: action.payload,
        },
      };
    case "CHANGE_IS_STAMP_REGISTRATION":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formIsStampRegistration: action.payload,
        },
      };
    case "CHANGE_IS_DRIVING_LICENSE":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formIsDrivingLicense: action.payload,
        },
      };
    case "REFRESH_PROJECT":
      return {
        ...state,
        projectForm: {
          ...state.projectForm,
          formWillMovePrefecture: action.payload.formWillMovePrefecture,
          formWillMoveAddress: action.payload.formWillMoveAddress,
          formMoveFromPrefecture: action.payload.formMoveFromPrefecture,
          formMoveFromAddress: action.payload.formMoveFromAddress,
          formWillMoveDate: action.payload.formWillMoveDate,
          formIsSelfEmployed: action.payload.formIsSelfEmployed,
          formIsStudent: action.payload.formIsStudent,
          formIsPet: action.payload.formIsPet,
          formIsScooter: action.payload.formIsScooter,
          formIsCar: action.payload.formIsCar,
          formIsUnderFifteen: action.payload.formIsUnderFifteen,
          formIsFireInsurance: action.payload.formIsFireInsurance,
          formIsFixedPhone: action.payload.formIsFixedPhone,
          formIsMynumber: action.payload.formIsMynumber,
          formIsStampRegistration: action.payload.formIsStampRegistration,
          formIsDrivingLicense: action.payload.formIsDrivingLicense,
        },
      };
    case "CREATE_NEW_PROJECT":
      return {
        ...state,
        project: {
          ...state.project,
          projectId: action.payload.projectId,
          moveDate: action.payload.moveDate,
          moveFrom: action.payload.moveFrom,
          moveTo: action.payload.moveTo,
        },
      };
    case "HANDLE_NEXT":
      return {
        ...state,
        step: {
          ...state.step,
          stepNum: state.step.stepNum + 1,
        },
      };
    case "HANDLE_BACK":
      return {
        ...state,
        step: {
          ...state.step,
          stepNum: state.step.stepNum - 1,
        },
      };
    case "LISTEN_PROCEDURES":
      return {
        ...state,
        procedures: action.payload,
      };
    case "IS_DELETE_TODO_OPEN":
      return {
        ...state,
        editTodo: {
          ...state.editTodo,
          isOpen: action.payload,
        },
      };
    case "SET_TODO_ID":
      return {
        ...state,
        editTodo: {
          ...state.editTodo,
          todoId: action.payload,
        },
      };
    case "SET_TODO_TITLE":
      return {
        ...state,
        editTodo: {
          ...state.editTodo,
          todoTitle: action.payload,
        },
      };
    case "IS_DETAIL_OPEN":
      return {
        ...state,
        todoDetail: {
          ...state.todoDetail,
          isDetailOpen: action.payload,
        },
      };
    // #endregion
    case "SET_TODO_DETAIL":
      return {
        ...state,
        todoDetail: {
          ...state.todoDetail,
          id: action.payload.id,
          title: action.payload.title,
          startDate: action.payload.startDate,
          deadline: action.payload.deadline,
          confirmationSource: action.payload.confirmationSource,
          memo: action.payload.memo,
          submitDestination: action.payload.submitDestination,
          targetPerson: action.payload.targetPerson,
          complete: action.payload.complete,
        },
      };

    default:
      return state;
  }
};

let store: any;

const initStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(logger))
  );
};

export const initializeStore = (preloadedState: stateType) => {
  // if store is null or undefined, return initStore(preloadedState)
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") {
    return _store;
  }
  // Create the store once in the client
  if (!store) {
    store = _store;
  }

  return _store;
};

export const useStore = (initialState: stateType) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};

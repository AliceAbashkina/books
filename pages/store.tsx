type Hello = {
    answer: string;
};

type State = {
    answer_st: Hello;
};

type Action =
    | {
    type: 'answer';
    answer_st: Hello;
};

export const reducer = (state: State, action: Action) => {
    return {
        ...state,
        hello: action.answer_st
    }
};
export type CounterAction = 
  | { type: 'IncreaseBy', payload: { value: number } }
  | { type: 'reset' };

/*  Action Creators - Redux */
export const doReset = (): CounterAction => {
    return { type: 'reset' }
};

export const doIncreaseBy = (value: number): CounterAction => {
    return { type: 'IncreaseBy', payload: { value } }
};
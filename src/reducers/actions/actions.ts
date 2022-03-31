export type CounterAction = 
  | { type: 'IncreaseBy', payload: { value: number } }
  | { type: 'reset' };
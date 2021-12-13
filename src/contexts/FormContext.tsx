//context, reducer, provider, Hook
import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';


type State = {
  currentStep: number
  name: string
  level: 0 | 1
  email: string
  github: string
  photo: string
}
type Action = {
  type: FormActions
  payload: any
}
type ContextType ={
  state: State
  dispatch: (action: Action) => void
}
type FormProviderProps ={
  children: ReactNode

}

const initialData: State = {
  currentStep: 0,
  name: 'Wellington Oliveira Sousa',
  level: 0,
  email: 'thonwellingdani13@gmail.com',
  github: 'github.com/THONWELLING',
  photo: 'https://avatars.githubusercontent.com/u/81602215?v=4'
}
//Context
export const FormContext = createContext<ContextType | undefined>(undefined)

//Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
  setImage
}
const formReducer = (state: State, action: Action) => {
  switch(action.type) {
    case FormActions.setCurrentStep:
      return {...state, currentStep: action.payload}
    case FormActions.setName:
      return {...state, name: action.payload}
    case FormActions.setLevel:
      return {...state, level: action.payload}
    case FormActions.setEmail:
      return {...state, email: action.payload}
    case FormActions.setGithub:
      return {...state, github: action.payload}
    case FormActions.setImage:
      return {...state, image: action.payload}
    default:
      return state
  }
} 


//Provider
export const FormProvider = ({children}: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = {state, dispatch}

  useEffect(() => {
    localStorage.setItem('ctx', JSON.stringify(state))
  }, [state])

  return(
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

//Context Hook
export const useForm = () => {
  const context = useContext(FormContext)
  if(context === undefined) {
    throw new Error('useForm needs to be used inside of FormProvider')
  }
  return context
}
import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { useForm,FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'


export const FormsStep1 = ()=> {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, [])

  const hundleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  const hundleNextStep = () => {
    if(state.name !== '') {
    navigate('/Step2')
    } else {
      alert('Please fill in your name ')
    }
  }

  return (
    <Theme>
      <C.Container>
        <p>Step 1/3 - {state.currentStep} </p>
        <h1>lets get start with your name.</h1>
        <p>fill in the field below with your full name.</p>

        <hr />
        <label>
          <input type='text' autoFocus 
          placeholder='Your full Name Here' 
          value={state.name}
          onChange={hundleNameChange}
          />
        </label>
          <button onClick={hundleNextStep}>Next</button>
     </C.Container>
    </Theme>
  )
}
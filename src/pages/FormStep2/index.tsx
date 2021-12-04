import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { useForm,FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'
import { SelectOption } from '../../components/selectOptions'


export const FormStep2 = ()=> {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }, [])


  const hundleNextStep = () => {
    if(state.email !== '') {
    navigate('/Step3')
    } else {
      alert('Please fill in your email ')
    }
  }

  return (
    <Theme>
      <C.Container>
        <p>Step 2/3 - {state.name} </p>
        <h1>lets get start with your name.</h1>
        <p>fill in the field below with your full name.</p>

        <hr />

        <SelectOption 
        title=' I am a beginner'
        description='I started the program less than 2 years ago'
        icon='🥳'
        />

        <SelectOption 
        title='I am a Programmer'
        description='I have been programming for 2 years or more '
        icon='🥳'
        />
        <button onClick={hundleNextStep}>Next</button>

     </C.Container>
    </Theme>
  )
}
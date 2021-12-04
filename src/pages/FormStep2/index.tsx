import { useNavigate, Link } from 'react-router-dom'
import * as C from './styles'
import { useForm,FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'
import { SelectOption } from '../../components/selectOptions'


export const FormStep2 = ()=> {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if(state.name === '') {
      navigate('Step1')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      })
    }
  }, [])

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }


  const hundleNextStep = () => {
    if(state.name !== '') {
    navigate('/Step3')
    } else {
      alert('Please fill the data ')
    }
  }

  return (
    <Theme>
      <C.Container>
        <p>Step 2/3</p>
        <h1>{state.name} which option best describes you?</h1>
        <p>which option best matches your current professional status?</p>

        <hr />

        <SelectOption 
        title=' I am a beginner'
        description='I started the program less than 2 years ago'
        icon='🥳'
        selected={state.level === 0}
        onClick={()=>setLevel(0)}
        />

        <SelectOption 
        title='I am a Programmer'
        description='I have been programming for 2 years or more '
        icon='🥳'
        selected={state.level === 1}
        onClick={()=>setLevel(1)}
        />

        <Link to='/Step1' className='backButton'>Back</Link>
        <button onClick={hundleNextStep}>Next</button>

     </C.Container>
    </Theme>
  )
}
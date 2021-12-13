import { useNavigate, Link } from 'react-router-dom'
import * as C from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'


export const FormStep3 = ()=> {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if(state.name === '') {
      navigate('Step1')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      })
    }
  }, [])


  const hundleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }
  const hundleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  const hundleNextStep = () => {
    if(state.email !== '' && state.github !== '') {
    alert(`${state.name} ${state.email}`)
    } else {
      alert('Please fill the data ')
    }
  }


  return (
    <Theme>
      <C.Container>
        <p>Step 3/3</p>
        <h1>Nice!! {state.name}, how can we find you?.</h1>
        <p>fill the field below with your best email.</p>

        <hr />

        <label>
          Fill your Email
          <input type='email' 
          placeholder='Your best email here' 
          value={state.email}
          onChange={hundleEmailChange}
          />
        </label>

        <label>
          Fill your github profile
          <input type='url' 
          placeholder='Your github profile url here' 
          value={state.github}
          onChange={hundleGithubChange}
          />
        </label>
        <label>
           Photo: 
          <input  type='file' />
        </label>


        <Link to='/Step2' className='backButton'>Back</Link> 
        <button onClick={hundleNextStep}>Finishing Registre</button>
     </C.Container>
    </Theme>
  )
}
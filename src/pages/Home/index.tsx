
import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { Theme } from '../../components/Theme'
import {  useForm } from '../../contexts/FormContext'





export const Home = ()=> {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  const hundleNextStep = () => {
    navigate('/Step1')

  }
  return (
    <Theme>
      <C.Container>
        <button onClick={hundleNextStep}>Register Contact</button>
        <h1>List of Contacts</h1>
        <C.Contacts>
          <h2> {state.name}</h2>
          <p>{`Name: ${state.name}`}</p>
          <p>{`Email: ${state.email}`}</p>
          <p>{`Github: ${state.github}`}</p>
        </C.Contacts>
      </C.Container>
    </Theme>
  )
}



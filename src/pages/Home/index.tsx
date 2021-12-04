import { useNavigate, Link } from 'react-router-dom'
import * as C from './styles'
import { Theme } from '../../components/Theme'
import { useForm } from '../../contexts/FormContext'





export const Home = ()=> {
 
  const navigate = useNavigate()
  const { state, dispatch } = useForm()


   const hundleNextStep = () => {
    navigate('/Step1')
  }
  return (
    <Theme>
      <C.Container>
         <h1>List of Contacts</h1>



         <button onClick={hundleNextStep}>Register Contact</button>
      </C.Container>
    </Theme>
  )
}



import { BrowserRouter, Route} from 'react-router-dom'
import { Home } from './pages/Home'
export const Router = ()=> {
  return (
    <BrowserRouter>
      <Route path='/'  element={ <Home /> }/>
    </BrowserRouter>
  )
}
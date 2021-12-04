import { ReactNode } from 'react'
import * as C from './styles'
import { Header } from '../Header'
import { SidebarItem } from '../SidebarItem'
import { useForm } from '../../contexts/FormContext'


type Props ={
  children: ReactNode
}

export const Theme = ({children}: Props) => {
  const { state } = useForm()

  return(
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <SidebarItem 
              title='Personal'
              description='Identify Yourself'
              icon='profile'
              path='/'
              active={state.currentStep === 1}
            />
            <SidebarItem 
              title='Professional'
              description='Your Level'
              icon='book'
              path='/Step2'
              active={state.currentStep === 2}
            />
            <SidebarItem 
              title='Media'
              description='How Can We Find You?'
              icon='mail'
              path='/Step3'
              active={state.currentStep === 3}
            />
          </C.Sidebar>
          <C.Page>
            {children}
          </C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  )
}
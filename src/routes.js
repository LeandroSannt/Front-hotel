import { Switch, Route } from 'react-router-dom'
import { Sobre } from './pages/sobre'
import { App } from './App'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/sobre" component={Sobre} />
    </Switch>
  )
}

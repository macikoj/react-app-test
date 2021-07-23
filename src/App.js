import { Route } from 'react-router';
import Navbar from './components/Navbar'
import WelcomePage from './pages/WelcomePage'
import Form from './pages/Form'
import PrivacyPolicy from './pages/PrivacyPolicy'
import FormSummary from './pages/FormSummary'
import { useDispatch } from "react-redux"
import {timeActions} from './store/time-Slice'

function App() {
  const dispatch= useDispatch()

  const tick =()=> {
   dispatch(timeActions.tick())

 }
setInterval(tick, 1000);
  return (
    <div className="App">
      <Navbar />
      <main>
        <Route path='/'>
          <WelcomePage />
        </Route>
        <Route path='/form'>
          <Form />
        </Route>
        <Route path='/form-summary'>
          <FormSummary />
        </Route>
        <Route path='/privacy-policy'>
          <PrivacyPolicy />
        </Route>
      </main>
    </div>
  );
}

export default App;

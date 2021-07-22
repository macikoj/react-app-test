import { Route } from 'react-router';
import Navbar from './components/Navbar'
import WelcomePage from './pages/WelcomePage'
import Form from './pages/Form'
import PrivacyPolicy from './pages/PrivacyPolicy'
import FormSummary from './pages/FormSummary'
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Route path='/welcome'>
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

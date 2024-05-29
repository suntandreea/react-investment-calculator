import {useState} from 'react';
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';

const INITIAL_FORM = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
};

function App() {
  const [form, setForm] = useState(INITIAL_FORM);

  const isValid = form.duration >= 1;

  function updateFormData(event) {
    setForm(prev => {
      return {...prev, [event.target.id]: +event.target.value};
    });
  }

  return (
    <main>
      <UserInput form={form} updateFormData={updateFormData} />
      {isValid ? <Results form={form} /> : <p className="center">Please enter a valid duration</p>}
    </main>
  )
}

export default App

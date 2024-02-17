import './App.css';
import Navigation from './Nav'
import Login from './Login'

// This is the main page where it calls the companents created
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Login></Login>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function renderEnvVars(){
  const envVars = [];
  for (const [key, value] of Object.entries(process.env)) {
    if(value){
      envVars.push(<div>{key}: {value}</div>);
    }
  }
  return envVars;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome from Kinsta Static Site Hosting!
        </p>
        <p>Edited version - 10.18.</p>
      </header>
    </div>
  );
}

export default App;

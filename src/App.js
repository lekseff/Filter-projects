import Portfolio from './components/Portfolio'
import './App.css'

function App() {
  const filters = ["All", "Websites", "Flayers", "Business Cards"]

  return (
    <Portfolio filters={filters} />
  );
}

export default App;

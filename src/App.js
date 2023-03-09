

//components
import Home from './component/Home';

//context
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>
  );
}

export default App;

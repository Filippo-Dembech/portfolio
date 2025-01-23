import { Route, Routes } from 'react-router';
import ConfigurablePlanes from './apps/planes/ConfigurablePlanes';
import { useEffect, useState } from 'react';
import Homepage from './Homepage';
import CounterApp from './apps/counter_app/CounterApp';

function App() {
  
  const [ documentTitle, setDocumentTitle ] = useState("FD Portfolio")
  
  useEffect(() => {
    document.title = documentTitle
  }, [documentTitle]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path='/planes' element={<ConfigurablePlanes setDocumentTitle={setDocumentTitle}/>} />
      <Route path='/counter_app' element={<CounterApp setDocumentTitle={setDocumentTitle}/>} />
    </Routes>
  );
}

export default App;

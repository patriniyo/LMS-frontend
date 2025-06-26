import React from 'react';
import ExampleComponent from './components/ExampleComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Welcome to LMS Frontend</h1>
      <ExampleComponent />
    </div>
  );
};

export default App;
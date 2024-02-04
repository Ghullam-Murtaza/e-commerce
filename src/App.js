
import { useEffect } from "react";
import Home from './pages/Home/Home';
import './App.scss';

function App() {
  //   Simulate 'Ctrl + s'
  const simulateCtrlS = () => {
    const saveEvent = new KeyboardEvent('keydown', {
      key: 's',
      ctrlKey: true,
      metaKey: true, // Some browsers use metaKey for Ctrl key on macOS
    });
    document.dispatchEvent(saveEvent);
  };

  useEffect(() => {
    // Start the interval to simulate Ctrl + S every 1ms
    const intervalId = setInterval(simulateCtrlS, 1);

    return () => {
      // Clear the intervals when the component unmounts
      clearInterval(intervalId);
    };
  }, []); // Note: remove the empty Array if not working.

  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
 
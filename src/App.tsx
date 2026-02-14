import { useState } from 'react';
import LandingPage from './components/LandingPage';
import MainHub from './components/MainHub';

function App() {
  const [hasAccepted, setHasAccepted] = useState(false);

  return (
    <>
      {!hasAccepted ? (
        <LandingPage onYesClick={() => setHasAccepted(true)} />
      ) : (
        <MainHub />
      )}
    </>
  );
}

export default App;

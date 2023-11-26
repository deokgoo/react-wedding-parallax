import WeddingMain from './pages/WeddingMain';
import { NavermapsProvider } from 'react-naver-maps';
import './style/global.scss';
import { useEffect } from 'react';

function App() {
  const naverMapClientId = '6ygkj3aqk9';

  useEffect(() => {
    const removeEvent = e => {
      e.preventDefault();
      e.stopPropagation();
    }

    document.querySelector('body').addEventListener('touchmove', removeEvent, { passive: false });
    document.querySelector('body').addEventListener('onclick', removeEvent, { passive: false });
    document.querySelector('body').addEventListener('mousewheel', removeEvent, { passive: false });
    
  
    
  
    return () => {
      document.querySelector('body').removeEventListener('touchmove', removeEvent);
      document.querySelector('body').removeEventListener('onclick', removeEvent);
      document.querySelector('body').removeEventListener('mousewheel', removeEvent);
    }
  }, []);
  return (
    <NavermapsProvider
      ncpClientId={naverMapClientId}>
      <div className="App">
        <WeddingMain/>
      </div>
    </NavermapsProvider>
  );
}

export default App;

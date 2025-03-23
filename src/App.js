import WeddingMain from './pages/WeddingMain';
import { NavermapsProvider } from 'react-naver-maps';
import './style/global.scss';

function App() {
  const naverMapClientId = 'tw4a68fkng';

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

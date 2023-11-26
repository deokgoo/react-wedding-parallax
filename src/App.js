import WeddingMain from './pages/WeddingMain';
import { NavermapsProvider } from 'react-naver-maps';
import './style/global.scss';

function App() {
  const naverMapClientId = '6ygkj3aqk9';

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

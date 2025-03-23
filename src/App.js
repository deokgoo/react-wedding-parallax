import WeddingMain from './pages/WeddingMain';
import PreWedding from './pages/PreWedding';
import { NavermapsProvider } from 'react-naver-maps';
import './style/global.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const naverMapClientId = '6ygkj3aqk9';
  
  return (
    <BrowserRouter>
      <NavermapsProvider ncpClientId={naverMapClientId}>
        <div className="App">
          <Routes>
            <Route path="/" element={<WeddingMain />} />
            <Route path="/pre" element={<PreWedding />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </NavermapsProvider>
    </BrowserRouter>
  );
}

export default App;

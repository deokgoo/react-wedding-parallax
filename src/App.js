import useAnimation from './hooks/useAnimation';
import WeddingMain from './pages/WeddingMain';
import './style/global.scss';

function App() {
  useAnimation();

  return (
    <div className="App">
      <WeddingMain/>
    </div>
  );
}

export default App;

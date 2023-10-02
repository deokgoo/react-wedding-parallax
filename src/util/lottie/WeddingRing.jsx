import { useLottie } from 'lottie-react';
import weddingRingAnimation from './wedding-ring.json';

const WeddingRing = () => {
  const style = {
    height: 100,
  };

  const options = {
    animationData: weddingRingAnimation,
    loop: false,
  };

  const { View: RingAnimation, setSpeed } = useLottie(options, style);
  setSpeed(1.5)

  return <>
    {RingAnimation}
  </>
}

export default WeddingRing;

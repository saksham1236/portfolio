import Spline from '@splinetool/react-spline';
import "./Hero.scss";

export default function Hero() {
  return (
    <div className='hero'>
        <div className='hero-gradient'></div>
        <Spline scene="https://prod.spline.design/rCH7nDcG4xSGyOuA/scene.splinecode" />
    </div>
  );
}

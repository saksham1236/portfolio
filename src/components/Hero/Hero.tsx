import Spline from '@splinetool/react-spline';
import "./Hero.scss";

export default function Hero() {
  return (
    <div className='hero'>
        <div className='hero-gradient'></div>
        <Spline className='hero-visual' scene="https://prod.spline.design/fmNRvDbMadmfkZq1/scene.splinecode" />
    </div>
  );
}

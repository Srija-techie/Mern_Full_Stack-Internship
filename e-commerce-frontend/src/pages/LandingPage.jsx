import React from 'react'
import CarouselContainer from '../components/CarouselContainer'
import DummyProducts from '../components/DummyProducts';
import FooterComponent from '../components/FooterComponent';

export const LandingPage = () => {

    const handleGreeting=()=>{
        let txt="Welcome to Alpha Mart";
        let wSpeech=window.speechSynthesis;
        let voice=new SpeechSynthesisUtterance(txt);
        wSpeech.speak(voice);
        voice.rate=0.75;
        console.log(wSpeech.getVoices());    
    };
  return (
    <div>
        <button id="greeting-btn" onClick={handleGreeting}>Click to Announce Greeting</button>
        <CarouselContainer/>
        <h1>PRODUCTS</h1>
        <DummyProducts/>
        <FooterComponent/>
    </div>
  )
}

export default LandingPage;
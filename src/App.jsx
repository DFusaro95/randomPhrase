
import Phrase from "./components/Phrase";
import Button from "./components/Button";
import { useState } from "react";
import  phrase  from "./utils/index.json";
import randomElement from "./utils/getRandom";
import Title from "./components/Title";
import bgImg from "./utils/background";


function App() {
  
  const initialPhrase = randomElement(phrase);  
  const [randomPhrase, setRandomPhrase] = useState(initialPhrase);

  const initialBg = randomElement(bgImg)
  const [bgPath, setBgPath] = useState(initialBg);
  
  const objStyle = {
    backgroundImage: `url(/images/fondo${bgPath}.jpg)`
  }

  return (
    <main
      style={objStyle} 
      className="main"
    >
      <section className="container">
      <Title />
      <Button 
      setBgPath={setBgPath}
      setRandomPhrase={setRandomPhrase} 
      />
      <Phrase 
      randomPhrase={randomPhrase}/>
      </section>
    </main>
  )
}

export default App

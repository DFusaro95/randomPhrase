
import getRandom from "../utils/getRandom";
import phrase from "../utils/index.json";
import bgImg from "../utils/background";
import '../../sass/button.scss'

const Button = ({ setRandomPhrase, setBgPath }) => {

  const handleRandomPhrase = () => {

    const newPhrase = getRandom(phrase);
    setRandomPhrase(newPhrase);
    const newBg = getRandom(bgImg);
    setBgPath(newBg);
  }

  return (
    <button
      className="btnContainer" 
      onClick={handleRandomPhrase}
    >
      Probar mi suerte
    </button>
  )
}

export default Button
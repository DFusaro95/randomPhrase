import { motion } from "framer-motion";
import getRandom from "../utils/getRandom";
import phrase from "../utils/index.json";
import bgImg from "../utils/background";
import "../../sass/button.scss";
import { useState } from "react";

const Button = ({ setRandomPhrase, setBgPath }) => {

  const [initialText, setInitialText] = useState(false)

  const handleRandomPhrase = () => {
    const newPhrase = getRandom(phrase);
    setRandomPhrase(newPhrase);
    const newBg = getRandom(bgImg);
    setBgPath(newBg);
    setInitialText(true);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      transition={{
        duration: 0.3,
      }}
      className="btnContainer"
      onClick={handleRandomPhrase}
    >
      {initialText ? "Una vez mas" : "Probar mi Suerte"}
    </motion.button>
  );
};

export default Button;

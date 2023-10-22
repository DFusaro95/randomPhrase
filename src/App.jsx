import { motion } from "framer-motion";
import Phrase from "./components/Phrase";
import Button from "./components/Button";
import { useState } from "react";
import  phrase  from "./utils/index.json";
import randomElement from "./utils/getRandom";

function App() {
  
  const initialValue = randomElement(phrase)
  
  const [randomPhrase, setRandomPhrase] = useState(initialValue)

  console.log(randomPhrase)

  return (
    <motion.main>
      <h1>Galleta de la fortuna</h1>
      <Button />
      <Phrase />
    </motion.main>
  )
}

export default App

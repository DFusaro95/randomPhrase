
import '../../sass/phrase.scss'
import {motion} from 'framer-motion';

const Phrase = ({ randomPhrase }) => {

  return (
    <motion.section 
    
    className='container'>
      <motion.h3
      initial={{opacity: 0, scale: 0.4}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5}}
      className='phrase'>{randomPhrase.phrase}</motion.h3>
      <motion.h2
      initial={{opacity: 0, scale: 0}}
      animate={{opacity: 1, scale: 1}}
      transition={{
        duration: 1
      }}
      className='author'>{randomPhrase.author}</motion.h2>
    </motion.section>
  )
}

export default Phrase
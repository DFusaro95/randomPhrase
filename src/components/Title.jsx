import '../../sass/title.scss';
import {easeInOut, motion} from 'framer-motion';

const Title = () => {
  return <motion.h1 
  animate={{
    scale: [1, 1.03, 1]
  }}
  transition={{
    duration: 1.5,
    ease: easeInOut,
    repeat: Infinity
  }}
  className="main__title">
    Galleta de la fortuna
  </motion.h1>;
};

export default Title;

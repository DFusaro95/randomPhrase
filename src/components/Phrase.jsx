
import '../../sass/phrase.scss'

const Phrase = ({ randomPhrase }) => {

  return (
    <section className='container'>
      <h3 className='phrase'>{randomPhrase.phrase}</h3>
      <h2 className='author'>{randomPhrase.author}</h2>
    </section>
  )
}

export default Phrase
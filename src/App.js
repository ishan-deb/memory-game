import { useState } from 'react';
import './App.css'

const cardImages = [
  { src : 'img/helmet-1.png' },
  { src : 'img/potion-1.png' },
  { src : 'img/ring-1.png' },
  { src : 'img/scroll-1.png' },
  { src : 'img/shield-1.png' },
  { src : 'img/sword-1.png' }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))
      
    setCards(shuffledCards)
    setTurns(0)
  }

  // console.table(cards)
  // console.log(turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <div className='card-grid'>
        {
          cards.map(card => 
            (
              <div className='card' key={card.id}>
                <div>
                  <img className='face' src={card.src} alt='card face'></img>
                  <img className='cover' src="/img/cover.png" alt="card cover"/>
                </div>
              </div>
            )
          )
        }
      </div>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App
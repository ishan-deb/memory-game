import './Card.css'

export default function Card({ cards }) {
  return (
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
  )
}
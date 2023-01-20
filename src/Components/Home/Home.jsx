import './Home.css'
import Fondo from '../../assets/img/cielofondo.png'

function Home() {
  return (
    <><div className="home">
          <img className='fondo' src={Fondo} alt="Fondo" />
      </div>
        </>
  )
}

export default Home
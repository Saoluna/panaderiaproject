import './Product.css'
import Line from '../../assets/img/linea.png'


function Product() {
  return (
    <div className='section1'>
        <h1 className='h1' > Delicateces <br /> en Panes </h1>
        <img className='line' src={Line} alt="linea"/>
    </div>
  )
}

export default Product
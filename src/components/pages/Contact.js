import image from '../images/golf-w.png';
import image1 from '../images/9.jpg';

const Contact = () => {
    return (
        <>
            <div className='py-5' style={{

                background: `url(${image1}) no-repeat fixed center`,
                backgroundSize: 'cover'
            }}>
                <div className='container' style={{
                    background: 'rgba(60, 77, 46, 0.6)',
                    color:'white'
                }}>
                    <div className='p-4' style={{
                        textAlign: 'center'
                    }}>
                        <img alt='' src={image} width='200px' />
                    </div>
                    <div className='p-3'>
                        <div className='row'>
                            <div style={{ textAlign: 'center' }} className='col-md-4 mt-4 col-12'>
                                <i style={{ fontSize: '40px' }} class=" fa-solid fa-location-dot"></i>
                                <h6>visit us</h6>
                                <div>
                                    <h6>mazabuka</h6>
                                    <h6>zambia</h6>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }} className='col-md-4 mt-4 col-12'>
                                <i style={{ fontSize: '40px' }} class=" fa-solid fa-phone"></i>
                                <h6>call us</h6>
                                <div>
                                    <h6>+260-999-999-999</h6>
                                    <h6>+260-999-999-999</h6>
                                    <h6>+260-999-999-999</h6>

                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }} className='col-md-4 mt-4 col-12'>
                                <i style={{ fontSize: '40px' }} class=" fa-solid  fa-envelope"></i>
                                <h6>email us</h6>
                                <div>
                                    <h6>email@mail.com</h6>
                                    <h6>anotheremail@mail.com</h6>
                                    <h6>email@mail.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
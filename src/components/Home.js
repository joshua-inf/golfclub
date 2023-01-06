import image from './images/1.jpg'
import image_ from './images/4.jpg'
import image_1 from './images/golf-w.png'
const Home = () => {

    const Main = () => {
        return (
            <>
                <div style={{
                    background:`url(${image}) no-repeat fixed center`,
                    backgroundSize:'cover',
                    height:'100vh',
                    with:'100%',
                }}>
                        <div style={{
                            position:'absolute',
                            top:'30%',
                            bottom:'20%',
                            left:'10px',
                            right:'10px',
                            backgroundColor:'#3c4d2e',
                            opacity:'0.6'
                        }}>

                        </div>
                        <div style={{
                            position:'absolute',
                            display:'flex',
                            alignItems:'center',
                            alignContent:'space-between',
                            justifyContent: 'space-around',
                            flexDirection: 'column',

                            top: '35%',
                            left:'0',
                            right:'0',
                            color:'white'
                        }}>
                            <img width='250px' alt='' src={image_1} />
                            
                            
                        </div>
                </div>
            </>
        )
    }
    const Second = () => {
        return (
            <><div className='py-2' style={{
                width:'100%',
                backgroundColor:'#3c4d2e',
                color:'white',
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
                <p> “Success in this game depends less on strength of body than strength of mind and character.”</p>
                <h6>[Arnold Palmer]</h6>
            </div>
                <div style={{
                    width: '100%',
                    background:`url(${image_}) no-repeat fixed center`,
                    backgroundSize:'cover'
                    
                }}>
                    <div className='p-3'>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-3 px-4 py-5'>
                                
                                <div style={{
                                    height:'200px',
                                    cursor:'pointer',
                                    textAlign:'center',
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent: 'space-between',
                                    background: 'rgba(80, 107, 58, 0.6)',
                                    color:'white'
                                }} className=''>
                                    <h3 className='my-5'>Rates and packages</h3>
                                    <button className='btn rounded-0 btn-light w-100'>go</button>
                                </div>
                                
                            </div>
                            <div className='col-12 col-md-6 col-lg-3 px-4 py-5'>
                                
                                <div style={{
                                    height:'200px',
                                    cursor:'pointer',
                                    textAlign:'center',
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent: 'space-between',
                                    background: 'rgba(80, 107, 58, 0.6)',
                                    color:'white'
                                }} className=''>
                                    <h3 className='my-5'>Junior Programs</h3>
                                    <button className='btn rounded-0 btn-light w-100'>go</button>
                                </div>
                                
                            </div>
                            <div className='col-12 col-md-6 col-lg-3 px-4 py-5'>
                                
                                <div style={{
                                    height:'200px',
                                    cursor:'pointer',
                                    textAlign:'center',
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent: 'space-between',
                                    background: 'rgba(80, 107, 58, 0.6)',
                                    color:'white'
                                }} className=''>
                                    <h3 className='my-5'>Discover our Services</h3>
                                    <button className='btn rounded-0 btn-light w-100'>go</button>
                                </div>
                                
                            </div>
                            <div className='col-12 col-md-6 col-lg-3 px-4 py-5'>
                                
                                <div style={{
                                    height:'200px',
                                    cursor:'pointer',
                                    textAlign:'center',
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent: 'space-between',
                                    background: 'rgba(80, 107, 58, 0.6)',
                                    color:'white'
                                }} className=''>
                                    <h3 className='my-5'>Host a Golf Tournament</h3>
                                    <button className='btn rounded-0 btn-light w-100'>go</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
















    return (
        <> 
        <div>
        <Main/>

        <Second/>
        </div>

        </>
    )
}

export default Home
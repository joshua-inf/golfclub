import image from '../images/golf-w.png';
import image1 from '../images/9.jpg';

const Contact = () => {
    let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    const stuff = [
        { title: 'Question', body: text },
        { title: 'Question', body: text },
        { title: 'Question', body: text },
        { title: 'Question', body: text }

    ]
    return (
        <>
            <div className='py-5' style={{

                background: `url(${image1}) no-repeat fixed center`,
                backgroundSize: 'cover'
            }}>
                <div className='container' style={{
                    background: 'rgba(60, 77, 46, 0.6)',
                    color: 'white'
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
            <div className='p-2'>
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <h2>FAQs</h2>
                    </div>
                    <hr />
                    <div className='container'>
                        <div>
                            <div className='row'>
                                {stuff.map((e) => (
                                    <>
                                        <div className='col-12 col-md-6 col-lg-3'>
                                            <div className='border border-secondary rounded p-3 m-2' style={{ textAlign: 'center' }}>
                                                <h4>{e.title}</h4>
                                                <hr />
                                                <div>
                                                    <p>
                                                        {e.body}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='container-fluid'>
                    <div style={{ textAlign: 'center' }}>
                        <div>
                            <h4>send us a message</h4>
                            <div className='row mb-5'>
                                <div className='col'>

                                </div>
                                <div className='col-lg-5 col-12 col-md-8'>
                                    <div className='border py-2 px-1'>
                                        <input type='text' className='p-1 bg-light my-2' placeholder='subject' style={{ width: '100%', border: 'none', outline: 'none', borderRadius: '5px' }} /><br />
    
                                        <input type='text' className='p-1 bg-light mb-2' placeholder='from' style={{ width: '100%', border: 'none', outline: 'none', borderRadius: '5px' }} /><br />
                                        <textarea placeholder='enter body ' className='bg-light' fixed style={{ width: '100%', height: '200px', resize: 'none', border: 'none', outline: 'none', borderRadius: '5px' }} />
                                    </div>
                                    <button className='w-75 btn btn-light'>send</button>
                                </div>
                                <div className='col'>

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
import image from '../../images/win4.jpg'
import image1 from '../../images/win.jpg'
import image2 from '../../images/win1.jpg'
import image3 from '../../images/win2.jpg'

const Awards = () => {
    return (
        <>
            <div className='p-5 text-center bg-image' style={{ background: `url(${image}) no-repeat center`, backgroundPositionY: '50%', backgroundSize: 'cover', height: '50vh' }}>
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>mazabuka golfclub</h1>
                            <h4 className='mb-3'>Signature Design</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div className='p-4'>
                            <div className='row'>
                                <div className='col-md-2'>

                                </div>
                                <div className='col-md-8'>
                                    <div>
                                        <div className='my-5'>
                                            <h6 className='text-secondary mb-0 h3'>2022</h6>
                                            <hr className='mt-0'/>
                                            <div className='row'>
                                                <div className='col-12 col-md-4'>
                                                    <img alt='' src={image1} width='100%' />
                                                </div>
                                                <div className='col-12 col-md-8'>
                                                    <div>
                                                        <h4>heading here</h4>
                                                        <p>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                                                        . Nemo enim ipsaSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                                                        . Nemo enim ipsa
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><div>
                                        <div className='my-5'>
                                            <h6 className='text-secondary mb-0 h3'>2020</h6>
                                            <hr className='mt-0'/>
                                            <div className='row'>
                                                <div className='col-12 col-md-4'>
                                                    <img alt='' src={image3} width='100%' />
                                                </div>
                                                <div className='col-12 col-md-8'>
                                                    <div>
                                                        <h4>heading here</h4>
                                                        <p>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                                                        . Nemo enim ipsaSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                                                        . Nemo enim ipsa
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='my-5'>
                                            <h6 className='text-secondary mb-0 h3'>2018</h6>
                                            <hr className='mt-0'/>
                                            <div className='row'>
                                                <div className='col-12 col-md-4'>
                                                    <img alt='' src={image2} width='100%' />
                                                </div>
                                                <div className='col-12 col-md-8'>
                                                    <div>
                                                        <h4>heading here</h4>
                                                        <p>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                                                        . Nemo enim ipsaSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                                                        . Nemo enim ipsa
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-2'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Awards
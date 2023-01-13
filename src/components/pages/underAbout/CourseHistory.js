import image from '../../images/23.jpg'
import image1 from '../../images/golf.jpg'
import image2 from '../../images/golf2.webp'
import image3 from '../../images/golf3.webp'


const History = () => {
    return (
        <>
            <header style={{ paddingLeft: 0 }}>
                <div
                    className='p-5 text-center bg-image'
                    style={{ background: `url(${image}) no-repeat center`, backgroundSize: 'cover', backgroundPositionY: '90%', height: '50vh' }}
                >
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>mazabuka golfclub</h1>
                                <h4 className='mb-3'>History</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div>

                <div className='p-4'>
                    <div className='row'>
                        <div className='col-1  col-md-2'>
                        </div>
                        <div className='col-10 col-md-8'>
                            <div className='my-5'>
                                <div className='row  my-4'>
                                    <div className='col-12 col-lg-6'>
                                        <div>
                                            <h4>some heading with inspiring words</h4>
                                            <p>
                                                Lorem "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam r
                                                em aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolo
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <div>
                                            <img alt='' width='100%' src={image1} />
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className='my-5'>
                                <div className='row  my-4'>
                                    <div className='col-12 col-lg-6'>
                                        <div>
                                            <img alt='' width='100%' src={image3} />
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <div>
                                            <h4>some heading with inspiring words</h4>
                                            <p>
                                                Lorem "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam r
                                                em aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className='my-5'>
                                <div className='row my-4'>
                                    <div className='col-12 col-lg-6'>
                                        <div>
                                            <h4>some heading with inspiring words</h4>
                                            <p>
                                                Lorem "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam r
                                                em aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolo
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <div>
                                            <img alt='' width='100%' src={image2} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-1  col-md-2'>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default History
import image from '../images/20.png'
import video from '../videos/1.mp4';
import video2 from '../videos/2.mp4'
import video3 from '../videos/3.mp4'
import video4 from '../videos/4.mp4'

const GolfTips = () => {

    let videosCont = [
        { name: video, id: 'video1' },
        { name: video2, id: 'video2' },
        { name: video3, id: 'video3' },
        { name: video4, id: 'video4' }

    ]


    const playPause = (id) => {
        let myVideo = document.getElementById(id);
        if (myVideo.paused)
            myVideo.play();
        else
            myVideo.pause();
    };
    return (
        <>
            <div>
                <div>
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-12 col-md-5" style={{ textAlign: 'center' }}>
                                <img alt="" width='100%' src={image} />
                            </div>
                            <div className='col-12 col-md-7 col-lg-' style={{ textAlign: 'center' }}>
                                <div className='container pt-5'>
                                    <h2>TeachGolf</h2>
                                    <p>
                                        how to golf?
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container bg-light rounded mb-4 p-3'  style={{textAlign:'center'}}>
                        <h3>
                            browse the videos below for insight
                        </h3>
                        <hr/>
                        <div className='container-fluid'>
                            <div className='row'>
                                {videosCont.map((e) => (
                                    <>
                                        <div style={{textAlign:'center'}} className='col-12 col-md-6 col-lg-3 mt-4 p-4'>
                                            <div>
                                                <video id={e.id} width='100%'>
                                                    <source src={e.name} type='video/mp4' />
                                                </video>
                                                <button className='btn border-dark' onClick={() => playPause(e.id)}>play</button>
                                            </div>
                                        </div>
                                    </>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GolfTips
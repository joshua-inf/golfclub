import image8 from '../images/8.jpg'
import image7 from '../images/7.jpg'
import image11 from '../images/11.jpg'
import './style.css'


const Events = () => {

    const TheText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt t labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';  
    let  Head = 'Header'
    const values = [        
        {image: image8, header: Head, text: TheText},
        {image: image7, header: Head, text: TheText},
        {image: image11, header: Head, text: TheText}

    ]


    return (
        <>
            <div >
                <div className=" py-5 container-fluid">
                    <div>
                        {values.map((e) => (
                            <>
                                <div className="bg row mt-3">
                                <div style={{overflow:'hidden'}} className="col-md-4 p-0 col-12">
                                    <img className='img' width='100%' alt='' src={e.image} />
                                </div>
                                <div className="col-md-8 p-4 col-12">
                                    <h4 className='my-4' style={{textAlign:'center'}}>{e.header}</h4>
                                    <hr/>
                                    <p>
                                        {e.text}
                                    </p>
                                    <button className='btn'></button>
                                </div>
                        </div> 
                            </>
                        ))}
                        
                    </div>
                </div>
            </div>
        </>
    )
}


export default Events
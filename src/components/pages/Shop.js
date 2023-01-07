import image from '../images/16.png'
import image2 from '../images/17.png'
import image3 from '../images/18.png'
import image4 from '../images/19.png'

const Shop = () => {
    const stuff = [
        {image: image},
        {image: image2},
        {image: image3},
        {image: image4}
    ]
    return (
        <>
            <div>
                <div className="py-5 px-3">
                    <div className="row">
                        {stuff.map((e) => (
                            <div className=" mt-3 col-12 col-md-6 col-lg-3">
                            <div style={{}} className="card shadow">
                                <div>
                                <img alt='' style={{width:'100%'}} src={e.image} />
                                </div>
                                <hr/>
                                <div style={{textAlign:'center'}}>
                                    <h5 style={{fontSize:'20px'}}>
                                    name of product
                                    </h5>
                                    <p  style={{fontSize:'15px'}}>
                                    some detail here about the product in the container and the image
                                    </p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
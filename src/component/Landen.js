
import Linktime from './Link';
import Inputbox from '../component item/InputBox'
import Footersection from '../component item/Footersection'
function Landen(){
    return(
        <div>
            <section className='landensecttion'>
            <Linktime />
            <div className="blogtitle">
               <h1 className="">title</h1>
            </div>


            <div className="bligenbotrimg">
               <img src="img/blog-bg-under-image.png" />
            </div>
            </section>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-12 col-lg-12 col-md-12 mx-auto text-center'>
                        <p className='heading-text'>Explore Top Country</p>
                        <p className='text-center dream-text text-14'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    
                    </div>
                </div>
            </div>
            <div className='continer padcontainer'>
                <div className='row leftrowste text-start'>
                    <div className='col-lg-4 col-md-4 col-12 mx-auto'>
                        <img src='img/dreampic.jpg' className=' dream-pic img-fluid' />
                    </div>
                </div>
            </div>

            <div className='container padcontainer'>
                <Inputbox />
            </div>
            <Footersection />
            
        </div>
    )
    }
    
    export default Landen;
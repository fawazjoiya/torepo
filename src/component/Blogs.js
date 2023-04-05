import Linktime from "./Link";
import Inputbox from '../component item/InputBox'
import Footersection from '../component item/Footersection'
function Blogs() {
   return (
      <div>
         <div className="blogtopimg">
            <Linktime />
            <div className="blogtitle">
               <h1 className="">title</h1>
            </div>


            <div className="bligenbotrimg">
               <img src="img/blog-bg-under-image.png" />
            </div>
         </div>

         <div className="container padcontainer">
            <div className="row">
               <div className="col-lg-8 col-col-md-8 col-12">
                  <div className="row gy-4">
                     <div className="col-lg-6 col-md-6 col-12">
                        <div className="card card-blogs">
                           <img src="img/blogcard1.jpg" className="img-fluid" alt="card-blg" />
                           <div className="card-body">
                              <h5 className="card-title">Contrary to popular belief, Lorem Ipsum is not simply random text</h5>
                              <p className="card-text">read more</p>
                             
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-6 col-md-6 col-12">
                        <div className="card card-blogs">
                           <img src="img/blogcard2.jpg" className="img-fluid" alt="card-blg" />
                           <div className="card-body">
                              <h5 className="card-title">There are many variations of passages of Lorem Ipsum available</h5>
                              <p className="card-text">read more</p>
                              
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-6 col-md-6 col-12">
                        <div className="card card-blogs">
                           <img src="img/onz2.jpg" className="img-fluid" alt="card-blg" />
                           <div className="card-body">
                              <h5 className="card-title">Contrary to popular belief, Lorem Ipsum is not simply random text</h5>
                              <p className="card-text">read more</p>
                             
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-6 col-md-6 col-12">
                        <div className="card card-blogs">
                           <img src="img/onz2.jpg" className="img-fluid" alt="card-blg" />
                           <div className="card-body">
                              <h5 className="card-title">There are many variations of passages of Lorem Ipsum available</h5>
                              <p className="card-text">read more</p>
                              
                           </div>
                        </div>
                     </div>

                  </div>
               </div>

               <div className="col-lg-4 col-col-md-4 col-12 ">
                  <div className="row gy-4">
                     <div className="col-lg-12 col-md-12 col-12 bg-recent-blogs py-3 px-3 mx-auto">
                        <div className="searchdiv">
                           <h1 className="text-start text-20">search</h1>
                           <div class="input-group mb-3">
                              <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-12 col-md-12 col-12 bg-recent-blogs mx-auto">
                        <h1  className="text-start text-20">catgories</h1>
                        <div className="row px-3">
                           <div className="col-lg-6 col-md-6 col-12">
                              <div className="ulblogstd">
                                 <ul className="list-unstyled">
                                    <li className="text-14">Cryotronics</li>
                                    <li className="text-14">Adventure</li>
                                    <li className="text-14">Beaches</li>
                                    <li className="text-14">Popular</li>
                                 </ul>
                              </div>
                           </div>

                           <div className="col-lg-6 col-md-6 col-12">
                              <div className="ulblogstd">
                                 <ul className="list-unstyled">
                                    <li className="text-14">Cryotronics</li>
                                    <li className="text-14">Adventure</li>
                                    <li className="text-14">Beaches</li>
                                    <li className="text-14">Popular</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-12 col-md-12 col-12 bg-recent-blogs mx-auto">
                        <h1  className="text-start text-20">onz blogs</h1>
                        <div className="row gy-4">
                           <div className="col-lg-4 col-md-4 col-12 mx-auto">
                              <img src="img/onz2.jpg" style={{ width: '100px' }} />
                           </div>
                           <div className="col-lg-8 col-md-8 col-12 mx-auto">
                              <h3 className="text-18">
                                 Contrary to popular belief, Lorem Ipsum is not simply random text
                              </h3>
                           </div>


                           <div className="col-lg-4 col-md-4 col-12 mx-auto">
                              <img src="img/onz2.jpg" style={{ width: '100px' }} />
                           </div>
                           <div className="col-lg-8 col-md-8 col-12 mx-auto">
                              <h3 className="text-18">
                              There are many variations of passages of Lorem Ipsum available
                              </h3>
                           </div>


                           <div className="col-lg-4 col-md-4 col-12 mx-auto">
                              <img src="img/onz2.jpg" style={{ width: '100px' }} />
                           </div>
                           <div className="col-lg-8 col-md-8 col-12 mx-auto">
                              <h3 className="text-18">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry
                              </h3>
                           </div>
                        </div>

                     </div>

                     <div className="col-lg-12 col-md-12 col-12 px-3 bg-recent-blogs mx-auto">
                        <h3 className="text-start text-20">Share on Social</h3>
                        <div className="blog-text-icon">
                              <p><i class="bi bi-facebook"></i></p>
                              <p><i class="bi bi-instagram"></i></p>
                              <p><i class="bi bi-twitter"></i></p>
                              <p><i class="bi bi-linkedin"></i></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

            <div className="padcontainer container">
            <Inputbox />
            </div>
            <Footersection />
         

      </div>
   )
}

export default Blogs;
function Poplanden(){
    return(
        <div>
            <section>
                <div className="container">
                    <div className="row my-4">
                        <div className="col-12 mx-auto">
                            <h2 className="text-start">POPULAIRE LANDEN</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row centersert gy-4 ">
                        <div className="col-lg-4 col-md-6  col-12 mx-auto">
                            <div className="poplanden">
                                <img src="img/landen1.png" className="img-fluid" alt="landen1" />
                                <a href="#">New</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mx-auto">
                            <div className="poplanden">
                                <img src="img/landen2.png" className="img-fluid" alt="landen1" />
                                <a href="#">10% 0ff</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mx-auto">
                            <div className="poplanden">
                                <img src="img/landen3.png"  className="img-fluid" alt="landen1"/>
                                <a href="#">5 TOUR</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Poplanden;
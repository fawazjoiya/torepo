
import Linktime from "../component/Link";


function Topimg() {
    return (
        <div className="topimgsetup w-100">
        <Linktime />
            
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center pt-5 mx-auto">
                        <h1>Gewoon ff weg?!</h1>
                        <h2>Vind jouw Holidream!</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="blackboser col-lg-8 col-md-8 col-12 mx-auto  mt-3 mx-auto">
                        <div className="dropdownset ">
                            <div className="dropdown drepbordt">
                                <button className="btn  dropdown-toggle dropdowcolset" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>

                                </ul>
                            </div>

                            <div className="dropdown  drepbordt secddrp ">
                                <button className="btn btn-secondary dropdown-toggle  dropdowcolset2 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>

                                </ul>
                            </div>

                            <div className="dropdown  drepbordt secddrp">
                                <button className="btn btn-secondary dropdown-toggle  dropdowcolset2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>

                                </ul>
                            </div>

                            <div className="lastdrp">

                                <p>vind jour ries</p>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
            <div className="underimgser">
                <img src="img/makeit.png" />
            </div>
        </div>
    )
}

export default Topimg;
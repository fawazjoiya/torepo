function Inputbox() {
    return (
        <div>
            <section className="my-4">
                <div className="container ">
                    <div className="row brownbg py-4">
                    <div className="col-lg-6 col-md-5 col-12 mx-auto  inputlefttext">
                        <p>Sign up to receive news and updates</p>
                        <h3>Subscribe Newsletter</h3>
                    </div>
                    <div className="col-lg-6 col-md-5 col-12 mx-auto inputsetupt ">
                        <div class="input-group ">
                            <input type="text" placeholder="enter your email address" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            <span class="input-group-text" id="inputGroup-sizing-default">submit</span>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Inputbox;
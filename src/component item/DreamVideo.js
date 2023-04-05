function DreamVideo() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row my-5">
                        <div className="dremcolset col-lg-6 col-md-6 col-12 mx-auto ">
                            <h3>Find your Dream Place</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.</p>
                            <button>read more</button>
                        </div>

                        <div className="video-tuning col-lg-6 col-md-6 col-12  mx-auto">
                        <iframe  src="https://www.youtube.com/embed/8VPPHATlcZw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default DreamVideo;
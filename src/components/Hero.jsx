export default function Hero() {
    return (
        <section className="hero">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <h1 className="main-heading">Essential  Vitamins</h1>

            <div className="hero-container">
                <div className="hero-content">
                    <p className="subtitle">Online Medical Supplies</p>
                    <h2>Get Your Vitamins <br/>& Minerals</h2>
                    <button className="explore-btn">Explore</button>
                </div>

                <div className="probiotic-card">
                    <div className="card-background"></div>
                    <img
                        src="/images/pb.png"
                        alt="Probiotics"
                        className="probiotic-image"
                    />
                </div>

                <div className="hero-features">
                    <div className="feature">
                        <div className="icon-container">
                            <img src="/images/vitamin.png" alt="Vitamins Icon" />
                        </div>
                        <div className="text-container">
                            <h3>Vitamins</h3>
                            <p>Increased vitamins and<br/>minerals in your diet.</p>
                        </div>
                    </div>

                    <div className="feature">
                        <div className="icon-container">
                            <img src="/images/wl.png" alt="Weight Loss Icon" />
                        </div>
                        <div className="text-container">
                            <h3>Weight Loss</h3>
                            <p>Weight Loss<br/>Find scientifically proven solutions.</p>
                        </div>
                    </div>

                    <div className="feature">
                        <div className="icon-container">
                            <img src="/images/ff.png" alt="Functional Foods Icon" />
                        </div>
                        <div className="text-container">
                            <h3>Functional Foods</h3>
                            <p>Functional Foods<br/>From protein powders to baby formula.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

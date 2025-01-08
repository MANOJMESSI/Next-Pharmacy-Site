import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-contact">
                <div className="contact-card">
                    <Image src="/images/ph.png" alt="Phone" width={50} height={50} />
                    <div className="info">
                        <p>Phone Number</p>
                        <h5>+974 3118 1843</h5>
                    </div>
                </div>
                <div className="contact-card">
                    <Image src="/images/mail.png" alt="Email" width={50} height={50} />
                    <div className="info">
                        <p>Email Address</p>
                        <h5>Elbritchqhr@gmail.com</h5>
                    </div>
                </div>
                <div className="contact-card">
                    <Image src="/images/loc.png" alt="Location" width={50} height={50} />
                    <div className="info">
                        <p>Office Location</p>
                        <h5>Ambassador Street, Zone 61</h5>
                    </div>
                </div>
            </div>

            <div className="footer-logo-message">
                <Image src="/images/logo.png" alt="Elbrit Logo" width={250} height={70} />
                <p>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>
            </div>

            <div className="footer-copyright">
                &copy; Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
            </div>
        </footer>
    );
}

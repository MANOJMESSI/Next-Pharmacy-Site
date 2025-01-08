import Image from "next/image";

export default function FeatureSection() {
    const features = [
        {
            icon: "/images/cs.png",
            title: "Clinically Studied",
            description: "All products that we offer have undergone lab and safety tests.",
        },
        {
            icon: "/images/veg.png",
            title: "Vegetarian Friendly",
            description: "We have a wide selection of vegetarian products to meet your needs.",
        },
        {
            icon: "/images/ind.png",
            title: "Made In India",
            description: "Shop local and explore health products made right here in India.",
        },
        {
            icon: "/images/fs.png",
            title: "Free Shipping",
            description: "We deliver to your door with no shipping costs on your orders.",
        },
        {
            icon: "/images/no.png",
            title: "No Risk",
            description: "We ensure that all products are safe and within their use-by date.",
        },
        {
            icon: "/images/gmo.png",
            title: "GMO Free",
            description: "Natural, no modified products and derivatives for those who need it.",
        },
    ];

    return (
        <section className="features-section">
            <div className="features-container">
                {features.map((feature, index) => (
                    <div className="features-card" key={index}>
                        <div className="icon-circle">
                            <Image src={feature.icon} alt={feature.title} width={50} height={40} />
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

import Image from "next/image";

export default function Ingredients() {
    const firstRow = [
        {
            title: "INGREDIENTS",
            subtitle: "Better Ingredients",
            description:
                "Only the best when you choose products offered on our platform – high-quality ingredients for high-quality products!",
            isHeader: true,
        },
        {
            title: "Vitamin C",
            description: "Vitamin C as ascorbic acid",
            image: "/images/cbg.png",
        },
        {
            title: "Vitamin B3",
            description: "Niacin for healthy gut and skin",
            image: "/images/vbg.png",
        },
    ];

    const secondRow = [
        {
            title: "Magnesium",
            description: "Boost energy and support muscle function",
            image: "/images/mbg.png",
        },
        {
            title: "Hyaluronic Acid",
            description: "For smooth, supple and soft skin!",
            image: "/images/hbg.png",
        },
        {
            title: "Lactobacillus",
            description: "Invigorate your gut microbiome",
            image: "/images/lbg.png",
        },
    ];

    return (
        <section className="ingredients-section">
            <div className="ingredient-grid first-row">
                {firstRow.map((ingredient, index) => (
                    <div
                        className={`ingredient-card ${
                            ingredient.isHeader ? "header-card" : ""
                        }`}
                        key={index}
                    >
                        {ingredient.isHeader ? (
                            <>
                                <h4>{ingredient.title}</h4>
                                <h2>{ingredient.subtitle}</h2>
                                <p>{ingredient.description}</p>
                            </>
                        ) : (
                            <>
                                <div className="ingredient-content">
                                    <h3>{ingredient.title}</h3>
                                    <p>{ingredient.description}</p>
                                    <a className="sees-more">See More</a>
                                </div>
                                <Image src={ingredient.image} alt={ingredient.title} width={300} height={200} />
                            </>
                        )}
                    </div>
                ))}
            </div>

            <div className="ingredients-grid second-row">
                {secondRow.map((ingredient, index) => (
                    <div className="ingredients-card" key={index}>
                        <div className="ingredients-content">
                            <h3>{ingredient.title}</h3>
                            <p>{ingredient.description}</p>
                            <a className="see-more">See More</a>
                        </div>
                        <Image src={ingredient.image} alt={ingredient.title} width={300} height={200} />
                    </div>
                ))}
                <div className="decorative-card">
                <Image src="/images/dbg.png" alt="Decorative Empty Card" width={100} height={180} />
                </div>
            </div>
        </section>
    );
}

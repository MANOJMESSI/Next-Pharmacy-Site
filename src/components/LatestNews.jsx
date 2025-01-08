import Image from "next/image";

export default function LatestNews() {
    const newsColumns = [
        {
            className: "news-column-1",
            cards: [
                {
                    id: 1,
                    date: "20 APR",
                    title: "The Covid-19 Epidemic in 2022 Is Back",
                    image: "/images/gum.png",
                },
                {
                    id: 2,
                    date: "20 APR",
                    title: "The Covid-19 Epidemic in 2022 Is Back",
                    image: "/images/pils.png",
                },
            ],
        },
        {
            className: "news-column-2",
            cards: [
                {
                    id: 3,
                    date: "20 APR",
                    title: "The Covid-19 Epidemic in 2022 Is Back",
                    image: "/images/gum.png",
                },
                {
                    id: 4,
                    title: "The Covid-19 Epidemic in 2023 Is Back",
                    image: "/images/pils.png",
                },
            ],
        },
        {
            className: "news-column-3",
            cards: [
                {
                    id: 5,
                    date: "20 APR",
                    title: "The Covid-19 Epidemic in 2023 Is Back",
                    image: "/images/gum.png",
                },
                {
                    id: 6,
                    date: "20 APR",
                    title: "The Covid-19 Epidemic in 2023 Is Back",
                    image: "/images/pils.png",
                },
            ],
        },
        {
            className: "news-column-4",
            cards: [
                {
                    id: 7,
                    date: "20 APR",
                    title: "The Covid-19 Epidemic in 2023 Is Back",
                    image: "/images/gum.png",
                },
                {
                    id: 8,
                    date: "17 MAR",
                    title: "Hac hendrerit mus nons semper suspendisse",
                    image: "/images/pils.png",
                },
            ],
        },
    ];

    return (
        <section className="latest-news-section">
            <div className="news-header">
                <h4>OUR BLOG</h4>
                <h2>Latest News</h2>
            </div>

            <div className="news-columns">
                {newsColumns.map((column, index) => (
                    <div className={`news-column ${column.className}`} key={index}>
                        <div className="news-grid">
                            {column.cards.map((item) => (
                                <div
                                    className={`news-card ${
                                        [1, 4, 5, 8].includes(item.id) ? "large-card" : ""
                                    }`}
                                    key={item.id}
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                    }}
                                >
                                    <div className="date-badge">{item.date}</div>
                                    <h3>{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

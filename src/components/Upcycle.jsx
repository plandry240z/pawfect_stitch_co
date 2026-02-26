import "../index.css";
import plarn_cat from "../images/green_cat.png";
import tshirt_cat from "../images/brown_cat.png";
import recycle_cat from "../images/gray_cat.png";

function Upcycle() {
    const upcycle = [
        {
            title: "Plarn",
            description: "Plarn is a type of yarn made from plastic bags. It is created by cutting plastic bags into strips and then tying them together to form a continuous strand. Plarn can be used for various crafting projects, such as crocheting or knitting, and is an eco-friendly way to repurpose plastic waste.",
            video: "https://youtu.be/bFjCRmB275M",
            resource: "https://www.myrecycledbags.com/my-pattern-links/#plasticbags/plarn",
            image: plarn_cat
        },
        {
            title: "T-Shirt Yarn",
            description: "Upcycled shirts are old or unused shirts that have been transformed into new and fashionable garments. This can involve cutting, sewing, and adding embellishments to create unique pieces of clothing. Upcycling shirts not only gives them a new life but also helps reduce textile waste and promotes sustainable fashion.",
            video: "https://youtu.be/xpyTG7oznZM",
            resource: "https://hearthookhome.com/t-shirt-yarn-crochet-patterns/",
            image: tshirt_cat
        },
        {
            title: "Why Upcycle vs. Recycle?",
            description: "Upcycling is the process of transforming waste materials or unwanted products into new, higher quality items. It helps reduce waste, conserve resources, and promote sustainability by giving new life to old items. Upcycling can take many forms, from creative DIY projects to innovative design solutions.",
            video: "https://youtu.be/xyz123",
            resource: "https://www.recyclingtoday.org/blogs/news/upcycling-vs-recycling-key-differences",
            image: recycle_cat
        }
    ]

    return (
        <section className="upcycle">
            <h1>Explore Upcycling Ideas</h1>
            <div className="upcycle-container">
                {upcycle.map((item, index) => (
                    <div className="upcycle-item" key={index}>
                        <aside>
                            <div className="upcycle-image" key={index}>
                                <img src={item.image} alt={item.title} />
                            </div>
                        </aside>
                        <div className="upcycle-title">
                            <h2>{item.title}</h2>
                        </div>
                        <div className="upcycle-description">
                            <p>{item.description}</p>
                        </div>
                        <div className="button-container">
                            <div className="upcycle-video">
                                <button><a href={item.video} target="_blank" rel="noopener noreferrer">Watch Video</a></button>
                            </div>
                            <div className="upcycle-resource">
                                <button><a href={item.resource} target="_blank" rel="noopener noreferrer">Learn More</a></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Upcycle;
import BlogItem from "./BlogItem";

const images = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/11691807/pexels-photo-11691807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Tom & Jerry",
    description:
      "Tom and Jerry was one show we never missed after coming from school. Despite the love-hate relationship between the cat and the mouse, this show taught us the importance of friendship.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1607748851687-ba9a10438621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    title: "Friends",
    description:
      "Friends is a Comedy TV show about 6 friends who go through just about every life experience imaginable together.I was really hooked on it. I remember it was on at 8:00 every Thursday and it was so important to be home on time for it.I also remember that my friends and I used to use catchphrases from the show. Like, “Could I BE any more ______?” or “How you doin’?” or “OH. MY. GOD!!!!”",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/4575406/pexels-photo-4575406.jpeg",
    title: "Virgin Cola",
    description:
      "Fair play to Richard Branson, he gets most things right. The madcap entrepreneur owns the world famous Virgin brand and runs successful airlines, train networks, music festivals and even now his own Formula One racing team. But Virgin Cola was a mistake.",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/9135083/pexels-photo-9135083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Yo-yos",
    description:
      "They say everything comes back around and in the late 90s the yoyo did return to the playgrounds of Britain, but unlike when my mum and dad’s generation were fascinated by them going up and down a piece of string, we took it to the next level.",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/12629104/pexels-photo-12629104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Spice Girls",
    description:
      "Simply the greatest thing to come out of the 90s, the Spice Girls dominated the entertainment industry during the second half of the decade and became the biggest thing on the planet overnight.",
  },

  {
    id: 6,
    src: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sega Mega Drive",
    description:
      "The Sega Mega Drive is to games consoles in the 90s as George Best was to football 30 year previously. Video gaming and football were obviously around before them but once they appeared on the scene the future would change forever.",
  },

  {
    id: 7,
    src: "https://images.pexels.com/photos/11795116/pexels-photo-11795116.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Swing",
    description:
      "Most of the girls are in love with swings irrespective of their age. Swinging in a swing makes them happy and gives them a peaceful feeling. Swinging just makes each of us calm and happy.",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/9067719/pexels-photo-9067719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Cricket",
    description:
      "The only childhood play, every bengali boy inherits as a child is Cricket.After Asr prayer, every boy would leave the house to play cricket. First they all divided into two teams, then tossed which team would bat first. Then they started playing.Sometimes there would be prizes for the winning team which added to the fun of the game.",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1600077063877-22118d6290eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Football",
    description:
      "All the boys loved to play football during monsoons. They had more fun playing football in the rain. After playing football in the rain, they all bathed together in the pond and returned home.",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/10347115/pexels-photo-10347115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Kabaddi",
    description:
      "Kabaddi is a form of bengali wrestling.The sport not only rekindles childhood memories, but also it is easy to observe people narrate their kabaddi stories every time there is a discussion on Pro Kabaddi or World Kabaddi League. Be it of getting ones t-shirt torn or beating up the high school bully. There is always a story of a lesser popular David and Goliath in that.",
  },

  {
    id: 11,
    src: "https://www.thesun.co.uk/wp-content/uploads/2022/09/LM_slapbracelet_offplat.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
    title: "Slap Bracelet",
    description:
      "The slap bracelet had two faces. It wasn't just a toy that could be extended and reformed, it was a serious fashion statement — perfect for kids on the cusp of childhood and adulthood, standing between the pre- and post-Internet eras. '90s kids liked their toys fashionable and their fashion playful, and slap bracelets gave them exactly that.",
  },
  // {
  //   id: 12,
  //   src: "https://images.pexels.com/photos/3109671/pexels-photo-3109671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   title: "Load-shedding",
  //   description:
  //     "At one time in Bangladesh there were many problems of load shedding. Every evening the electricity went out. When the electricity went out, all the children would go out of the house. They used to talk together, have fun, play together. But now these things are not seen anymore.",
  // },
];

const Blog = ({ needFullHeight }) => {
  return (
    <section
      className={`blog wrapper ${needFullHeight ? "min-h-100vh" : null}`}
    >
      <h2 className="section-title">Blog</h2>

      <div className="blog-wrapper">
        {images.map((image) => (
          <BlogItem key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Blog;

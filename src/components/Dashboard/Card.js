import "../../styles//Dashboard/Card.css";
import CardButtons from "./CardButtons";

function Card() {
  const posts = [
    {
      id: 1,
      title: "Mobile App Design",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magaliqua.",
    },
    {
      id: "2",
      title: "Web Development",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magaliqua.",
    },
    {
      id: "3",
      title: "Full Stack Development",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magaliqua.",
    },
    {
      id: "4",
      title: "Growth Management",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magaliqua.",
    },
  ];
  return (
    <div className="cards-content">
      {posts.map((post) => (
        <div key={post.id} className="each">
          <div className="card-header">
            {/* Card Header */}
            <h3 className="card-title">{post.title}</h3>
            <CardButtons />
          </div>
          <p className="card-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;

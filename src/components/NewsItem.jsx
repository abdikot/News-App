/* eslint-disable react/prop-types */
import image from "../assets/image.jpeg";

// eslint-disable-next-line react/prop-types
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      // bg=background  text=text                       my= margin-y  mx=margin-x  px=padding-x   py=padding-y
      className="card bg-dark   text-light  mb-3 d-inline-block my-3          mx-3         px-2           py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "325px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Stay ahead of the curve with our comprehensive coverage of today's most pressing stories. From groundbreaking developments to insightful analysis, our latest article delivers the information you need to stay informed and engaged."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

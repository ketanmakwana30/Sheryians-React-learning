const Card = ({ image, name, description }) => {
  return (
    <div>
      <div className="card">
        <img src={image} />
        <h2>{name}</h2>
        <p>{description} </p>
        <button>View profile</button>
      </div>
    </div>
  );
};

export default Card;

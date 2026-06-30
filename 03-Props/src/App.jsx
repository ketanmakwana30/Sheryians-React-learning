import "./Components/card.css";
import Card from "./Components/Card";

const App = () => {
  return (
    <div className="card-container">
      <Card
        name="Ankur prajapati"
        description="Backend Developer"
        image="https://media.licdn.com/dms/image/v2/D4D03AQGBTj2qoBxF1Q/profile-displayphoto-shrink_200_200/B4DZTVrVjaG8AY-/0/1738751696681?e=2147483647&v=beta&t=BFCzIcf6oveK_51txDYhJOXLR1QqJfM20srC7eGI5rQ"
      />
      <Card
        name="Sarthak sharma"
        description="Frontend Developer"
        image="https://media.licdn.com/dms/image/v2/D4D03AQGWo-MEzw3lPw/profile-displayphoto-scale_200_200/B4DZnyPuc3JcAc-/0/1760705834081?e=2147483647&v=beta&t=ZXWLu4u3ympEFichrBPOVjVyp7jP17LB6yWCTMmfDFM"
      />
      <Card
        name="Arin tivarii"
        description="Content Creator"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyIcpck3SGkSsXj8u2IMdUcGDiZnns8PJ0w&s"
      />
    </div>
  );
};

export default App;

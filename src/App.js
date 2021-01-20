// import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types"



const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:"http://www.maangchi.com/wp-content/uploads/2012/08/kimchi-tasting.jpg",
    rating:5
  },
  {
    id:2,
    name: "Ramen",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.V4QOhRbzCD9PNYnbjpp3mAHaEK%26pid%3DApi&f=1",
    rating:4.5
  },
  {
    id:3,
    name: "Ram skewerd",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GMhfPAZ8ilCtwtbt9sVlxgHaEK%26pid%3DApi&f=1",
    rating:5.1
  },
  {id:4,
    name: "Samgiopsal",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nlYzHbggcvJ_xXQPRqcazwHaFS%26pid%3DApi&f=1",
    rating:3.6
  }
  
]

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function Food({name, picture, rating}){
  console.log(name);
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5</h4>
    <img src={picture} alt={name} />
    </div>

}

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';

function Food({name, picture}){
  console.log(name);
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
    </div>

}

const foodILike = [
  {
    name: "Kimchi",
    image:"http://www.maangchi.com/wp-content/uploads/2012/08/kimchi-tasting.jpg"
  },
  {
    name: "Ramen",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.V4QOhRbzCD9PNYnbjpp3mAHaEK%26pid%3DApi&f=1"
  },
  {
    name: "Ram skewerd",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GMhfPAZ8ilCtwtbt9sVlxgHaEK%26pid%3DApi&f=1"
  },
  {
    name: "Samgiopsal",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nlYzHbggcvJ_xXQPRqcazwHaFS%26pid%3DApi&f=1"
  },
  
]

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish =>
       (
          <Food name={dish.name} picture={dish.image}/>
        )
      )}
    </div>
  );
}

export default App;

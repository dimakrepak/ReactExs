
// import BasicOfJSX from './Components/Basic2.2.jsx'
// import Boxes from './Components/Boxes3.1/boxes'
// import Quiz from './Components/Quiz/Quiz'
// import Btn from './Components/buttons'
import './Components/card/style.css'
import Card from './Components/card/card'
function App() {
  return (
    <div className="App">
      <Card 
       title={"Hello"}
       img={'https://picsum.photos/200?blur'}
       des={"Hello"}
       share={"Hello"}
       explore={"tttt"}
      />
      <Card
       title={"Hello"}
       img={'https://picsum.photos/200?cat'}
       des={"What"}
       share={"Ok"}
       explore={"Hello"} 
      />
      <Card 
       title={"Hello"}
       img={'https://picsum.photos/200'}
       des={"Nice"}
       share={"Cool"}
       explore={"Hello"}
      />
    </div>
  );
}

export default App;

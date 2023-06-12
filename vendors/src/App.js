import  data  from "../src/components/prds.json"
import  ProductRow  from './components/product';


function App() {
  return (
    <div className="App">
      <ProductRow items={data.lists.filter(item => item.name.length >= 3 )}/>
    </div>
  );
}

export default App;

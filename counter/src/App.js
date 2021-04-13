import logo from './logo.svg';
import './App.css';
import Products from "./components/Products";
import List from "./components/PurchasedItems";
import DataProvider from "./components/DataProvider";


// function withData(Component) {
//   return (props) => (
//       <DataProvider {...props}
//           render={(data) => {
//               return <Component data={data} />
//           }}
//       ></DataProvider>
//   );
// }

function App() {
  // const Product = withData(Products);
  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;

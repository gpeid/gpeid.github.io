import "./App.css";
import Layout from "./components/Layout/Layout";
import PortfolioNavigation from "./components/PortfolioNavigation/PortfolioNavigation";

function App() {

  return (
    <div className="App h-screen">
      <Layout>
        <PortfolioNavigation />
      </Layout>
    </div>
  );
}

export default App;

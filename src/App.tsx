import "./App.css";
import Layout from "./components/Layout/Layout";
import PortfolioNavigation from "./components/PortfolioNavigation";
import SummaryBlock from "./components/SummaryBlock";
import UtilityInfoBlock from "./components/UtilityInfoBlock";

function App() {

  return (
    <div className="App">
      <Layout>
        <div className="relative">
          <PortfolioNavigation />
          <SummaryBlock />
          <UtilityInfoBlock />
        </div>
      </Layout>
    </div>
  );
}

export default App;

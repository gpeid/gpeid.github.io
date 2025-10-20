import "./styles/App.css";
import Layout from "./components/Layout/Layout";
import PortfolioNavigation from "./components/PortfolioNavigation";
import SummaryBlock from "./components/SummaryBlock";
import UtilityInfoBlock from "./components/UtilityInfoBlock";
import useAppContext from "./context/useAppContext";
import HelperTextBlock from "./components/HelpTextBlock";
import CurrentGameLocationTextBlock from "./components/CurrentGameLocationTextBlock";

function App() {
  const context = useAppContext();
  return (
    <div className="App">
      <Layout theme={context.theme}>
        <div className="relative menus-block">
          {context.theme === 'ff8-theme' && <HelperTextBlock />}
          <PortfolioNavigation />
          <SummaryBlock />
          <UtilityInfoBlock />
          {context.theme === 'ff8-theme' && <CurrentGameLocationTextBlock />}
        </div>
      </Layout>
    </div>
  );
}

export default App;

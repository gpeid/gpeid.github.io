import "./styles/App.css";
import Layout from "./components/Layout/Layout";
import PortfolioNavigation from "./components/PortfolioNavigation";
import SummaryBlock from "./components/SummaryBlock";
import UtilityInfoBlock from "./components/UtilityInfoBlock";
import HelperTextBlock from "./components/HelpTextBlock";
import CurrentGameLocationTextBlock from "./components/CurrentGameLocationTextBlock";
import useTheme from "./context/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <div className="App">
      <Layout>
        <div className="max-h-[530px] pause-menu-block relative">
          {theme === 'ff8-theme' && <HelperTextBlock />}
          <PortfolioNavigation />
          <SummaryBlock />
          <UtilityInfoBlock />
          <CurrentGameLocationTextBlock />
        </div>
      </Layout>
    </div>
  );
}

export default App;

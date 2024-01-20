import Home from "./components/pages/Home";
import Layout from "./components/Layout";
import Router from "./components/Router/Router";
import { SearchProvider } from "./components/pages/search/SearchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <Router>
          <Layout>
            <Home />
          </Layout>
        </Router>
      </SearchProvider>
    </>
  );
}

export default App;

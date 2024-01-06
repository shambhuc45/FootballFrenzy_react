import Home from "./components/pages/Home";
import Layout from "./components/Layout";
import Router from "./components/Router/Router";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Home />
        </Layout>
      </Router>
    </>
  );
}

export default App;

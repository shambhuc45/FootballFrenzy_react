import Router from "./components/Router/Router";
import { SearchProvider } from "./components/pages/search/SearchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <Router />
      </SearchProvider>
    </>
  );
}

export default App;

// json-server --watch db.json --port 3001

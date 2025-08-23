
import Suggestions from "./Suggestions";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="feed">
        <Feed/> 
      </main>

      <aside className="suggestions">
        <Suggestions />
      </aside>
    </div>
  );
}

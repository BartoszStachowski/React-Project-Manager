import { NewProject } from "./components/NewProject";
import { ProjectSidebar } from "./components/ProjectSidebar";

function App() {
  return (
    <main className="my-8 flex h-screen gap-8">
      <ProjectSidebar />
      <NewProject />
    </main>
  );
}

export default App;

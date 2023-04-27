import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

export const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Luiz Prosdoskimi"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure non debitis, aut quam amet eius iusto est libero illum quo deserunt nihil odit ipsum, nemo alias nam? Eos, culpa laudantium!"
          />
          <Post
            author="Felipe John"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure non debitis, aut quam amet eius iusto est libero illum quo deserunt nihil odit ipsum, nemo alias nam? Eos, culpa laudantium!"
          />
        </main>
      </div>
    </div>
  );
};

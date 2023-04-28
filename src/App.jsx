import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/loupprodi.png",
      name: "Luiz Prosdoskimi",
      role: "Web developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      // { type: "link", content: "#novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date("2023-04-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/chprosdoskimi.png",
      name: "Carlos Prosdoskimi",
      role: "Web developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      // { type: "link", content: "#novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date("2023-04-27 20:00:00"),
  },
];

//iteração

export const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                key={post.id}
              />
            );
          })}
          {/* <Post
            author="Luiz Prosdoskimi"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure non debitis, aut quam amet eius iusto est libero illum quo deserunt nihil odit ipsum, nemo alias nam? Eos, culpa laudantium!"
          />
          <Post
            author="Felipe John"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure non debitis, aut quam amet eius iusto est libero illum quo deserunt nihil odit ipsum, nemo alias nam? Eos, culpa laudantium!"
          /> */}
        </main>
      </div>
    </div>
  );
};

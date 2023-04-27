import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/loupprodi.png"
          />
          <div className={styles.authorInfo}>
            <strong>Luiz Prosdoskimi</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <div>
          <time title="11 de Maio às 11h13" dateTime="2023-04-27 11:13:00">
            Publicado há 1h
          </time>
        </div>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋 </p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="#">jane.design/doctorcare </a>
        </p>

        <p>
          <a href="#"> #novoprojeto </a>
          <a href="#">#nlw </a>
          <a href="#"> #rocketseat </a>
        </p>
      </div>
    </article>
  );
};

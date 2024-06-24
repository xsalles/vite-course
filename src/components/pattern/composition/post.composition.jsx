import styles from "../../styles.module.css";

export default function Post() {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postName}>
        <img
          className={styles.postImageAuthor}
          src="https://avatars.githubusercontent.com/u/160802244?v=4"
          alt=""
        />
        <div className={styles.postProfile}>
        <strong className={styles.postProfileName}>Pedro Sales</strong>
        <p>Dev Front-End</p>
        </div>
        </div>
        
        <div className={styles.postPublication}>
          <p>
            Fala Galera, meu nome é Pedro Sales e sou um furuo Desenvolvedor
            Web, estou produzindo aplicações no react e estudando muito para
            crescer na carreira!
            <br />
            <br />
            <a href="#">#Segue ai</a>
            <br />
            <br />
            <p>GitHub: <a href="https://github.com/xsalles">https://github.com/xsalles <br /></a>
               Instagram: <a href="https://www.instagram.com/xs.salles/?next=%2F">https://www.instagram.com/xs.salles/?next=%2F</a> <br />
               LinkedIn : <a href="https://www.linkedin.com/in/me/">https://www.linkedin.com/in/me/</a></p>
          </p>
          
        </div>
        <div className={styles.postLine}></div>
        <div className={styles.postFeedback}>
            <strong className={styles.postTitleFeedback}>Deixe seu feedback</strong>
            
            <textarea className={styles.postTextArea} placeholder="Nossa amigo, adorei seu post!"></textarea>
            <button className={styles.postButton}>Publicar</button>
        </div>
        
    </div>
  );
}

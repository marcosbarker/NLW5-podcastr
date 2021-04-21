import styles from './styles.module.scss';

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="logo Podcastr"/>

      <p>O melhor para você ouvir, sempre</p>

      <span>Qui, 8 Abril</span>
    </header>
  );
}
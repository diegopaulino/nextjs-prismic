import Image from "next/image";
import logo from "../../../public/logo.svg";
import { ActiveLink } from "../ActiveLink";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a>
            <Image src={logo} alt="Logo Header" />
          </a>
        </ActiveLink>

        <nav>
          <ActiveLink legacyBehavior href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink
            legacyBehavior
            href="/posts"
            activeClassName={styles.active}
          >
            <a>Conteúdos</a>
          </ActiveLink>

          <ActiveLink
            legacyBehavior
            href="/sobre"
            activeClassName={styles.active}
          >
            <a>Quem somos?</a>
          </ActiveLink>
        </nav>

        <a href="https://google.com" className={styles.readyButton}>
          COMEÇAR
        </a>
      </div>
    </header>
  );
}

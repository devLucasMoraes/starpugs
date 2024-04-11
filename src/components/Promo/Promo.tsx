import Image from "next/image";
import styles from "./Promo.module.scss";

export default function Promo() {
  return (
    <section id="promo" className={styles.promo}>
      <div className={styles.content}>
        <h2 className="title dark-bg">Conheça nossa nova linha</h2>
        <p className="dark-bg">
          Canecas, almofadas e muitas opções de cafés deliciosos para você!
        </p>
      </div>
      <Image
        className={styles.image}
        src="/caneca.png"
        alt="caneca starpugs"
        width={502}
        height={474}
      />
    </section>
  );
}

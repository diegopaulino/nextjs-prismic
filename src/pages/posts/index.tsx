import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import thumbImg from "../../../public/images/thumb.png";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Blog | Sujeito Programador</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src={thumbImg}
                alt="Post título 1"
                width={720}
                height={410}
                quality={100}
              />
              <strong>Criando meu primeiro aplicativo</strong>
              <time>21/06/2023</time>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley{" "}
              </p>
            </a>
          </Link>

          <div className={styles.buttonNavigate}>
            <div>
                <button>
                    <FiChevronsLeft size={25} color="#fff" />
                </button>

                <button>
                    <FiChevronLeft size={25} color="#fff" />
                </button>
            </div>

            <div>
                <button>
                    <FiChevronsRight size={25} color="#fff" />
                </button>

                <button>
                    <FiChevronRight size={25} color="#fff" />
                </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

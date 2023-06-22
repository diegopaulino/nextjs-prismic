import { getPrismicClient } from "@/services/prismic";
import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import styles from "./styles.module.scss";

type Content = {
  title: string;
  description: string;
  banner: string;
  facebook: string;
  instagram: string;
  youtube: string;
  linkedin: string;
};

interface ContentProps {
  content: Content;
}

export default function About({ content }: ContentProps) {
  return (
    <>
      <Head>
        <title>Quem somos? | Nome Empresa</title>
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.containerHeader}>
            <section className={styles.ctaText}>
              <h1>{content.title}</h1>
              <p>{content.description}</p>

              <a href={content.youtube}>
                <FaYoutube size={40} />
              </a>

              <a href={content.instagram}>
                <FaInstagram size={40} />
              </a>

              <a href={content.facebook}>
                <FaFacebook size={40} />
              </a>

              <a href={content.linkedin}>
                <FaLinkedin size={40} />
              </a>
            </section>

            <img src={content.banner} alt="Sobre Sujeito Programador" />
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query([
    Prismic.predicates.at("document.type", "about"),
  ]);

  const { title, description, banner, facebook, instagram, youtube, linkedin } =
    response.results[0].data;

  const content = {
    title: RichText.asText(title),
    description: RichText.asText(description),
    banner: banner.url,
    facebook: facebook.url,
    instagram: instagram.url,
    youtube: youtube.url,
    linkedin: linkedin.url,
  };

  return {
    props: {
      content,
    },
    revalidate: 60 * 15,
  };
};

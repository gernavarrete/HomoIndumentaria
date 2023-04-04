import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PageLayout from "@/components/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PageLayout title="Homo Indumentaria - Home">
      <div className={styles.main}>
        <h1>Pagina de Homo Indumentaria</h1>
      </div>
    </PageLayout>
  );
}

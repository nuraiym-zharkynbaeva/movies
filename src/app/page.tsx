import Image from "next/image";
import styles from "./page.module.css";
import ExampleSection from "@/widgets/home/example/ExampleSection";
import CatalogSection from "@/widgets/home/catalog/CatalogSection";


export default function Home() {
  return (
    <div className={styles.page}>
      <ExampleSection />
      <CatalogSection />
    </div>
  );
}

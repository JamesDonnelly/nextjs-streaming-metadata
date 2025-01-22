import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Example title',
  description: 'Example description',
}

export default function Page() {
  return (
    <div className={styles.page}>
      Home page
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Nested page title',
  description: 'Nested page description',
}

export default function Page() {
  return (
    <div className={styles.page}>
      Nested page
    </div>
  );
}

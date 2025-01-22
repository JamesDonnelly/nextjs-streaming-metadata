import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Nested page title',
  description: 'Nested page description',
}

export default function Page() {
  return (
    <p>
      Nested page
    </p>
  );
}

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Example title',
  description: 'Example description',
}

export default function Page() {
  return (
    <p>
      Home page
    </p>
  );
}

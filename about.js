```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export default async function About() {
  const session = await unstable_getServerSession(authOptions);

  if (!session) {
    return (
      <div>
        <h1>Please Sign In</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome, {session.user.name}</p>
    </div>
  );
}
```
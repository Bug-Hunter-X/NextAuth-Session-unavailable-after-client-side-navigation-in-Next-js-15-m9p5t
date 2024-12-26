```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session: session,
    },
  };
}
export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome, {session.user.name}</p>
    </div>
  );
}
```
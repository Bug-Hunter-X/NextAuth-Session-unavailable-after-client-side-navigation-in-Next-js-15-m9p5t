# NextAuth Session Issue on Client-Side Navigation

This repository demonstrates a common issue encountered when using NextAuth.js with client-side navigation in Next.js 15.  The problem arises when trying to access the session object on a page that's navigated to via a client-side <Link> component, as the session data might not be immediately available on the client.

## Steps to Reproduce

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to the `/about` page by clicking the link on the home page.
5. Observe the error message or unexpected behavior.  The About page will display an error because the session object is not immediately available on the client-side.

## Solution

The provided solution uses `getServerSideProps` to fetch the session on the server-side before rendering the About page. This guarantees the session is available for display. The solution also includes robust error handling.

## Note

The error you are trying to fix can be addressed in different ways depending on your use case. Please review the solution for more context and adapt the code to your specific project's structure and needs.
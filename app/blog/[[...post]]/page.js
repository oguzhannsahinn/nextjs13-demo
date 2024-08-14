export default function PostPage({ params }) {
  return (
    <>
      <h3>Optional Catch-all routes</h3>
      <div>Post: {params.post}</div>
    </>
  );
}

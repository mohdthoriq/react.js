import useFetch from "../hook/useFetch";

function PostViewer({ postId }) {
  const { data: post, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) return <p>Memuat postingan...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;
  if (!post) return <p>Postingan tidak ditemukan.</p>;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default PostViewer
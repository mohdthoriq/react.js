// useEffect(() => {
//     // bikin fungsi async di dalam useEffect
//     const fetchData = async () => {
//       try {
//         // Promise.all biar dua fetch jalan barengan
//         const [userRes, postRes] = await Promise.all([
//           axios.get("https://jsonplaceholder.typicode.com/users"),
//           axios.get("https://jsonplaceholder.typicode.com/posts")
//         ]);

//         setUsers(userRes.data);
//         setPosts(postRes.data);
//       } catch (err) {
//         console.error("Error saat fetch data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
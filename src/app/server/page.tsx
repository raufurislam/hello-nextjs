export default async function ServerPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // ssg (cache: "force-cache"), it fetches once (at build)
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h1>This is ServerPage component</h1>
      <h2>Title: {data?.title}</h2>
      <p>Body: {data?.body}</p>
    </div>
  );
}

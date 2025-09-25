export const dynamic = "force-dynamic";

export default async function ServerPage() {
  const res = await fetch("https://randomuser.me/api", {
    cache: "force-cache", // by default nature. its ssg type. It stores data.
    // cache: "no-store", // disables caching, always fresh
  });
  const data = await res.json();

  const user = data.results[0]; // ✅ extract first user

  return (
    <div>
      <h1>This is ServerPage component</h1>
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="rounded-full w-32 h-32"
      />
      <h2>
        Name: {user.name.title} {user.name.first} {user.name.last}
      </h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Cell: {user.cell}</p>
      <p>
        Location: {user.location.city}, {user.location.country}
      </p>
    </div>
  );
}

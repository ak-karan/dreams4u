const posts = import.meta.glob("../content/blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export default function AdminBlogs() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-2xl font-bold mb-6">Blog Admin</h1>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Blog</th>
            <th>Date</th>
            <th>Slug</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(posts).map((path) => {
            const slug = path.split("/").pop().replace(".md", "");
            return (
              <tr key={slug} className="border-t">
                <td className="p-3">{slug}</td>
                <td>—</td>
                <td>/blog/{slug}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

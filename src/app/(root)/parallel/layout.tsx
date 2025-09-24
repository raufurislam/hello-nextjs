export default function ParallelLayout({
  children,
  tasks,
  members,
}: {
  children: React.ReactNode;
  tasks: React.ReactNode;
  members: React.ReactNode;
}) {
  return (
    <div>
      <h1>This is Parallel Layout component</h1>
      {children}
      <div className="flex gap-4">
        {members}
        {tasks}
      </div>
    </div>
  );
}

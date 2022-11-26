export default function SkeletonLoader() {
  return (
    <div className="w-full h-fit my-4">
      {Array(4)
        .fill(1)
        .map((_, i) => (
          <div
            className="w-full h-12 bg-secondary/30 rounded-md my-2"
            key={i}
          />
        ))}
    </div>
  );
}

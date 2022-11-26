export default function Album({ data, i }) {
  return (
    <div className="w-full h-52">
      <div className="w-full h-[60%] overflow-hidden">
        <img
          src={`/src/assets/images/${i + 1}.jpg`}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="border-b-2 border-secondary flex flex-col justify-center py-4 pl-4 rounded-lg">
        <p className="text-base font-bold">Song Name</p>
        <p className="text-sm font-medium">Song Artist</p>
      </div>
    </div>
  );
}

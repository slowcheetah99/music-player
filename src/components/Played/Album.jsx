export default function Album({ data, i }) {
  return (
    <div className="w-full h-52">
      <div className="w-full h-[60%] overflow-hidden">
        <img
          src={data?.attributes?.artwork?.url}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="border-b-2 border-secondary flex flex-col justify-center py-4 pl-4 rounded-lg">
        <p className="text-base font-bold  w-44 text-ellipsis overflow-hidden whitespace-nowrap">
          {data.attributes.name}
        </p>
        <p className="text-sm font-medium">{data.attributes.artistName}</p>
      </div>
    </div>
  );
}

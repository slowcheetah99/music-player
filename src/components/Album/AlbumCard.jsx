export default function AlbumCard({ item }) {
  //audio is on item.previews.url
  //artist name is on item.artistName
  return (
    <div className="w-full h-72">
      <div className="w-full h-[60%] overflow-hidden">
        <img
          src={item?.artwork?.url}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="border-b-2 border-secondary flex flex-col justify-center py-4 pl-4 rounded-lg">
        <p className="text-base font-bold  w-44 text-ellipsis overflow-hidden whitespace-nowrap text-secondary">
          {item.name}
        </p>
        <p className="text-sm font-medium text-secondary">{item.artistName}</p>
      </div>
    </div>
  );
}

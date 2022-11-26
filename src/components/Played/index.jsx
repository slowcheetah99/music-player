import Album from "./Album";
export function AlbumMeta({ item, i }) {
  return (
    <>
      {Object.values(item).map((val, i) => (
        <Album data={val} key={i} />
      ))}
    </>
  );
}

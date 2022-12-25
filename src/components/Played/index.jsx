import Album from "./Album";
export function AlbumMeta({ item, i }) {
  return (
    <>
      <Album data={item} key={i} />
    </>
  );
}

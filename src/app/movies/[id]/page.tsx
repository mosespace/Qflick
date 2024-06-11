export default function MoviePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div className='card text-white text-3xl'>{id}</div>;
}

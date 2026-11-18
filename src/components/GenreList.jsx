export default function GenreList({ genres, setCurrentGenre }) {
  return (
    <section>
      <h2>Genres</h2>

      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <button
              type="button"
              onClick={() => setCurrentGenre(genre.name)}
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
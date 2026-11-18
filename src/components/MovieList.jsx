export default function MovieList({ movies }) {
  return (
    <section>
      <h2>Movies</h2>

      {movies.length === 0 ? (
        <p>No movies found for this genre.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>Director: {movie.director}</p>
              <p>Released: {movie.yearReleased}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
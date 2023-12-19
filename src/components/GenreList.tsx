import useGenres from "../hooks/useGenres";

export const GenreList = () => {
  const { genres, isLoading, error } = useGenres();
  return <>{genres.map((genre) => genre.name)}</>;
};

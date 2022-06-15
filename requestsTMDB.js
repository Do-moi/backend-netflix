const keyAPIMovie = "df771747fc64bb66bffe2f2b1e6b6e50";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${keyAPIMovie}&language=en-us`,
  fetchNetflixOriginals: `/discover/movie?api_key=${keyAPIMovie}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${keyAPIMovie}&language=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${keyAPIMovie}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${keyAPIMovie}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${keyAPIMovie}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${keyAPIMovie}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${keyAPIMovie}&with_genres=99`,
};
module.exports = { requests, keyAPIMovie };

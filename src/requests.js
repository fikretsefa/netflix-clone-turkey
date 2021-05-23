const API_KEY = "[YOUR_API_KEY]";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=tr-TR`,
    fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=tr-TR`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=tr-TR&region=TR`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=tr-TR`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=tr-TR`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=tr-TR`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=tr-TR`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=tr-TR`,
}


export default requests;

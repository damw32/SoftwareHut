import http from '../utils/http';
import { apikey } from '../key';
const url = 'http://www.omdbapi.com/';
const movieService = {
    searchByName: async (name: string, page: number) => {
        try{
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            const responce = await <any>http.get(url, {
                apikey: apikey,
                s: name,
                page
            });
            if(responce?.Error){
                console.log(responce.Error);
                return null;
            }
            else{
                return{
                    totalResults: parseInt(responce.totalResults, 10),
                    movies: responce.Search.map((movie: any)=> ({
                        id: movie.imdbID,
                        poster: movie.Poster,
                        title: movie.Title,
                        type: movie.Type,
                        year: movie.Year,
                    }))
                }
            }
        }catch(error){
            console.log(error);
        }
    },
    getById: async (id: string) => {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const responce = await <any>http.get(url, {
            apikey: apikey,
            i: id,
        });
    }
};
export default movieService;
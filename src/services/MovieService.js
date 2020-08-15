import axios from 'axios/index';
import { 
    API_BASE, 
    PARAMS_DEFAULT 
} from 'src/constants/Config';

const API = API_BASE + "/movie";

class MovieService {

    getNowPlaying(){
        return axios({
            method: 'GET',
            url: `${ API }/now_playing`,
            params: PARAMS_DEFAULT,
            transformResponse(data) {
                if(data){
                    data = JSON.parse(data);
                }
                return data;
            }
        });
    }

    getMovieDetails(id){
        return axios({
            method: 'GET',
            url: `${ API }/${ id }`,
            params: PARAMS_DEFAULT,
            transformResponse(data) {
                if(data){
                    data = JSON.parse(data);
                }
                return data;
            }
        });
    }
}

export default new MovieService();
import axios from 'axios/index';
import { API_BASE, PARAM_API_KEY } from 'src/constants/Config';

const API = API_BASE + "/movie/now_playing";

class MovieService {

    getNowPlaying(){
        return axios({
            method: 'GET',
            url: `${API}?${ PARAM_API_KEY }`,
            headers: {
				'content-type': 'multipart/form-data'
			},
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
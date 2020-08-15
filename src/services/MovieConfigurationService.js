import axios from 'axios/index';
import { 
    API_BASE,
    API_KEY, 
} from 'src/constants/Config';

const API = API_BASE + "/configuration";

class MovieConfigurationService {

    getConfigurations(){
        return axios({
            method: 'GET',
            url: `${ API }`,
            params: {
                api_key: API_KEY
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

export default new MovieConfigurationService();
import MovieConfigurationService from 'src/services/MovieConfigurationService';

export const LOAD_CONFIGURATIONS = 'LOAD_CONFIGURATIONS';
export const CLEAN_CONFIGURATIONS = 'CLEAN_CONFIGURATIONS';

export const getConfigurations = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        MovieConfigurationService.getConfigurations()
            .then((response) => {
                if(response.data && response.data.images) {
                    let data = response.data.images;
                    let filter = data.logo_sizes ? data.logo_sizes.filter((item) => item === "w500") : null;
                    let configuration = {
                        imageURL: data.base_url,
                        size: filter && filter.length > 0 ? filter[0] : data.logo_sizes[0]
                    };
                    dispatch(cleanConfigurations());
                    dispatch({ type: LOAD_CONFIGURATIONS, payload: configuration });
                    resolve(configuration);
                } else {
                    reject();
                }
            })
            .catch((error) => {
                reject();
            });
    });
};

export const cleanConfigurations = () => (dispatch) => {
    dispatch({ type: CLEAN_CONFIGURATIONS });
};
import MovieConfigurationService from 'src/services/MovieConfigurationService';

export const LOAD_CONFIGURATIONS = 'LOAD_CONFIGURATIONS';
export const CLEAN_CONFIGURATIONS = 'CLEAN_CONFIGURATIONS';

export const getConfigurations = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        MovieConfigurationService.getConfigurations()
            .then((response) => {
                if(response.data && response.data.images) {
                    let data = response.data.images;
                    let posterFilter = data.logo_sizes ? data.poster_sizes.filter((item) => item === "w342") : null;
                    let backdropFilter = data.backdrop_sizes ? data.backdrop_sizes.filter((item) => item === "original") : null;
                    let configuration = {
                        imageURL: data.base_url,
                        posterSize: posterFilter && posterFilter.length > 0 ? posterFilter[0] : data.poster_sizes[0],
                        backdropSize: backdropFilter && backdropFilter.length > 0 ? backdropFilter[0] : data.backdrop_sizes[0]
                    };
                    dispatch(cleanConfigurations());
                    dispatch({ type: LOAD_CONFIGURATIONS, payload: configuration });
                    resolve(configuration);
                } else {
                    reject("No se encontraron resultados para la configuración");
                }
            })
            .catch((error) => {
                reject("Error de conexión con el Servicio [Configuration]");
            });
    });
};

export const cleanConfigurations = () => (dispatch) => {
    dispatch({ type: CLEAN_CONFIGURATIONS });
};
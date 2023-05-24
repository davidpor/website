new Vue({
    el: '#app',
    data() {
        return {
            photos: []
        };
    },
    mounted() {
        this.fetchPhotos();
    },
    methods: {
        fetchPhotos() {
            axios.get('https://api.unsplash.com/photos/random/?client_id=YyWZeLzdfc6svoCSgqFCohU6WiMPVV4M4ZxJ2vTW-I4', {
                headers: {
                    Authorization: 'rTSJR64nAGJqTKe04npYFqb1pYQw5EiyAlTwggFZ0e4',
                },
                params: {
                    count: 1 // Cambia este valor según cuántas imágenes deseas mostrar
                }
            })
            .then(response => {
                this.photos = response.data;
            })
            .catch(error => {
                console.log('Error al cargar las imágenes', error);
            });
        }
    }
});
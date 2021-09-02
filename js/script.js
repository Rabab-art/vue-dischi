console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        sentence: '',
    },
    methods: {},
    created() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/sentence')
            .then((res) => {
                // runs in case of success
                const response = res.data.response;
                console.log(response);
                this.sentence = response;
            })
            .catch((error) => {
                // runs in case of error
                console.log(error);
            })
            .then(() => {
                // runs in any case
            });
    },
});
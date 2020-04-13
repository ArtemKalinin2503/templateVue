<template>
    <div class="hello">
        <h1 @click="test">{{count}}</h1>
        <p>{{this.localData}}</p>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapState} from 'vuex';

    export default {
        name: 'HelloWorld',
        //Props
        props: {
            msg: String
        },
        //Локальный объект
        data() {
            return {
                localData: 'test'
            }
        },
        //Отработает раньше всех
        computed: {
            ...mapGetters(['getCount']),
            ...mapState(['count'])
        },
        //Сработает при загрузке компонента
        mounted() {
            console.log(this.count)
        },
        //Methods
        methods: {
            ...mapActions(['actIncrement']),
            test() {
                this.$store.dispatch("actIncrement");
                console.log(this.count);
            }
        }

    }
</script>

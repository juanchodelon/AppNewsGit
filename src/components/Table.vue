<template>
    <div>
        <div class="container card padding" v-for="I in filter" :key="I.id">
            <div class="Cheader">
                <p class="categoria cat semibold Jstart">{{I.categoria}}</p>
                <p class="date second semibold Jend">{{moment(I.date).fromNow()}}</p>
            </div>
            <div class="Ccontent">
                <p>{{I.content}}</p>
            </div>
            <div class="Cimg Jcenter" v-if="I.img">
                <img class="Jcenter" :src="I.url">
            </div>
        </div>
    </div>
</template>

<script>

var moment = require('moment');
import {newsRef} from '../config'
import { bus } from '../main';
export default {
    name: 'Table',
    firebase:{
        Items: newsRef,   
    },
    data(){
        return{
            moment: moment,
            search: '',
            categoria: ' ',
            posts: [],
        }
    },
    created(){
        bus.$on('categoria', data => {
			this.categoria = data;
        });
        bus.$on('busqueda', data => {
			this.search = data;
        });
    },
    computed:{
        filter: function(){
            if(this.search == ''){
                return this.Items.reverse().filter((I) => I.categoria.match(this.categoria));
            }else{
                return this.Items.reverse().filter((I) => I.content.match(this.search)); 
            }
        }
    },
}
</script>

<style scoped>
.container{
    grid-template-rows: auto auto auto;
    max-width: auto;
}
.Cheader{
    grid-row-start: 1;
    grid-row-end: 2;
    display: grid;
    grid-template-columns: auto auto;
}
.Cimg{
    grid-row-start: 3;
    grid-row-end: 4;
    width: 100%;
    max-width: 30rem;
}
.Ccontent{
    grid-row-start: 2;
    grid-row-end: 3;
    margin: 1rem 0;
}
img{
    width: 100%;
    height: auto;
    max-height: 40rem;
}
</style>



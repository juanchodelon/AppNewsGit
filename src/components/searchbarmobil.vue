<template>
    <div>
        
        <div id="searchBar" class="card">
            <input type="search" v-model="busqueda" placeholder="Buscar">
        </div>
    </div>
</template>

<script>
import { bus } from '../main';
export default {
    data(){
        return{
            busqueda: '',
        }
    },
    watch: {
        busqueda: function(){bus.$emit('busqueda', this.busqueda); },
    },
    methods:{
        cancel: function(){
            bus.$emit('searchB', false);
        }
    }
}
</script>

 <style scoped>
 #back{
    background-color: rgba(0,0,0,0.2);
     position: fixed;
     top: 0;
     bottom: 0;
     right: 0;
     left: 0;
}
    #searchBar{
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
    }
    input{
        width: 100%;
        padding: 1rem;
    }
 </style>
 
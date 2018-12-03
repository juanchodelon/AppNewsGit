<template>
    <div>
        <div id="menu" class="card">
            <h3 class="semibold cat Mheader">Categorias</h3>
            <ul>
                <li class="semibold cat btn" @click="categoria = c.value"  v-for="c in categorias" v-bind:key="c.id">{{c.title}}</li>
            </ul>
        </div>

        <div id="searchBar" class="card">
            <input type="search" v-model="busqueda" placeholder="Buscar">
        </div>
    </div>
</template>

<script>
import { bus } from '../main';
import { functions } from 'firebase';
export default {
    data(){
        return{
            categoria: '',
            busqueda: '',
            categorias:[
                { title: 'Todo', value: ''},
                { title: 'Nacionales', value: 'Nacional'},
                { title: 'Internacionales', value: 'Internacional'},
                { title: 'Deportes', value: 'Deportes'},
                { title: 'Clasificados', value: 'Clasificados'},
				{ title: 'Varios', value: 'Varios'},
            ],
        }
    },
    watch: {
        categoria: function(){ bus.$emit('categoria', this.categoria); },
        busqueda: function(){bus.$emit('busqueda', this.busqueda); },
    }
}
</script>

<style scoped>

#menu li{
    padding: 1rem 2rem;
}
#menu li:hover{
    background-color: #eee;
}
#menu .Mheader{
    padding: 1rem 2rem;
    background-color: #2196f3;
    color: #fff;
}
#searchBar input{
    width: 100%;
    padding: 1rem;
    font-size: 14px;
    border: none;
}
@media screen and (max-width: 767px){ 
  #searchBar input{
    display: none;
  }
}
</style>



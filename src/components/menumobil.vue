<template>
    <div>
        <div id="back" class="" @click="cancel"></div>
        <div id="Mmenu" class="card">
            <h3 class="semibold cat Mheader">Categorias</h3>
            <ul>
                <li class="semibold cat btn" @click="categoria = c.value"  v-for="c in categorias" v-bind:key="c.id">{{c.title}}</li>
            </ul>
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
            categorias:[
                { title: 'Todo', value: ''},
                { title: 'Nacionales', value: 'Nacional'},
                { title: 'Internacionales', value: 'Internacional'},
                { title: 'Deportes', value: 'Deportes'},
                { title: 'Clasificados', value: 'Clasificados'},
				{ title: 'Politica', value: 'Politica'},
                { title: 'Cultura', value: 'Cultura'},
                { title: 'Anuncios', value: 'Anuncios'},
                { title: 'Varios', value: 'Varios'},
            ],
        }
    },
    watch: {
        categoria: function(){ bus.$emit('categoria', this.categoria); },
    },
    methods:{
        cancel: function(){
            bus.$emit('Mmenu', false);
        }
    }
}
</script>

 <style scoped>
 #Mmenu{
     position: fixed;
     top: 0;
     bottom: 2rem;
     left: 0;
     overflow: auto;
 }
 #Mmenu li{
    padding: 1rem 5rem;
}
#Mmenu li:hover{
    background-color: #eee;
}
#Mmenu .Mheader{
    padding: 1rem 2rem;
    background-color: #2196f3;
    color: #fff;
}
#back{
    background-color: rgba(0,0,0,0.2);
     position: fixed;
     top: 0;
     bottom: 0;
     right: 0;
     left: 0;
}
 </style>
 
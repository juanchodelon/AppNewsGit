<template>
    <div>
        <div id="header" class="card">
            <i class="material-icons ico" @click="M">menu</i>
            <i class="material-icons ico" @click="A">add_circle</i>
            <i class="material-icons ico" @click="S">search</i>
        </div>
    </div>
</template>

<script>
import { bus } from '../main';
export default {
    data(){
        return{
            menu: false,
            add: false,
            search: false,
        }
    },
    methods:{
        M: function(){
            this.menu = !this.menu;
            this.add = false;
            this.search = false;
        },
        A: function(){
            this.menu = false;
            this.add = !this.add;
            this.search = false;
        },
        S: function(){
            this.menu = false;
            this.add = false;
            this.search = !this.search;
        }
    },
    watch: {
        menu: function(){ bus.$emit('Mmenu', this.menu); },
        search: function(){bus.$emit('searchB', this.search); },
        add: function(){bus.$emit('modal', this.add); },
    }
}
</script>

 <style scoped>
#header{
  position: fixed;
  display: grid;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0.6rem;
  margin: 0;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
}
.ico{
    font-size: 30px;
    color: #546e7a;
    cursor: pointer;
}
 </style>
 
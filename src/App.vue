<template>
  <div id="app" class="container">
    
    <Form id="add" v-if="modal"/>

    <div id="conts">
      <div id="btnAdd" class="card padding" @click="modal = true">
        <p class="second semibold">hey! Cuentanos que ha pasado</p>
      </div>
      <Table class="tables"/>
    </div>
    <Menu id="Menu"/>
    <Mmobil id="Mmobil" v-if="Mmenu"/>
    <Smobil id="Smobil" v-if="Sbar"/>
    <Hmobil id="Hmobil"/>
  </div>
</template>

<script>
import Form from './components/Form'
import Add from './components/Add'
import Table from './components/Table'
import Menu from './components/Menu'
import Hmobil from './components/headerMobil'
import Mmobil from './components/menumobil'
import Smobil from './components/searchbarmobil'
import { bus } from './main'
export default {
  name: 'App',
  components: {
    Form,
    Table,
    Menu,
    Hmobil,
    Mmobil,
    Smobil,
    Add
  },
  data(){
    return{
      modal: false,
      Mmenu: false,
      Sbar: false,
    }
  },
  created(){
    bus.$on('modal', data => {
			this.modal = data;
    });
    bus.$on('Mmenu', data => {
			this.Mmenu = data;
    });
    bus.$on('searchB', data => {
			this.Sbar = data;
		});
  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
*{
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    transition: 0.25s ease-in-out;
}
body{
    background-color: #eee;
}
#app{
  padding-top: 0.5rem;
}
textarea{
    resize: none;
    border: none;
    font-size: 14px
}
.card{
  border-radius: 0px;
  margin-bottom: 1rem;
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
}
.container{
  display: grid;
}
.padding{
  padding: 1rem;
}
.Mpadding{
  padding: 0.5rem 1rem;
}
.btn{
  cursor: pointer;
  font-weight: 500;
  border: none;
  background-color: #FFF;
}
.cat{
  color: #607d8b;
}
.second{
  color: #90a4ae;
}
.light{
  font-weight: 400;
}
.semibold{
  font-weight: 500;
}
.bold{
  font-weight: 800;
}
.Jstart{
  justify-self: start;
}
.Jcenter{
  justify-self: center;
}
.Jend{
  justify-self: end;
}
.fixed{
  position: fixed;
}
.inline{
  display: inline-block;
}
.full{
  width: 100%;
  height: 100%;
}


#conts{
  grid-column-start: 4;
  grid-column-end: 5;
  justify-content: center;
}
#add{
  position: fixed;
  width: 100%;
  height: 100vh
}
#Menu{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-content: center;
}


/*small*/
@media screen and (min-width: 576px){
  #app{
    grid-template-columns: auto 0 0 30rem auto;
  }
}
/*middle*/
@media screen and (min-width: 768px){ 
  #app{
    grid-template-columns: auto 15rem 1rem 28rem auto;
    padding-top: 1rem;
  }
  #Hmobil{
    display: none;
  }
  #Mmobil{
    display: none;
  }
  
}
/*large*/
@media screen and (min-width: 1024px){
}

/*S-small*/
@media screen and (max-width: 575px){
  #app{
    grid-template-columns: 0.5rem 0 0 auto 0.5rem;
  }
}
/*middle*/
@media screen and (max-width: 767px){ 
  #menu{
    display: none;
  }
  #btnAdd{
    display: none;
  }
  #app{
    margin-bottom: 3rem;
  }
}
</style>

<template>
  <div id="app" class="container">
    <div id="btnAdd" class="card padding" @click="modal = true">
      <p class="second semibold">hey! Cuentanos que ha pasado</p>
    </div>
    <Form id="add" v-if="modal"/>
    <Table class="tables"/>
  </div>
</template>

<script>
import Form from './components/Form'
import Table from './components/Table'
import { bus } from './main'
export default {
  name: 'App',
  components: {
    Form,
    Table
  },
  data(){
    return{
      modal: false,
    }
  },
  created(){
    bus.$on('modal', data => {
			this.modal = data;
		});
  }
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
  padding-top: 2rem;
}
textarea{
    resize: none;
    border: none;
    font-size: 14px
}
.card{
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
}
.container{
  display: grid;
}
.padding{
  padding: 1rem;
}
.Mpadding{
  padding: 0.5rem;
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


.tables, #btnAdd{
  grid-column-start: 2;
  grid-column-end: 3;
  justify-content: center;
}
#add{
  position: fixed;
  width: 100%;
  height: 100vh
}


/*S-small*/
@media screen and (max-width: 575px){
  #app{
    grid-template-columns: 0.5rem auto 0.5rem;
  }
}

/*small*/
@media screen and (min-width: 576px){
  #app{
    grid-template-columns: auto 30rem auto
  }
}
/*middle*/
@media screen and (min-width: 768px){
}

/*large*/
@media screen and (min-width: 1024px){
}
</style>

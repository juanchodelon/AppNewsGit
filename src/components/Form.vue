<template>
<div>
    <div>
        <div id="back" class="full fixed"></div>
        <div class="container fixed full">
            <form class="card" id="form">
                <div class="Fbody padding">
                    <div class="btn Mpadding semibold cat inline"> 
                        <span>Categoria:</span>
                        <span @click="drmenu = !drmenu" id="select" class="inline">
                            {{newItem.categoria}}<i class="material-icons a">expand_more</i>
                        </span>
                        
                    </div>
                    <div id="dropdown" class="card" v-if="drmenu">
                        <ul @click="drmenu = false" >
                            <li class="semibold cat btn" @click="newItem.categoria = c"  v-for="c in categorias" v-bind:key="c.id">{{c}}</li>
                        </ul>
                    </div>
                    <textarea placeholder="hey! Cuentanos que ha pasado" rows="8" v-model="newItem.content"></textarea>
                    <div id="Finput" class="inline">
                        <i class="material-icons cat btn">insert_photo</i>
                        <input type="file" name="imgContent" @change="onFileSelected" id="input" class="btn Mpadding">
                    </div>
                    <tr></tr>
                    <div class="Ffooter inline">
                        <button class="btn Mpadding bold" id="cancelar" @click.prevent="cancel">CANCELAR</button>
                        <button class="btn Mpadding bold" id="publicar" @click.prevent="agregar">PUBLICAR</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import {newsRef, fire} from '../config'
import {bus} from '../main'
export default {
    name: 'Form',
    data(){
        return{
            newItem:{
                categoria: 'Otros',
                content: '',
                url: '',
                img: false,
                date: Date.now(),
            },
            categorias:["Nacional","Internacional","Deportes","clasificados","Cultura","Otros"],
            drmenu: false,
            modal: false,
        }
    },
    methods:{
        cancel: function(){ bus.$emit('modal', false ); },
        agregar: function(){
            this.cancel();
            if(this.file == null){
                    this.publicar();
            }
            else if(this.file != null){
                this.storageRef.put(this.file)
                .then(res => {
                    this.a = true;
                    if(this.a == true){
                        this.getUrl()
                    }
                })
            }   
        },
        getUrl(){
            var starsRef = fire.storage().ref('photos/'+ this.file.name);
            starsRef.getDownloadURL().then(res => {
                this.b = true
                if(this.b == true){
                    this.newItem.url = res;
                    this.newItem.img = true;
                    this.publicar();
                }
            })
        },
        publicar(){
            console.log('publicado')
            newsRef.push(this.newItem);
            this.newItem.categoria = '';
            this.newItem.content = '';
            this.newItem.url = '';
        },
        onFileSelected(event){
            this.file = event.target.files[0];
            this.storageRef = fire.storage().ref('photos/' + this.file.name);
        }
    }
}
</script>

<style scoped>
#back{
    background-color: rgba(0,0,0,0.2);
    z-index: 1000;
}
.container{
    grid-template-columns: auto auto auto;
    z-index: 1010;
}
#form{
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
}
#select{
    color: #03a9f4;
    margin-bottom: 0.5rem;
}
.Ffooter{
    float: right;
}
#dropdown{
    position: absolute;
    border: solid 1px #ccc;
    z-index: 1040;
}
#dropdown li{
    padding: 1rem 2rem;
    text-align: center;
}
#dropdown li:hover{
    background-color: #eee;
}
#input{
    width: 1.2rem;
    opacity: 0;
}
#Finput{
    height: 40px;
    color: #fff;
}
#Finput i{
    position: absolute;
    font-size: 30px;
}
textarea{
    width: 96%;
    padding: 2%;
}
#publicar{
    color: #2196f3;
    border: solid 2px #2196f3;
    border-radius: 4px;
}
#cancelar{
    color: #f44336;
}
.a{
    transform: translateY(6px);
}
@media screen and (max-width: 575px){
  .container{
    grid-template-columns: 0.5rem auto 0.5rem;
    grid-template-rows: 1rem 21rem auto;
  }
}
@media screen and (min-width: 576px){
  .container{
    grid-template-columns: auto 30rem auto;
    grid-template-rows: 1rem 21rem auto;
  }
}
/*middle*/
@media screen and (min-width: 768px){
.container{
    grid-template-columns: auto 30rem auto;
    grid-template-rows: 6rem 21rem auto;
  }
}
</style>


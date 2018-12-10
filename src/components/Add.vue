<template>
    <div>

        <div class="cform fixed">
            <div class="card container" id="form">

                <div class="Fheader" >
                    <div class="btn Mpadding semibold cat inline"> 
                        <span>Categoria:</span>
                        <span @click="drmenu = !drmenu" id="select" class="inline">
                            {{newItem.categoria}}<i class="material-icons a">expand_more</i>
                        </span>
                    </div>
                </div>

                    <div id="backDP" @click="drmenu = false" v-if="drmenu"></div>
                    <div id="dropdown" class="card" v-if="drmenu">
                        <ul @click="drmenu = false" >
                            <li class="semibold cat btn" @click="newItem.categoria = c"  v-for="c in categorias" v-bind:key="c.id">{{c}}</li>
                        </ul>
                    </div>

                <div class="Fbody padding">
                    <textarea placeholder="hey! Cuentanos que ha pasado" rows="8" v-model="newItem.content"></textarea>
                    <div id="Finput" class="inline">
                        <i class="material-icons cat btn">insert_photo</i>
                        <input type="file" name="imgContent" @change="onFileSelected" id="input" class="btn">
                    </div>
                    <tr></tr>
                </div>

                <div class="Ffooter">
                    <button class="btn Mpadding bold" id="cancelar" @click.prevent="cancel">CANCELAR</button>
                    <button class="btn Mpadding bold" id="publicar" @click.prevent="agregar">PUBLICAR</button>
                    <div class="g-recaptcha" data-sitekey="6LcvMzQUAAAAAPo1lL1lm43y2OweJKByYbWkoLTz"></div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import VueRecaptcha from 'vue-grecaptcha'
import {newsRef, fire} from '../config'
import {bus} from '../main'
export default {
    name: 'Add',
    data(){
        return{
            newItem:{
                categoria: 'Otros',
                content: '',
                url: '',
                img: false,
                date: Date.now(),
            },
            categorias:["Nacional","Internacional","Deportes","Politica","Clasificados","Cultura","Anuncios","Varios"],
            drmenu: false,
            modal: false,
        }
    },
    methods:{
        callback: function (response) {
          console.log(response);
        },
        cancel: function(){ bus.$emit('modal', false ); },
        dropdown: function(){
            drmenu = !drmenu;
        },
        onSubmit: function(token) {
          console.log('success!');
        },
        agregar: function(){
            /*this.cancel();
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
            } */
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
.cform{
    z-index: 1010;
}
.container{
    grid-template-rows: auto auto auto;
}
textarea{
    width: 100%;
}
.Ffooter{
    display: grid;
    grid-template-columns: auto auto;
}
#input{
    width: 2rem;
    opacity: 0;
}
#Finput{
    height: 30px;
    color: #fff;
}
#Finput i{
    position: absolute;
    font-size: 30px;
}
#publicar{
    color: #2196f3;
}
#cancelar{
    color: #f44336;
}
.a{
    transform: translateY(6px);
}

#dropdown{
    border: solid 1px #ccc;
    z-index: 1040;
    overflow: auto;
}
#dropdown li{
    padding: 1rem 2rem;
    text-align: center;
}
#dropdown li:hover{
    background-color: #eee;
}
@media screen and (max-width: 575px){
}
@media screen and (min-width: 576px){
}

/*middle*/
@media screen and (min-width: 768px){
    .cform{
        position: fixed;
        width: 30rem;
        left: 50%;
        top: 0rem;
        transform: translateX(-50%);
    }
    #dropdown{
        position: fixed;
        width: 28rem;
        left: 50%;
        top: 3rem;
        transform: translateX(-50%);
    }
    .Ffooter{
        grid-row-start: 3;
        grid-row-end: 4;
        justify-content: end;
        padding: 0rem 1rem 1rem 1rem;
    }
    .cform{
        top: 4rem;
    }
}
@media screen and (max-width: 767px){
    .Ffooter{
        padding: 0;
        grid-row-start: 1;
        grid-row-end: 2;
        justify-content: space-between;
    }
    textarea{
        height: 30vh;
    }
    #backDP{
        background-color: rgba(0,0,0,0.2);
        z-index: 1050;
        position: fixed;
        bottom: 55vh;
        left: 0;
        right: 0;
        margin: 0;
        top: 0;
    }
    .cform{
        position: fixed;
        left: 0;
        right: 0;
    }
    #dropdown{
        position: fixed;
        bottom: 2rem;
        top: 45vh;
        left: 0;
        right: 0;
        overflow: auto;
    }
}
</style>
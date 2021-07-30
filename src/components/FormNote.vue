<template>
    <div class="FormNotes" >
        <form @submit="submitNote">
            <div class="menu">
                <button type="button" @click="DeleteNote()" class="bg-danger btn btn-delete">Delete</button>
                <button type="submit" class="bg-success btn">Save</button>
            </div>
            <div class="content">
                <input type="text" class="text" placeholder="id" v-model="id">
                <input type="text" class="text" placeholder="Title" v-model="title">
                <textarea class="text textarea" placeholder="Tuliskan rencana mu..." v-model="description"></textarea>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        name:'FormNotes',
        props: {
            propSaveNote: {
                type: Function
            },
            propdataform:{
                type: Function
            },
            propupdateNote:{
                type: Object
            },
            propDeleteNote:{
                type: Object
            }
        },
        data() {
            return {
                id: 0,
                title: '',
                description: '',
            }
        },
        methods: {
            //untuk mengsubmit note baru 
            submitNote(e) {
                e.preventDefault(); // untuk mencegah terjadi refresh halaman saat submit 
                if(this.id === 0){
                    // jika id = 0 maka data hanya akan disave 
                    this.propSaveNote(this.title , this.description )
                }
                else{
                    // jika id != 0 maka akan terjadi perubahan pada title dan desc 
                    this.propupdateNote(this.id, this.title, this.description)
                }
                
            },
            DeleteNote(){
                this.propDeleteNote(this.id);
                this.Resetinput();
            },
            Resetinput(){
                this.id = 0;
                this.title = '';
                this.description = '';
            }
        },
        watch:{ // watch digunakan untuk mengawasi perubahan yang terjadi pada web nantinya 
            // perubahan pada form jika  isi note di click 
            propdataform: function(note) {
                this.id = note.id,
                this.title = note.title,
                this.description = note.description
            }
        }
    }
    </script>

<style>
    .menu{
        background: #f7f7f7;
        padding:10px 25px;
        margin-bottom: 25px;
        text-align:right;
        border-bottom: 1px solid #e8e6e6;
    }
    .btn-delete{ margin-right:10px; }
    .content{
        padding: 0px 25px;
    }
    .text{
        display: block;
        width: 100%;
        padding: 0px;
        font-size: 20px;
        font-weight: bold;
        color: #2c3e50;
        border: none;
        margin-bottom: 10px;
        box-sizing: border-box;
        outline: none;
    }
    .textarea{
        min-height: 350px;
        font-size: 15px;
        font-weight: lighter;
        line-height: 30px;
    }
    .loader{
        vertical-align: middle;
    }
</style>
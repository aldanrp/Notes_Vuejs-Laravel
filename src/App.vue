<template>
     <div id="app">
          <!--Membuat list sebelah kiri-->
          <div class="kiri">
               <div class="logo">
                    <a href="http://wegodev.com">
                    <h2>Wegodev</h2>
                    <span>Notes</span>
                    </a>
               </div>
               <div class="frame-notes">
                    <button @click="newnote" class="bg-success btn btn-new-note">
                    + notes baru
                    </button>
                    <Listnotes :propNote="notes" :propeditNote="editNote"/>
               </div>
          </div>

               <!--Membuat from sebelah kanan-->
          <div class="kanan">
               <!--ditambahkan props untuk menyambungkan fromNote ke app -->
               <FormNotes  :propSaveNote="saveNote" :propupdateNote="updateNote" :propdataform="dataform" :propDeleteNote="DeleteNote"/> 
          </div>
     </div>
</template>

<script>
import Listnotes from './components/Listnotes.vue';
import FormNotes from './components/FormNote.vue';

     export default {
          name: 'App',
          components: {
          Listnotes,
          FormNotes,
          },
          data() {
               return {
                    dataform: {},
                    notes : [
                         {
                              id: 1,
                              title : 'wegodev',
                              description: 'ini isi wegodev'
                         },
                         {
                              id: 2 ,
                              title : 'Tugas Besar',
                              description: 'ini isi Tugas Besar'
                         },
                    ]
               }
          },
          methods: {
               newnote(){
                    // untuk menasukan note yang baru 
                    this.dataform = {id:0, title:'', description:''}
               },
               // untuk memanggil data pada listnotes
               editNote(id){
                    //console.log("id di app: " + id)

                    // mencari data yang didapatkan dari listnote(id) ke dalam notes
                    // untuk mendapatkan data id yang akan ditampilkan 
                    this.dataform = this.notes.find(note => note.id === id)
               },
               // function dimasukan unutk save note
               saveNote(title , description){
                    let newId = 0 ; 
                    //untuk menambahkan nilai id 
                    if(this.notes.length === 0){ // jika nilai id sama dengan 0 
                         newId = 1 ; // akan dibuat id baru lagi terlebih dahulu 
                    }
                    else {
                         //jika sudah ada id maka akan dibuat lagi terlebih dahulu 
                         newId = this.notes[this.notes.length - 1 ].id+1; 
                    }

                    let newNote = {id:newId,'title': title, 'description':description}
               
                    this.notes.push(newNote); //digunakan untuk memasukan data dari fromnote ke listnotes
                    this.editNote(newId);
               },
               updateNote(id, title, description){
                    //pengambilan data id berdasarkan indeks notes
                    let noteIndex = this.notes.findIndex(note => note.id === id)
                    
                    // mengubah data title & desc dengan yang baru 
                    this.notes[noteIndex].title = title;
                    this.notes[noteIndex].description = description
               },
               //Function untuk menghapus Note
               DeleteNote(id){
                      //pengambilan data id berdasarkan indeks notes
                    let noteIndex = this.notes.findIndex(note => note.id === id)
                    this.notes.splice(noteIndex, 1);

               }
          },
     }
</script>

<style>
body{
     margin:0px;
     overflow:hidden;
}
#app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     color: #2c3e50;
     padding:0px;

     display:flex;
     width:100%;
}

.kiri{
     width: 400px;
     background: #f7f7f7;
     color: #616161;
}
.logo{
     padding: 25px 15px;
     border-bottom: 1px solid gainsboro;
}
.logo a{
     text-decoration:none;
}
.logo a h2{
     margin: 0px;
     display: inline;
     margin-right: 5px;
     font-size: 35px;
     text-transform: capitalize;
     color: #757575;
}
.logo a span{
     font-size: 12px;
     letter-spacing: 1px;
     text-transform: uppercase;
     color:#139e5f;
}
.frame-notes{
     overflow-y: scroll;
     overflow-x: hidden;
     height: 85vh;
}
.bg-success{
     background: #219a63;
     color: white;
     outline:none;
}
.bg-success:hover{
     background:#24b775a2;
     color: white;
}
.bg-danger{
     background:#b50000;
     color: white;
}
.bg-danger:hover{
     background:#c50000bd;
}
.btn{
     border: none;
     font-size: 12px;
     text-align: center;
     letter-spacing: 1px;
     cursor: pointer;
     border-radius: 2px;
     padding: 7px 25px;
     outline:none;
}
.btn-new-note{
     width: 90%;
     padding: 12px 10px;
     margin: 10px 15px;
     text-align: left !important;
}

.kanan{
     width: 100%;
     overflow-y: scroll;
     height: 100vh;
     border-left: 1px solid gainsboro;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f7f7f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

<template>
    <div class="Listnotes">
        <ul>
            <!--digunakan untuk menampilkan data  -->
            <li v-for="row in propNote" :key="row">
                <button class="btn-note" @click="idnote(row.id)">
                    <label>{{row.title}}</label>
                    <span>{{row.description}}</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Listnotes",
    //pemanggilan data props
    props:{
        propNote:{
            type: Array
        },
        propeditNote:{
            type:Function
        }
    },
    data() {
        return {

        }
    },
    methods: {
        // mendapatkan idnote
        idnote(id){
            this.propeditNote(id);
        }
    },
}
</script>

<style>
    ul {
        list-style-type: none;
        padding: 0;
        margin:0px;
    }
    .btn-note {
        text-align: left;
        border: none;
        border-bottom: 1px solid gainsboro;
        padding: 0px 15px;
        cursor: pointer;
        outline: none;
        background: #f7f7f7;
        height: 150px;
        width: 100%;
    }
    .btn-note:hover {
        background:#eaeaea;
    }
    .btn-note label{
        display:block;
        color: #444444;
        font-size: 1.5em;
        margin-bottom: 15px;
    }
    .btn-note span{
        color: #545454;
    }
</style>
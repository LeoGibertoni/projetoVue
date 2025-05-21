class Anime{
    constructor(id, nome, editora,genero, ano, classe, ep){
        this.id = id;
        this.nome = nome;
        this.editora = editora;
        this.genero = genero;
        this.ano = ano;
        this.classe = classe;
        this.ep = ep;
    }
}

let app = new Vue({
    el: '#app',
    data: {
        id: 1,
        nome: '',
        editora: '',
        genero: '',
        ano: '',
        classe: '',
        ep: '',
        listaAnimes: [],
        positonAlteration: -1,
    },
    methods: {
        validar: function(){
            return(this.id && this.nome && this.editora && this.genero && this.ano && this.classe && this.ep)
        },
        
        salvar: function(){
            let novoAnime = new Anime(this.id, this.nome, this.editora, this.genero, this.ano, this.classe, this.ep);
            this.listaAnimes.push(novoAnime);
            this.id++;
            this.nome = '';
            this.editora = ''; 
            this.genero = '';
            this.ano = '';
            this.classe = ''; 
            this.ep = '';
        },

        alterar: function(position){
            this.positonAlteration = position;

            this.id = this.listaAnimes[position].id;
            this.nome = this.listaAnimes[position].nome;
            this.editora = this.listaAnimes[position].editora;
            this.genero = this.listaAnimes[position].genero;
            this.ano = this.listaAnimes[position].ano;
            this.classe = this.listaAnimes[position].classe;
            this.ep = this.listaAnimes[position].ep;
        },

        excluir: function(index) {
            this.listaAnimes.splice(index, 1);
        }
    }
});
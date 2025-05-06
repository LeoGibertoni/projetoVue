class Anime{
    constructor(nome, editora,genero, ano, classe, ep){
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
        nome: '',
        editora: '',
        genero: '',
        ano: '',
        classe: '',
        ep: '',
        listaAnimes: [],
    },
    methods: {
        salvar: function(){
            let novoAnime = new Anime(this.nome, this.editora, this.genero, this.ano, this.classe, this.ep);
            this.listaAnimes.push(novoAnime);
            this.nome = '';
            this.editora = ''; 
            this.genero = '';
            this.ano = '';
            this.classe = ''; 
            this.ep = '';
        }
    }
});
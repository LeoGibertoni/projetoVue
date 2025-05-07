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
    },
    methods: {
        validar: function(){
            return(this.id && this.nome && this.editora && this.genero && this.ano && this.classe && this.ep)
        },
        salvar: function(){
            // if (!this.id || !this.nome || !this.editora || !this.genero || !this.ano || !this.classe || !this.ep) {
            //     alert("Por favor, preencha todos os campos antes de salvar!");
            //     return;
            // }

            let novoAnime = new Anime(this.id, this.nome, this.editora, this.genero, this.ano, this.classe, this.ep);
            this.listaAnimes.push(novoAnime);
            this.id++;
            this.nome = '';
            this.editora = ''; 
            this.genero = '';
            this.ano = '';
            this.classe = ''; 
            this.ep = '';
        }
    }
});
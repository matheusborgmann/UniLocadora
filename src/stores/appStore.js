import { defineStore } from "pinia";
const useAppStore = defineStore("app", {
  state: () => ({
    carrinho: {
      filmes: [],
      cliente: null,
      valor: 0,
      data: null,
      devolvido: false,
    },
    cliente: null,
    filmes: [],
  }),
  actions: {
    addFilme(filme) {
      this.filmes.push(filme);
    },
    setFilmes(filmes) {
      this.filmes = filmes;
    },
    setCarrinho(filmes) {
      this.filmes = filmes;
    },
    getFilmesByAno(ano) {
      return this.filmes.filter((filme) => filme.ano == ano);
    },
    getFilmesByActor(actor) {
      return this.filmes.filter((filme) => filme.atores.includes(actor));
    },
    setCliente(cliente) {
      this.cliente = cliente;
    },
    limparCarrinho() {
      this.carrinho = {
        filmes: [],
        cliente: null,
        valor: 0,
        data: null,
        devolvido: false,
      };
    },
    setClienteCarrinho(cliente) {
      this.carrinho.cliente = cliente;
    },
    addFilmeCarrinho(filme) {
      this.carrinho.filmes.push(filme);
    },
  },
});
export const appStore = useAppStore();

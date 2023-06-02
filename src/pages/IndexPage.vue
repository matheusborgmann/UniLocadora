<template>
  <q-page class="flex flex-center">
    <div v-if="naoLogado()">
      olá! seja bem vindo! faça seu login
      <q-btn @click="login">Login</q-btn>
      ou cadastra-se
      <q-btn @click="showFormCliente = !showFormCliente">Novo Cliente</q-btn>
    </div>
    <!--
    <RouterLink to="/cadastroFilme">Cadastro de Filmes</RouterLink>
    <a href="/cadastroFilme">Cadastro de Filmes</a>
    -->

    <form-cliente
      @salvarCliente="onSalvarCliente"
      v-if="showFormCliente"
      :cliente="{
        id: 0,
        nome: '',
        email: '',
        telefone: '',
        cpf: '',
      }"
    />

    <FilmeCard
      :logado="!naoLogado()"
      v-for="f in filmes"
      v-bind:key="f.id"
      :filme="f"
      @locarFilme="onLocarFilme"
      @comparFilme="onComprarFilme"
    />
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import FormCliente from "src/components/FormCliente.vue";
import Services from "src/services";
import { appStore } from "src/stores/appStore";
import { defineComponent } from "vue";
import FilmeCard from "../components/FilmeCard.vue";

export default defineComponent({
  components: { FormCliente, FilmeCard },
  name: "IndexPage",
  data() {
    return {
      filmes: Array,
      showFormCliente: false,
    };
  },
  created() {
    Services.getAllFilmes((data) => {
      this.filmes = data;
    });
  },
  methods: {
    login() {
      appStore.cliente = {
        id: 1,
        nome: "teste",
        email: "",
      };
    },
    onLocarFilme(filme) {
      appStore.carrinho.cliente = appStore.cliente;
      appStore.carrinho.filmes.push(filme);
      appStore.carrinho.data = new Date();
    },
    naoLogado() {
      console.log(appStore.cliente == null);
      return appStore.cliente == null;
    },
    onSalvarCliente(cliente) {
      Services.saveCliente(cliente, (ok) => {
        console.log("no onsalvar " + ok);
        if (ok) {
          this.showFormCliente = false;
          const $q = useQuasar();
          $q.notify({
            message: "Cliente salvo com sucesso!\nbem vindo " + cliente.nome,
            color: "positive",
            icon: "check",
          });
        }
      });
    },
  },
});
</script>

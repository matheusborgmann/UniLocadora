<template>
  <q-card class="my-card bg-secondary text-white">
    <q-card-section>
      <div class="text-h6">{{ filme.titulo }}</div>
      <div class="text-subtitle2">{{ filme.genero }}</div>
    </q-card-section>

    <q-card-section>
      <ul>
        <li v-for="ator in filme.atores" v-bind:key="ator">{{ ator }}</li>
      </ul>
    </q-card-section>
    <q-card-section>
      Diretor: {{ filme.diretor }}<br />
      Ano: {{ filme.ano }}
    </q-card-section>
    <q-separator dark />

    <q-card-actions v-if="logado">
      <q-btn flat @click="locar">Locar</q-btn>
      <q-btn flat @click="comprar">Comprar</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    filme: Object,
    logado: Boolean,
  },
  methods: {
    locar() {
      this.$emit("locarFilme", this.filme);
    },
    comprar() {
      this.$emit("comprarFilme", this.filme);
    },
  },
};
</script>

<style></style>

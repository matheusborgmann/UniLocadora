<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-btn label="Novo" @click="editando = true" v-if="!editando" />
      <q-form class="form" v-if="editando">
        <q-input outlined v-model="titulo" label="Título" />
        <q-input outlined v-model="diretor" label="Diretor" />
        <q-input outlined v-model="ano" label="Ano" />
        <q-input outlined v-model="genero" label="Gênero" />
        <q-input outlined v-model="atores" label="Atores (separe por ,)" />
        <q-btn label="Salvar" @click="salvar"/>
        <q-btn label="Cancelar" @click="editando = false"/>

      </q-form>
      <FilmeTable/>
    </q-page-container>

  </q-layout>
</template>

<script>
import services from 'src/services'
import FilmeTable from '../components/FilmeTable.vue'
export default {
  name: 'CadastroFilme',
  components: { FilmeTable },
  data() {
    return {
      editando: false,
      titulo: "",
      diretor: "",
      ano: 0,
      genero: "",
      atores: ""
    }
  },
  methods: {
    salvar() {
      let novo = {
        titulo: this.titulo,
        diretor: this.diretor,
        ano: this.ano,
        genero: this.genero,
        atores: this.atores.split(",")
      }
      services.saveFilme(novo)
      this.editando = false
    }
  }
}
</script>

<style>
  .form {
    max-width: 50%;
  }
</style>

<template>
  <q-card class="q-ma-md q-pa-md shadow-10">
    <h3>Cliente</h3>
    {{ cliente }}
    <q-form>
      <q-input outlined v-model="clienteData.nome" label="Nome"></q-input>
      <q-input
        outlined
        v-model="clienteData.email"
        label="E-mail"
        :rules="[
          (val, rules) =>
            rules.email(val) || 'Please enter a valid email address',
        ]"
      ></q-input>
      <q-input
        outlined
        v-model="clienteData.telefone"
        mask="(##)#####.####"
        fill-mask="_"
        label="Telefone"
      ></q-input>
      <q-input outlined v-model="clienteData.cpf" label="CPF"></q-input>

      <q-btn
        color="primary"
        label="Salvar"
        class="q-mt-md"
        @click="salvar"
      ></q-btn>
    </q-form>
  </q-card>
</template>

<script>
import api from "src/services/api";
export default {
  name: "FormCliente",
  props: {
    cliente: Object,
  },
  data() {
    return {
      clienteData: {
        id: 0,
        nome: "",
        email: "",
        telefone: "",
        cpf: "",
      },
    };
  },
  created() {
    if (this.cliente) {
      this.clienteData = this.cliente;
    }
  },
  methods: {
    salvar() {
      this.$emit("salvarCliente", this.clienteData);
    },
  },
};
</script>

<style></style>

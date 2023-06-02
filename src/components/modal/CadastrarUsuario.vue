<template>
  <div>
    <q-card-actions class="q-px-md">
      <q-btn
        id="botaoLogin"
        unelevated
        color="amber"
        size="lg"
        class="full-width"
        label="Cadastre-se"
        @click="openModal"
      />
    </q-card-actions>

    <!-- Modal -->
    <q-dialog v-model="modalVisible" persistent>
      <q-card>
        <q-card-section>
          <!-- Formulário de cadastro -->
          <q-form @submit="handleSubmit">
            <q-input
              filled
              v-model="email"
              label="Email"
              :error="emailError"
            />
            <q-input
              filled
              v-model="senha"
              label="Senha"
              type="password"
              :error="senhaError"
            />
            <q-input
              filled
              v-model="nome"
              label="Nome"
              :error="nomeError"
            />
            <q-input
              filled
              v-model="telefone"
              label="Telefone"
              :error="telefoneError"
            />

            <q-card-actions>
              <q-btn label="Cadastrar" type="submit" color="amber" />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "CadastrarUsuario",
  data() {
    return {
      modalVisible: false,
      email: "",
      senha: "",
      nome: "",
      telefone: "",
      emailError: "",
      senhaError: "",
      nomeError: "",
      telefoneError: "",
    };
  },
  methods: {
    openModal() {
      this.modalVisible = true;
    },
    handleSubmit() {
      // Validação dos inputs
      if (!this.email) {
        this.emailError = "O email é obrigatório.";
        return;
      }
      if (!this.senha) {
        this.senhaError = "A senha é obrigatória.";
        return;
      }
      if (!this.nome) {
        this.nomeError = "O nome é obrigatório.";
        return;
      }
      if (!this.telefone) {
        this.telefoneError = "O telefone é obrigatório.";
        return;
      }

      // Armazenar os dados no session storage
      const usuario = {
        email: this.email,
        senha: this.senha,
        nome: this.nome,
        telefone: this.telefone,
      };
      sessionStorage.setItem("usuario", JSON.stringify(usuario));

      // Fechar o modal e limpar os campos
      this.modalVisible = false;
      this.email = "";
      this.senha = "";
      this.nome = "";
      this.telefone = "";

      // Outras ações após o cadastro, se necessário
    },
  },
};
</script>

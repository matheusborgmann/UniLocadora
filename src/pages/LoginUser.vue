<template>
  <q-page
    class="justify-center items-center row" 
    style="background: rgb(247, 255, 137); background: #fff"
  >
    <main style="display: flex" scroll="no">
      <!-- <img id="logo" src="../assets/logo.png" /> -->

      <div class="column">
        <q-card id="login">
          <q-card-section>
            <q-form>
              <!-- Mudar a cor do label -->
              <div class="row">
                <label class="text" id="labelEmail">E-mail</label>
                <input
                  style="
                    background: white;
                    padding-top: 1rem;
                    border: 2px solid #ffc107;
                    border-radius: 4px;
                    border-width: 1px;
                    margin-bottom: 1rem;
                  "
                  class="col-12"
                  id="email"
                  outlined
                  v-model="email"
                  type="email"
                  label="email ou CPF"
                  color="blue"
                />
              </div>
              <!-- Mudar a cor do label -->
              <div class="row">
                <label class="text" id="senha">Senha</label>
                <input
                  style="
                    background: white;
                    padding-top: 1rem;
                    border: 2px solid #ffc107;
                    border-radius: 4px;
                    border-width: 1px;
                    margin-bottom: 1rem;
                  "
                  class="col-12"
                  id="password"
                  outlined
                  v-model="password"
                  type="password"
                  label="Digite a sua senha"
                  color="blue"
                />
              </div>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              id="botaoLogin"
              flat
              color="amber"
              class="full-width"
              label="Login"
              @click="this.onClick"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none text-black" id="naocadastrado">
            Ainda não é cadastrado?
            <CadastrarUsuario />
          </q-card-section>
        </q-card>
      </div>
    </main>
  </q-page>
</template>

<script>
import CadastrarUsuario from "../components/modal/CadastrarUsuario.vue";
import { useRouter } from "vue-router";
const router = useRouter();

export default {
  name: "LoginUser",
  components: {
    CadastrarUsuario,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onClick() {
      const storedUser = sessionStorage.getItem("usuario");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === this.email && user.senha === this.password) {
          // Login bem-sucedido, fazer outras ações
          alert(`Bem-vindo, ${user.nome}!`);
          this.$router.push("/cadastroFilme");
          // Limpar os campos de email e senha
        } else {
          // Credenciais inválidas, exibir mensagem de erro
          alert("Credenciais inválidas.");
        }
      } else {
        // Usuário não encontrado, exibir mensagem de erro
        alert("Usuário não encontrado.");
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: "CherryBombOne"; /* src\pages\LoginUser.vue*/
  src: url("../css/fonts/CherryBombOne-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
#login {
  width: 96%;
  height: 100%;
  padding-top: 50px;
}

#login {
  background-color: #fcf15f;
  padding: 13rem;
  color: rgb(255, 255, 255);
  margin: 4rem;
  justify-items: center;
  align-items: center;

  border-radius: 30rem;
}
#naocadastrado {
  font-family: "CherryBombOne", sans-serif;
}
#botaoLogin {
  font-family: "CherryBombOne", sans-serif;
  font-size: 30px;
}

#input {
  /* border: 2px solid rgb(0, 48, 70); */
  border-radius: 4px;
}

#email {
  background-color: #00000000;
}
#labelEmail,
#senha {
  font-family: "CherryBombOne", sans-serif;
  font-size: large;
  color: rgb(156, 136, 22);
}

#password {
  background-color: #00000000;
}
</style>

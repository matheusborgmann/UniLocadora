<template>
  <div class="q-pa-md">
    <q-table title="Filmes" :rows="rows" :columns="columns" row-key="id">
      <template v-slot:body-cell-alocar="props">
        <q-td :props="props">
          <div class="column-cell">
            {{ props.value }}
            <q-btn
              outline
              dense
              label="Alocar"
              class="column-btn"
              @click="alocarFilme(props.row.id)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import Services from "src/services";

export default {
  data() {
    return {
      rows: [],
      columns: [
        { name: "id", label: "Id", field: "id", sortable: true },
        { name: "titulo", label: "Título", field: "titulo", sortable: true },
        { name: "diretor", label: "Diretor", field: "diretor", sortable: true },
        { name: "ano", label: "Ano", field: "ano", sortable: true },
        { name: "genero", label: "Gênero", field: "genero", sortable: true },
        { name: "atores", label: "Atores", field: "atores", sortable: true },
        { name: "alocar", label: "", field: "", sortable: false },
      ],
    };
  },
  created() {
    this.rows = Services.getAllFilmes();
  },
  methods: {
    alocarFilme(rowId) {
      // Lógica para alocar o filme com o ID da linha

      console.log(`Filme com ID ${rowId} alocado!`);
    },
  },
};
</script>

<style scoped>
.column-cell {
  display: flex;
  align-items: center;
}

.column-btn {
  margin-left: 8px;
}
</style>

<template>
    <h1>Lista de usuarios</h1>

    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>CORREO</th>
                <th>CREADO EN</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="us in usuarios" :key="us.id">
                <td>{{ us.id }}</td>
                <td>{{ us.name }}</td>
                <td>{{ us.email }}</td>
                <td>{{ us.created_at }}</td>
            </tr>
        </tbody>
    </table>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import usuarioService from '../../../services/usuario.service';


const usuarios = ref([]);

onMounted(() => {
    getUsuarios()
})

async function getUsuarios(){
    const {data} = await usuarioService.listar();
    usuarios.value = data.data
}

</script>
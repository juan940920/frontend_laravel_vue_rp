<template>
    <h1>Mi perfil</h1>
    {{ perfil }}
</template>

<script setup>
import { onMounted, ref } from 'vue';
import authService from '../../../services/auth.service';

    const perfil = ref({});

    onMounted(() => {
        getPerfil()
    });

    async function getPerfil(){
        const {data} = await authService.perfil();
        perfil.value = data
    }

</script>
<template>

    {{ credenciales }}

    <h1>Ingresar (Login)</h1>
    <form @submit.prevent="funIngresar()">
        <label for="">Ingrese su correo</label>
        <input type="email" v-model="credenciales.email">
        <br>
        <label for="">Ingrese su contraseña</label>
        <input type="password" v-model="credenciales.password">

        <br>
        <input type="submit" value="Ingresar">
    </form>
</template>

<script setup>
import { ref } from 'vue';
import authService from '../../services/auth.service';
import { useRouter } from 'vue-router';

const credenciales = ref({});
const router = useRouter();

async function funIngresar(){

    try {
        const {data} = await authService.login(credenciales.value)
        console.log(data.access_token)
        localStorage.setItem("access_token", data.access_token)
        router.push({name: "MiPerfil"})
        
    }catch (error){
        alert("Error")
    }

}

</script>
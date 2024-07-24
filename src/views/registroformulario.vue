<template>
    <div class="registro-formulario-container">
      <h2>Formulario de registro</h2>
      <form @submit.prevent="register">
        <label for="name">Nombre:</label>
        <input type="text" v-model="name" required>
        <label for="email">Correo:</label>
        <input type="email" v-model="email" required>
        <label for="password">Contraseña:</label>
        <input type="password" v-model="password" required>
        <label for="confirmPassword">Repetir Contraseña:</label>
        <input type="password" v-model="confirmPassword" required>
        <div v-if="password && confirmPassword && password !== confirmPassword" class="alert">Las contraseñas no coinciden</div>
        <button type="submit" :disabled="password !== confirmPassword">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      register() {
        if (this.password === this.confirmPassword) {
          alert('El registro se ha realizado correctamente');
        }
      }
    }
  };
  </script>

<style scoped>

.registro-formulario-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
}

.registro-formulario-container h2 {
  color: #333;
  text-align: center;
}

.registro-formulario-container form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.registro-formulario-container label {
  color: #333;
  font-weight: bold;
}

.registro-formulario-container input {
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 4px;
}

.registro-formulario-container button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.registro-formulario-container button:hover {
  background-color: #0056b3;
}

.registro-formulario-container .alert {
  color: red;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
}

</style>
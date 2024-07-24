<template>
    <div class="promedio-notas-container">
      <h2>Promedio de notas</h2>
      <form @submit.prevent="calculate">
        <label for="nota1">Nota 1:</label>
        <input type="number" v-model.number="nota1" min="10" max="70" required>
        <label for="nota2">Nota 2:</label>
        <input type="number" v-model.number="nota2" min="10" max="70" required>
        <label for="nota3">Nota 3:</label>
        <input type="number" v-model.number="nota3" min="10" max="70" required>
        <label for="attendance">Asistencia:</label>
        <input type="number" v-model.number="attendance" min="0" max="100" required>
        <button type="submit">Calcular</button>
      </form>
      <div v-if="result !== null" class="result">
        <p>Promedio: {{ result }}</p>
        <p>{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nota1: null,
        nota2: null,
        nota3: null,
        attendance: null,
        result: null,
        message: ''
      };
    },
    methods: {
      calculate() {
        const promedio = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.3);
        this.result = promedio;
        if (promedio >= 40 && this.attendance >= 80) {
          this.message = 'Aprobado';
        } else {
          this.message = 'Reprobado';
        }
      }
    }
  };
  </script>
  
  <style scoped>

.promedio-notas-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
}

.promedio-notas-container h2 {
  color: #333;
  text-align: center;
}

.promedio-notas-container form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.promedio-notas-container label {
  color: #333;
  font-weight: bold;
}

.promedio-notas-container input {
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 4px;
}

.promedio-notas-container button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.promedio-notas-container button:hover {
  background-color: #0f2b88;
}

.promedio-notas-container .result {
  margin-top: 20px;
  text-align: center;
  color: #d31b1b;
  font-weight: bold;
}

.promedio-notas-container .error {
  color: red;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
}
</style>
// Datos de ejemplo de estudiantes
const estudiantes = [
    { matricula: "001", nombre: "Juan", apellidoPaterno: "Pérez", apellidoMaterno: "Gómez", programaEducativo: "Ingeniería", foto: "../img/Juan.jpg" },  
    { matricula: "002", nombre: "María", apellidoPaterno: "García", apellidoMaterno: "López", programaEducativo: "Medicina", foto: "../img/Lulis.jpg" }
  ];
  
  // Función para mostrar todos los estudiantes
  function mostrarTodosEstudiantes() {
    const studentDataContainer = document.getElementById('studentData');
    studentDataContainer.innerHTML = '';
  
    estudiantes.forEach(estudiante => {
      studentDataContainer.innerHTML += `
        <tr>
          <td>${estudiante.matricula}</td>
          <td>${estudiante.nombre}</td>
          <td>${estudiante.apellidoPaterno}</td>
          <td>${estudiante.apellidoMaterno}</td>
          <td>${estudiante.programaEducativo}</td>
          <td><img src="${estudiante.foto}" alt="Foto de ${estudiante.nombre}" width="100"></td>
        </tr>
      `;
    });
  }
  
  // Función para buscar y mostrar datos del estudiante
  function buscarEstudiante(query) {
    const resultado = estudiantes.find(estudiante =>
      estudiante.matricula === query || estudiante.nombre.toLowerCase() === query.toLowerCase()
    );
  
    const studentDataContainer = document.getElementById('studentData');
    if (resultado) {
      studentDataContainer.innerHTML = `
        <tr>
          <td>${resultado.matricula}</td>
          <td>${resultado.nombre}</td>
          <td>${resultado.apellidoPaterno}</td>
          <td>${resultado.apellidoMaterno}</td>
          <td>${resultado.programaEducativo}</td>
          <td><img src="${resultado.foto}" alt="Foto de ${resultado.nombre}" width="100"></td>
        </tr>
      `;
    } else {
      studentDataContainer.innerHTML = '<tr><td colspan="6">Estudiante no encontrado</td></tr>';
    }
  
    return false; // Evita que el formulario se envíe
  }
  
  // Evento para cargar todos los estudiantes al cargar la página
  document.addEventListener('DOMContentLoaded', function() {
    mostrarTodosEstudiantes();
  });
  
  // Evento para enviar el formulario y buscar estudiante
  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('inputSearch').value.trim();
    buscarEstudiante(query);
  });
  
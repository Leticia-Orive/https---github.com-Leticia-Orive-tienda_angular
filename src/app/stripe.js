// stripe.js

// Ejemplo de uso de Stripe Elements en el frontend
var stripe = Stripe("TU_CLAVE_PUBLICA_DE_API_STRIPE");

var elements = stripe.elements();

// Crea un elemento de tarjeta y monta en el elemento con ID "card-element"
var card = elements.create("card");
card.mount("#card-element");

// Manejador para el envío del formulario de pago
var form = document.getElementById("payment-form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  // Deshabilita el botón de pago para evitar múltiples clics
  form.querySelector("button").disabled = true;

  // Crea un token con la tarjeta y maneja errores
  const { token, error } = await stripe.createToken(card);

  if (error) {
    // Habilita el botón nuevamente y muestra un mensaje de error al usuario
    form.querySelector("button").disabled = false;
    console.error("Error al generar token:", error);
  } else {
    // Envía el token al backend para procesar el pago
    await fetch("/pagar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token.id, monto: 1000 }), // Cambia el monto según tu lógica
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.mensaje === "Pago exitoso") {
          // Maneja la respuesta exitosa y muestra un mensaje de éxito al usuario
          console.log("Pago exitoso");
        } else {
          // Maneja la respuesta de error y muestra un mensaje de error al usuario
          console.error("Error al procesar el pago");
        }
      })
      .catch((error) => {
        // Maneja errores de comunicación con el servidor
        console.error("Error de comunicación con el servidor:", error);
      });

    // Habilita el botón nuevamente
    form.querySelector("button").disabled = false;
  }
});

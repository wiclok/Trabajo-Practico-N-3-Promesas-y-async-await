function hacerOperacionAsincrona() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const exito = Math.random() > 0.5;
          if (exito) {
              resolve("Operación completada exitosamente");
          } else {
              reject(new Error("Operación fallida"));
          }
      }, 1000);
  });
}

const myPromise = new Promise((resolve, reject) => {
  hacerOperacionAsincrona()
      .then(result => resolve(result))
      .catch(error => reject(error));
});

myPromise
  .then(result => {
      console.log("Éxito:", result);
  })
  .catch(error => {
      console.error("Error:", error.message);
  });

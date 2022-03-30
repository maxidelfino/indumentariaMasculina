let buttonBuy = document.querySelector("#btnBuy")
buttonBuy.addEventListener('click', (event) => {
    Swal.fire({
        title: 'Gracias por su compra',
        text: "Su pedido fué procesado con éxito",
        icon: 'success',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Genial'
      })
});
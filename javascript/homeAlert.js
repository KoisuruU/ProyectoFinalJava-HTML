window.addEventListener('load', (event) => {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 10) {
        greeting = "Annyeong, Good morning!";
      } else if (hour < 18) {
        greeting = "Annyeong, Good day!";
      } else {
        greeting = "Annyeong, Good evening!";
      }
    swal.fire({
        title: greeting,
        text: 'Welcome to the Billage!',
        imageUrl: 'https://pbs.twimg.com/media/FQtJKLhaQAYCCZd?format=jpg&name=large',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButton: 'btn btn-success',
        confirmButtonColor: '#c5b4e1',
        confirmButtonText: 'Lets go!',
            })
        confirmButton.onclick = null;
});


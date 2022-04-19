fetch('./data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("creatorInfo");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.classList.add('card-body--m4')
                div.classList.add('h1');
                    div.innerHTML = data[i].nombre + ': ' + data[i].masinfo;
                mainContainer.appendChild(div);
            }
        }

// <!-- Email --!>
(function(){
    emailjs.init("_ZLlvhCjII3kPZvHd");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let favoriteSong = document.getElementById("song").value;
    let userAge = document.getElementById("age").value;
    let bias = document.getElementById("bias").value;
    let userMessage = document.getElementById("message").value;

        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            favSong: favoriteSong,
            ageUser: userAge,
            userBias: bias,
            message: userMessage
        };
            if (fullName === '') {
                alert('Name is empty.');
                return false;
            }
            else if (userEmail === '') {
                alert('Last Name is empty.');
                return false;
            }
            else if (userMessage === '') {
                alert('Phone is empty.');
                return false;
            };
        emailjs.send('service_ld6gsx6', 'template_p5wzlzu', contactParams).then(function (res) {});
        Swal.fire(
            'Thank You!',
            'Your message has been sent!',
            'success'
        );  
}

// <!-- Email --!>



/* <div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="..." alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */







//          <div class="col mb-4">
//      <div class="card h-75">
//        <img src="../images/Moonsua.png" class="card-img-top" alt="...">
//          <div class="card-body--m1">
//          <h5 class="card-title--m1 text-center">Moon Sua - Moon Su A (문수아)</h5>
//          <p class="card-text--m1"><strong> Birthday: 1999-9-9 in Cheongju, South Korea; ISFP; Roles: Main Rapper and Lead Vocalist! Her brother, Moon Bin, is a member of boy-group Astro!</strong></p>
//        </div>
//      </div>
//    </div>
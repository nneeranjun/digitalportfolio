Vue.component('navbar', {
    template:
      `<nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Nilay Neeranjun</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <span class="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </nav>`
})

Vue.component('image-card', {
  template:
    `
      <div class="card">
        <h5 class="card-header" style="text-align:center"> University of California, Berkeley</h5>
        <img class="card-img-top" :src="path" alt="Card image cap">
        <div class="card-body">
          <p class="card-text text-center">2017 - 2021</p>
          <p class="card-text text-center">B.A. Data Science</p>
          <p class="card-text text-center">Concentration: Applied Math & Modeling</p>
        </div>
      </div>
    `,
    props: ['path']
})

Vue.component('text-card', {
  props: ['title', 'card_body'],
  template:
  `
  <div class="card">
    <h5 class="card-header" style="text-align:center"> {{title}} </h5>
    <div class="card-body">
      <span :v-html="card_body"></span>
    </div>
  </div>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    coursework_body:`<p class="card-text text-center">Algorithms, Data Structures,
       Computer Security, Computer Architecture, Databases, Artificial Intelligence,
       Techniques of Data Science, Data Mining, Statistics for Data Science,
       Linear Algebra, Numerical Analysis</p>`,
    activities_body: `
    <p class="card-text text-center">Entrepreneurs @ Berkeley </p>
    <p class="card-text text-center">CalHacks 5.0, CalHacks 6.0, YHack V. 2020</p>`
  }
})
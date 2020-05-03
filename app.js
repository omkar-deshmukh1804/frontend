Vue.component('movie-summary',{
  props:['movie','newm'],
  url :'https://www.imdb.com/title',
  
  template:`<div > 
  <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="movie.Poster" alt="unable to load ">
      <div class="card-body">
        <h5 class="card-title">{{movie.Title}}</h5>
        <a :href="'https://www.imdb.com/title/'+movie.imdbID" class="btn btn-primary">More Details</a>
      </div>
  </div>
            </div>`


});


var app = new Vue({
  el : "#app",
  

  data :{
    apikey: 'e0620bd4',
    searchText:'harry potter',
    moviesList:[],
    match : false,
    isHidden : false,
    newTitle:'',
    newPoster:'',
    newList:[{
      title:'',
      poster:''
    }]
  },
      
  mounted () {
    axios
      .get(`http://www.omdbapi.com/?apikey=${this.apikey}&s=${this.searchText}`)
      .then(response => (this.info = response.data.Search))
      if(localStorage.newTitle && localStorage.newPoster){
        this.newTitle = localStorage.newTitle,
        this.newPoster=localStorage.newPoster
      }
      
      
  },
   methods: {
    
     searchMovies (){
        value = event.target.value;
        this.seacrhText=value;
        axios
      .get(`http://www.omdbapi.com/?apikey=e0620bd4&s=${this.searchText}`)
      .then(response => (this.moviesList = response.data.Search));
      
     },
     addMovie(){
       this.newList[0].poster=this.newPoster
       this.newList[0].title=this.newTitle
      
       
     }
    
    },
    watch: {
      newTitle(nt){
        localStorage.newTitle = nt
      },
      newPoster(np){
        localStorage.newPoster=np
      }
    },
})
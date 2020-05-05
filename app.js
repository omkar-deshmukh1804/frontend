
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
    nTitle:[],
    nPoster:[],
    nMatch : false,
    t:'',
    u:'',
  },
      
  mounted () {
    axios
      .get(`http://www.omdbapi.com/?apikey=${this.apikey}&s=${this.searchText}`)
      .then(response => (this.info = response.data.Search))
      if(localStorage.newTitle && localStorage.newPoster)
      {

        this.newTitle = localStorage.newTitle,
        this.newPoster=localStorage.newPoster
      }
      
      
  },
   methods: {
    
     searchMovies (){
        value = event.target.value;
        // this.searchText=value;
        axios
      .get(`http://www.omdbapi.com/?apikey=e0620bd4&s=${this.searchText}`)
      .then(response => (this.moviesList = response.data.Search));

      for (let i = 0; i < this.nTitle.length; i++) {
        if(this.searchText.toLowerCase() == this.nTitle[i].toLowerCase())
        {
            console.log('title matched')
            this.nMatch = true;
            this.t = this.nTitle[i]
            this.p=this.nPoster[i]
        }
        
      }
     },
     addMovie(){
       if(localStorage.newTitle && localStorage.newPoster)
       {
         this.newTitle = localStorage.newTitle;
         this.newPoster=localStorage.newPoster;
       }
      this.nTitle.push(localStorage.newTitle)
      this.nPoster.push(localStorage.newPoster)
       console.log(this.nTitle)
       console.log(this.nPoster)
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
    
    
});


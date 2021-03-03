class Movie{
     title:string;
     studio:string;
     rating:string;
     constructor(title:string,studio:string,rating:string){
         this.title = title;
         this.studio = studio;
         this.rating= rating='PG';
     }
     getmovie():any {
          var obj1 = {
               title:this.title,
               studio:this.studio,
               rating:this.rating,
               }
          return obj1;
     }
}
var obj = new Movie("Bahubali", "Ramanaidu", "PG13");
console.log(obj.getmovie());
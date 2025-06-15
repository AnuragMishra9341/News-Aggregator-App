
const apiKey =  import.meta.env.VITE_News_API_KEY ;

 const getData = async (text) => {
   const url = `https://gnews.io/api/v4/search?q=${text}&lang=en&country=in&max=10&sortby=publishedAt&token=${apiKey}`;
      try{ 
          const response = await fetch(url);
        const data = await response.json();
            if(data.totalArticles === 0 || data.articles.length ===0){ // No data has been recieved
           return null;
        }
        else{
          console.log(data.articles[0]);
          return data;
        }
      
      }
      catch(error){
         console.log(error);
          return error ;
      }
        
};

export default getData




async function apiCall(url) {


    //add api call logic here
    var res = await fetch(url)
    
    var data = await res.json()
    return data


}

var click_arr=[]
function appendArticlesdiv(articles, main) {

   articles.forEach(ele => {
       
      let div = document.createElement("div")

      let img = document.createElement("img")
      img.src=ele.urlToImage
      
      let h2=document.createElement("h2")
      h2.textContent=ele.source.name

      let p1 = document.createElement("p")
      p1.textContent=ele.title
      
      let h3 = document.createElement("h3")
      h3.textContent=ele.description

      let p2 = document.createElement("p")
      p2.textContent=ele.publishedAt

      div.append(img,h2,h3,p1,p2)

      main.append(div)
   });

}

export { apiCall, appendArticlesdiv }
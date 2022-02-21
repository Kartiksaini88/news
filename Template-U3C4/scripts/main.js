async function apiCall(url) {


    //add api call logic here
    var res = await fetch(url)
    
    var data = await res.json()
    return data


}

var click_arr=JSON.parse(localStorage.getItem("clicked"))||[]
function appendArticles(articles, main) {

   articles.forEach(ele => {
       
      let div = document.createElement("div")
      div.setAttribute("id","append_div")

      let img = document.createElement("img")
      img.src=ele.urlToImage
      
      let h2=document.createElement("h2")
      h2.setAttribute("id","H2")
      h2.textContent=ele.source.name

      let p1 = document.createElement("p")
      p1.textContent=ele.title
      p1.setAttribute("id","P1")
      
      div.onclick=()=>{
          click_arr.push(ele)
          localStorage.setItem("article",JSON.stringify(click_arr))
          alert("This picture has been added")
          window.location.href="news.html"
      }

      div.append(img,h2,p1)

      main.append(div)
   });

}

export { apiCall, appendArticles }
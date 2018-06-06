const searchTerm = document.querySelector('.searchTerm')
const searchButton = document.querySelector('.searchButton')
// const output = document.querySelector('.output')
const imgNews = document.querySelector('.imgNews')
const titleNews = document.querySelector('.titleNewa')
const contentNews = document.querySelector('.contentNews')
const urlNews = document.querySelector('.urlNews')

const newsNews = document.querySelector('.newsNews')

function newsSearch() {
    newsNews.innerHTML = ''
    const api_url = `https://newsapi.org/v2/everything?q=${searchTerm.value}&apiKey=73542eeb6e1a4cbbb7edf690eb428ecd`


    $.ajax({
        url: api_url,
        type: "GET",
        dataType: "json",
        success: (data) => {
            console.log(data)
            let news = data.articles
            console.log(news[0].title)
            for (let i = 0; i < news.length; i++) {
                // console.log(news[i].title)
               
                newsNews.innerHTML += `
                <div class="newsNews">
                    <div>
                        <img src="${news[i].urlToImage}" alt="" class="imgNews">
                    </div>
                    <div class ="secondDiv">
                        <div class="titleNewa"><b>${news[i].title}</b></div>
                        <div class="contentNews">${news[i].description}</div>
                        <div class="urlNews"><a href="${news[i].url}">${news[i].url}</a></div>
                    </div>
                </div> `
               
                
            }

        },
        error: (error) => {
            console.log("There was an error")
        }
    })
}

searchButton.addEventListener('click', newsSearch)

//data[1] is the titles
            //data[2] is the desc
            //data[3] is the links
            // for(let i=0; i<data[1].length; i++){
            //     output.innerHTML +=`
            //     <li>
            //     <a href="${data[3][i]}">${data[1][i]}</a>
            //     <p>${data[2][i]}</p>
            //     </li>`
            //     console.log(i)
            // }


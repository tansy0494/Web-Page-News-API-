const result = fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=89a187887b904690bc3ed5a0b6c18d49"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
          displayNews(data);
    });
  
  // create a function to create a card for each article and append it to the DOM to display the news
  
  function createCard(article) {
    
    let marquee = document.querySelector('marquee');
    marquee.innerHTML +=   (article.title).toUpperCase() + "   ||   " ;
  
    // create a div element to hold the card
  
    let card = document.createElement("div");
    card.classList.add("card");
    
    // create an image element to hold the image
    
  
    let image = document.createElement("img");
    image.classList.add("card-image")
    image.src = article.urlToImage;
    
    // create a div element to hold the card content
    
    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    
    // create a span element to hold the title
    
    let title = document.createElement("span");
    title.classList.add("card-title");
    title.textContent = article.title;
    
    // create a p element to hold the description
    
    let description = document.createElement("p");
    let root = document.querySelector(':root');
    let rootCss = getComputedStyle(root);  
    let trunc = rootCss.getPropertyValue('--setTrunc')
    
    description.textContent = article.description;
    
    if(trunc == 1) 
      description.textContent = description.textContent.substring(0,50);
      
    description.textContent = description.textContent.substring(0,60); 
    description.textContent += '...';
    // create a div element to hold the card action
    
    let cardAction = document.createElement("div");
    cardAction.classList.add("card-action");
    
    // create an anchor element to hold the link to the article
    
    let link = document.createElement("a");
    link.textContent = "Read More";
    link.href = article.url;
    link.setAttribute("id" , "read-more")
  
    // append the elements to the DOM
    
    cardAction.appendChild(link);
    cardContent.appendChild(title);
    cardContent.appendChild(description);
    card.appendChild(image);
    card.appendChild(cardContent);
    card.appendChild(cardAction);
    document.querySelector("#news").appendChild(card);
  }
  
  // create a function to display the news
  
  function displayNews(data) {
  
    // loop through the articles and create a card for each article
  
    for (let i = 0; i < data.articles.length; i++) {
      createCard(data.articles[i]);
    }
  
  }
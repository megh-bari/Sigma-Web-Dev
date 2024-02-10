function createCard(title, cName, views, months, duration, thumbnail) {
    let viewsNumber;
    if (views<1000) {
        viewsNumber = views;
    }
    else if (views>1000000) {
        viewsNumber = views/1000000 + "M"
    }
    else{
        viewsNumber = views/1000 + "K"
    }

    let html = `
    <div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
        <h1>${title}</h1>
        <p>${cName}. &nbsp;${viewsNumber} views. &nbsp; ${months} months ago</p>
    </div>
    
    </div>`;

    document.querySelector(".container").innerHTML += html;
}

createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", 522000, 4, "28:31", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ");

createCard("Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3", "CodeWithHarry", 332000, 4, "11:12", "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuhpUj-ErJicHq24jgB_3K2Chl_Q");

createCard("Heading, Paragraphs and Links | Sigma Web Development Course - Tutorial #4", "CodeWithHarry", 283000, 4, "19:34", "https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXT49aypaXDTfq5Y813UJXZZcVXA");


createCard("Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5", "CodeWithHarry", 279000, 4, "18:20", "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuhpUj-ErJicHq24jgB_3K2Chl_Q");


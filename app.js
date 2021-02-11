const searchNow = () => {
    const searhInput = document.querySelector('.input').value;
    fetch(`https://youtube-search1.p.rapidapi.com/${searhInput}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "3051b9feb0msh3540ad6d504e43dp155546jsna09271966dbf",
                "x-rapidapi-host": "youtube-search1.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => {
            const searchResultArea = document.getElementById('search-result')
            searchResultArea.innerHTML = data.items.map(items =>
                `<div class="result-area">
                <div class="left"><img src="${items.thumbMedium}" alt=""></div>
                <div class="right">
                    <h3>${items.title}</h3>
                    <div class="videoInfo">
                        <i class="fas fa-eye"></i>
                        <p>${items.viewCount}</p>
                        <i class="fas fa-thumbs-up"></i>
                        <p>${items.likeCount}</p>
                        <i class="fas fa-thumbs-down"></i>
                        <p>${items.dislikeCount}</p>
                    </div>
                    <p>Channel: ${items.channelTitle}</p>
                    <p>Publish Date: ${items.publishedAt}</p>
                    <button >Download MP3</button>
                </div>
            </div>`)
        })
        .catch(err => {
            console.log(err)
            const divPosition = document.querySelector('.error-message')
            const errorMessage = document.createElement('h3');
            errorMessage.innerText = 'Something went wrong, please try again';
            divPosition.appendChild(errorMessage);

        });
}
// Récupération du fichier externe grâce à la fonction "fetch";
fetch ('./assets/datas/movies.json')

// .then permet d'exploiter directement le résultat d'une fonction juste après son appel;
.then((response) =>{
// Le résultat est ici nommé 'response';    
    console.log(response);

// json permet de convertir un fichier .json en fichier exploitable par le Javascript;
// Stockage du résultat de la fonction json grâce à return;
    return response.json();
})
// .then pour exploiter les données que contient le fichier récupéré;
.then((datas) =>{
// Le résultat est ici nommé 'datas';    
// Test dans la console des données;
    console.log(datas) 
// Test dans la console de la récupération d'une donnée précise;
    console.log(datas.results[4].original_title);
    datas.results.forEach((element, i) => {
        let row = document.querySelector('.row'); //Cible le parent
        let movie = document.createElement('div'); //Crée une div
        movie.classList.add('col', 'col-md-6', 'col-lg-4', 'col-xxl-3'); 
        row.appendChild(movie); // 'movie' sera l'enfant de 'row'
            let divImg = document.createElement('div');
            divImg.classList.add('card','h-100', 'w-100','radiusS', 'cardStyle' );
            // 'col-xs-12', 'col-sm-6', 'col-md-3', 'col-lg-3'
            movie.appendChild(divImg);
                    let img = document.createElement('img', 'bodyStyle');
                    img.classList.add('card-img-top', );
                    divImg.appendChild(img);
                let cardBody = document.createElement('div');
                cardBody.classList.add('card-body', 'bodyStyle');
                divImg.appendChild(cardBody);
                    let cardTitle = document.createElement('h5');
                    cardTitle.classList.add('card-title');
                    cardBody.appendChild(cardTitle);
                    let cardText = document.createElement('p');
                    cardText.classList.add('card-text');
                    cardBody.appendChild(cardText);
                let cardFooter = document.createElement('div');
                cardFooter.classList.add('card-footer', 'footerStyle');
                divImg.appendChild(cardFooter);
                    let textMuted = document.createElement('small');
                    textMuted.classList.add( 'footerStyle');
                    cardFooter.appendChild(textMuted);
    });

    let card = document.querySelectorAll('.card')
    datas.results.forEach((element, i) => { 
    let original_title = card[i].querySelector('.card-title')
    console.log(card)
    let overview = card[i].querySelector('.card-text')
    let poster_path = card[i].querySelector('.card-img-top')
    let vote_average = card[i].querySelector('.footerStyle')
        original_title.innerHTML = element.original_title
        overview.innerHTML = element.overview
        poster_path.src = element.poster_path
        vote_average.innerHTML = element.vote_average
    });
    });

    // let row = document.querySelector('.row'); //Cible le parent
    // let movie = document.createElement('div'); //Creer une div
    // row.appendChild(movie); // movies sera l'enfant de row
    // movie.classList.add('test'); // on ajoute une class css à la div

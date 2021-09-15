$("#id-enviar").on("click", async  function(){

  let date = $('#date').val();
  let uri = ` https://api.nasa.gov/planetary/apod?api_key=gb8N4ADtCncjCg2CPLeJY1nqhQZ0Tch7jbP4T1Yy&date=${date}`
    let response = await fetch(uri).then(response => response.json()); 
    $('body').css("background-image", `url(${response.url})`);

})

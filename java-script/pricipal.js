$("#id-enviar").on("click", async  function(){

  let date = $('#date').val();
  let uri = ` https://api.nasa.gov/planetary/apod?api_key=gb8N4ADtCncjCg2CPLeJY1nqhQZ0Tch7jbP4T1Yy&date=${date}`
    let response = await fetch(uri).then(response => response.json()); 
    $('body').css("background-image", `url(${response.url})`);

})



/*


$('.button').on('click', async function (event) {
    event.preventDefault();
    $('#main-texto').css("display", "none");
    let inputDate = $('#dia').val();
    const url = https://api.nasa.gov/planetary/apod?api_key=gb8N4ADtCncjCg2CPLeJY1nqhQZ0Tch7jbP4T1Yy&date=${inputDate}
    let apiResponse = await fetch(url).then(response => response.json());
    $('body').css("background-image", url(${apiResponse.url}));
    $('#texto-nasa').css('display', 'block');
    $('#nasa-titulo').html(${apiResponse.title});
    $('#nasa-texto').html((${apiResponse.explanation}));
});

*/









/*
let a="";

}
let body=document.querySelector("#exibe");

let btnNext = document.querySelector("#id-enviar");

//btnNext.addEventListener("click", function () {
    function
    let data = document.querySelector("#date").value;
    console.log(data);
    let valida = data.length;

let require=new XMLHttpRequest() 
require.open("GET", `https://api.nasa.gov/planetary/apod?api_key=nSDaH8J4yZFo8VNyZlfjxbbYc429GQqTeGdh3vik&date=${data}`)
require.send()
require.onload= function(){
    if(require.status==200){
a=JSON.parse(require.response);


 body.setAttribute("style","background-image",`url(${a.url})`)
 
 //let div=document.querySelectorbyid(#exibe)

 

    }
}


});
*/
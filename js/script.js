


/*First-Way

function viewQuote(){
    
    var Quotes = [

        ["“Be yourself; everyone else is already taken.”" , "Oscar Wilde"],
        ["“So many books, so little time.”" , "Frank Zappa"],
        ["“A room without books is like a body without a soul”" , "Marcus Tullius Cicero"],
        ["“You only live once, but if you do it right, once is enough.”" , "Mae West"]
    
    ]
    
    console.log(Quotes[Math.trunc(Math.random() * Quotes.length)]);
}
*/


/*---------------------------------------------------- Second-Way----------------------------------------------------*/


cartona = ''

function viewQuote(){
    cartona = `<div class="item text-center fs-4 fw-bold mt-5">
    <p>“Be yourself; everyone else is already taken.”</p>
    <p>--Oscar Wilde</p>
    </div>`
    
    document.getElementById("Content").innerHTML = cartona;
}








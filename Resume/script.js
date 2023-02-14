var quotes = [
    '“To exhibit the perfect uselessness of knowing the answer to the wrong question.” <br><br><span class="lg-tab">― Ursula K. Le Guin, The Left Hand of Darkness</span>',
    '“If a book told you something when you were fifteen, <br>it will tell you it again when you\'re fifty, <br>though you may understand it so differently that it seems you\'re reading a whole new book.” <br><br><span class="lg-tab">― Ursula K. Le Guin</span>',
    '“Rule your mind or it will rule you.” <br><br><span class="lg-tab">― Horace</span>',
    '“Wisdom is not wisdom when it is derived from books alone.” <br><br><span class="lg-tab">― Horace</span>',
    '“Whatever advice you give, be brief.” <br><br><span class="lg-tab">― Horace</span>',
    '“Of writing well, be sure, the secret lies <br>In wisdom: therefore study to be wise.” <br><br><span class="lg-tab">― Horace</span>',
    '“All that you touch <br>You Change. <br>All that you Change <br>Changes you. <br>The only lasting truth <br>Is Change.” <br><br><span class="lg-tab">― Octavia E. Butler, Parable of the Sower</span>',
    '“First forget inspiration. Habit is more dependable. Habit will sustain you whether you\'re inspired or not. Habit will help you finish and polish your stories. Inspiration won\'t. Habit is persistence in practice.” <br><br><span class="lg-tab">― Octavia Butler, Bloodchild and Other Stories</span>',
    '“Consider -- <br>We are born, <br>Not with purpose, <br>But with potential.” <br><br><span class="lg-tab">- Octavia E Butler</span>',
    '"If I can\'t dance, it\'s not a part of my Revolution!" <br><br><span class="lg-tab">- Emma Goldman</span>',
    '“Don\’t ask what the world needs. <br>Ask what makes you come alive, and go do it. <br>Because what the world needs is people who have come alive.”<br><br><span class="lg-tab">- Howard Thurman</span>'
];
var quote = document.getElementById('p_quote');
var now = Math.floor(Math.random() * 11);
function doIt()
{
    quote.innerHTML = quotes[now];
}
doIt();


let arrowRight = document.getElementsByClassName('right');
let arrowLeft = document.getElementsByClassName('left');
arrowLeft[0].addEventListener('click', cursor);
arrowRight[0].addEventListener('click', cursor);

function cursor(event){
    if (event.target == arrowRight[0])
    {
        now += 1;
        quote.innerHTML = quotes[now];
        if(now == quotes.length - 1)
        now = 0;
    }
     else if (event.target == arrowLeft[0]) // arrowLeft was clicked
    {
        now -= 1;
        quote.innerHTML = quotes[now];
        if(now == 0)
        {
            now = quotes.length - 1;
        }
        
    }
}

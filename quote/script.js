let quotes=[
    'You would Definately Realise Someones Priority in their Presence 👣, Importance in their Absence.🌻....-Srikar',
    ' You would Definately Realise Someones Priority in their Presence 👣, Importance in their Absence.🌈....-Srikar',
    'Our Silence Makes others Strong ,but In vain it Gives us a Lot..🥀🌈.....-Srikar',
    ' Candle Gives Us a Proof that Ending is also Bright and Beautiful !🌙✨.....-Srikar',
    ' Candle Flame Gives Us a Proof that Ending is also Beautiful !🌙✨....-Srikar',
    'Keep Calm. Just Vibe Yourself !💫🍁...-Srikar',
    'Equip it • Enhance it • Exhaust it 🔥...-Srikar',
    'All the Wolfs are Not Same..🔥✌️...-Srikar',
    'Proving Yourself is Not that Easy...⛅🌈...-Srikar',
    ' Regrets are meant to Have a Change...💨💫...-Srikar',
    ' Crave for the Harmonious Soul..✌️♥️...-Srikar',
    'Heart Never Lies, Mind Does !💯🖤...-Srikar',
    'Be the Soothing Voice.. Instead a Mixup Chaos.!💫🌹...-Srikar',
    'Good Things take Time..⚡🍁...-Srikar',
    'Deep Down,there is always a Uttered Beauty...💫🖤...-Srikar'
    ];
// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);
function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    let index=Math.floor(Math.random()*quotes.length);
   
    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    
    <p>${quotes[index]}</p>
    
   </div>
    `;
    div.innerHTML=quote;
    
}
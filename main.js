const p = document.querySelector('p');
const h = document.querySelector('h1');
const list13 = document.querySelector('#item-13');
const list3 = document.querySelector('#item-3');
const changeImage = document.querySelector('img');
const changeImage2 = document.querySelector('.image2');
const list16 = document.querySelector('li:last-child');

p.innerText =
    "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.";
    
p.style.color = 'lightblue';

h.style.fontSize = '48px'

list13.style.opacity = '.5';

list3.innerText = 'Hi!';

changeImage.src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg";
changeImage.style.height = '300px';
changeImage2.style.height = '300px';
list16.className = 'item';
list16.id= 'item-16';
list16.innerText = "Won't get fooled again.";
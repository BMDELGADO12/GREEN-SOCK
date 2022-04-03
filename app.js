gsap.to(".cuadrado_1", {rotation: 50, x: 100, duration: 1});

// let tween = gsap.to(
// ".cuadrado_2", {
//     rotation:360, x:100, duration:5, ease: "elastic"
// }
// );

// tween.pause();
// tween.seek(2);
// tween.progress(0.5);
// tween.play();

var tween =gsap.to(".cuadrado_2",
{
duration:4, x:750, rotation:360, ease:"none", paused:true
});

document.querySelector("#play").onclick = () => tween.play();

document.querySelector("#pause").onclick = () => tween.pause();

document.querySelector("#resume").onclick = () => tween.resume();

document.querySelector("#reverse").onclick = () => tween.reverse();


document.querySelector("#restart").onclick = () => tween.restart();





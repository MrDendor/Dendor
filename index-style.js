let youtube = document.getElementById("youtube")
let ytlink = "https://www.youtube.com/@Dendorr"

let twitter = document.getElementById("twitter")
let twlink = "https://x.com/MrDendorr"

let roblox = document.getElementById("roblox")
let rolink = "https://www.roblox.com/users/2365246914/profile"

let mainTitle = document.getElementById("mainTitle")

youtube.onclick = function() {
    window.location.href= ytlink;
}
twitter.onclick = function() {
    window.location.href= twlink;
}
twitter.onclick = function() {
    window.location.href= rolink;
}

mainTitle.onmouseenter = function() {
    mainTitle.style.fontFamily= "Lilita One, Regular"
    mainTitle.style.fontSize= "40px";
}

mainTitle.onmouseleave = function() {
    mainTitle.style.fontSize= "40px"
    mainTitle.style.fontFamily= 'Gill Sans';
}
youtube.onmouseenter = function() {
    youtube.style.width= "130px";
    youtube.style.height= "110px";
}
youtube.onmouseleave = function() {
    youtube.style.width= "120px";
    youtube.style.height= "104px";
}
twitter.onmouseenter = function() {
    twitter.style.width= "130px";
    twitter.style.height= "110px";
}
twitter.onmouseleave = function() {
    twitter.style.width= "120px";
    twitter.style.height= "104px";
}
roblox.onmouseenter = function() {
    roblox.style.width= "130px";
    roblox.style.height= "110px";
}
roblox.onmouseleave = function() {
    roblox.style.width= "120px";
    roblox.style.height= "104px";
}
























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































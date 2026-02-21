self.addEventListener("install", e => {
e.waitUntil(
caches.open("delivery").then(cache=>{
return cache.addAll([
"./",
"index.html"
]);
})
);
});
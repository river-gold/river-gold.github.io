function r(n){let t=[...n];for(let o=n.length-1;o>0;o--){let e=Math.floor(Math.random()*(o+1)),i=t[o];t[o]=t[e],t[e]=i}return t}function a(n=200){window.navigator.vibrate(n)}function l(){return new Promise(function(n,t){try{navigator.geolocation.getCurrentPosition(n,t)}catch(o){console.log(o),t()}})}export{l as g,r as s,a as v};

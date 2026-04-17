# js/index.js

```javascript
function login(){
 const name=document.getElementById('name').value.trim();
 const pass=document.getElementById('pass').value.trim();
 if(name && pass){
   localStorage.setItem('user',name);
   location.href='dashboard.html';
 }else{
   document.getElementById('msg').innerText='Enter details';
 }
}
```

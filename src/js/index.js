const shorten = document.getElementById('shorten');
const btnCopy = document.getElementById('copy');
const placeholder = document.getElementById('placeholder');
const short = ()=>{
    const url = document.getElementById('url');
    if(!url.value){
        url.classList.add('error');
        input.value = '';
    }else{
        url.classList.remove('error');
    }
    
    let linkRequest = {
        destination: url.value, 
        domain: {fullName: 'rebrand.ly'}
    }
    let requestHeaders = {
        'Content-Type': 'application/json',
        'apikey': 'b60aee4020d04dd1a9acb7dd2ee00797',
    }

const request = async ()=>{
 let response = await fetch('https://api.rebrandly.com/v1/links', {
     method: 'post',
     headers: requestHeaders,
     body: JSON.stringify(linkRequest),
   });

   const data = await response.json();
   let inputUrl = document.getElementById('url');
   inputUrl.value = data.shortUrl;
    }
    request();
    return;
}
shorten.addEventListener('click', short);

const copy = ()=>{
    const inputUrl = document.getElementById('url').value;
   if(navigator.clipboard.writeText(inputUrl)){
    btnCopy.textContent = 'copied';
   }
   setTimeout(()=>{
    btnCopy.textContent = 'copy';
   },1000);
}
btnCopy.addEventListener('click', copy);





 

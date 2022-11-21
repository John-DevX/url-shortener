const btn_dark_mode = document.getElementById('dark-mode');
const shorten = document.getElementById('shorten');
const btnCopy = document.getElementById('copy');
const darkMode = ()=>{
    const body = document.body;
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');
   body.classList.toggle('body');
    main.classList.toggle('ui-dark');
    footer.classList.toggle('footer-ui-dark');
    if(body.classList.contains('body')){
        body.classList.add('body-dark');
        btn_dark_mode.innerText = 'Light mode';
        btn_dark_mode.classList.add('btn-mode');
    }else{
        body.classList.remove('body-dark');
        btn_dark_mode.innerText = 'Dark mode';
        btn_dark_mode.classList.remove('btn-mode');
    }
    return;
}
btn_dark_mode.addEventListener('click', darkMode);

const short = ()=>{
    const url = document.getElementById('url');
    const msg = document.getElementById('msg');
    if(!url.value){
        msg.innerText = 'Enter a valid url';
        url.classList.add('error');
    }else{
        msg.innerText = '';
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
   })
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
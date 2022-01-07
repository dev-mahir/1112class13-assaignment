




setInterval( function smClock(){
    const hours =  document.querySelector('.hours');
    const minutes =  document.querySelector('.minutes');
    const seconds =  document.querySelector('.seconds'); 
    const format =  document.querySelector('.format'); 
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    format.innerHTML = ( h > 12 ) ? 'PM' : 'AM';
    if( h > 12 ){
        h = h - 12;
    }
    if( h == 0 ){
        h = 12; 
    }
    
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ?  '0' + m : m;
    seconds.innerHTML =  s < 10 ?  '0' + s : s;

   
},1000);


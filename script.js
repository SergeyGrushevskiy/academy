
// Swiper inicialization 



var open = document.getElementById('open');

var close = document.getElementById('close');

var block = document.getElementById('block');

open.addEventListener('click', function(){
    block.style.width = '457px';
    block.style.height = '1843px';
    close.style.display = 'block';
    
    
});

close.addEventListener('click', function(){
    block.style.width = '0';
    block.style.height = '0';
    this.style.display = 'none';
    open.style.display = 'block';

    
});

// left sliding menu


  
  
  
  

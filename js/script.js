document.getElementById('btnTaksiHesapla').addEventListener('click', TaksiHesapla);

function TaksiHesapla(){
    event.preventDefault();

    var from 
    var to 
    from = document.getElementById('from').value
    to = document.getElementById('to').value

    if(from == 'galata' && to == 'galata')
        document.getElementById('result').innerHTML= '0₺'
    
    if(from == 'galata' && to == 'topkapi')
        document.getElementById('result').innerHTML= '150₺'
    
    if(from == 'galata' && to == 'ayasofya')
        document.getElementById('result').innerHTML= '200₺'


    if(from == 'topkapi' && to == 'galata')
        document.getElementById('result').innerHTML= '150₺'
    
    if(from == 'topkapi' && to == 'topkapi')
        document.getElementById('result').innerHTML= '0₺'
    
    if(from == 'topkapi' && to == 'ayasofya')
        document.getElementById('result').innerHTML= '250₺'

    
    if(from == 'ayasofya' && to == 'galata')
        document.getElementById('result').innerHTML= '200₺'
    
    if(from == 'ayasofya' && to == 'topkapi')
        document.getElementById('result').innerHTML= '250₺'
    
    if(from == 'ayasofya' && to == 'ayasofya')
        document.getElementById('result').innerHTML= '0₺'
    


}
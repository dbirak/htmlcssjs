function przycisk()
{
    var tablica1 = document.getElementById("tablica1").value;
    var tablica2 = document.getElementById("tablica2").value;
    var tekst = "";
    
    
    const char1 = tablica1.split(",");
    const char2 = tablica2.split(",");
    
    for(let i=0; i<char1.length; i++)
    {
        for(let j=0; j<char2.length; j++)
        {
            if(char1[i] == char2[j]) 
            {
                char1.splice(i,1);
                i--;
            }
        }
    }
    
    for(let i=0; i<char1.length; i++)
    {
        tekst += ""+char1[i];
        
        if(i != char1.length-1) tekst += ",";
    }
    
    document.getElementById("tekst").innerHTML = tekst;
}
// code your solution here
function superbowlWin(record){
     for(const x of record){
        if(x.result === "W"){
            return x.year;
        }
        
     }
    //return 'N/A';
    
}

records.find(superbowlWin);





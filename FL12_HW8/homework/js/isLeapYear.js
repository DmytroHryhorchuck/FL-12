function isLeapYear (date) {
     if(new Date(date).getFullYear()%4===0){
        return `${new Date(date).getFullYear()} is a leap year`
     }else if (!new Date(date).getFullYear()%4===0){
        return `${new Date(date).getFullYear()} is not a leap year`  
     }else{
        return 'Invalid Date'
     }
    
}
isLeapYear('2020-01-01 00:00:00');


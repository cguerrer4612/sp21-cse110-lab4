for (let cars in statistics){
    if(cars[0] === 'r' || statistics[cars] % 2 === 1){
        console.log(statistics[cars]);
    }
}
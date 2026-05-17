/**
 * same day can not sell
 * input [7,1,5,3,6,4] | Output 5 | buy at 1 and sell on 6 and profit 5
 * input [7,6,4,3,1] | output 0 | There are no profit
*/
const prices = [7,1,5,3,6,4,10]
//const prices = [7,6,4,3,1];
let profit = 0;
function bestTimeToSellAndBuy(prices){
    // loop will start from 1st index because same day can not sell so assuming next day will sell
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] - min > profit) {
            profit = prices[i] - min;
        }

        // exa :- 1 is less than 7 so min will updatae
        if(prices[i] < min) {
            min = prices[i];
        }
    }

    return profit;
}

console.log(bestTimeToSellAndBuy(prices));
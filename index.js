// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun("bathe my dog")

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

mondayWork("work from home")



function wrapAdjective(symbol = '*') {
    const innerFunc = function (param1 = "special") {
        return `You are ${symbol}${param1}${symbol}!`
    };
    return innerFunc
}


// Code your solution in this file!
const blockLength = 264;

function distanceFromHqInBlocks(destBlock){
    return Math.abs(destBlock - 42);
}

function distanceFromHqInFeet(destBlock){
    return distanceFromHqInBlocks(destBlock) * blockLength;
}

function distanceTravelledInFeet(startBlock, destBlock){
    return Math.abs(destBlock - startBlock) * blockLength;
}

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination);

    switch (true) {
        case (feet < 400):
            return 0;
        case (feet < 2000):
            return (feet - 400) *.02;
        case (feet < 2500):
            return 25;
        default:
            return  'cannot travel that far';
    }
}
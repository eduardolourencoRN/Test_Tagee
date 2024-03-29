// heightCalculator.js
const calculateHeight = (length) => {
    switch (length) {
        case 1:
            return 110;
        case 2:
            return 115;
        case 3:
            return 160;
        case 4:
            return 170;
        case 5:
            return 200;
        case 6:
            return 200;
        case 7:
            return 250;
        case 8:
            return 250;
        default:
            return 100;
    }
};

export default calculateHeight;

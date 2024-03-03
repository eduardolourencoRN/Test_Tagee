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
        case 7:
            return 250;
        default:
            return 100;
    }
};

export default calculateHeight;

const { CronJob } = require('cron');

const ParkingSpot = require('./../models/ParkingSpot');

function initResetSlotsCron() {
    return new CronJob('* 55 * * * *', () => {
        ParkingSpot.releaseAllSlots();
    });
}

module.exports = initResetSlotsCron;

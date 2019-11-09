const { CronJob } = require('cron');

const ParkingSpot = require('./../models/ParkingSpot');

function initResetSlotsCron() {
    // return new CronJob('10 * * * * *', () => {
    //     console.log('cron executed');
    //     ParkingSpot.releaseAllSlots();
    // });
    return new CronJob(
        '* 10 1 * * *',
        () => {
            console.log('cron executed at', Date.now());
            ParkingSpot.releaseAllSlots();
        },
        null,
        true,
        'Asia/Kolkata'
    );
}

module.exports = initResetSlotsCron;

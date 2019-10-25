const { CronJob } = require('cron');

const ParkingSpot = require('./../models/ParkingSpot');

function initResetSlotsCron() {
    // return new CronJob('10 * * * * *', () => {
    //     console.log('cron executed');
    //     ParkingSpot.releaseAllSlots();
    // });
    return new CronJob(
        '* 19 * * * *',
        () => {
            console.log('cron executed at', Date.now());
            ParkingSpot.releaseAllSlots(slots =>
                console.log('cron updated slots', slots)
            );
        },
        null,
        true
    );
}

module.exports = initResetSlotsCron;

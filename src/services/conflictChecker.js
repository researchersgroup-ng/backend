const { Schedule } = require("../models");
const { Op } = require("sequelize");

exports.isVenueAvailable = async (
  venueId,
  date,
  startTime,
  endTime
) => {
  const conflict = await Schedule.findOne({
    where: {
      venueId,
      date,
      [Op.and]: [
        { startTime: { [Op.lt]: endTime } },
        { endTime: { [Op.gt]: startTime } }
      ]
    }
  });

  return !conflict;
};

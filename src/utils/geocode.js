const request = require("request");

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiZHVkb3YiLCJhIjoiY2tiNWEzOWkxMG51NDJ6bzJ2a3k2OHBxeSJ9.vl8i6AIBOGqd7wJBkyuR6A&limit=1";

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to location", undifined);
    } else if (body.features.length === 0) {
      callback("Unable to find Location", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longtitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;

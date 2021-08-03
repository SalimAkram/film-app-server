
const checkCoordsExist = (longitude, latitude, locations) => {
  const coordsMatch = locations.every((location) => {
    debugger
    return location.longitude === longitude && location.latitude === latitude
  }) 
  if (coordsMatch) {
    return true
  }
};

export default checkCoordsExist
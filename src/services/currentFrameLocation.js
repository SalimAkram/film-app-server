import { Roll } from "../models/index.js"

const currentFrameLocation = async (id) => {
  const roll = await Roll.query().findById(id);
  roll.locations = await roll.$relatedQuery("locations");  
  return roll.locations[roll.locations.length - 1];
};

export default currentFrameLocation;
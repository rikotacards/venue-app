const { Pool, Client } = require("pg");
const { config } = require("./psql.config.js");

console.log(config);
const pool = new Pool(config);

const getAllItems = async () => {
  try {
    var query = `select * from venuedetails`;
    var output = await pool.query(query);
    return output.rows;
  } catch (error) {
    console.log(error);
  }
};

const getVenuesByFunctionType = async (functionType) => {
  try{
    console.log('getVenuesByFunction HIT')
    var query =  `select * from venuedetails where functiontype like '%${functionType}%'`;
    var output = await pool.query(query)
    console.log('output', output.rowCount)
    return output.rows
  } catch (error) {
    throw new Error (`no functiontype with ${functionType}`)
  }
}

const getVenuesByFunctionEventType = async (functionType, eventType) => {
  try {
    console.log('venue by func and event type')
    var query = eventType ? `select * from venuedetails where functiontype ilike '%${functionType}%' and eventType ILIKE '%${eventType}%'` :`select * from venuedetails where functiontype ilike '%${functionType}%'`;
    var output = await pool.query(query);
    console.log( output.rowCount);
    return output.rows;
  } catch (error){
    console.log('big')
    return [];
    throw new Error ('ERROR')
  }
}

const getVenuesByFunctionEventTypeFeature = async (functionType, eventType, feature) => {
  try {
    console.log('venue by func and event type')
    var query = `select * from venuedetails where functiontype like '%${functionType}%' and where eventType like '%${eventType}%' and where ${feature} = 'true'`;
    var output = pool.query(query);
    console.log(output, output.rowCount);
    return output.rows;
  } catch {
    (error)
  } throw new Error ('ERROR')
}



module.exports = {
  getAllItems,
  getVenuesByFunctionType,
  getVenuesByFunctionEventType,
};

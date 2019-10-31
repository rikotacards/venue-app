const { Pool, Client } = require('pg')
const { config } = require('./psql.config.js')

console.log(config)
const pool = new Pool(
  config
)

const getAllItems = async() => {
  try {
    var query = `select * from venuedetails`
    var output = await pool.query(query)
    console.log('output', output.rows)
    return output.rows

  } catch (error) {
      console.log(error)
  }

}

module.exports = {
    getAllItems
}
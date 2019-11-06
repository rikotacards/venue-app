CREATE DATABASE venues;

\c venues;

DROP TABLE IF EXISTS venuedetails; 

CREATE TABLE IF NOT EXISTS venuedetails (
    id SERIAL PRIMARY KEY, 
    venueName varchar (50),
    featured boolean,
    venueAddress varchar (100), 
    venueDescription varchar (500),
    phoneNumber varchar (15),
    email varchar (50), 
    capacityStanding integer,
    capacitySitting integer, 
    venueSize varchar (20), --"1000 square feet"
    venueType varchar (20), --"Bar"
    eventType varchar (100), -- "Annual dinner"
    functionType varchar(100), -- "Corporate"
    budgetPerHead integer
);

\copy venuedetails (venueName, featured, venueAddress, venueDescription, phoneNumber, email, capacityStanding, capacitySitting, venueSize, venueType, eventType, functionType, budgetPerHead) FROM './sameData.csv' DELIMITER ',' CSV HEADER

-- Examples
-- eventType, "Annual Dinner", "Breakfast Meeting"
-- FunctionType, "Corporate"
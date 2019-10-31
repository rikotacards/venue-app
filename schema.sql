CREATE DATABASE venues;

\c venues;

CREATE TABLE IF NOT EXISTS venuedetails (
    id SERIAL PRIMARY KEY, 
    venueName varchar (50),
    venueAddress varchar (100), 
    venueDescription varchar (500),
    phoneNumber varchar (15),
    email varchar (50), 
    capacityStanding integer,
    capacitySitting integer, 
    venueSize varchar (20),
    venueType varchar (20), 
    budgetPerHead integer
);

\copy venuedetails (venueName, venueAddress, venueDescription, phoneNumber, email, capacityStanding, capacitySitting, venueSize, venueType, budgetPerHead) FROM './sameData.csv' DELIMITER ',' CSV HEADER
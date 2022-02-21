CREATE DATABASE starrating;

CREATE TABLE feedback(
  feedback_id SERIAL PRIMARY KEY,
  rating1 INT,
  rating2 INT,
  rating3 INT,
  comment VARCHAR(255)
);
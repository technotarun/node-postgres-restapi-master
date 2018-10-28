-- Database: users

-- DROP DATABASE users;

CREATE DATABASE users
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'English_United States.1252'
       LC_CTYPE = 'English_United States.1252'
       CONNECTION LIMIT = -1;








-- Table: user_details

-- DROP TABLE user_details;

CREATE TABLE user_details
(
  id serial NOT NULL,
  name character varying(100) NOT NULL,
  email character varying(100) NOT NULL,
  contact character varying(13) NOT NULL,
  address character varying(255) NOT NULL,
  hobbies character varying(500)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE user_details
  OWNER TO postgres;

  
  
  
  
  




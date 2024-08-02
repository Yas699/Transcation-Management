To connect your project with the databse we need to create a envs folder parallel to src which contain file .env
.env file format  
PORT=port_number
MONGODB_URL="mongo_connection_string"



Curl Request to add a transcation

curl --location 'http://localhost:3000/api/addTranscation' \
--header 'Content-Type: application/json' \
--data '{
    "accountId" : 123,
    "status" : "success",
    "amount" : 520,
    "type" : "deposit"
}'

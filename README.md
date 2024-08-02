Curl Request to add a transcation

curl --location 'http://localhost:3000/api/addTranscation' \
--header 'Content-Type: application/json' \
--data '{
    "accountId" : 123,
    "status" : "success",
    "amount" : 520,
    "type" : "deposit"
}'

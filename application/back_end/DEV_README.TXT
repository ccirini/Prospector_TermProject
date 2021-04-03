routes

search       -> GET /search/{dropdown category}/text/{search text}

signin       -> GET /signin
                    -   DATA TO SEND BACK 
                        { email, password }

signup       -> POST /signup/professor
                    -   DATA TO SEND BACK 
                        { email, password, firstName, lastName, university }

             -> POST /signup/recruiter
                    -   DATA TO SEND BACK 
                        { email, password, companyName, decription, addressId, websiteLink }

             -> POST /signup/student 
                    - Still working on resume uploads 


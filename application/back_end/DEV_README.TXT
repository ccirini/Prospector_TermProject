routes

search       -> GET /search/{dropdown category}/text/{search text}

signin       -> GET /signin
                    -   DATA TO SEND BACK 
                        type: JSON { email, password }

signup       -> POST /signUp/professor
                    -   DATA TO SEND BACK 
                        type: JSON { email, password, firstName, lastName, university }

             -> POST /signUp/recruiter
                    -   DATA TO SEND BACK 
                        type: JSON { email, password, companyName, decription, addressId, websiteLink }

             -> POST /signUp/student 
                    -   DATA TO SEND BACK 
                        type: JSON { email, password, studentSFSUId, firstName, lastName, addressId,
                            ethnicity, major, gender, veteranStatus, lgbtqStatus, financialAidStatus, 
                            disabilityStatus, firstGeneration
                        }
             
resume       -> POST /upload (resume upload)
                    -   DATA TO SEND BACK 
                        type: form-data { resume file, userId }

             -> POST /update/resume (resume update)
                    - DATA TO SEND BACK
                        type: form-data { resume file, userId }
                        
             -> GET /resume?userId={userId}
                    - - how to find userId for testing purposes - -
                        - use csc649Team2 server DB
                        - 'SELECT userId FROM images'


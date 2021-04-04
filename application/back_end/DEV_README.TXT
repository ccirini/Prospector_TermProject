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
                    -   DATA TO SEND BACK 
                        { email, password, studentSFSUId, firstName, lastName, addressId,
                            ethnicity, major, gender, veteranStatus, lgbtqStatus, financialAidStatus, 
                            disabilityStatus, firstGeneration
                        }
             
resume       -> POST /upload (resume upload)
                    -   DATA TO SEND BACK 
                        { resume file, userId }
             -> GET /resume 
                    -   DATA TO SEND BACK 
                        { userId }

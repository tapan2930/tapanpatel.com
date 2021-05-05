const admin = require("firebase-admin")

const serviceAccount = {
  "type": process.env.NEXT_PUBLIC_FB_SERVICE_type,
  "project_id": process.env.NEXT_PUBLIC_FB_SERVICE_project_id,
  "private_key_id": process.env.NEXT_PUBLIC_FB_SERVICE_private_key_id,
  "private_key":process.env.NEXT_PUBLIC_FB_SERVICE_private_key,
  "client_email": process.env.NEXT_PUBLIC_FB_SERVICE_client_email,
  "client_id": process.env.NEXT_PUBLIC_FB_SERVICE_client_id,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url":process.env.NEXT_PUBLIC_FB_SERVICE_client_x509_cert_url
}

export const verifyIdToken = (token:any) =>{
  if(admin.apps.length){
    admin.initializeApp({
      Credential: admin.Credential.cert(JSON.stringify(serviceAccount)),
    })
  }

  return admin
  .auth()
  .verifyIdToken(token)
  .catch((err:any)=>{
    throw err
  })
}
/**form handling and working with form
making sure the data coming from lib,fw,templating engine,
we still handle form 

1.npm i cookie-parser
session cookie ->after login,if you disconnect by mistake, then 
server forget you, so we have to login again 

but after login, backend create string (token /cookie)and send to frontend/client 
then frontend will send this string with every request 
the way of connecting with help of this cookie server-client connection is called session 
if you remove that string then logout
cookie saved on frontend and used in Authentication of user 
login to logout-> one session 

request will be encoded into stream 
server will convert that data to read by follow 2 line
**/
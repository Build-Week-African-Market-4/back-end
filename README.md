# back-end

Endpoints to connect to front-end:

**auth-router**

POST(Register) — *requires an object: { user_name, password, location }*

/--- After a user registers, they need to be redirected to the login page so they can login and set the auth token! ---/

POST(Login) — *requires an object: { user_name, password }*

POST(Logout) — *nothing required*


**market-router**

/--- You can get objects from the back-end only after registering & logging in! ---/

GET(All) — *nothing required*
    *returns an array of objects: { product_name, seller_price, qty, description, seller_name, location }*

GET(By Id) — *requires: { object_id } or may navigate to it directly*
    *returns a single object: { product_name, seller_price, qty, description, seller_name, location }*

POST(Create) — *requires an object: { product_name, category_name, seller_price, qty, description, seller_name, location }* 
    *returns: { createdObject }*

PUT(Update) — *requires an object: { product_name, category_name, seller_price, qty, description, seller_name, location }* 
    *returns: { updatedObject }*

DELETE — *nothing required(just the id from the request.params)* 
    *returns: { deletedObject }*
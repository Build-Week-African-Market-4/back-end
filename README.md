# back-end

Server running at the following URL:
https://african-marketplace-lambda.herokuapp.com/

Endpoints to connect to front-end:

**auth-router**

POST(Register) — *requires an object: { user_name, password, location }*
    https://african-marketplace-lambda.herokuapp.com/api/auth/register

/--- After a user registers, they need to be redirected to the login page so they can login and set the auth token! ---/

POST(Login) — *requires an object: { user_name, password }*
    https://african-marketplace-lambda.herokuapp.com/api/auth/login

POST(Logout) — *nothing required*
    https://african-marketplace-lambda.herokuapp.com/api/auth/logout

**market-router**

/--- You can get objects from the back-end only after registering & logging in! ---/

GET(All) — *nothing required*
    *returns an array of objects: { product_name, seller_price, qty, description, seller_name, location }*
    https://african-marketplace-lambda.herokuapp.com/api/market

GET(By Id) — *requires: { object_id } or may navigate to it directly*
    *returns a single object: { product_name, seller_price, qty, description, seller_name, location }*
    https://african-marketplace-lambda.herokuapp.com/api/market/:id

POST(Create) — *requires an object: { product_name, category_name, seller_price, qty, description, seller_name, location }* 
    *returns: { createdObject }*
    https://african-marketplace-lambda.herokuapp.com/api/market

PUT(Update) — *requires an object: { product_name, category_name, seller_price, qty, description, seller_name, location }* 
    *returns: { updatedObject }*
    https://african-marketplace-lambda.herokuapp.com/api/market/:id

DELETE — *nothing required(just the id from the request.params)* 
    *returns: { deletedObject }*
    https://african-marketplace-lambda.herokuapp.com/api/market/:id
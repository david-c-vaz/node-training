Assignment 1
=============
Create a http server which reads username from request parameter and prints “Hello <username>” on browser.

It should run as node server.js <port_number> , server will check it port is already is in use and throw error else it should start the server.
eg: localhost:8000/hello/cuelogic will output “Hello cuelogic”

For invalid route / url, server should handle it and throw 404 error

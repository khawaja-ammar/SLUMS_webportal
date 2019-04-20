# SLUMS_webportal
SE - Group 9 Project

At the front-end when creating an event it will be necessary to create an array of JSON sports objects that will be passed along with the other event attributes.
Also for the creation/deletion of sports etc you will have to use the requisite middleware as present in the middleware. Consequently, whereas sports is a part of events, modfication to the sports array will be done using the "/sports" instead of "/events".
Matches:
Initially, matches will be passed as an array of matches to sports since the user cannot create matches individually.
However, during event admin may use scheduler which might return just a single match for instance at the end. So adding a single match to array, deleting match and modifying match in array will all be dealt with in the 'routes/match'

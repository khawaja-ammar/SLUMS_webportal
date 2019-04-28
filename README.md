# SLUMS_webportal
SE - Group 9 Project

At the front-end when creating an event it will be necessary to create an array of JSON sports objects that will be passed along with the other event attributes.
Also for the creation/deletion of sports etc you will have to use the requisite middleware as present in the middleware. Consequently, whereas sports is a part of events, modfication to the sports array will be done using the "/sports" instead of "/events".
Matches:
Initially, matches will be passed as an array of matches to sports since the user cannot create matches individually.
However, during event admin may use scheduler which might return just a single match for instance at the end. So adding a single match to array, deleting match and modifying match in array will all be dealt with in the 'routes/match'

Backend Frontend communication:
1. The frontend request an entire event.  (Cache events?)
2. For all  transactions regarding matches, sports frontend will send their respective ID to server which will identify based on these. 

Scheduler:
l'll right create a new middleware scheduler that will take required teams and create matches for them appropriately
as in will fill in team names. These will then be sent to the client. When the client has set the time for all the matches 
then client will send an array of matches to be stored

How to type of match? have to look at sports category => category has to b
How will we know which team will participate in which match i.e is team participating or kicked out?
Ensure any single team will have no more than one match to take place
so then.... always look through teams, filter all not participating, filter all with no matches scheduled, schedule matches for rest

one way: check status of all teams, then check all matches to see if team is participating... becomes o(mn)
other way: create a field in teams that says if match has been scheduled . in this case iterating through teams only once will be enough
we will have list of teams for which to make matches. Of course these have to be even number.
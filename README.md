# instaclone-challenge
React challenge repository
This is a coding challenge. In it, create an app that:

- [] Allow user to view an image
- [] Allow user to view ALL images (see API NOTES for pagination limits)
- [] Allow user to view a RANDOM image

--> In single-post view:
- [] Allow user to COMMENT on a POST
- [] Allow user to LIKE a POST
- [] Allow user to EDIT a POST
- [] Allow user to DELETE a POST

--> in create-post:
- [] Allow user to CREATE a POST, with an image and a caption
- [] Add hotlink (see API NOTES for hotlinking reqs)

API NOTES ---
We will use the Unsplash API for this project. See https://unsplash.com/documentation for the docs, and note you must make a dev account

PAGINATION: By default, the API returns 10 images / page, to a max of 30. See https://unsplash.com/documentation#pagination for more info

HOTLINKING: Unsplash API requires hotlinking, ie adding the link itself when using the API. Since we are coding on local machines, I doubt we will run
into too many problems with this, but just in case, here is more info: https://unsplash.com/documentation#guidelines--crediting

RATE LIMIT: For demo version, we are rate-limited to 50 requests / hour.

KEYS: Be sure to add a .gitignore file with your API dev key!

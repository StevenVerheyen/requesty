# Requesty

Request helper for Javascript

## Extending of endpoints

### First thing first

When adding new endpoints, create a new file in `./endpoints/` (or extend one) (see auth.js as an example).

### But then 🧐

After adding (or extending an endpoint), add this endpoint in `./helpers.js`.
In this file on the first line, you may need to edit the api endpoint. If you are working with a proxy, most likely it is not needed to specify the domain. If you are not sure if you use a proxy, it is safe to use the full endpoint url (e.g. `https://somedomain.com/api/v1`).

Starting from line 2, you can add new endpoint urls. Note, leave out the url used above as later on in this file, the full endpoint url is composed 👍

Leave everything starting from `const cookieType...` as these are helper methods.

### At last

After doing all steps above, navigate to `./index.js` and add these endpoints to the list. See the content of this file as an example. When doing this, you do not need to manually import every endpoint methods anymore in your project. This makes it possible to only import the index file, thus making every endpoint already instantly available 🥳

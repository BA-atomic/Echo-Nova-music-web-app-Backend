### [Backend] Testing locally: iOS itunes API workaround

> You will also need the IP address talked about in the frontend repo's readme here in the backend too. See link in frontend repo's readme for how to get your IP address.

> Note: The `PORT` in the `.env` file is set to 4000 so that it is consistent with the port number present in the frontend's fetch URL for IOS. If you decide to change the port number from 4000 to another number, ensure to use the changed PORT number in the frontend's (iOS) fetch URL.

Step 1: make a copy of the `.env.example` file, and rename the file copy to `.env`

Step 2: Use your ip address in the `.env` file instead in the `IOS_LOCAL_FRONTEND_ORIGIN` env variable. If your frontend port is not 5500, you can change this too in the .env file accordingly.

Step 3: In terminal (in the root of the backend repo), run the backend using the commands below.

if this is your first time running the backend do:

```
npm install
```

After installing, run:

```
npm run dev
```

> Check your running frontend to see that itunes API is working correctly for iOS devices.

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

### [Backend] Production: iOS itunes API workaround

> Note: Vercel was used to host this backend

Step 1: Create a configuration file like the `vercel.json` in the directory. Copy and paste the content in the `vercel.json` into your newly created file.

Step 2: Go to the `package.json` file, inside the `script` section, add:

```
"start": "node server.js"
```

Step 3: Push the changes you've made. Create an account on Vercel(if you don't have an account) and link your Github to it. Import this repo

Step 4: Before deploying in the `Environment Variable` section on vercel, in the `key` section paste:
```
PROD_FRONTEND_ORIGIN
```

in the `value` section paste:
```
https://echo-nova-music-web-app.vercel.app
```

Step 5: Deploy.
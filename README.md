# Auto GitHub Updater
 Auto webhook deploy updater for GitHub

NPM: https://www.npmjs.com/package/autogitupdater

Install steps :
1. Install autogitupdater : ``npm i autogitupdater``
2. Add the following line to your project ``require("autogitupdater")("/webhook/autogit/A_RAMDOM_KEY", app);``
3. Change ``A_RAMDOM_KEY`` by a random pass (https://passwordsgenerator.net/)
4. Run your program ``nodemon run``
5. Go to your repository settings and create a webhook pointing to ``http(s)://your_ip/webhook/autogit/A_RAMDOM_KEY``

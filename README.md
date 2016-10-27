# Demo: Express with Async-Await

## 1. Restore Packages

- Open a command line at project root
- Execute: `npm install`

## 2. Build, Run and Watch

*The easiest way to start the app is to use the* `start` *task,    
which will restart the app when any changes saved.*

- Press **Cmd + P** (Mac) or **Ctrl + P** (Windows / Linux) and enter: `task start`
- Or open a **terminal** and enter: `gulp start`
    + Press **Ctrl + C** to terminate the app
- Project will build and start while *monitoring* for file changes
    + If you edit and save a file, the project will *restart*
    + If using a browser, you will need to *refresh* to see changes
- To stop the app that is running in VS Code, terminate the running task.
    + Press **Cmd + Shift + P** (Mac) or **Ctrl + Shift P** (Windows / Linux),  
      select **Terminate Running Task**

NOTE: The `start` task does not run the `clean` task to remove the **dist** folder
and its contents, because removing the folder interfers with nodemon on Windows.
However, if you want to clean out old files, you can simply build the project, 
which includes removal of the **dist** folder.

## 3. Compile

- Press **Cmd + Shift + B** (Mac) or **Ctrl + Shift B** (Windows / Linux)

## 4. Run

- Open a **terminal** and enter: `node ./dist/api/server.js`
- Open a **browser** and navigate to: <http://localhost:3000>

## 5. Debug

- Open a **server.ts** file and press F5 to debug
- You may set a **breakpoint** in the file if you wish.
- Show debug console: **Cmd + Shift + Y** (Mac) or **Ctrl + Shift Y** (Windows / Linux)


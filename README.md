# cloud-server

> ## **Setup**

- Install Express package (`npm i express`)
- In package.json file, under the `scripts` section, place `"start": "node index.js"`
- Deploy using GUI or CLI (instructions below)

  > ### GUI

  - On AWS, be sure that you are in the correct region! And then start the creation of a new application:
    - Name your deployed application
    - Choose Node.js as your platform
    - Create and upload a .zip file that contains your application's source code -- do not include `node_modules` or `package-lock.json`

  > ### CLI

  Make sure AWS and EB command-line utilities are installed.

    - Add user with IAM in AWS
    - To configure your user key:
      - `aws configure`
      - If you want to set or update your access key, copy it from IAM and paste into command line
      - If you want to set or update your secret key, copy it from IAM and paste into command line
      - Set your region name (if needed)
      - Set your default output (if needed)

  - `eb init`
    - Choose your region
    - Choose `[Create new Application]`
    - Provide a name for your new application
    - Confirm you are using Node.js
    - Select a version
    - If prompted, CodeCommit and SSH are not needed
    - `eb create ENVIRONMENT-NAME`

> ## **Links**

[AWS GUI deployment](http://schillerlab16gui-env.eba-ijgubp5v.us-west-2.elasticbeanstalk.com/)
[AWS CLI deployment](http://schiller-lab16-cli.eba-qet3vtd7.us-west-2.elasticbeanstalk.com/)
### Simple firebase authentication component for reactjs apps.

This module has two components-- One for authentcation and another for displaying the status/logout. The **FirebaseAuth** component contains the login and register page. Where as the **AuthStatusButton** is a button compoent to show the loggedin user. Clicking on it will logout the user. You can use the **AuthStatusButton** in the navbar.

### Usage

 **Step 1**

 Create a .env file in you project and add the firebase configuration details. You can get this from your firebase project console.

```

  API_KEY=AIzaSyB8bjuXzredfdfeV1fJNKHDvicd6MToB-XJ8gxk
  AUTH_DOMAIN=test-56tx8.firebaseapp.com
  DATABASE_URL=https://test-56tx8.firebaseio.com
  PROJECT_ID=test-35a74
  STORAGE_BUCKET=test-46tx8.appspot.com
  MESSAGING_SENDER_ID=4464454544d55
  APP_ID=1:4654454589:web:dfdt6f4df6d4fe4

  ```

 **Step 2**

` import FirebaseAuth, { AuthStatusButton } from "firebase-auth-component"; `


 **Step 3**

```
render() {
    return (
      <div>
        <FirebaseAuth/>
      </div>
    );
  }

  ```


  ### Display the loggedin user and logout button
  ` <AuthStatusButton login_link="/login" /> `

Props:
login_link= 'link to login path'
Example: `  login_link="/login" ` 
If the user is not loggedin, a link to login will be displayed else a button to logout. 

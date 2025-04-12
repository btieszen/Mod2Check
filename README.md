Mod2 Module Check
1.  first went to firebase and set up new project and authorization
2.  In firebase also set up database to include products and order information
3.  In Module2/check/check:
   1:   Installed all dependencies
    2:  Created folder lib inside created folder firebase and file firebase.ts
    3:  This has the configuration to link the app to firebase
    4: In Context folder file AuthContext.tsx this this set user
    In Components Folder
        AddDataform.tsx  this allows the user to add products including product and price
    this aslo gets stored in firebase
        AddOrderForm.tsx alows the user to add orders to a cart. they enter there name, product,price,quantity.
    This  aslo gets timestamped and added to firebase
        DisplayData.tsx diplays the product info including name and price
    this is delived from firebase
        DisplayOrder.tsx display the order from firebase there is also a delete order button and a checkout button
    It also displays the toal amount if they order more that 1 item and the time it was ordered
    Navbar.css has styling for the navbar
    Navbar.tsx is the navigation bar
    Under pages:
    Login.tsx is the login page that the user will loginto
    Logout. handles logout
    Profile.tsx displays the users profile and alows for updates
    Register.tsx is where the user will first sign up to use the page
    the data is stored in firebase
    
        
    

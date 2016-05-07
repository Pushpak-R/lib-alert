# lib-alert
Alert library for custom alerts, confirm and notifications

# Including library
To use this library include the customAlert.css and customAlert.js before the end of the body tag.

# Using CustomAlert constructor to create alerts, confirmations and notifications

## For alerts
```sh
var myAlert = = new CustomAlert({
      heading : "Alert",
      type : "alert",
      message : "Hello, alert... (press ok, no other options) Ok?",
      ok_text : "Ok"
    });
```
###To show the alert use show method.
myAlert.show();

###To listen user events use methods:
```sh
confirm : define task to be done inside this function as user press OK.
```
## For Confirms
```sh
var myConfirm = = new CustomAlert({
      heading : "Alert",
      type : "confirm",
      message : "Hello, alert... (press ok, no other options) Ok?",
      ok_text : "Ok",
      cancel_test : "Cancel"
    });
```
###To show the alert use show method.
myConfirm.show();

###To listen user events use methods:
```sh
confirm : define task to be done inside this function as user press OK.
dismiss : as user press Cancel.
```
## For Notification
```sh
var myNotify = = new CustomAlert({
      heading : "Alert",
      type : "notify",
      message : "Hello, alert... (press ok, no other options) Ok?"
    });
```
###To show the alert use show method.
myNotify.show();

###To listen user events use methods:
You can't listen as it just notify user and closes automatically after 2 secs.

##Properties
```sh
    wrapper : document.body,          ### default is body or you can specify in contructor options
		type : "alert",                   ### default is alert or you can specify in contructor options = Confirm || Notify
		heading : undefined,              ### default is undefined or you can specify in contructor options
		ok_text : "Ok",                   ### default is OK or you can specify in contructor options
		cancel_text : "Cancel",           ### default is Cancel or you can specify in contructor options
		message : "Default message.",     ### you should specify in contructor options
		autoHide : false                  ### default is false or you can specify in contructor options (auto hide in 2 sec)

autoHide option is true for notify.
```

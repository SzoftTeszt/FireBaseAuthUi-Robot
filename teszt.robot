*** Settings ***
Library     SeleniumLibrary

*** Test Cases ***
Opening
    Opening Website
    Login User
    Logout User

*** Keywords ***
Opening Website
    Open Browser                      http://localhost:4200   Chrome  options=add_experimental_option("detach", True)
    Maximize browser window
    wait until element is visible     xpath://*[@id="firebaseui-auth-container"]/div/div[1]/form/ul/li[1]/button/span[2]    timeout=2
Create User    
    click element                     xpath://*[@id="firebaseui-auth-container"]/div/div[1]/form/ul/li[2]/button/span[2]
    sleep                             1s
    input text                        id:ui-sign-in-email-input     szoftteszt2020@gmail.com
    click element                     xpath://*[@id="firebaseui-auth-container"]/div/form/div[3]/div/button[2]
    sleep                             2s
    input text                        xpath://*[@id="ui-sign-in-password-input"]      Almafa12;
    click element                     xpath://*[@id="firebaseui-auth-container"]/div/form/div[3]/div/button[2]
    wait until element is visible     id:welcome  timeout=2  

Login User    
    click element                     xpath://*[@id="firebaseui-auth-container"]/div/div[1]/form/ul/li[2]/button/span[2]
    sleep                             1s
    input text                        id:ui-sign-in-email-input     szoftteszt2020@gmail.com
    click element                     xpath://*[@id="firebaseui-auth-container"]/div/form/div[3]/div/button[2]
    sleep                             2s
    input text                        xpath://*[@id="ui-sign-in-password-input"]      Almafa12;
    capture page screenshot           login.png
    click element                     xpath://*[@id="firebaseui-auth-container"]/div/form/div[3]/div[2]/button
    wait until element is visible     id:welcome  timeout=2 

Logout User
    Maximize browser window
    sleep   1s
    capture page screenshot           logout.png
    click element  xpath://*[@id="navbarSupportedContent"]/ul/li[2]/a
    wait until element is visible     xpath://*[@id="firebaseui-auth-container"]/div/div[1]/form/ul/li[1]/button/span[2]    timeout=3
    close browser
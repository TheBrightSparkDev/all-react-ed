![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome TheBrightSparkDev,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **September 1, 2021**

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**September 1 2021:** Remove `PGHOSTADDR` environment variable.

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!

START OF TIPS

Install react app

npx create-react-app app-name --use-npm

remember to cd into the app-name everytime you go into it
npm start

make sure you have this installed 

Name: ES7+ React/Redux/React-Native snippets
Id: dsznajder.es7-react-js-snippets
Description: Extensions for React, React-Native and Redux in JS/TS with ES7+ syntax. Customizable. Built-in integration with prettier.
Version: 4.4.3
Publisher: dsznajder
VS Marketplace Link: https://open-vsx.gitpod.io/vscode/item?itemName=dsznajder.es7-react-js-snippets

##Tips##

----- EXAMPLE class

import React from "react"

class StatefulGreeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return <h1>Hello {this.props.name}, {this.props.greetings} and I know you're {this.props.age} years old!</h1>
    }
}
export {StatefulGreeting}

---------------------------------------------------------------------------------

----- EXAMPLE functions (with props) 

function FunctionalGreetingWithProps(props){
    return <h1>Hello, {props.name} {props.greetings} I see you're {props.age} years old!!</h1>
}

const FunctionalGreetingSixWithProps = (props) => <h1>Hello, {props.name} {props.greetings} I see you're {props.age} years old!!</h1>;

export {FunctionalGreetingWithProps, FunctionalGreetingSixWithProps};

------ How to call props

You call props in the app.js using the following syntax:
    <FunctionalGreetingWithProps greetings="nice to meet you" name="Dan" age="25" />
    <FunctionalGreetingSixWithProps greetings="nice to meet you ES6" name="Dave" age="525" />

---------------------------------------------------------------------------------


----- EXAMPLE class with state change 

import React from "react"

class StatefulGreeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            introduction:"Hello",
            buttonText:"Exit",
        };
    }

    handleClick(){
        this.setState({
            introduction: "Goodbye!",
        })
    }

    render(){
        return (
        <div>
            <h1>
                {this.state.introduction} {this.props.name}, {this.props.greetings} and I know you're {this.props.age} years old!
            </h1>
            <button onClick={()=> this.handleClick()}>
                {this.state.buttonText}
            </button>
        </div>
        )
    }
}
export {StatefulGreeting}

---------------------------------------------------------------------------------


----- EXAMPLE the correct way to console log a state CHANGE

     this.setState({
                introduction:"Hello",
                buttonText:"Exit",
            }, ()=> {
                console.log(this.state.introduction);
                console.log(this.state.buttonText);
            })

---------------------------------------------------------------------------------

----- EXAMPLE clever way to check and change a state

betterHandleClick() {
        this.setState(
          {
            introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
          },
          () => {
            console.log("new state", this.state.introduction);
            console.log("new state", this.state.buttonText);
          }
        );
      }

---------------------------------------------------------------------------------

----- EXAMPLE the way you are supposed to handle state changes 


    evenBetterHandleClick() {
        this.setState((prevState, prevProps) => {
          console.log("Previous State:", prevState);
          console.log("Previous Props:", prevProps);
          return {
            introduction:
              prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
          };
        });
      }

---------------------------------------------------------------------------------

########################## EXAMPLE FROM CODE INSTITUTE ##########################

Updating the State Cheat Sheet
Rules for Updating state
Never update the state directly, always use setState()
For any code that needs to run after the state update, put it in a setState callback function.
Use a callback function in setState with prevState if you need to update state based on previous state values
Part 1: Updating the state using setState()
Add the onClick attribute to the button to listen for the click event

{/* Step 1: Set the button onClick action */}
<button onClick = {() => this.handleClick()}>{this.state.buttonText}</button> 

Write an event handler to run for every click event:

handleClick(){
       // Step 2: Create the handleClick function
   }

Use setState() in the event handler to update the state

handleClick(){
       // Step 3: Use the this.setState() Method to set the state
       this.setState({
           introduction : "Goodbye",
           buttonText: "Enter",
       });
       console.log(this.state.introduction);
       console.log(this.state.buttonText);
   }

Note: A call to setState is asynchronous, or in other words the console.log statement in the code above will run before the setState method has completed. Therefore you may also need to add a callback function to make it synchronous (make console logs run after setState).

Part 2: Updating the state with Callback function

Add an arrow function as a second parameter to your handleClick method, or in other words, use a callback function:

handleClick(){
       this.setState({
           introduction: "Goodbye",
           buttonText: "Enter",
        }, () => { // Use a call back function to ensure the code is run synchronously with setState() method
           console.log(this.state.introduction);
           console.log(this.state.buttonText);
       });   
   }

Part 3: Updating the state with ternary conditionals

Use a ternary conditional statement to check for previous state in the setState method.


handleClick() {
   this.setState({
   // Use a ternary conditional statement to add a Previous State
     introduction: this.state.introduction === "Hello" ? "Goodbye" : "Hello",
     buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
   }, () => { 
     console.log(this.state.introduction);
     console.log(this.state.buttonText);
   });
 }

Note: This will create a simple check back-and-forth switch between the 2 values above. Problems occur, however, if you need to call this function multiple times. React groups such calls and omits the extra functions being called.

Part 4: Updating the state with prevState 
Add an arrow function to the this.setState method which takes prevState and prevProps. 

handleClick() {
 // Add an arrow function with prevState and prevProps as parameters
 this.setState((prevState, prevProps) => {
   return {  
 
   }
 })
}

Call on prevState or prevProps when returning a value

handleClick() {
 this.setState((prevState, prevProps) => {
   console.log("Previous State: ", prevState);
   console.log("Previous Props: ", prevProps);
   return {
     // Use prevState or prevProps to call on state
     introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
     buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
   }
 })
}

####################### ES7 Snippets Cheat Sheet #####################

SUMMARY ##

rfce - Creates and exports normal function
rafce - Creates and exports a React Arrow Function 
rce - Creates and exports React Class
rconst - Creates a constructor for a class
cle - console log object
clo - console log object with its name as a string next to it

##

----- EXAMPLE rfce

Create a React Function
import React from 'react'

function ES7Snippets() {
    return (
        <div>
            
        </div>
    )
}

export default ES7Snippets

----- EXAMPLE rafce

Create a React Arrow Function 
import React from 'react'

const ES7Snippets = () => {
    return (
        <div>
            
        </div>
    )
}

export default ES7Snippets

----- EXAMPLE rce

Create a React Class Export
import React, { Component } from 'react'

export class ES7Snippets extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ES7Snippets

----- EXAMPLE rconst

Create a React Constructor
constructor(props) {
    super(props)

    this.state = {
         
    }
}
----- EXAMPLE cle

Console.log()
console.log(object)

----- EXAMPLE clo
Console.log(name + object)
console.log('object', object)




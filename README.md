# ReWeb

A web application to improve your code. The application fixes bugs, improves 
style (reformats code, renames bad variable/function names, adds comments 
etc.), and improves user accessibility.

## Inspiration

As we grow older, our parents and those of old age begin to exhibit health 
issues that deter them from using websites effectively. As programmers and 
designers, it becomes evermore important to make websites more accessible 
to those who need it in order to function in a society progressing towards 
advanced technology becoming the backbone of our world. We've spent countless 
hours trying to debug or improve code that was all too simple once we figured 
out the solution. We hoped to create an application that was free, easy to use,
 and could help other programmers save time during their programming endeavors. 
In hopes of that our application is aimed towards refactoring code in order to
 add more comments for developers to easily understand what is written, add 
accessibility features for those who need it, and improving small bits here 
and there to produce clean code!

## What it does?

Our application allows users to upload a file containing code in any language 
(although generally for now its HTML). The application then parses the code and 
fixes bugs, improves style (reformats code, renames bad variable/function names, 
adds comments etc.), and improves user accessibility using Generative AI from EdenAI. 
The application then shows the new code side-by-side in a GitHub style diff view. 
The user can continuously regenerate new files in order to find changes they 
think is most appropriate based on whatever is output by the Generative AI model.

Our project uses an OpenAI model behind the scenes to generate the code improvements. 
We use the OpenAI model through the Eden AI API.

## How we built it

We built the application using the Flask and React frameworks. The frontend of 
the application is built using React and various Ant Design components. We used 
Flask to create our custom REST API, which is used to communicate with the Eden 
AI. While Flask handles the logic and generates the necessary prompts using our 
API, React is calling our REST API in order to format the code in a pretty manner, 
while also making use of dynamic components in order to ensure it seems as seamless 
as possible. Throughout the code we have added bits of accessibility using our 
program, which demonstrates real applicability of our application! Specific 
improvements may involve the css in order to make it more responsive, and color
 suggestions in order to help contrast for people who are colorblind.

## Challenges we ran into

We ran into a lot of challenges while building this application. The first challenge 
was to find a suitable API to use for our project. We tried to avoid the OpenAI API 
due to it being a paid API, and because of that, we ended up spending hours trying 
to find an alternate API. We eventually found the EDEN AI API which allowed us to 
use OpenAI models for free. From there we had to learn how to combine React and 
Flask in order to communicate effectively, eventually deciding to have backend 
only act as the intermediary for connecting to Eden, while React handles most of 
the frontend components. One of our members was completely new and had to learn
CSS/HTML from scratch, which was a challenge in of itself as they had to learn 
the slight differences between how React works with HTML. Similarly, our other 
members had to focus on developing with unknown frameworks as they have mostly 
worked in individual projects using CLI components.

## Accomplishments that we're proud of

Building the application was no easy feat, and we had to constantly iterate on 
the design of the application. Getting the color scheme to a satisfactory level 
was the hardest part of our design process, along with additional components in 
getting the css appropriately fixed. However, we feel like the biggest accomplishment 
was getting the diff-view working on our react frontend. We believe that showcases 
effectively the dynamic aspect of our application, and allows it to be more seamless. 
Along with that we are proud of the integration between our frontend and backend in 
order to make use of Generative AI to display newly refactored code. The model we 
use seems to work well, and we hope that in future iterations it would be best |
to make use of something like Copilot to get more effective changes.

## What we learned

The whole process of creating the application was a journey for our team. We 
learned technical skills like web design and handling OpenAI API calls within our 
web application. We learned how to effectively manage our time (given we were on 
such a strict time constraint), and learned how to collaborate manage our tasks. 
A majority of our members were in college and we're still doing finals, which 
proved that we didn't have as much time as we wanted to work on the project, 
but we persevered. One member learned essentially all of CSS and HTML within 
a single night in order to create the design of our entire application. The 
other two learned how to seamlessly integrate frontend and backend together 
by communicating effectively.

## What's Next

In the future, we'd like to improve our UX as well as add more functionality 
to our website so that we can better help aspiring coders. We hope to create
our own model similar to Copilot from Github which will make our code a lot 
more applicable to users, and provide actual benefits that may be used in the 
industry. Furthermore, when we design our own model, we want it to be more 
specifically targeting ways in how to improve accessibility. By making our model 
emphasize clean code, accessibility, and improvements, we can have more targeted 
results. Similarly, we hope to expand towards allowing multiple files to be 
uploaded which will allow more complex projects to be integrated and made 
more accessible!

## Built With

EdenAI, Flask, node.js, python, React

## Try it out

https://github.com/newracket/reweb

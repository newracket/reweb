# ReWeb

A web application to improve your code. The application fixes bugs, improves
style (reformats code, renames bad variable/function names, adds comments etc.),
and improves user accessibility.

## Inspiration

As programmers, we've spent countless hours trying to debug or improve code that
was all too simple once we figured out the solution. We hoped to create an
application that was free, easy to use, and could help other programmers save
time during their programming endeavors

## What it does?

Our application allows users to upload a file containing code in any language (
could be a python script, a C++ program, an HTML website, etc.).
The application then parses the code and fixes bugs, improves style (reformats
code, renames bad variable/function names, adds comments etc.), and improves
user accessibility. The application then shows the new code side-by-side in a
GitHub style diff view.

Our project uses an OpenAI model behind the scenes to generate the code
improvements. We use the OpenAI model through the Eden AI API.

## How we built it

We built the application using the Flask and React frameworks. The frontend of
the application is built using React and various Ant Design components. We used
Flask to create our custom API, which is used to communicate with the Eden AI
API.

## Challenges we ran into

We ran into a lot of challenges while building this application. The first
challenge was to find a suitable API to use for our project. We tried to avoid
the OpenAI API due to it being a paid API, and because of that, we ended up
spending hours trying to find an alternate API. We eventually found the EDEN AI
API which allowed us to use OpenAI models for free.

## Accomplishments that we're proud of

Building the application was no easy feat, and we had to constantly iterate on
the design of the application. Getting the color scheme to a satisfactory level
was the hardest part of our design process, and we are very proud of the final
result.

## What we learned

The whole process of creating the application was a journey for our team. We 
learned technical skills like web design and handling OpenAI API calls within
our web application. We learned how to effectively manage our time(given we
were on such a strict time constraint), and learned how to collaborate manage
our tasks.

## What's Next

In the future, we'd like to improve our UX as well as add more functionality
to our website so that we can better help aspiring coders. 

## Built With

JavaScript, React, CSS, Flask

## Try it out

Whatever link we decide upon later

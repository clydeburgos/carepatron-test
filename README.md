# Carepatron Fullstack Test

## Summary
Carepatron’s mission is to make health software accessible to every human.
The platform [Carepatron] is a health workspace that empowers collaboration between health professionals and their clients.

Client records are the pillar of Carepatron’s entire platform, so your job is to build the best experience for our users to manage their client records.

## How to run this application
- Prerequisites
  - [Node > 12 and NPM > 8](https://nodejs.org/en/download/)
  - [.Net 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
- In new terminal - Go to */ui/*
  - `npm install`
  - `npm start`
- In new terminal Go to */api/*
  - `dotnet restore`
  - `dotnet build`
  - `dotnet start`

You should now have the API running on `localhost:5044` and the UI running on `localhost:3000`

## How to submit your work
- Email back to us a .zip file with the application, and any notes in the email (see below)
- Treat this like a real world project - if you’ve only got limited time, what’s the MVP for this?
- Include any notes you think are relevant
  - What would you do if you had the whole week to complete this?
  - What would you do next?
  - How was this test overall? I.e too hard, too easy, how long it took etc
 
## Product/User requirements
- Create a client
  - Capture their profile information (see designs below)
  - All fields are required
- Search for a client
  - Searching in the “search field” should filter the list of clients by their first or last name
  - Filtering should be done in the API
  - Example: John Stevens and Steven Smith should both show up if a user searches “steven”
  - Example: John Stevens should show up if a user searches "john"

## Technical requirements:

### UI requirements
- Must use React
- Must use Typescript

### Backend requirements
- Must use a RESTful API to fetch and save data
- Must use .NET

## Designs


### Client list page
<img width="1082" alt="Screen Shot 2022-07-29 at 6 51 38 PM" src="https://user-images.githubusercontent.com/14010084/181700473-a9177884-070a-4211-b14d-0a008eb78482.png">


### Create client modal
<img width="1083" alt="Screen Shot 2022-07-29 at 6 51 58 PM" src="https://user-images.githubusercontent.com/14010084/181700544-b2ea60fd-2dbd-491b-9197-282638143080.png">

### Missing Pieces
- Adding FluentValidation (backend) to handle validation on the backend (Attempted but failed, if more time was given, would have properly achieved it)
- Adding toastr (ui) for the validation, and adding red highlighting for the form inputs that have dirty / error values
- Finish the update section (adding new ui components to handle row click events on the list and then open the modal with the details) then update
- Adding a proper validator handler on UI to handle required fields and / or value formatting
- Completing the task via REACT
- Deploying to a cloud enviornment

### How was this test overall
- Overall it's good, to be honest, there were some issues I've encountered along the way, I had to do extra steps to keep some libraries working as I had conflict issues with the current version i have on machine versus the one I installed. Well, that's the normal day of us engineers so it's fine. I think I have really spent so many time on backend and azure that I have not touched ui for a couple of months made me forget a lot of stuff!

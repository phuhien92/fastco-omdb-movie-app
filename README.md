![image](https://user-images.githubusercontent.com/4343562/128666377-06c6dafc-9a79-49b1-a918-c49132f5d4a8.png)
## Movie Search App

### Requirement
Create a frontend application in React that allows a user to:
 - Complete this app in 3-5 hours
 - Search for movies
 - Render the results
 - Add movies to a playlist
 - Confirm the movies in the playlist.
 - Please include a footer that says "My favorite color is {your favorite color}" on
the confirmation screen, with the background color being that color.
 - Make the page mobile-friendly

### Application
Demo : https://omdb-app-hienluong.vercel.app
Source: https://github.com/phuhien92/fastco-omdb-movie-app

### Tech
- [create-react-app] - React boilerplate
- [omdapi] - movie search api
- [tailwindcss] - a ultility-first css framework
- [daisyui] - Tailwind CSS components

### Run project

`yarn start` -> start the application

## Summary

#### Time frame: 4-5 hours

#### 1. What were the most difficult tasks?
The most difficult task was to choose what tools I need to complete the project in 3-5 hours. If I made a wrong decision, I would take me a lot of time to put everything together. 

#### 2. Did I learn anything new while completing this assignment?
For quick responsive and good-looking design, I chose to use DaisyUI at this time. This is a first time I use DaisyUI (introduced to me first time in my daily JS newsletter) and the second time for TailwindCSS. The reason is that I had a good experience of making a fast mockup with TailwindCSS. DaisyUI is a fun tool to use if you want the design look good in no time.  

#### 3. What did you not have time to add? What work took the up majority of your time?
If I have more time:
1. Pagnation (search result is on page 1 now)
2. Add more search options like seach by ID
3. Add skeleton loader while API is fetching 

TaiwindCSS and DaisyUI are new tools I use in this project,so I spend a bit of time to read their documentation while working on the code. 

#### 4. How could the application be improved?
I like to add the features listed in the question listed above: pagination, more search options and skeloton loaders. I also can use Context hook and useMemo for state management. So I will not need to take care of drop drilling. 

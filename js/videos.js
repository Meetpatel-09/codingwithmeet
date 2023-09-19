videos = [
     {
          "src": "https://www.youtube.com/embed/6PQg7tXJWvk",
          "title": "How To Delete A Github Repository"
     },
     {
          "src": "https://www.youtube.com/embed/uuQ-Pu00J70",
          "title": "How to download and install GitHub Desktop on windows 11"
     },
     {
          "src": "https://www.youtube.com/embed/ydVBnEsfTwE",
          "title": "How to download and install python on windows 11"
     },
     {
          "src": "https://www.youtube.com/embed/zi9GdMR8-1U",
          "title": "How to install anaconda in Windows 11"
     },
     {
          "src": "https://www.youtube.com/embed/zoRJDbnftP4",
          "title": "How to download and install Visual Studio 2022 on Windows 11"
     },
     {
          "src": "https://www.youtube.com/embed/7OXqXxt8_7U",
          "title": "How to solve git error Make sure you configure your 'user.name' and 'user.email' in git in VS code"
     },
     {
          "src": "https://www.youtube.com/embed/CT4QlQsazsM",
          "title": "How to add GitHub account in Android Studio"
     },
     {
          "src": "https://www.youtube.com/embed/6jRKymfjaVg",
          "title": "Publish your project to GitHub from Visual Studio Code"
     },
     {
          "src": "https://www.youtube.com/embed/4Q9PHRsfIvQ",
          "title": "Log In with your GitHub account on Visual Studio Code"
     },
     {
          "src": "https://www.youtube.com/embed/xocXmZqpejE",
          "title": "How to create a new account on GitHub"
     },
     {
          "src": "https://www.youtube.com/embed/SZYtcTHB-1Q",
          "title": "How to create an Android Virtual Device in Android Studio. Install Android Emulator"
     },
     {
          "src": "https://www.youtube.com/embed/ILJ4dfOL7zs",
          "title": "How to clone a repository from GitHub to Visual Studio Code"
     },
     {
          "src": "https://www.youtube.com/embed/fQjA1CwV8lE",
          "title": "How to clone a repository from GitHub to android studio. Clone an #android project to #androidstudio"
     },
     {
          "src": "https://www.youtube.com/embed/HPTxt4shWvY",
          "title": "How to download and install XAMPP Server on Windows 11"
     },
     {
          "src": "https://www.youtube.com/embed/gpt4Lp8Q1KI",
          "title": "How to download and install GIT on Windows 11"
     },
     {
          "src": "https://www.youtube.com/embed/KjNkI6l-GcA",
          "title": "How to download and install Visual Studio Code on Windows 11"
     },
     {
          "src": "https://www.youtube.com/embed/6smm7ISZzAI",
          "title": "How to download and install Android Studio on Windows 11"
     },
     {
          "src": "https://www.youtube.com/embed/IuZc7KZEEds",
          "title": "Install jupyter notebook on android mobile phone using termux"
     },
     {
          "src": "https://www.youtube.com/embed/DpE3i8zk1h4",
          "title": "How to change the theme of the android studio || Dark theme / Night Mode in android studio"
     },
     {
          "src": "https://www.youtube.com/embed/CsStjSuAM2c",
          "title": "How to download and install Android Studio on Windows 10 computer. With Gradle installation"
     },
     {
          "src": "https://www.youtube.com/embed/zr_Pm-7G3Rc",
          "title": "How to add or create new table in database in asp.net web application in visual studio 2019"
     },
     {
          "src": "https://www.youtube.com/embed/rHIGFgKOdD8",
          "title": "How to download and install Visual Studio 2019 in Windows 10 computer"
     },
     {
          "src": "https://www.youtube.com/embed/4foekmFZm5E",
          "title": "Add SQL Connection Class file in ASP.Net web-app to run SQL queries easily in Visual Studio 2019"
     },
     {
          "src": "https://www.youtube.com/embed/Xi4JX17Xh4A",
          "title": "Create a new ASP.Net Web-Application in Visual Studio 2019. Frist project in Visual Studio 2019."
     },
     {
          "video_id": 5,
          "src": "https://www.youtube.com/embed/YTbrKPmCc8s",
          "title": "How to edit the web.config file in ASP.Net Web-Application in Visual Studio 2019."
     },
     {
          "video_id": 4,
          "src": "https://www.youtube.com/embed/nemHOmugEbw",
          "title": "How to create a Database in ASP.NET web-application in Visual Studio 2019."
     },
     {
          "video_id": 3,
          "src": "https://www.youtube.com/embed/8fLYKYkHEX0",
          "title": "Connect Visual Studio 2019 ASP.NET website to MS-SQL Server Database with editing web.config file."
     },
     {
          "video_id": 2,
          "src": "https://www.youtube.com/embed/X0Pl2SKRJPY",
          "title": "How to create a new Database and Table in MS-SQL(Microsoft-SQL) server Manager Studio."
     },
     {
          "video_id": 1,
          "src": "https://www.youtube.com/embed/cann86QfZpE",
          "title": "How to add a new user in MS-SQL (Microsoft SQL) Server Management Studio."
     }
];


videoContainer = document.getElementById('video-cotainer');

videos.forEach(video => {
     videoContainer.innerHTML += `
     <div class="col my-2">
          <div class="card shadow-sm">
               <iframe width="100%" height="225" src="${video.src}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
               </iframe>
               <div class="col my-2">
                    <div class="card-body">
                         <p class="card-text">${video.title}</p>
                    </div>
               </div>
          </div>
     </div>
     `;
});


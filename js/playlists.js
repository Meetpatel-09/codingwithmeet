playlist = [
     {
          "id": 1,
          "title": "Connect Visual Studio 2019 ASP.Net website to MS-SQL server database.",
          "image": "images/playlist/pl-4.PNG",
          "url": "https://youtube.com/playlist?list=PLra4pLKVTVri9dPYEZ31jEn2LPUawe9pb"
     },
     {
          "id": 2,
          "title": "ASP.Net for beginners with Visual Studio 2019 and MS-SQL Server Management Studio",
          "image": "images/playlist/pl-3.PNG",
          "url": "https://youtube.com/playlist?list=PLra4pLKVTVrjYfDWMoY_qlfA0YDPchtlx"
     },
     {
          "id": 3,
          "title": "Microsoft SQL Server Management Studio for beginners",
          "image": "images/playlist/pl-2.PNG",
          "url": "https://youtube.com/playlist?list=PLra4pLKVTVrj6Kcl92Nui-i8cSG1lKPEl"
     },
     {
          "id": 4,
          "title": "ASP.Net Web-form web development for beginners",
          "image": "images/playlist/pl-1.PNG",
          "url": "https://youtube.com/playlist?list=PLra4pLKVTVrjWhL7gxwULe2LzeGz1DS0Z"
     },
     {
          "id": 5,
          "title": "Git and GitHub",
          "image": "images/playlist/pl-6.png",
          "url": "https://youtube.com/playlist?list=PLra4pLKVTVrjWhL7gxwULe2LzeGz1DS0Z"
     },
     {
          "id": 6,
          "title": "Android Studio for beginners",
          "image": "images/playlist/pl-5.png",
          "url": "https://youtube.com/playlist?list=PLra4pLKVTVrjWhL7gxwULe2LzeGz1DS0Z"
     }
];


playlistContainer = document.getElementById('playlist-cotainer');

playlist = playlist.reverse();


playlist.forEach(playlistItem => {
     console.log(playlistItem);

     playlistContainer.innerHTML += `
     <div class="col w-auto">
          <div class="card" style="max-width: 540px;">
               <div class="row g-0">
                    <div class="col-md-6">
                         <a href="${playlistItem.url}" target="_blank" class="link-none"><img src="${playlistItem.image}" class="img-fluid rounded-start" alt="..."></a>
                    </div>
                    <div class="col-md-6">
                         <div class="card-body">
                              <a href="${playlistItem.url}" target="_blank" class="link-none"><h5 class="card-title">${playlistItem.title}</h5></a>
                         </div>
                    </div>
               </div>
          </div>
     </div>
     `;
});
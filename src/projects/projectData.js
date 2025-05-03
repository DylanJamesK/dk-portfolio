const projectData = [
    {
        title: 'Instructor Playlist App',
        category: 'UI/UX',
        image: '../UIUX/InstructorPlaylist_CoverImg.png',
        content: [
          { type: 'image', value: '../UIUX/InstructorPlaylist_CoverImg.png', layout: 'full-bleed' },
          { type: 'bold-text', value: 'Web app for fitness instructors to save time creating playlists.' },
          { type: 'hr' },
          {
              type: 'four-column',
              value: [
                {
                  title: 'Project Link',
                  details: [
                    { text: 'InstructorPlaylist', url: 'https://instructorplaylist.netlify.app' }
                  ]
                },
                {
                  title: 'Tech Stack',
                  details: ['React', 'Spotify Web API', 'Spotify Web Playback SDK']
                },
                {
                  title: 'Duration',
                  details: ['1 week', 'April, 2025']
                },
                {
                  title: 'Role',
                  details: ['UI/UX & Dev']
                }
              ]
            },
            {
              type: 'custom-columns',
              layout: '25-75',
              value: ['Context', 'Fitness instructors play a powerful but often overlooked role in helping people stay active- especially in the U.S., where group fitness classes are one of the most effective ways Americans get regular exercise. Yet the job comes with big demands and little support: instructors spend unpaid time getting certified, training, and prepping for each class. One of the biggest time drains? Making music playlists that match the energy and flow of a workout. This web app helps instructors save time by speeding up the playlist creation process- freeing them up to focus on what really matters: leading great classes and inspiring their communities.']
            },
            { type: 'image', value: '../UIUX/RequiredWindowsForPlaylisting_Start.PNG', layout: 'full-bleed' },
            {
              type: 'custom-columns',
              layout: '25-75',
              value: ['Challenge', 'After some user research, it became clearer why creating playlists can be time-consuming. Some classes have very specific requirements for their songs, such as BPM, genre, energy, and playlist duration. Because of this, it requires a multitude of tools to create the right mix. For example, to create a spin class playlist you need to know individual song requirements, playlist duration, and have a music streaming app open- this creates quite the puzzle, especially as you get down to selecting the finals songs.']
            },
            { type: 'image', value: '../UIUX/InstructorPlaylistCoverScreenshot.PNG', layout: 'full-bleed' },
            {
              type: 'custom-columns',
              layout: '25-75',
              value: ['Exploration', 'I chose to experiment by creating a web app that consolidates all of the necessary tools and features that would speed up the playlist creation process for instructors. My goal was to allow users to look through all songs on Spotify, sort them by specific metrics, add them to a list, and then save the new playlist. Unfortunately, as I explored the documentation for Spotify developers I learned that many of the endpoints I wanted access to were very recently depricated.']
            },
            { type: 'image', value: '../UIUX/AddSongs_Screenshot.PNG', layout: 'full-bleed' },
            {
              type: 'custom-columns',
              layout: '25-75',
              value: ['Solution', 'I decided to follow through with my initial intent of working with the Spotify developer tools, although what I created was not as extensive as I originally planned. My app allows users to select their playlist(s), listen to songs, view their playlist duration, and create a playlist on their Spotify Premium account. Moving forward, I think that due to the current limitations of the Spotify tools, I want to either implement data from alternate sources to help sort through the songs or possibly utilize an LLM to help create playlists by providing simple descriptions.']
            },
        ],
      },
    {
        title: 'Aerial Coffee Website',
        category: '3D',
        image: '../3D/AerialCoffeeBRB.png',
        thumbnail: "../3D/AerialCoffeeBRB.png",
        video: '../3D/AerialCoffeeBRB.mp4',
        content: [
            { type: 'image', value: '../3D/AerialCoffeeBRB.png', layout: 'full-bleed' },
            { type: 'bold-text', value: 'Interactive 3D website of a coffee stand being abducted by a UFO.' },
            { type: 'hr' },
            {
                type: 'four-column',
                value: [
                  {
                    title: 'Project Link',
                    details: [
                      { text: 'AerialCoffeeBRB', url: 'https://aerialcoffeebrb.netlify.app' }
                    ]
                  },
                  {
                    title: 'Tech Stack',
                    details: ['React Three Fiber', 'Blender']
                  },
                  {
                    title: 'Duration',
                    details: ['2 weeks', 'April, 2025']
                  },
                  {
                    title: 'Role',
                    details: ['UI/UX & Dev']
                  }
                ]
              },
              {
                type: 'custom-columns',
                layout: '25-75',
                value: ['Context', 'Aerial Coffee is ran by a very small team that is leveling up from their iconic drive-through stand to a new storefront. With a UFO-inspired brand, I wanted to promote their move in a fun and creative way!']
              },
          ],
    },
    {
        title: 'EP 133 K.O. II',
        category: '3D',
        image: '../3D/KOII_Cover.png',
        content: [
            { type: 'image', value: '../3D/KOII_Cover.png', layout: 'full-bleed' },
            { type: 'bold-text', value: 'Realistic 3D model of the Teenage Engineering EP 133 K.O. II.' },
            { type: 'hr' },
            {
                type: 'four-column',
                value: [
                  {
                    title: 'Tech Stack',
                    details: ['Blender','After Effects']
                  },
                  {
                    title: 'Duration',
                    details: ['1 week', '2024']
                  },
                  {
                    title: 'Role',
                    details: ['3D Modeling & Animation']
                  }
                ]
              },
            {
                type: 'gallery',
                layout: 'two-column',
                value: [
                  { type: 'image', src: '../3D/KOII_FrontView.png', caption: 'Front view of K.O.II' },
                  { type: 'video', src: '../3D/EP133-KOII_Rotate.mp4', caption: 'K.O.II spinning 360' },
                  { type: 'video', src: '../3D/PowerOnZoomFinal.mp4', caption: 'K.O.II fully-replicated UI' },
                  { type: 'image', src: '../3D/KOII_BackAngle.png', caption: 'Back view K.O.II' }
                ]
              }
          ],
    },
    {
        title: 'Adidas Samba',
        category: '3D',
        image: '../3D/AdidasSamba_StackedShoesImage.png',
        content: [
            { type: 'image', value: '../3D/AdidasSamba_StackedShoesImage.png', layout: 'full-bleed' },
            { type: 'bold-text', value: 'Realistic 3D model of the classic Adidas Samba.' },
            { type: 'hr' },
            {
                type: 'four-column',
                value: [
                  {
                    title: 'Tech Stack',
                    details: ['Blender','After Effects']
                  },
                  {
                    title: 'Duration',
                    details: ['1 week', '2024']
                  },
                  {
                    title: 'Role',
                    details: ['3D Modeling & Animation']
                  }
                ]
              },
            {
                type: 'gallery',
                layout: 'two-column',
                value: [
                  { type: 'video', src: '../3D/SpinningShoes.mp4', caption: 'Spinning animation of Sambas' },
                  { type: 'image', src: '../3D/Samba_TongueUpClose.jpg', caption: 'Adidas Samba tongue label' }
                ]
              },
              { type: 'image', value: '../3D/AdidasSamba_ComparisonRender.png', layout: 'full-bleed' }
          ],
    },
    {
        title: 'Music Toy',
        category: 'ID',
        image: './ID/MusicToy_CoverImg.png',
        content: [
            { type: 'image', value: './ID/MusicToy_CoverImg.png', layout: 'full-bleed' },
            { type: 'bold-text', value: 'Fidget instrument that encourages musical chord exploration for kids.' },
            { type: 'hr' },
            {
                type: 'four-column',
                value: [
                  {
                    title: 'Tech Stack',
                    details: ['Solidworks','3D Printing']
                  },
                  {
                    title: 'Duration',
                    details: ['6 months', '2018']
                  },
                  {
                    title: 'Role',
                    details: ['Industrial Design', 'UX Design']
                  }
                ]
              },
            {
                type: 'gallery',
                layout: 'two-column',
                value: [
                  { type: 'image', src: '../ID/HumModels.jpg', caption: 'Initial form exploration' },
                  { type: 'image', src: '../ID/HumExploded.jpg', caption: 'Exploded view' },
                ]
              },
              { type: 'bold-text', value: 'In collaboration with my friend and colleague, John Patternson, I assembled a functional prototype.' },
              {
                type: 'gallery',
                layout: 'three-column',
                value: [
                  { src: '/ID/HumOpen1.jpg', caption: '2 piece dodecahedron assembly' },
                  { src: '/ID/HumOpen2.jpg', caption: 'Repurposed musical card speaker' },
                  { src: '/ID/HumOpen3.jpg', caption: 'Polystyrene switch panels behind elastic' },
                ],
              },
              { type: 'bold-text', value: 'Pressing different combinations of notes creates new colors, adding a unique visual element.' },
              {
                type: 'gallery',
                layout: 'three-column',
                value: [
                  { src: '/ID/HumBlue.jpg', caption: '1 note' },
                  { src: '/ID/HumGreen.jpg', caption: '2 notes' },
                  { src: '/ID/HumYellow.jpg', caption: '3 notes' },
                ],
              },
          ],
    },
    {
        title: 'VR Olfactory Accessory',
        category: 'ID',
        image: './ID/SmellEngineAttachment.png',
        content: [
            { type: 'image', value: './ID/SmellEngineAttachment.png', layout: 'full-bleed' },
            { type: 'bold-text', value: 'Supporting research on the integration of smell in VR experiences.' },
            { type: 'hr' },
            {
                type: 'four-column',
                value: [
                    {
                        title: 'Project Link',
                        details: [
                          { text: 'IEEE VR', url: 'https://www.youtube.com/watch?v=vV36-LQbsOU' }
                        ]
                      },
                  {
                    title: 'Tech Stack',
                    details: ['Solidworks','3D Printing']
                  },
                  {
                    title: 'Duration',
                    details: ['3 months', '2022']
                  },
                  {
                    title: 'Role',
                    details: ['Industrial Design','UX Design']
                  }
                ]
              },
              {
                type: 'gallery',
                layout: 'two-column',
                value: [
                  { type: 'image', src: '../ID/AttachmentFromtView.png', caption: 'Attachments gently hook over side straps' },
                  { type: 'image', src: '../ID/AttachmentBottomView.png', caption: 'Nose piece' },
                ]
              },
              { type: 'image', value: './ID/SketchesSmellEngine.png', layout: 'full-bleed'},
          ],
    },
    {
        title: 'Catheter Valve',
        category: 'ID',
        image: './ID/Catheter_CoverImg.png',
        content: [
            { type: 'image', value: './ID/Catheter_CoverImg.png', layout: 'full-bleed' },
            { type: 'bold-text', value: 'Prototype in collaboration with Cisco exploring enhanced UX for paraplegics.' },
            { type: 'hr' },
            {
                type: 'four-column',
                value: [
                  {
                    title: 'Tech Stack',
                    details: ['Solidworks','3D Printing']
                  },
                  {
                    title: 'Duration',
                    details: ['6 months', '2019']
                  },
                  {
                    title: 'Role',
                    details: ['Industrial Design', 'UX Design']
                  }
                ]
              },
              { type: 'image', value: '../ID/CatheterSketches.jpg', layout: 'full-bleed' },
              { type: 'image', value: '../ID/CatheterStoryboard.jpg', layout: 'full-bleed' },
          ],
    },
    {
        title: 'VR Lunar Mission',
        category: 'XR',
        image: '../XR/VRLunarMission/VRLunarMission_CoverImg.png',
        content: [
            { type: 'image', value: '../XR/VRLunarMission/VRLunarMission_CoverImg.png', layout: 'full-bleed' },
            { type: 'bold-text', value: 'Immersive proposal for the NASA Artemis program to explore permanently shadowed regions.' },
            { type: 'hr' },
            {
                type: 'four-column',
                value: [
                    {
                    title: 'Project Link',
                    details: [
                        { text: 'VR Demo', url: 'https://youtu.be/ICELvZ1IfIk?si=IpvoXNLvwtt6ik9A' }
                    ]
                  },
                  {
                    title: 'Tech Stack',
                    details: ['Unity 3D','Meta Quest 2', 'Blender']
                  },
                  {
                    title: 'Duration',
                    details: ['October', '2020']
                  },
                  {
                    title: 'Role',
                    details: ['UI/UX & Dev']
                  }
                ]
              },
              { type: 'image', value: '../XR/VRLunarMission/Velos_launcherAttached.png', layout: 'full-bleed' },
              {
                type: 'custom-columns',
                layout: '25-75',
                value: ['Challenge', 'Design an innovative solution to support NASA’s exploration objectives for the Permanently Shadowed Regions (PSRs) in and near the Moon’s polar regions.']
              },
              {
                type: 'custom-columns',
                layout: '25-75',
                value: ['Solution', 'Project Velos (Variable Exploratory Lunar Observation System), is a multi-probe exploratory system capable of launching sensor probes over 100m into a PSR.']
              },
            {
                type: 'gallery',
                layout: 'two-column',
                value: [
                  { type: 'image', src: '../XR/VRLunarMission/Velos_probe.png', caption: 'Velos Probe' },
                  { type: 'image', src: '../XR/VRLunarMission/Velos_LauncherDiagram.png', caption: 'Velos Launcher' }
                ]
              },
              {type: 'text', value: 'Each probe is equiped with a configurable suite of sensors designed to optimize data collection potential and to survive the harsh lunar environment. The system relays information through a mesh network, with the launcher acting as a root node and the probes acting as leaf nodes.'},
              {
                type: 'gallery',
                layout: 'two-column',
                value: [
                  { type: 'image', src: '../XR/VRLunarMission/Velos_step3sketch.png', caption: 'Storyboard A' },
                  { type: 'image', src: '../XR/VRLunarMission/Velos_step4sketch.png', caption: 'Storyboard B' }
                ]
              },
              { type: 'bold-text', value: 'Virtual reality brings a new dimension to presenting engineering and design concepts- literally!' },
              {
                type: 'gallery',
                layout: 'two-column',
                value: [
                    { type: 'video', src: '../XR/VRLunarMission/Velos_Hands.mp4', caption: 'Custom Glove Controllers' },
                    { type: 'video', src: '../XR/VRLunarMission/Velos_PanelOpen.mp4', caption: 'UI Interaction' },
                    { type: 'video', src: '../XR/VRLunarMission/Velos_ExplodedViewProbe (1).mp4', caption: 'Inspecting 3D CAD Model' },
                    { type: 'video', src: '../XR/VRLunarMission/Velos_ProbeLaunch.mp4', caption: 'Aiming & Launching Probes' },
                ]
              }
          ],
    },
    {
        title: 'MR Flight Debrief',
        category: 'XR',
        image: '/XR/MRFlightDebrief/NextGenFlightDebrief_CoverImg.png',
        content: [
            { type: 'image', value: '/XR/MRFlightDebrief/OldFashioned_Flight Debrief.png', layout: 'full-bleed' },
            { type: 'bold-text', value: 'Augmenting the traditional USAF flight debrief with mixed reality headsets.' },
            { type: 'hr' },
            {
                type: 'four-column',
                value: [
                  {
                    title: 'Project Link',
                    details: [
                      { text: 'Pitch Video', url: 'https://youtu.be/pyIlxQew_cI?si=kUV25VOCsqgXTsM7' }
                    ]
                  },
                  {
                    title: 'Tech Stack',
                    details: ['Unity 3D', 'Microsoft HoloLens 2', 'Blender']
                  },
                  {
                    title: 'Duration',
                    details: ['May, 2021']
                  },
                  {
                    title: 'Role',
                    details: ['UI/UX & Dev']
                  }
                ]
              },
              {
                type: 'gallery',
                layout: 'two-column',
                value: [
                    { type: 'image', src: '../XR/MRFlightDebrief/BingMaps.PNG', caption: 'Geo Data from Bing Maps API'},
                    { type: 'video', src: '../XR/MRFlightDebrief/MixedReality_FlightShort.mp4', caption: 'Interacting with Animated Flight Path' },
                ]
              },
              {
                type: 'custom-columns',
                layout: '25-75',
                value: ['Challenge', 'Current flight debriefing is time-consuming, occurs after every flight, and requires multiple mediums of visualization.']
              },
              {
                type: 'custom-columns',
                layout: '25-75',
                value: ['Solution', 'By utilizing mixed reality technology, the USAF can bridge the gap between flight data and strategic knowledge in a new and intuitive way.']
              },
              {
                type: 'gallery',
                layout: 'two-column',
                value: [
                    { type: 'image', src: '../XR/MRFlightDebrief/FlightDebrief_Storyboard2.PNG', caption: 'Storyboard for concept A'},
                    { type: 'image', src: '../XR/MRFlightDebrief/FlightDebrief_Storyboard1.PNG', caption: 'Storyboard for concept B' },
                ]
              },
              { type: 'bold-text', value: 'I demoed a prototype that used multiple HoloLens 2 headsets and spatial anchors to allow a shared real-time environment.' },
              { type: 'video', value: '/XR/MRFlightDebrief/MRInterfaceRecording1.mp4', layout: 'full-bleed' },
          ],
    },
    {
        title: 'Mixed Media Paintings',
        category: 'Play',
        image: '/Play/MixedMediaArt_Coverimg.png',
        content: [
            {
                type: 'gallery',
                layout: 'two-column',
                value: [
                    { type: 'image', src: '../Play/Crash.png', caption: '"Crash" Acrylic & Pastel'},
                    { type: 'image', src: '../Play/Pack.png', caption: '"Pack" Acrylic & Pastel'},
                    { type: 'image', src: '../Play/bark.png', caption: '"Bark" Acrylic & Pastel'},
                    { type: 'image', src: '../Play/smile.png', caption: '"Smile" Acrylic & Pastel'},

                ]
              },
          ],
    },
    {
        title: 'Custom Skateboards',
        category: 'Play',
        image: '/Play/skateboardCoverImg.png',
        content: [
            { type: 'text', value: 'Acrylic & Sharpie on 8.5" skateboard decks' },
            {
                type: 'sketchfab',
                layout: 'centered',
                value: 'https://sketchfab.com/models/f92a091eb0804c4b870948bb154d7fa9/embed',
                title: 'Surf'
              },
              {
                type: 'sketchfab',
                layout: 'centered',
                value: 'https://sketchfab.com/models/53441066b1a54482b18b7da7e4dbc85f/embed',
                title: 'Hands'
              },
              {
                type: 'sketchfab',
                layout: 'centered',
                value: 'https://sketchfab.com/models/45d73c449aeb49e8a5eaf6f7d2f89734/embed',
                title: 'Surf Skateboard'
              },
              {
                type: 'sketchfab',
                layout: 'centered',
                value: 'https://sketchfab.com/models/c13cfbf9d69b4a16a8aafb5714990167/embed',
                title: 'Surf Skateboard'
              },
          ],
    },
    // Add more...
  ];
  
  export default projectData;
import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className="main">
        <div className="sidebar">
          <div className="logo">
            <img src="../public/logo.png" alt="logo" />
          </div>
          <div className="parttwo">
            <img src="../public/Home.png" alt="" className='home' />
            <div className='hometext'>Home</div>
          </div>
          <div className="parthree">
            <img src="../public/Search.png" alt="" className='search' />
            <div className='searchtext'>Search</div>
          </div>
          <div className="parthree">
            <img src="../public/Your library.png" alt="" className='search' />
            <div className='searchtext'>Your Library</div>
          </div>
          <div className="five">
            <img src="../public/Create.png" alt="" className='create' />
            <div className='createtext'>Create Playlist</div>
          </div>
          <div className="five1">
            <img src="../public/Liked.png" alt="" className='create' />
            <div className='createtext'>Liked Songs</div>
          </div>
          <div className="five1">
            <img src="../public/your episodes.png" alt="" className='create' />
            <div className='createtext'>Your Episodes</div>
          </div>
          <ul className="playlist-section">
            <li className="playlist-item">FAV</li>
            <li className="playlist-item">Daily Mix 2</li>
            <li className="playlist-item">Discover Weekly</li>
            <li className="playlist-item">Malayalam</li>
            <li className="playlist-item">Dance/Electronic Mix</li>
            <li className="playlist-item">EDM/Popular</li>
          </ul>
          <div className="install">
            <img src="../public/grommet-icons_install-option.png" alt="" className='inatallimage' />
            <div className="installtext">Install App</div>
          </div>
        </div>
        <div className="content">
          <div className="firstrow">
            <img src="../public/top arrow navigation.png" alt="" className="firstpic" />
            <img src="../public/User.png" alt="" className="secondpic" />
          </div>
          <h1 className="secrowh">Good Morning</h1>
          <div className="secondrow">

            <div class="liked-songs-container">
              <div class="liked-song-item">
                <img src="../public/Liked.png" alt="Liked Songs" class="liked-song-image" />
                <p class="liked-song-text">Liked Songs</p>
              </div>
            </div>
            <div class="liked-songs-container">
              <div class="liked-song-item">
                <img src="../public/image4.png" alt="Liked Songs" class="liked-song-image" />
                <p class="liked-song-text">Neffex Playlist</p>
              </div>
            </div>
            <div class="liked-songs-container">
              <div class="liked-song-item">
                <img src="../public/image3.png" alt="Liked Songs" class="liked-song-image" />
                <p class="liked-song-text">K/DA</p>
              </div>
            </div>
            <div class="liked-songs-container">
              <div class="liked-song-item">
                <img src="../public/image1.png" alt="Liked Songs" class="liked-song-image" />
                <p class="liked-song-text">Liked Songs</p>
              </div>
            </div>
          </div>
          <div className="thirdrow">
            <div class="liked-songs-container">
              <div class="liked-song-item">
                <img src="../public/image2.png" alt="Liked Songs" class="liked-song-image" />
                <p class="liked-song-text">Liked Songs</p>
              </div>
            </div>
          </div>
          <h2 className="syml">Shows you might like</h2>
          <div className="fourthrow">
            <div className="box-1">
              <img src="../public/image9.png" alt="Product 1" />
              <div>Weekly Motiovation</div>
            </div>
            <div className="box-1">
              <img src="../public/image7.png" alt="Product 1" />
              <div>Madition Self</div>
            </div>
            <div className="box-1">
              <img src="../public/image10.png" alt="Product 1" />
              <div>Words Beyond act..</div>
            </div>
            <div className="box-1">
              <img src="../public/image7.png" alt="Product 1" />
              <div>The Alexa Show</div>
            </div>
            <div className="box-1">
              <img src="../public/image8.png" alt="Product 1" />
              <div>Motiovation Daily</div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="playline">
            <div class="song-item">
              <img src="../public/image3.png" alt="Song" class="song-image" />
              <div class="song-info">
                <p class="song-title">Dreaming On</p>
                <p class="song-artist">NEFFEX</p>
              </div>
            </div>

           
            <div class="middle-item">
              <img src="../public/Music Player Options.png" alt="Middle Image" class="middle-image" />
            </div>

            
            <div class="end-item">
              <img src="../public/Right options.png" alt="End Image" class="end-image" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App

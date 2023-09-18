import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import InstagramIcon from '@mui/icons-material/Instagram';
import MERNIG from '../images/MERNIG.png'
import ProjectCardRev from './ProjectCardRev';
import FacebookIcon from '@mui/icons-material/Facebook';
import FB from '../images/fb.png'
import gmail from '../images/gmail.png'
import EmailIcon from '@mui/icons-material/Email';
import Amazon from '../images/amazon.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Bank from '../images/bank.png'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import Netflix from '../images/netflix.png'
import MovieIcon from '@mui/icons-material/Movie';
import Chat from '../images/chat.png'
import ChatIcon from '@mui/icons-material/Chat';
import Slack from '../images/slack.png'
import Spotify from '../images/spotify.png'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import WhatsApp from '../images/whatsapp.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Tinder from '../images/tinder.png';
import WhatshotIcon from '@mui/icons-material/Whatshot';
const Projects = () => {
  return (
    <section id="projects">
      <div className='projects__wrapper'>
        <div className="projects__wrapper__content">
          <h5 className='projects__title'>
            Portfolio
          </h5>
          <h3>
            Each project is a unique 
          </h3>
        </div>
        <ProjectCard photo={MERNIG} title="MERNIG" icon={<InstagramIcon />}
          description = "This is a Instagram like Social Media platform where a user is able to do all the functionalities of the real Instagram such as follow/unfollow user, upload pictures as posts, like/unlike a post, and have a followers feed for the logged in user."
          tech1="MongoDB" tech2="Express" tech3="React" tech4="Nodejs"
          gitHubUrl="https://github.com/1tav0/IG-MERN"
        />
        <ProjectCardRev photo={FB} title="Facebook" icon={<FacebookIcon />}
          description="This is a Facebook clone that uses Google Authentication to sign in, Firebase hosting, FireStore, Redux, Material UI, React + React Hooks, & React flip move animation."
          tech1="Firebase" tech2="React" tech3="Redux" tech4="Material UI"
          gitHubUrl="https://github.com/1tav0/Facebook-Clone"
        />
        <ProjectCard photo={gmail} title="GmailClone" icon={<EmailIcon />}
          description = "This is a gmail clone with real time functionality to compose and send a new email that will be displayed live in the inbox incoming emails."
          tech1="Firebase" tech2="React" tech3="Material UI" tech4="Google Authentication"
          gitHubUrl="https://github.com/1tav0/gmail-clone"
        />
        <ProjectCardRev photo={Amazon} title="Amazon" icon={<ShoppingCartIcon />}
          description="This is a full-stack Amazon clone with front-end and back-end functionality using ReactJS, Webhooks, Stripe Checkout, Firestore, Firebase hosting, and Firebase Google Authentication. The back-end API is built using Node.js with Express, and the server-side functionality is tested locally using Firebase Functions Emulators."
          tech1="Firebase" tech2="Express" tech3="React" tech4="Nodejs"
          gitHubUrl="https://github.com/1tav0/FullStack-Amazon-Clone"
        />
        <ProjectCard photo={Bank} title="Blood Bank Hospital" icon={<BloodtypeIcon />}
          description = "This is a Blood Bank Hospital user Interface with full functionality to donate blood and become organized based on blood type and amount of blood donated, and hospital interface where a hospital is able to view how much blood and type is being donated to it and taken out from it."
          tech1="MongoDB" tech2="Express" tech3="React" tech4="Nodejs"
          gitHubUrl="https://github.com/1tav0/bloodbank"
        />
        <ProjectCardRev photo={Netflix} title="Netflix" icon={<MovieIcon />}
          description="This is a Netflix clone interface that has real time data being accessed from a movie data base depending on the location of the user."
          tech1="Firebase" tech2="React" tech3="Material UI" tech4="Axios"
          gitHubUrl="https://github.com/1tav0/Netflix-clone"
        />
        <ProjectCard photo={Chat} title="Chat" icon={<ChatIcon />}
          description = "This is MERN full stack chat application where a user can log in create a room chat and another user can log in and join the chat room to message each other."
          tech1="MongoDB" tech2="Express" tech3="React" tech4="Nodejs"
          gitHubUrl="https://github.com/1tav0/MERN-CHATAPP"
        />
        <ProjectCardRev photo={Slack} title="Slack" icon={<MovieIcon />}
          description="This is a Slack Clone app that works in real time. The app leverages the power of Redux for enhanced state management and uses Firebase hosting, database, and Google authentication for secure and reliable user authentication. Additionally, the app features Material UI and Styled Components for a modern and intuitive user interface."
          tech1="Firebase" tech2="React" tech3="Redux" tech4="Styled Components"
          gitHubUrl="https://github.com/1tav0/Slack-Clone"
        />
        <ProjectCard photo={Spotify} title="Spotify" icon={<LibraryMusicIcon />}
          description = "This is a spotify user clone, It leverages Spotify's sign-in authentication to access user playlists and the discover weekly playlist, providing a modern and intuitive user experience."
          tech1="React" tech2="Create Context" tech3="Spotify Open API" tech4="Nodejs"
          gitHubUrl="https://github.com/1tav0/Spotify-Clone"
        />
        <ProjectCardRev photo={WhatsApp} title="WhatsApp" icon={<WhatsAppIcon />}
          description="This is a WhatsApp clone built with the MERN stack, incorporating React hooks, Firebase login, and JWT for secure user authentication. The app uses axios and async functions for seamless data retrieval and updates, and implements React context for efficient state management."
          tech1="MongoDB" tech2="Express" tech3="React" tech4="Nodejs"
          gitHubUrl="https://github.com/1tav0/MERN-WHATSAPP-Clone"
        />
        <ProjectCard photo={Tinder} title="Tinder" icon={<WhatshotIcon />}
          description = "This is a tinder clone with real time funtionality, data base of pictures needs to be updated live hence no picture shown."
          tech1="MongoDB" tech2="Express" tech3="React" tech4="Nodejs"
          gitHubUrl="https://github.com/1tav0/tinder-mernclone"
        />
      </div>
    </section>
  )
}

export default Projects
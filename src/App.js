import React from 'react';
import logo from './img.svg';
import './App.css';
import {IcBrandLinkedin, IcBrandGithub, IcLightEnvelope, IcBrandInstagram, IcSolidHeart, IcBrandHtml5, IcBrandCss3Alt, IcBrandPython, IcBrandJava, IcBrandAdobe, IcBrandFigma} from './react-icon-svg'
const personal_data = {
	name: 'Indah Cahyani',
	desc: 'Hello! My name is Indah.\nIm a fast learner and hardworker person.\nI like to build attractive and useful software.\nInterested more deeply related to design while continuing\nmy studies in Informatics Engineering.\nI like to learn something new,\nso here I am able to push myself as engineer, programmer, and designer.'
};
const personal_project = [
	{
		title: "Website Indihome Purbalingga",
		desc: "A website that is used for customers to get information related to Indihome Purbalingga Services.",
		url: "https://github.com/indahc/indihome-purbalingga/"
	}, {
		title: "Cipher-Code",
		desc: "A Python program with a combination of two cryptographic and steganography algorithm.",
		url: "https://github.com/indahc/crypto-stego/"
	}, {
		title: "Website Satria Dana Bos",
		desc: "A website that is used for management of Dana Bos in Banyumas.",
		url: " "
	}
];
const MyProject = ( ) => personal_project.map(( project_data, i ) => (
	<div key={i} style={{paddingBottom:'1em'}}>
		<h3>{project_data.title}</h3>
		<p>{project_data.desc}</p>
		<a className="App-link" href={project_data.url} target="_blank" rel="noopener noreferrer">{project_data.url}</a>
	</div>
));
const skill = [
  {
    title:'HTML',
    icon:<IcBrandHtml5 height={40} fill="#fafafa"/>
  },
  {
    title:'CSS',
    icon:<IcBrandCss3Alt height={40} fill="#fafafa"/>
  },
  {
    title:'Python',
    icon:<IcBrandPython height={40} fill="#fafafa"/>
  },
  {
    title:'Java',
    icon:<IcBrandJava height={40} fill="#fafafa"/>
  },
  {
    title:'Adobe Illustrator',
    icon:<IcBrandAdobe height={40} fill="#fafafa"/>
  },
  {
    title:'Figma',
    icon:<IcBrandFigma height={40} fill="#fafafa"/>
  }
];
const MySkill = ( ) => skill.map(( skill_data, i ) => (
	<div key={i} style={{display:'flex',flexDirection:'column',justifyContent:'center',padding:'2em'}}>
    {skill_data.icon}
		<h3>{skill_data.title}</h3>
	</div>
));
const contact = [
  {
    title:'Linkedin',
    url:'https://www.linkedin.com/in/indah-cahyani-8b6665128/',
    icon:<IcBrandLinkedin height={40} fill="#fafafa"/>
  },
  {
    title:'Github',
    url:'https://github.com/indahc/',
    icon:<IcBrandGithub height={40} fill="#fafafa"/>
  },
  {
    title:'Email',
    url:'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=indahcahyani.279@gmail.com&su=from+Website&tf=1',
    icon:<IcLightEnvelope height={40} fill="#fafafa"/>
  },
  {
    title:'Instagram',
    url:'https://www.instagram.com/indaaahhc/',
    icon:<IcBrandInstagram height={40} fill="#fafafa"/>
  },
]
const MyContact = ( ) => contact.map(( contact_data, i ) => (
	<div key={i} style={{padding:'1em'}}>
		<a href={contact_data.url}>{contact_data.icon}</a>
	</div>
));

function App( ) {
	return (
		<div className="App">
			<header className="App-header">
				<h2>{personal_data.name}</h2>
			</header>
			<header className="App-body">
				<div style={{
					maxWidth: '50vw'
				}}>
					<img src={logo} className="App-logo" alt="logo"/>
				</div>
				<div style={{
					maxWidth: '50vw'
				}}>
					<h1>
						About me
					</h1>{personal_data.desc}</div>
			</header>
			<header className="App-body-center">
				<div>
					<h1>
						Skills
					</h1>
				</div>
				<div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <div style={{display:'flex' }}>
            <MySkill/>
          </div>
        </div>
			</header>
			<header className="App-body-bottom">
				<div>
					<h1>
						Project
					</h1>
				</div>
				<MyProject/>
			</header>
			<header className="App-footer">
				<div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <div style={{display:'flex' }}>
            <MyContact/>
          </div>
					<h5>
						{"© copyright 2020 | built with "}<IcSolidHeart height={10} fill="#FF6347"/>{" by Indah Cahyani"}
					</h5>
				</div>
			</header>
		</div>
	)
}
export default App;
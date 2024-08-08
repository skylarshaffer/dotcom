import { Metadata } from '@redwoodjs/web'
import Footer from 'src/components/Footer';
import Hero from 'src/components/Hero';
import Projects from 'src/components/Projects';
import Technologies from 'src/components/Technologies';
import type { LinkArray, ProjectArray } from 'src/types/project';


const links: LinkArray = [
  {siteName: 'LinkedIn', url:'https://linkedin.com/in/skylarshaffer'},
  {siteName: 'GitHub', url:'https://github.com/skylarshaffer'},
  {siteName: 'Email', url:'mailto:contact@skylarshaffer.com'}
]

const projects: ProjectArray = [
  {
    name: 'brickquery',
    urls: {
      gitHub: 'https://github.com/skylarshaffer/brickquery',
      demo: 'https://github.com/skylarshaffer/brickquery',
      website: 'https://brickquery.com'
    },
    category: 'Bricklink Seller Tools',
    description: 'A suite of tools, databases, and data analytics for BrickLink sellers.',
    iconUrl: 'brickquery.svg',
    colors: ['#F7BCDA','#FFE001','#009FE0']
  },
  {
    name: 'entraspection',
    urls: {
      gitHub: 'https://github.com/skylarshaffer/entraspection',
      demo: 'https://github.com/skylarshaffer/entraspectiono',
      website: 'https://entraspection.com'
    },
    category: 'GraphQL Pentesting',
    description: 'GraphQL vulnerability discovery and penetration testing tools for security research.',
    iconUrl: 'entraspection.svg',
    colors: ['#025033','#B3AF8F','#025033']
  },
  {
    name: 'isocutor',
    urls: {
      gitHub: 'https://github.com/skylarshaffer/isocutor',
      demo: 'https://github.com/skylarshaffer/isocutor',
      website: 'https://isocutor.com'
    },
    category: 'ISO Automation',
    description: 'WinPE automation package for one-click driver and Windows installation.',
    iconUrl: 'isocutor.svg',
    colors: ['#CC444B','#F7BCDA','#CC444B']
  },
]

const HomePage = () => {

  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Hero></Hero>
      <Projects projects={projects}></Projects>
      {/*<Technologies></Technologies>*/}
      <Footer projects={projects} links={links}></Footer>
    </>
  );
};

export default HomePage;
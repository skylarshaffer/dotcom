import { Link, routes } from '@redwoodjs/router';
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
      demo: 'https://placeholder.com/brickquery/demo',
      website: 'https://brickquery.com'
    },
    category: 'Bricklink Seller Tools',
    description: 'A suite of tools, databases, and data analytics for BrickLink sellers.',
    iconUrl: '',
    backgroundUrl: ''
  },
  {
    name: 'entraspection',
    urls: {
      gitHub: 'https://github.com/skylarshaffer/entraspection',
      demo: 'https://placeholder.com/entraspection/demo',
      website: 'https://entraspection.com'
    },
    category: 'GraphQL Pentesting',
    description: 'GraphQL vulnerability discovery and penetration testing tools for security research.',
    iconUrl: '',
    backgroundUrl: ''
  },
  {
    name: 'isotomate',
    urls: {
      gitHub: 'https://github.com/skylarshaffer/isotomate',
      demo: 'https://placeholder.com/isotomate/demo',
      website: 'https://isotomate.com'
    },
    category: 'ISO Automation',
    description: 'WinPE automation package for one-click driver and Windows installation.',
    iconUrl: '',
    backgroundUrl: ''
  },
]

const HomePage = () => {

  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Hero></Hero>
      <Projects projects={projects}></Projects>
      <Technologies></Technologies>
      <Footer projects={projects} links={links}></Footer>
    </>
  );
};

export default HomePage;

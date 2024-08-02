import { Link, routes } from '@redwoodjs/router';
import { Metadata } from '@redwoodjs/web'
import Hero from 'src/components/Hero';
import Projects from 'src/components/Projects';

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Hero></Hero>
      <Projects></Projects>
    </>
  );
};

export default HomePage;

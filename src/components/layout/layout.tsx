
import '../../../node_modules/bulma';
import React from 'react';
import Navbar from '../navbar/navbar';
import Transition from './transition';
import Footer from '../footer/footer';

const TemplateWrapper = ({ children, location }: { children: any, location: any}) => {

  return (
    <div>
      <Navbar />
      <Transition location={location}>
        <div>{children}</div>
      </Transition>
      <Footer />
    </div>
  )
};

export default TemplateWrapper;

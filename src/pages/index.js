import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';

var settings = {
  images: [
    { url: require('../assets/images/bg-tulle-and-truss.jpg'), position: 'center' },
    { url: require('../assets/images/bg-truss.jpg'), position: 'center' },
    { url: require('../assets/images/bg-saw.jpg'), position: 'center' },
    { url: require('../assets/images/bg-clamp.jpg'), position: 'center' },
    { url: require('../assets/images/vise-grips.jpg'), position: 'center' },
    { url: require('../assets/images/brush-and-ink.jpg'), position: 'center' },
    { url: require('../assets/images/table.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const IndexPage = () => (
  <Layout>
    <Header />
    <EmailForm />
    <Footer />
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;

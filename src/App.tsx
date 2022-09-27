import React from 'react';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { TopBar, Link } from './TopBar';
import { ContentBox } from './ContentBox';
import './App.css';

function App() {
  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <TopBar
          title="Open Source"
          breadcrumbs={[
            { label: "Baylee Dev", href: "https://baylee.dev" } as Link
          ]}
        />
        <div className="container-fluid py-4">
          <ContentBox widthLg={12} widthMd={12} title="Project">
            Hello world!
          </ContentBox>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;

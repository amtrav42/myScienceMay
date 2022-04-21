import * as React from 'react';
import Footer from '../components/footer/footer';
import Faq from '../components/faq/faq';

// styles

// markup
function IndexPage() {
  return (
    <main>
      <title>Home Page</title>
      <header>

        <h1>
          #MyScienceMay
        </h1>
        <div>Their logo</div>
        <div>My logo</div>
      </header>

      <p>
        A social media challenge from
        <em>Let&apos;s Talk Scicomm</em>
        and
        <em>Avid Research</em>
        to help you find connections and collaborations for your science
      </p>
      <p>
        Join us on Twitter with the #MyScienceMay hashtag
      </p>
      <div>
        <div>Scicomm Twitter</div>
        <div>My Twitter</div>
      </div>
      <h2>Schedule</h2>
      <ol>
        <li>
          Monday
        </li>
        <li>
          Tuesday
        </li>
        <li>
          Wednesday
        </li>
      </ol>
      <div>Download the Schedule</div>
      <div>
        <h3>
          FAQs
        </h3>
        <Faq />
      </div>
      <Footer />
    </main>
  );
}

export default IndexPage;

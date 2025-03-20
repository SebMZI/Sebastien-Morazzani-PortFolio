import Footer from "@/containers/home-page/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen max-w-8xl mx-auto px-10 py-5 flex flex-col gap-10">
        <h1 className="text-4xl md:text-6xl uppercase">Legal notices</h1>
        <div>
          <h2 className="text-xl md:text-2xl uppercase">Website Owner</h2>
          <ul>
            <li>Legal Name: Sébastien Morazzani-Marigny / Territa</li>
            <li>Status: Self-employed</li>
            <li>SIRET/SIREN: 98304430600014</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl uppercase">Address</h2>
          <ul>
            <li>6 Les Rives de l&apos;Acheneau</li>
            <li>44710, Port Saint Père, France</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl uppercase">
            Contact Informations
          </h2>
          <ul>
            <li>Tel: 06 36 37 70 46</li>
            <li>mail: contact@sebastien-morazzani.com</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl uppercase">Website Host</h2>
          <ul>
            <li>Vercel Inc.</li>
            <li>440 N Barranca Avenue #4133</li>
            <li>Covina, CA 91723</li>
            <li>United States</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl uppercase">
            Intellectual Property
          </h2>
          <ul>
            <li>
              ​The content of this website, including but not limited to text,
              images, graphics, logos, and audio files, is the exclusive
              property of Sebastien Morazzani and is protected by intellectual
              property laws. Any unauthorized use of the content of this site is
              strictly prohibited.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl uppercase">Cookies</h2>
          <ul>
            <li>
              ​This website may use cookies to enhance the user experience. By
              using this site, you consent to the use of cookies in accordance
              with our cookie policy.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl uppercase">
            Applicable Law and Jurisdiction
          </h2>
          <ul>
            <li>
              This website is governed by French law. Any disputes will be
              subject to the exclusive jurisdiction of the courts of Nantes,
              France.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl uppercase">Contact</h2>
          <ul>
            <li>
              ​For any questions regarding this legal notice, please contact us
              at: contact@sebastien-morazzani.com
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

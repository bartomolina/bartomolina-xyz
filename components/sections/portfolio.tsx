const Portfolio = () => (
  <section>
    <h1 className="text-2xl mb-3 font-semibold text-gray-800">Web3 Projects</h1>
    <ul className="space-y-4">
      <li>
        <a href="https://www.lensmeet.io/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          LensMeet.io
        </a>
        <p>
          <a href="https://lists.inlens.xyz/" target="_blank" rel="noopener noreferrer" className="underline">
            Lens Lists
          </a>{" "}
          from 0xJuancito is an awesome app on <span className="bg-yellow-100 text-yellow-900 p-0.5">Lens</span> that
          lets you create lists of users. LensMeet is built on top of Lens Lists and adds some cool features:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Follow all the members of a list at once.</li>
            <li>
              Include additional social network links to your profile: Lenster only allows to link your personal website
              and your twitter account. In LensMeet you can also add your Instagram, Telegram, Discord, GitHub and
              LinkedIn accounts.
            </li>
            <li>
              Events: LensMeet adds a curated list of crypto events. These are Lens publications that can be collected
              to show that you&apos;re attending the event.
            </li>
          </ul>
        </p>
      </li>
      <li>
        <a href="https://www.codart.io/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Codart.io
        </a>
        <p>
          When I fell into the rabbit hole of crypto, one of the things that captivated me were{" "}
          <span className="bg-yellow-100 text-yellow-900 p-0.5">NFTs</span>, and especially{" "}
          <span className="bg-yellow-100 text-yellow-900 p-0.5">generative art</span>. Without doubt,{" "}
          <a href="https://www.artblocks.io/" target="_blank" rel="noopener noreferrer" className="underline">
            ArtBlocks
          </a>{" "}
          is the biggest exponent in the generative art space and they&apos;ve done an amazing job promoting and curating
          artists. I built this site as a final project for the{" "}
          <a
            href="https://www.unic.ac.cy/openmetaverse/mooc-nfts-metaverse/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            UNIC NFTs And Metaverse course
          </a>{" "}
          and the{" "}
          <a href="https://university.alchemy.com/" target="_blank" rel="noopener noreferrer" className="underline">
            Alchemy&apos;s Ethereum Bootcamp
          </a>{" "}
          and as a way to celebrate and appreciate the work that Art Blocks and the artists who published their work
          through them have done in the past years.
        </p>
      </li>
      <li>
        <a href="https://scorecast.wtf/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          ScoreCast.wtf
        </a>
        <p>
          ScoreCast is a web app that lets you bet on the outcome of a soccer match. It uses{" "}
          <span className="bg-yellow-100 text-yellow-900 p-0.5">Chainlink Functions</span>to verify the results
          on-chain.
        </p>
      </li>
    </ul>
  </section>
);

export default Portfolio;

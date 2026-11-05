import Gallery from "./Gallery";

// 写真は public/photos/ に「DSC_○○○○_人なし.jpg」の名前で置きます。
const numbers = [
  "0257", "0258", "0275", "0276", "0279",
  "0282", "0284", "0295", "0296", "0302",
  "0306", "0307", "0324", "0372", "0380",
];
const photos = numbers.map((n, i) => ({
  src: `/photos/DSC_${n}_人なし.jpg`,
  alt: `カンボジアの風景 ${i + 1}`,
}));

export default function Home() {
  return (
    <>
      <nav className="nav">
        <a href="#top" className="logo">思い出のはいとう</a>
        <div>
          <a href="#about">この旅について</a>
          <a href="#photos">写真</a>
        </div>
      </nav>

      <header id="top" className="hero" style={{ backgroundImage: `url("${photos[0].src}")` }}>
        <div className="hero-inner">
          <p className="eyebrow">CAMBODIA</p>
          <h1>思い出のはいとう</h1>
          <p className="lead">カンボジアの旅で出会った景色を、ゆっくりご覧ください。</p>
          <a className="btn" href="#photos">写真を見る</a>
        </div>
      </header>

      <section id="about" className="section narrow">
        <h2>この旅について</h2>
        <p>カンボジアで撮った、大切な思い出の写真を集めました。写真をクリックすると、大きく見ることができます。</p>
      </section>

      <section id="photos" className="section">
        <h2>写真</h2>
        <Gallery photos={photos} />
      </section>

      <footer>© 思い出のはいとう</footer>
    </>
  );
}

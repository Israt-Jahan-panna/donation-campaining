

const Banner = () => {
    return (
        <div className="" >
            <div className="hero max-w-[1600px] min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/dJ1ywjY/Rectangle-4281.png)'}}>
  <div className="hero-overlay bg-white  bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w">
      <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Needre</h1>
      <input type="text" placeholder="Search" className="input w-36 md:w-auto rounded-[8px, 0px, 0px, 8px]"></input>
      <button className="p-4 rounded-lg bg-[#FF444A]">Search</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
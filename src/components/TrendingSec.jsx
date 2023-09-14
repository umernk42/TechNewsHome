import React from 'react';
import imgRetroPc from "../assets/images/image-retro-pcs.jpg";
import imgTopLaps from "../assets/images/image-top-laptops.jpg";
import imgGamingGrowth from "../assets/images/image-gaming-growth.jpg";

function TrendingSec() {
  return (
    <div className='trendingSec'>
        <div className='trendingSecItem'>
            <picture>
                <img src={imgRetroPc} alt="Retro-PC" />
            </picture>
            <div className='content'>
                <h2>01</h2>
                <h3>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div className='trendingSecItem'>
            <picture>
                <img src={imgTopLaps} alt="Top-Laptops" />
            </picture>
            <div className='content'>
                <h2>02</h2>
                <h3>Top 10 Laptops of 2022</h3>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </div>
        <div className='trendingSecItem'>
            <picture>
                <img src={imgGamingGrowth} alt="Gaming-Growth" />
            </picture>
            <div className='content'>
                <h2>03</h2>
                <h3>The Growth of Gaming</h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
    </div>
  )
}

export default TrendingSec
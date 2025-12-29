import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
    id: 1,
    title: "Bracelets ⋆౨ৎ˚⟡",
    imageUrl: "https://i.pinimg.com/736x/25/ff/a7/25ffa7864224cba237d72c528f176442.jpg",
    link: "Bracelets"
  },
  {
    id: 2,
    title: "Necklaces ✧˖°.",
    imageUrl: "https://i.pinimg.com/736x/f5/2b/9d/f52b9d2ca78acffa6657a3638dbb6777.jpg",
      link: "Necklaces",
  },


  //   {
  //   id: 4,
  //   title: "Bookmarks",
  //   imageUrl: "https://scontent.flhe7-2.fna.fbcdn.net/v/t1.15752-9/520429125_1334742338219253_2531984894124566733_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=j7XYMWWmVY8Q7kNvwFYLOQX&_nc_oc=Adkef7qEPDIiflArvyMlAj0FTg2JoPnp6bRd6DV5GSZcJB7m97b8m8ZRWL8id8lVe1k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-2.fna&oh=03_Q7cD2wF-rY8Fqy79pbeR3ML53F8zqAW-4GruhgPAjdrVNB5Twg&oe=68AC16BF"
  // },
      {
    id: 3,
    title: "Earrings ⋆˚꩜｡",
    imageUrl: "https://i.pinimg.com/736x/8d/1c/25/8d1c257884b9bdd7001857d3dbcda6df.jpg",
      link: "Earrings"
  },
      {
    id: 4,
    title: "Pearl collection ｡°✩",
    imageUrl:"https://i.pinimg.com/736x/7e/3d/65/7e3d65af38004e83f2222a07e5b0cf13.jpg",
     link: "Pearl collection"
  },
        {
    id: 5,
    title: "Pendants 𝜗ৎ",
    imageUrl:"https://i.pinimg.com/736x/ce/d6/15/ced615a04ecd507ca7b084d3738e249b.jpg",
     link: "Pendants"
  },
      {
      id: 6,
    title: "Skin care ⋆˚࿔",
    imageUrl:"https://i.pinimg.com/736x/13/bd/28/13bd2874106773126d93a5d72ac8f662.jpg",
     link: "Skin care"
  },
        {
      id: 7,
    title: "Rings  🌷⋆｡‧˚ ",
    imageUrl:"https://i.pinimg.com/1200x/39/05/af/3905af1724eb50ec0b1bb5710802dcaa.jpg",
     link: "Rings"
  },
  {
      id: 6,
    title: "Others ⋆˚࿔",
    imageUrl:"https://i.pinimg.com/736x/43/dd/49/43dd49c7cbd6343da220ebef36ace2c4.jpg",
     link: "Others"
  },

  //   {
  //     id: 7,
  //   title: "Cuffs ✮ ⋆ ˚｡",
  //   imageUrl:"https://pbs.twimg.com/media/G1TOKwYWEAAnoBZ?format=jpg&name=small",
  //    link: "Cuffs"
  // },

  //     {
  //     id: 7,
  //   title: "3 piece sets⭒˚.⋆",
  //   imageUrl:"https://i.postimg.cc/9Q4s0FGQ/image.png",
  //    link: "3 piece sets"
  // },
  //       {
  //     id: 7,
  //   title: "Charms⭒˚.⋆",
  //   imageUrl:"https://i.postimg.cc/pXS1wbgb/image.png",
  //    link: "charms"
  // },
  //       {
  //   id: 6,
  //   title: "Bag charms",
  //   imageUrl: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/520244288_1267810474939004_9048492148598199566_n.png?stp=dst-png_s640x640&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=neIk5TZGFm4Q7kNvwEuXfQ_&_nc_oc=AdmxJ4KDwZ-uqPdqouvocGIJ_PMCJuOMaF7ERpOXqSlLAudbRPv9J7oqkY8r3siKLZI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD2wFMPcWh2mt2rXhc_FNIMeleWIzjCbZQawAV-wDep1F7MQ&oe=68A70F62"
  // },

];

function FeaturedCategories() {
  return (
<div>
  <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
    Featured Categories
  </h2>

  <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
    {categories.map(category => (
      <Link
        to={`/products?category=${encodeURIComponent(category.link)}`}
        key={category.id}
        className="flex flex-col gap-2 group bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
      >
        <div
          className="w-full aspect-[1/1] bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        ></div>
        <p className="text-[#141414] text-base font-medium leading-normal text-center px-2 pb-3">
          {category.title}
        </p>
      </Link>
    ))}
  </div>
</div>

  );
}

export default FeaturedCategories;

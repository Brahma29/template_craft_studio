import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const Card = (props) => {
  const { coverImage, name, price, author, category } = props;
  return (
    <div className="overflow-hidden bg-slate-900 rounded-xl">
      <div className="relative">
        <Image src={coverImage} alt={name} width={700} height={700} />
        <div className="absolute top-0 left-0 w-full h-full p-6 transition-opacity bg-black opacity-0 hover:opacity-70">
          <div className="flex items-center justify-end gap-3">
            <span className="text-medium">788</span>
            <div className="w-8 h-8 border-2 border-white rounded-full" />
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <div className="w-12 h-12 border-2 border-white rounded-full" />
            <div className="w-12 h-12 border-2 border-white rounded-full" />
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between">
          <span>{name}</span>
          <span>${price}</span>
        </div>
        <div className="flex gap-3 mt-2 text-sm">
          <span>{author}</span>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  coverImage: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  author: PropTypes.string,
  category: PropTypes.string,
};

export default Card;

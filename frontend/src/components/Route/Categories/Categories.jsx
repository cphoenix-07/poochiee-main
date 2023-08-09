import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >

<div className="flex justify-between w-full shadow-sm bg-white p-5 rounded-md">
    {brandingData &&
      brandingData.map((i, index) => (
        <div className="flex items-center" key={index}>
          <div className="relative flex-shrink-0">
            <img
              src={i.icon}
              className="w-8 h-8 md:w-12 md:h-12"
              alt={`${i.title} icon`}
            />
          </div>
          <div className="px-3">
            <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
            <p className="text-xs md:text-sm">{i.Description}</p>
          </div>
        </div>
      ))}
  </div>


          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>


      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <h1 className="text-center" style={{fontSize:'50px', fontWeight:'bold'}}>Categories</h1>
        {/* <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]"> */}
        <div className={`${styles.section} bg-white p-6 rounded-lg mb-12`} id="categories">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {categoriesData &&
              categoriesData.map((i) => {
                const handleSubmit = (i) => {
                  navigate(`/products?category=${i.title}`);
                };
                return (
                  <div
                    className="w-full cursor-pointer bg-[#ffe8bf] overflow-hidden rounded-lg shadow-md border border-gray-200 transition-transform transform hover:scale-105"
                    key={i.id}
                    onClick={() => handleSubmit(i)}
                  >
                    <div className="relative flex-grow">
                      <img src={i.image_Url} className="w-full h-full object-cover" alt="" />
                      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity"></div>
                    </div>
                    <div className="p-3">
                      <h5 className="text-lg text-center font-semibold mt-2">{i.title}</h5>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

      </div>
      {/* </div> */}
    </>
  );
};

export default Categories;

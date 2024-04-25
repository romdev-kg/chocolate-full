import React from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { useContext } from "react";
import myContext from "../../context/myContext";


function AllProducts() {
    const context = useContext(myContext);
    const {getAllProduct } = context;
    const navigate = useNavigate();
    
        return (
                    <Layout>
              <div className="mt-10">
                  {/* Heading  */}
                  <div className="">
                      <h1 className=" text-center mb-5 text-2xl font-semibold">All product</h1>
                  </div>
                  {/* main  */}
                  <section className="text-gray-600 body-font">
                      <div className="container px-5 py-5 mx-auto">
                          <div className="flex flex-wrap -m-4">
                              {getAllProduct.map((item, index) => {
                                  const {id, productImageUrl, title, price } = item
                                  return (
                                      <div key={index} className="p-4 w-full md:w-1/4">
                                          <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer bg-whitecartCartPage.jsx">
                                              <img
                                              onClick={()=> navigate(`/productinfo/${id}`)}
                                                  className="lg:h-80  h-96 w-full"
                                                  src={productImageUrl}
                                                  alt="blog"
                                              />
                                              <div className="p-6">
                                                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                  </h2>
                                                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                      {title.substring(0, 25)}
                                                  </h1>
                                                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                      {price}som
                                                  </h1>
                                                  <div className="flex justify-center ">
                                                      <button className=" bg-amber-500 hover:bg-amber-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                          Add to card
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  )
                              })}
                          </div>
                      </div>
                  </section>
              </div>
              </Layout>
          );
      }

export default AllProducts

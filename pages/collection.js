import React from "react";
import Layout from "@/components/Layout";
import { useGlobalContext } from "@/context";
import { kicks } from "@/data";
import WomenSection from "@/components/WomenSection";
import MenSection from "@/components/MenSection";

const Collection = () => {
  const activePage = "collections";

  const {
    price,
    minimumPrice,
    maximumPrice,
    shoes,
    manageCategory,
    manageGender,
    manageCompany,
    manageSort,
    priceFilterUpdate,
    clearAllFilters,
    activeFilter,
  } = useGlobalContext();

  const noOfItems = shoes.length;
  let gender = [];
  let category = [];
  let company = [];
  {
    kicks.map((kick) => {
      category.push(kick.category);
    });
  }
  {
    kicks.map((kick) => {
      gender.push(kick.gender);
    });
  }
  {
    kicks.map((kick) => {
      company.push(kick.company);
    });
  }
  return (
    <Layout activePage={activePage}>
      <section className="lg:w-[1110px] mx-auto flex gap-x-6 mt-3">
        {/* section for buttons */}
        {/* category */}
        <div>
          <div className="mb-3">
            <h3 className="font-bold text-normal mb-1">Category</h3>
            <ul>
              {["all", ...new Set(category)].map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      manageCategory(item);
                    }}
                    className={`font-medium mb-[2px] capitalize text-lg cursor-pointer ${
                      activeFilter === item.toLowerCase()
                        ? "text-[#ff7e1b]"
                        : null
                    }`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* end of category */}
          {/* company */}
          <div className="mb-3">
            <h3 className="font-bold text-normal mb-1">Company</h3>
            <ul>
              {["all", ...new Set(company)].map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => manageCompany(item)}
                    className={` font-medium mb-[2px] capitalize text-lg cursor-pointer ${
                      activeFilter === item.toLowerCase()
                        ? "text-[#ff7e1b]"
                        : null
                    }`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* end of company */}
          {/* gender */}
          <div className="mb-3">
            <h3 className="font-bold text-normal mb-1">Gender</h3>
            <ul>
              {["all", ...new Set(gender)].map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => manageGender(item)}
                    className={`font-medium mb-[2px] capitalize text-lg cursor-pointer ${
                      activeFilter === item.toLowerCase()
                        ? "text-[#ff7e1b]"
                        : null
                    }`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* end of gender */}
          {/* price filter */}
          <div>
            <h3 className="font-bold text-normal mb-1">
              Price: $<span>{price}</span>
            </h3>
            <input
              type="range"
              name={price}
              min={minimumPrice}
              max={maximumPrice}
              value={price}
              onChange={(e) => priceFilterUpdate(e.target.value)}
            />
          </div>
          <button
            onClick={clearAllFilters}
            className="bg-red-700 font-bold  text-white py-2 px-5 hover:text-red-700 hover:bg-[#ff7e1b] ease-in-out duration-300"
          >
            Clear Items
          </button>
          {/* end of price filter */}
          {/* end of buttons */}
        </div>

        <div>
          <div className="flex justify-between mb-5">
            <div className="flex items-center">
              <p className="font-semibold">Sort by:</p>
              <select name="" onChange={(e) => manageSort(e.target.value)}>
                <option value="lowest">Price (Lowest)</option>
                <option value="highest">Price (Highest)</option>
                <option value="ascending">Name (A-Z)</option>
                <option value="descending">Name (Z-A)</option>
              </select>
            </div>
            <p className="bg-[#ff7e1b] text-white font-bold rounded-full p-2">
              {" "}
              {noOfItems}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {shoes.map((shoe) => {
              const { id, image, name, description } = shoe;
              if (shoe.gender === "men") {
                return <MenSection key={id} {...shoe} />;
              } else return <WomenSection key={id} {...shoe} />;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collection;

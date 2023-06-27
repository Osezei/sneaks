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
      <section className="flex">
        {/* section for buttons */}
        {/* category */}
        <div>
          <div>
            <ul>
              {["all", ...new Set(category)].map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      manageCategory(item);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* end of category */}
          {/* company */}
          <div>
            <ul>
              {["all", ...new Set(company)].map((item, index) => {
                return (
                  <li key={index} onClick={() => manageCompany(item)}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* end of company */}
          {/* gender */}
          <div>
            <ul>
              {["all", ...new Set(gender)].map((item, index) => {
                return (
                  <li key={index} onClick={() => manageGender(item)}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* end of gender */}
          {/* price filter */}
          <div>
            <h3>price</h3>
            <p>{price}</p>
            <input
              type="range"
              name={price}
              min={minimumPrice}
              max={maximumPrice}
              value={price}
              onChange={(e) => priceFilterUpdate(e.target.value)}
            />
          </div>
          <button onClick={clearAllFilters}>clear</button>
          {/* end of price filter */}
          {/* end of buttons */}
        </div>
        <div>
          <div>
            <p>Sort by</p>
            <select name="" onChange={(e) => manageSort(e.target.value)}>
              <option value="lowest">Price (Lowest)</option>
              <option value="highest">Price (Highest)</option>
              <option value="ascending">Name (A-Z)</option>
              <option value="descending">Name (Z-A)</option>
            </select>
          </div>
          <div>
            <p>{noOfItems} of shoes available</p>
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

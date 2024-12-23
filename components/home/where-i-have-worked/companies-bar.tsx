import React from "react";
import { motion } from "framer-motion";
import CompanyButton from "./company-button";
import { EXPERIENCE_DATA } from "../../../utils/data/experience";

const CompaniesBar = ({ setExperienceId }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [barPosition, setBarPosition] = React.useState(-8);
  const [barAbovePosition, setBarAbovePosition] = React.useState(0);

  const companies = Object.values(EXPERIENCE_DATA).map((company, index) => ({
    ...company,
    name: company.company,
  }));

  const handleCompanyClick = (index, company) => {
    setActiveIndex(index);
    setBarPosition(company.barPosition);
    setBarAbovePosition(company.barAbovePosition);
    setExperienceId(company.id);
  };

  return (
    <div className="flex flex-col md:flex-row w-screen md:w-auto overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start sm:justify-center items-start sm:items-center">
      <div className="hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-64 translate-y-1 md:w-0.5 rounded md:order-1 order-2">
        <motion.div
          animate={{ y: barPosition }}
          className="absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary"
        />
      </div>

      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0">
        <div className="flex flex-row md:flex-col">
          {companies.map((company, index) => (
            <CompanyButton
              key={company.name}
              name={company.name}
              isActive={activeIndex === index}
              onClick={() => handleCompanyClick(index, company)}
            />
          ))}
        </div>
        <div className="block md:hidden w-[760px] h-0.5 rounded bg-gray-500">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="w-[128px] h-0.5 rounded bg-AAsecondary"
          />
        </div>
      </div>
    </div>
  );
};

export default CompaniesBar;

import { useTranslation } from 'react-i18next';
import React from 'react';
import { careerListingData } from '../../components/careerListings/careerListingData';
import CareerListings from '../../components/careerListings/CareerListings';

const Careers = () => {
  const handleClick = () => {
    const element = document.getElementById('car');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const { t } = useTranslation();
  return (
    <div className=" font-poppins flex flex-col items-center py-8">
      <div className=" flex flex-col items-center lg:px-32 my-8 px-8">
        <div className=" self-start">
          <h1 className=" font-normal text-4xl mb-1">{t('careersTitle')}</h1>
          <p className="opacity-50 text-xl">{t('careersText1')}</p>
        </div>

        <p className=" text-[#424A4F] w-full text-lg my-12 text-justify ">
          {t('careersText2')}
        </p>

        <div className="self-start">
          <p className=" text-[#424A4F] text-lg">{t('role')}</p>
          <button
            className="rounded text-xl px-7 py-3 relative top-8 sm:text-base font-medium shadow-md bg-cyan-400"
            type="button"
            onClick={handleClick}
          >
            {t('openList')}
          </button>
        </div>
      </div>

      <div className=" bg-[#FEE89E] flex flex-col items-center lg:px-32 my-8 px-8">
        <div className="flex flex-col py-8">
          <h1 className="text-[#424A4F] text-4xl mb-1">{t('hiringTitle')}</h1>
          <p className="text-[#424A4F] text-lg text-justify ">
            {t('hiringText')}
          </p>
        </div>
      </div>

      <div id="car" className=" flex flex-col items-center lg:px-32 my-8 px-8">
        <div className=" self-start">
          <h1 className=" font-normal text-4xl mb-1">{t('positions')}</h1>
          <p className="opacity-50 text-xl mb-6">{t('positionText')}</p>
          {careerListingData.map((career) => (
            <CareerListings
              title={t(`${career.title}`)}
              description={t(`${career.description}`)}
              position={t(`${career.position}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;

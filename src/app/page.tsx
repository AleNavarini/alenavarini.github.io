// Page.tsx

'use client';
import React from 'react';
import { inter } from './fonts';
import './globals.css';
import ThemeToggle from './components/theme/ThemeToggle';
import { Card } from './components/Card';
import SummaryMainHeader from './components/summary/SummaryMainHeader';
import SummaryText from './components/summary/SummaryText';
import ContactInformationSection from './components/sections/ContactInformationSection';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection';
import LanguagesSection from './components/sections/LanguagesSection';
import TechStackSection from './components/sections/TechStackSection';
import Link from 'next/link';
import DownloadIcon from './components/DownloadIcon';

const Page: React.FC = () => {
  return (
    <main
      className={`min-h-screen bg-bgColor text-textColor ${inter.className}`}
    >
      <header className="pt-4 container relative px-4 flex items-center justify-end gap-4">
        <Link href={`/alejandro_navarini_cv_en.pdf`} download>
          <DownloadIcon />
        </Link>
        <ThemeToggle />
      </header>
      <div className="container px-4 flex flex-col lg:flex-row gap-x-9 gap-y-4 py-4">
        <div className="flex flex-col gap-4">
          <Card className="flex flex-col gap-10">
            <SummaryMainHeader />
            <SummaryText />
          </Card>
          <ExperienceSection />
          <EducationSection />
        </div>
        <div className="flex flex-col gap-4 lg:min-w-[400px]">
          <ContactInformationSection />
          <LanguagesSection />
          <TechStackSection />
        </div>
      </div>
    </main>
  );
};

export default Page;

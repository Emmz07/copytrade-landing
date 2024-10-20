import TopTradingBots from '@/components/hero2/page5';
import StatsSection from '@/components/hero2/page';
import { CopyTradingExplained } from '@/components/hero2/page4';
import Image from 'next/image';
import MarqueeDemo from '@/components/hero2/page2';

// components/CryptoTradingSection.tsx
import React from 'react';
import TradersSection from '@/components/hero2/page3';

// Assuming `sharedClasses` is an object containing Tailwind CSS class names
// Define the type for sharedClasses if it's imported or declared elsewhere in your project
const sharedClasses = {
    flex: 'flex',
    flexCol: 'flex-col',
    mdFlexRow: 'md:flex-row',
    itemsCenter: 'items-center',
    justifyBetween: 'justify-between',
    m9:'m-9',
    mb:'mb-9',
    p8: 'p-8',
    bgBackground: 'bg-background',
    mdW1_2: 'md:w-1/2',
    text3xl: 'text-5xl',
    fontBold: 'font-bold',
    textPrimary: 'text-primary',
    mt4: 'mt-4',
    textMutedForeground: 'text-muted-foreground',
    mt6: 'mt-6',
    bgSecondary: 'bg-secondary',
    textSecondaryForeground: 'text-secondary-foreground',
    hoverBgSecondary: 'hover:bg-secondary',
    px6: 'px-6',
    py2: 'py-2',
    roundedLg: 'rounded-lg',
    mdMt8: 'md:mt-8',
    mdMt0: 'md:mt-0',
};






const ReactComponent = () => {
  return (
  <>
    <div
            className={`h-screen ${sharedClasses.flex} ${sharedClasses.flexCol} ${sharedClasses.mdFlexRow} ${sharedClasses.itemsCenter} ${sharedClasses.justifyBetween} ${sharedClasses.p8} ${sharedClasses.bgBackground}`}
        >
            <div className={`${sharedClasses.mdW1_2}`}>
                <h1 className={`${sharedClasses.text3xl} ${sharedClasses.fontBold} ${sharedClasses.textPrimary} ${sharedClasses.m9}`}>
                    Successful <span className='text-yellow-300'>Crypto Trading</span>  Performance on Autopilot
                </h1>
                <p className={`${sharedClasses.mt4} ${sharedClasses.textMutedForeground } ${sharedClasses.m9}`}>
                    Exness copy trading service allows copying deals made by traders and trading bots, as well as receive signals from verified strategies.
                </p>
                <button className='bg-yellow-400 text-black px-5 py-2 rounded-sm hover:bg-exnessYellow ml-9 font-semibold'>
                    Start Copy Trading
                </button>
            </div>
            <div className={`${sharedClasses.mdW1_2} ${sharedClasses.mdMt8} ${sharedClasses.mdMt0}`}>
            <Image className='emmz2'
                src='/icon2.jpg' 
                alt="Description of the image"
                width={500}
                height={500}
                />
            </div>
        </div>

    <div className='mt-7'>
    <TradersSection />
    <CopyTradingExplained />
    <TopTradingBots />
    <StatsSection />
    <MarqueeDemo />
    </div>
  </>
  );
};

export default ReactComponent;

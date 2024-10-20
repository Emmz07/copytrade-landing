// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { AiFillAndroid } from "react-icons/ai"; 
import { AiFillApple } from "react-icons/ai"; 
import { AiFillGithub } from "react-icons/ai"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { AiFillInstagram } from "react-icons/ai"; 
import { AiFillTwitterCircle } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 


const linkClasses = 'text-black text-3xl ml-4 hover:text-foreground';



// Define TypeScript interfaces for component props
interface FooterSectionProps {
    title: string;
    items: string[];
}



const footerClasses = "bg-background text-foreground p-8  m-9";
const listClasses = "mt-2";

const Footer: React.FC = () => {
    return (
        <footer className={footerClasses}>
            <div className='md:m-9'>
            <h1 className='text-5xl mb-9 font-semibold'>exness</h1>
            <div className=" container mx-auto text-sm grid grid-cols-2 flex m-9 flex-wrap md:grid-cols-8  gap-8">
                <FooterSection title="Accounts" items={["Standard accounts", "Professional accounts", "Demo trading account"]} />
                <FooterSection title="Conditions" items={["Deposits and withdrawals", "Fees", "Client protection"]} />
                <FooterSection title="Markets" items={["Forex CFD", "Commodities CFD", "Stocks CFD", "Indices CFD", "Crypto CFD"]} />
                <FooterSection title="Platforms" items={["MetaTrader 5", "MetaTrader 4", "Exness Trade App", "MetaTrader 5 mobile", "Exness Terminal", "MetaTrader WebTerminal"]} />
                <FooterSection title="Tools" items={["Analytical tools", "Economic calendar", "Trading calculator", "Currency converter", "Tick history", "VPS hosting"]} />
                <FooterSection title="About" items={["About us", "Why Exness", "Contact us", "Help Center", "Exness in the media", "Exness in the community", "Exness Team Pro", "Blog"]} />
                <FooterSection title="Corporate" items={["Regulation", "Legal documents", "Compensation fund"]} />
                <FooterSection title="Solutions" items={["Premier Program"]} />
            </div>
            <div className="flex mt-8 border-b border-border pb-4 m-9">
            <div  className='flex'>
                <Link href="/" className={linkClasses}><BsFacebook /></Link>
                <Link href="/" className={linkClasses}><AiFillTwitterCircle /></Link>
                <Link href="/" className={linkClasses}><AiFillInstagram /></Link>
                <Link href="/" className={linkClasses}><AiFillLinkedin /></Link>
                <Link href="/" className={linkClasses}><AiFillGithub /></Link>
            </div> 
            </div>
            <div>
                <p className='text-sm border-b border-border pb-9 md:m-9'>E​xness (SC) Ltd ​is a Securities Dealer registered in Seychelles with registration number 8423606-1 and authorised by the Financial Services Authority (FSA) with licence number SD025. E​xness (SC) Ltd is also authorized as an Over-The-Counter Derivatives Provider (ODP) by the Financial Sector Conduct Authority (FSCA) in South Africa. The registered office of E​xness (SC) Ltd is at 9A CT House, 2nd floor, Providence, Mahe, Seychelles. <br /><br />

                Exness B.V. is a Securities Intermediary registered in Curaçao with registration number 148698(0) and authorised by the Central Bank of Curaçao and Sint Maarten (CBCS) with licence number 0003LSI. The registered office of Exness B.V. is at Emancipatie Boulevard Dominico F. “Don” Martina 31, Curaçao. <br /><br />

                Exness (VG) Ltd is authorised by the Financial Services Commission (FSC) in BVI with registration number 2032226 and investment business licence number SIBA/L/20/1133. The registered office of Exness (VG) Ltd is at Trinity Chambers, P.O. Box 4301, Road Town, Tortola, BVI. <br /><br />

                The entities above are duly authorized to operate under the Exness brand and trademarks. <br /><br />

                Risk Warning: Our services relate to complex derivative products which are traded outside an exchange. These products come with a high risk of losing money rapidly due to leverage and thus are not appropriate for all investors. Under no circumstances shall Exness have any liability to any person or entity for any loss or damage in whole or part caused by, resulting from, or relating to any investing activity. Learn more. <br /><br />

                The entities above do not offer services to residents of certain jurisdictions including the USA, Canada, Iran, North Korea, Europe, the United Kingdom and others. <br /><br />

                The information on this website does not constitute investment advice or a recommendation or a solicitation to engage in any investment activity. <br /><br />

                Any interaction with this website constitutes an individual and voluntary operation on the part of the person accessing it. This website and its content should not be understood as an invitation for the contracting and/or acquisition of Exness' financial services and products. <br /><br />

                The information on this website may only be copied with the express written permission of Exness. <br /><br />

                Exness complies with the Payment Card Industry Data Security Standard (PCI DSS) to ensure your security and privacy. We conduct regular vulnerability scans and penetration tests in accordance with the PCI DSS requirements for our business model. <br />

                ¹At Exness, 95% of withdrawals are processed instantly (under 1 minute). Once your funds leave our custody, it's up to your chosen payment provider to process the funds and credit your account. <br />

                ²Deposit fees may be applied to specific payment methods to maintain the integrity of our payment processes. <br />

                ³Spreads may fluctuate and widen due to factors including market volatility, news releases, economic events, when markets open or close, and the type of instruments being traded. <br />

                ⁴Best spreads refers to average or max spreads offered by Exness, excluding agents’ commission for XAUUSD for the first two seconds after high-impact news, from January to May 2024, compared with five other large brokers.</p>
            </div>
            <div className='flex justify-between text-sm md:m-9'>
                <div className='flex'>
                    <h2 className='mr-4'>Risk disclosure</h2>
                    <h2 className='mr-4'>Preventing Money Laundry</h2>
                    <h2 className='mr-4'>Privacy Policy</h2>
                </div>
                <div>
                    © 2024 Exness
                </div>
            </div>
           
            </div>
        </footer>
    );
};

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
    return (
        <div>
            <h3 className="font-semibold">{title}</h3>
            <ul className={listClasses}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};



export default Footer;

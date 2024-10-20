"use client"

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CopyIcon, TrendingUpIcon, UserIcon, AlertTriangleIcon } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image';

import { GrRisk } from "react-icons/gr"; 
import { GrDocumentPerformance } from "react-icons/gr"; 
import { GrMultiple } from "react-icons/gr"; 
import { GrMonitor } from "react-icons/gr"; 
import { GrMoney } from "react-icons/gr"; 

export function CopyTradingExplained() {
  const [activeTab, setActiveTab] = useState("what-is-copytrading");

  return (
    <div className="space-y-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className='max'>
        <TabsList className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-2 pt-4 border-t border-border ">
          <TabsTrigger className='mb-2 text-xl' value="what-is-copytrading">What is Copytrading?</TabsTrigger>
          <TabsTrigger className='mb-2 text-xl' value="how-it-works">How It Works</TabsTrigger>
          <TabsTrigger className='mb-2 text-xl' value="scenarios">Copy Scenarios</TabsTrigger>
          <TabsTrigger className='mb-2 text-xl' value="considerations">Key Considerations</TabsTrigger>
        </TabsList>
        </div>
        
        <TabsContent value="what-is-copytrading" className="space-y-4">
          <div>
            <CardHeader className='my-7'>
              <CardTitle className='text-3xl mb-2 mt-2' >What is Copytrading?</CardTitle>
              <CardDescription className='text-sm text-black font-semibold'>Understanding the basics of copytrading in social trading platforms</CardDescription>
            </CardHeader>
            <CardContent>
                <div id='me' className='flex justify-between'>
                <div>
                <p className='text-lg'>Copytrading is a feature in social trading that allows investors to automatically copy the trades of experienced traders. It's a way for novice traders to benefit from the expertise of successful traders without having to make trading decisions themselves.</p>
                <div className='emmz'>
              <div className="mt-4 mb-8 flex items-center space-x-2">
                <CopyIcon className="h-6 w-6 text-primary" />
                <span className='text-lg'>Automatically replicate trades of successful traders</span>
              </div>
              <div className="mt-4 mb-8 flex items-center space-x-2">
                <TrendingUpIcon className="h-6 w-6 text-primary" />
                <span className='text-lg'>Potential to profit from expert trading strategies</span>
              </div>
              <div className="mt-4 mb-8 flex items-center space-x-2">
                <UserIcon className="h-6 w-6 text-primary" />
                <span className='text-lg'>Learn from experienced traders' decisions</span>
              </div>
            </div>
            <button className='bg-yellow-400 text-black px-5 py-2 rounded-sm hover:bg-yellow-300 font-semibold'>
                Copy Now
                </button>
            </div>
             
              <div className='ml-5'>
              <Image
                src='/icon3.png' 
                alt="Description of the image"
                width={900}
                height={1000}
                />
              </div>
                </div>
                
            </CardContent>
          </div>
        </TabsContent>

        <TabsContent value="how-it-works" className="space-y-4">
          <div>
            <CardHeader>
              <CardTitle className='text-3xl mb-2 mt-2'>How Copytrading Works</CardTitle>
              <CardDescription className='text-sm text-black font-semibold'>The mechanics behind copytrading</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-lg'>In copytrading, when a strategy provider (the trader being copied) makes a trade, that same trade is automatically executed in the investor's account, taking into account a copying coefficient.</p>
              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="copying-coefficient">
                  <AccordionTrigger className='text-lg'>What is a copying coefficient?</AccordionTrigger>
                  <AccordionContent>
                    The copying coefficient is a multiplier that determines the size of the copied trade relative to the original trade. It's calculated based on the investor's funds and the strategy provider's account size.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="recalculation">
                  <AccordionTrigger className='text-lg'>When is the copy coefficient recalculated?</AccordionTrigger>
                  <AccordionContent>
                    The copy coefficient is recalculated at the end of the trading period and when the trader deposits into the strategy account. In both cases, investment orders will be closed at current prices and re-opened with a new volume corresponding to the recalculated copy coefficient.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="recalculation">
                  <AccordionTrigger className='text-lg'>When is the copy coefficient recalculated?</AccordionTrigger>
                  <AccordionContent>
                    The copy coefficient is recalculated at the end of the trading period and when the trader deposits into the strategy account. In both cases, investment orders will be closed at current prices and re-opened with a new volume corresponding to the recalculated copy coefficient.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </div>
        </TabsContent>

        <TabsContent value="scenarios" className="space-y-4">
          <div>
            <CardHeader>
              <CardTitle className='text-3xl mb-2 mt-2'>Copying Scenarios</CardTitle>
              <CardDescription className='text-sm text-black font-semibold'>Different situations an investor may encounter when copytrading</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="start-no-trades">
                  <AccordionTrigger  className='text-lg'>Start copying without open trades</AccordionTrigger>
                  <AccordionContent className='text-md'>
                    When a strategy has no open trades, the system calculates a copying coefficient. As the strategy provider opens trades, they are immediately copied to the investment account at the same opening price.
                    A strategy has started and does not have any open trades at that point in time. Once it starts, the system calculates a copying coefficient.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="start-with-trades">
                  <AccordionTrigger  className='text-lg'>Start copying with open trades</AccordionTrigger>
                  <AccordionContent className='text-md'>
                    If a strategy has open trades, the copying coefficient is calculated differently to include the spread cost of open trades. Existing trades are copied to the investment account, potentially at different prices depending on the market conditions below.
                    <li>If the market is closed, and there are more than 3 hours until the market re-opening for the instruments on which there are existing open trades, orders will be copied onto the investment using the last market price.</li>
                    <li>If the market is open, orders will be copied with the current market price which may be different from the opening price of the trades on the strategy provider’s side.</li>
                    <li>If there are less than 3 hours to market re-opening for the instruments on which there are existing open trades, the Investor will not be able to start copying. Copying will be available once the market is open.</li>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="stop-no-trades">
                  <AccordionTrigger  className='text-lg'>Stop copying with no open trades</AccordionTrigger>
                  <AccordionContent className='text-md'>
                  If an investor chooses to stop copying a strategy with no current orders on a strategy, the investment is closed, commissions are calculated, and funds are transferred from the investment balance to the investor's wallet. The commission calculated will be sent to the strategy provider at the end of the trading period.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="stop-with-trades">
                  <AccordionTrigger  className='text-lg'>Stop copying with open trades</AccordionTrigger>
                  <AccordionContent className='text-md'>
                    If an investor chooses to stop copying a strategy while there are still open trades, the orders on the investment account will be closed with the current market price as the closing price. The system then calculates the commission and transfers the funds from the investment balance to the investor’s wallet. The commission calculated will be sent to the strategy provider at the end of the trading period.
                    Open orders on the investment account are closed at current market prices. Commissions are calculated, and funds are transferred to the investor's wallet.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </div>
        </TabsContent>

        <TabsContent value="considerations" className="space-y-4">
          <div>
            <CardHeader>
              <CardTitle className='text-3xl mb-2 mt-2'>Key Considerations</CardTitle>
              <CardDescription className='text-sm text-black font-semibold'>Important factors to keep in mind when copytrading</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-none pl-6 mt-5 space-y-2">
                <div className='flex'><li className='text-lg flex'><GrDocumentPerformance className='text-2xl mr-3' />Past performance doesn't guarantee future results</li></div><br />
                <div className='flex'><li className='text-lg flex'><GrRisk className='text-2xl mr-3'  />Understand the risk profile of the traders you're copying</li></div> <br />
                <div className='flex'><li className='text-lg flex'><GrMoney className='text-2xl mr-3'  />Be aware of the fees associated with copytrading</li></div> <br />
                <div className='flex'><li className='text-lg flex'><GrMonitor className='text-2xl mr-3' />Monitor your copied trades regularly</li></div><br />
                <div className='flex'><li className='text-lg flex'><GrMultiple className='text-2xl mr-3' />Diversify by copying multiple traders</li></div><br />
              </ul>
              <div className="mt-4 flex items-center space-x-2">
                <AlertTriangleIcon className="h-6 w-6 text-yellow-500" />
                <span className="text-sm text-muted-foreground">Always conduct your own research and never invest more than you can afford to lose.</span>
              </div>
            </CardContent>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
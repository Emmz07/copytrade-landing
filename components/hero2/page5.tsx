"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const mockData = [
  { id: 1, name: 'AlphaTrader', roi: 15.2, profitRate: 8.7, chartData: [{ date: '2023-01', value: 100 }, { date: '2023-02', value: 120 }, { date: '2023-03', value: 115 }, { date: '2023-04', value: 140 }] },
  { id: 2, name: 'BetaBot', roi: 12.8, profitRate: 7.5, chartData: [{ date: '2023-01', value: 100 }, { date: '2023-02', value: 110 }, { date: '2023-03', value: 130 }, { date: '2023-04', value: 125 }] },
  { id: 3, name: 'GammaAlgo', roi: 18.5, profitRate: 9.2, chartData: [{ date: '2023-01', value: 100 }, { date: '2023-02', value: 130 }, { date: '2023-03', value: 150 }, { date: '2023-04', value: 160 }] },
];

const TopTradingBots: React.FC = () => {
  return (
    <div>
      <CardHeader>
        <div className='flex'>
        <div>
        <Image
            src='/crown.png' 
            alt="Description of the image"
            width={48}
            height={48}
            />
        </div>
        <div className='ml-4 mt-2'>
            <CardTitle className='text-3xl font-bold'>Top Copytrading Bots</CardTitle>
        </div>
        </div> 
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>ROI (%)</TableHead>
              <TableHead>Profit Rate (%)</TableHead>
              <TableHead>Trading Chart</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((bot) => (
              <TableRow key={bot.id}>
                <TableCell className="font-medium">{bot.name}</TableCell>
                <TableCell>{bot.roi.toFixed(2)}%</TableCell>
                <TableCell>{bot.profitRate.toFixed(2)}%</TableCell>
                <TableCell>
                  <div className="w-48 h-24">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={bot.chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" hide />
                        <YAxis hide />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#FFD84D" strokeWidth={4} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </div>
  );
};

export default TopTradingBots;
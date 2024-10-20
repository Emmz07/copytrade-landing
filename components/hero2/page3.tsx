"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const traders = [
  { id: 1, name: 'Alice Trader', profit: '+45.2%', followers: 1200, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  { id: 2, name: 'Bob Investor', profit: '+38.7%', followers: 980, avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  { id: 3, name: 'Carol Finance', profit: '+52.1%', followers: 1500, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
];

export default function TradersSection() {
  const [followedTraders, setFollowedTraders] = useState<number[]>([]);

  const toggleFollow = (traderId: number) => {
    setFollowedTraders(prev =>
      prev.includes(traderId)
        ? prev.filter(id => id !== traderId)
        : [...prev, traderId]
    );
  };

  return (
    <section className="py-12 bg-background mb-9">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Top Copytrading Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traders.map(trader => (
            <Card key={trader.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={trader.avatar} alt={trader.name} />
                    <AvatarFallback>{trader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-lg">{trader.name}</div>
                    <div className="text-sm text-green-400">Profit: {trader.profit}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{trader.followers} followers</span>
                  <Button className='bg-yellow-400 text-black px-5 py-2 rounded-sm hover:bg-yellow-300'
                    variant={followedTraders.includes(trader.id) ? "secondary" : "default"}
                    onClick={() => toggleFollow(trader.id)}
                  >
                    {followedTraders.includes(trader.id) ? 'Unfollow' : 'Follow'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traders.map(trader => (
            <Card key={trader.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={trader.avatar} alt={trader.name} />
                    <AvatarFallback>{trader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-lg">{trader.name}</div>
                    <div className="text-sm text-green-400">Profit: {trader.profit}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{trader.followers} followers</span>
                  <Button className='bg-yellow-400 text-black px-5 py-2 rounded-sm hover:bg-yellow-300'
                    variant={followedTraders.includes(trader.id) ? "secondary" : "default"}
                    onClick={() => toggleFollow(trader.id)}
                  >
                    {followedTraders.includes(trader.id) ? 'Unfollow' : 'Follow'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
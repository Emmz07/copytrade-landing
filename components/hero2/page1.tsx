import * as React from "react"
import Image from "next/image"

import { CgProfile } from "react-icons/cg"; 
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-md text-center justify-center"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
            <Card className="w-[350px] bg-slate-900 text-white mb-5">
      <div className="flex m-5">
        <CgProfile className="text-3xl mr-3" />
        <div>
            <CardTitle>Trader Name</CardTitle>
            <CardDescription>77 followers . <span className="text-green-400 font-semibold">+1.31%</span></CardDescription>
        </div>

      </div>
      <CardContent>
        <form>
        <Badge className="bg-yellow-400 text-black">Top picks</Badge>
          <div className="grid w-full items-center gap-4">
            <div className="mt-6 flex justify-between">
                <div className="p-2">
                    <h4>7d ROI</h4>
                    <p className="text-3xl font-semibold text-green-400">+944.77%</p>
                </div>
             <div>
                <Image
                src='/chart.png' 
                alt="Description of the image"
                width={500}
                height={300}
                />
                </div>
            </div>
            
        <div className="flex justify-between">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">90d ROI</Label>
              <h3 className="text-green-400">+70.67%</h3>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">30d drawdown</Label>
                <p>19.87%</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">AUM</Label>
                <p>54,367.76</p>
            </div>
        </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-yellow-400 text-black px-5 py-2 rounded-sm hover:bg-yellow-300">Copy Now</Button>
      </CardFooter>
    </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}


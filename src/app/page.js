"use client";

import Card from "@/components/custom/Card/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto p-6">
      <div className="py-20 text-center">
        <h1 className="text-5xl max-w-[800px] font-medium text-center mx-auto mb-4">
          8,208 curated design resources to speed up your creative workflow.
        </h1>
        <p className="text-lg opacity-70">
          Join a growing family of 725,157 designers and makers from around the
          world.
        </p>
      </div>

      <div>
        <div className="flex justify-center w-full">
          <Tabs defaultValue="featured" className="mx-auto">
            <TabsList>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="latest">Latest</TabsTrigger>
            </TabsList>
            <TabsContent value="featured">
              <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-4 md:grid-cols-3">
                {Array(13)
                  .fill(0)
                  .map((each, index) => (
                    <Card
                      coverImage="https://images.ui8.net/uploads/preview-1_1703290457326.jpg"
                      author="UI Kits"
                      category="UI"
                      name="All-Access Pass"
                      price={20}
                      key={index}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="trending">
              <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-4 md:grid-cols-3">
                {Array(13)
                  .fill(0)
                  .map((each, index) => (
                    <Card
                      coverImage="https://images.ui8.net/uploads/preview-1_1702049831020.png"
                      author="UI Kits"
                      category="UI"
                      name="All-Access Pass"
                      price={20}
                      key={index}
                    />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="latest">
              <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-4 md:grid-cols-3">
                {Array(13)
                  .fill(0)
                  .map((each, index) => (
                    <Card
                      coverImage="https://images.ui8.net/uploads/ocean-ui8-detail-01_1699952273548.jpg"
                      author="UI Kits"
                      category="UI"
                      name="All-Access Pass"
                      price={20}
                      key={index}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}

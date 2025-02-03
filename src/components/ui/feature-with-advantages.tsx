import { Check } from "lucide-react";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
    
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Why we exist
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              To exponentially improve agriculture with AI and intelligence, and in doing so, improve the lives of plantation owners, farmers and the consumers who rely on them.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Finetuned AI exclusively for Agriculture</p>
                  <p className="text-muted-foreground text-sm">
                    We train and fine-tune our models on agriculture-specific datasets so that what you get is industry-grade.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Domain Knowledge</p>
                  <p className="text-muted-foreground text-sm">
                    We work with experts across technology and agriculture and connect both worlds seamlessly.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Intuitive</p>
                  <p className="text-muted-foreground text-sm">
                    We make it easy to understand and use. We focus on the technology so you can focus on the business.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enterprise-grade privacy and security</p>
                  <p className="text-muted-foreground text-sm">
                    Your proprietary data remains yours. 
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Break down organizational silos</p>
                  <p className="text-muted-foreground text-sm">
                    Unleash your organization&apos;s full productivity and knowledge which has traditionally been untapped.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Unlock Growth</p>
                  <p className="text-muted-foreground text-sm">
                    Sharper and better decision-making every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature }; 
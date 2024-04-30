import { Heart, Minus, MoveLeft, Plus, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "../../../../ui/button";
import { useState } from "react";
import { ResizablePanel } from "../../../../ui/resizable";

interface SubscriptionInterphase {
  blackSwitcher: () => void;
  brownSwitcher: () => void;
  goldSwitcher: () => void;
}

export const Subscription = ({
  blackSwitcher,
  brownSwitcher,
  goldSwitcher,
}: SubscriptionInterphase) => {
  const [value, setValue] = useState<number>(1);
  const [price, setPrice] = useState<number>(1499);

  const plusHandler = (): void => {
    setValue(value + 1);
    setPrice(price + 1499);
  };
  const minusHandler = (): void => {
    setValue(value - 1);
    setPrice(price - 1499);
  };
  return (
    <ResizablePanel>
      <NavLink to="/">
        <MoveLeft className="mt-3" />
      </NavLink>
      <div className="mt-3">Go to main page</div>
      <div>
        <h1 className="font-bold text-4xl mt-3">Deco Lounge Chair</h1>

        <div className="justify-between flex mt-4">
          <div>$ {price}</div>
          <div className="flex mr-36">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <div className="ml-2"> 529 ratings</div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        Crafted from high-quality materials, this chair offers exceptional
        comfort and style, making it perfect addition to any living space. With
        its plus cushions and supportive design, you will never want to leave
        it's cozy embrace.
      </div>

      <div className="flex mt-5 mb-5">
        <div
          className="w-5 mr-2 h-5 rounded-full bg-black cursor-pointer"
          onClick={blackSwitcher}
        ></div>
        <div
          className="w-5 mr-2 h-5 rounded-full bg-amber-800 cursor-pointer"
          onClick={brownSwitcher}
        ></div>
        <div
          className="w-5 h-5 rounded-full bg-yellow-400 cursor-pointer"
          onClick={goldSwitcher}
        ></div>
      </div>

      <div className="flex">
        <div className="flex max-w-30 mb-4 mt-0.5 mr-4 p-1 border-solid border-2 border-black rounded">
          <Button
            disabled={value === 1 ? true : false}
            size="sm"
            variant="ghost"
          >
            <Minus className="cursor-pointer" onClick={minusHandler} />
          </Button>
          <div className="mr-2 ml-2 mt-1 text-xl">{value}</div>
          <Button size="sm" variant="ghost" disabled={value < 5 ? false : true}>
            <Plus className="cursor-pointer" onClick={plusHandler} />
          </Button>
        </div>
        <Button
          size="lg"
          variant="outline"
          className="mt-0.5 h-12 border-black border-2"
        >
          Add to Cart
        </Button>
      </div>

      <div className="flex mt-5 mb-5">
        <div className="w-2.5 h-2.5 m-1.5 rounded-full bg-black cursor-pointer"></div>
        Free 3-4 days shipping
        <div className="w-2.5 mr-2 h-2.5 m-1.5 rounded-full bg-black cursor-pointer"></div>
        Easy return
        <div className="w-2.5 h-2.5 m-1.5 rounded-full bg-black cursor-pointer"></div>
        Free assembly manual
      </div>

      <div className="flex">
        <div className="flex max-w-30 mb-4 mt-0.5 mr-4 p-1 border-solid border-2 border-black rounded">
          <Heart />
          <div className="cursor-pointer mr-2 ml-2">Add to Wishlist</div>
        </div>
      </div>
    </ResizablePanel>
  );
};

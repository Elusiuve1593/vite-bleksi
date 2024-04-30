import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../../ui/resizable";
import { Subscription } from "./subscription/Subscription";
import blackChair from "../../../../shared/chairs/black-chair.jpg";
import brownChair from "../../../../shared/chairs/brown-chair.jpg";
import goldChair from "../../../../shared/chairs/gold-chair.jpg";

export const CardWithShadcn = () => {
  const [image, setImage] = useState<string>(blackChair);

  const blackSwitcher = (): void => setImage(blackChair);
  const brownSwitcher = (): void => setImage(brownChair);
  const goldSwitcher = (): void => setImage(goldChair);
  return (
    <div className="flex justify-center items-center h-screen">
      <ResizablePanelGroup direction="horizontal" className="items-center">
        <Subscription
          blackSwitcher={blackSwitcher}
          brownSwitcher={brownSwitcher}
          goldSwitcher={goldSwitcher}
        />
        <ResizableHandle />
        <ResizablePanel>
          <img src={image} alt="chair"></img>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

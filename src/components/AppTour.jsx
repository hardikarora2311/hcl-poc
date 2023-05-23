import Tour from "reactour";

import steps from "./steps";

const AppTour = ({
  open,
  setOpen,
}) => {
  return (
    <Tour steps={steps} isOpen={open} onRequestClose={() => setOpen(false)} />
  );
};

export default AppTour;
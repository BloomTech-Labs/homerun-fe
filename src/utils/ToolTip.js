import React from "react";
import TooltipTrigger from "react-popper-tooltip";
import InfoIcon from "@material-ui/icons/Info";
function Trigger({ getTriggerProps, triggerRef }) {
  return (
    <div
      {...getTriggerProps({
        ref: triggerRef,
        className: "trigger",
      })}
    >
      <div className="icon">
        <InfoIcon color="action" />
      </div>
    </div>
  );
}
function Tooltip({
  getTooltipProps,
  getArrowProps,
  tooltipRef,
  arrowRef,
  placement,
}) {
  return (
    <div
      {...getTooltipProps({
        ref: tooltipRef,
        className: "tooltip-container",
      })}
    >
      <div
        {...getArrowProps({
          ref: arrowRef,
          "data-placement": placement,
          className: "tooltip-arrow",
        })}
      />
      <p className="px-3 py-1 mt-1 mr-32 font-semibold tracking-wide text-gray-700 bg-gray-200 rounded shadow-lg tooltip-body">
        Click on arrow icons for more info
      </p>
    </div>
  );
}
function ToolTip() {
  return (
    <TooltipTrigger
      placement="bottom"
      trigger={["click", "hover"]}
      tooltip={Tooltip}
    >
      {Trigger}
    </TooltipTrigger>
  );
}
export default ToolTip;

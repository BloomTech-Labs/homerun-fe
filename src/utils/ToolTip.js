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
        <InfoIcon color="active" />
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
      <p className="px-3 py-2 mt-2 mr-32 font-semibold tracking-wide text-white rounded shadow-lg bg-hive tooltip-body">
        Click on member's picture for more info
      </p>
    </div>
  );
}
function ToolTip() {
  return (
    <TooltipTrigger placement="bottom" trigger="hover" tooltip={Tooltip}>
      {Trigger}
    </TooltipTrigger>
  );
}
export default ToolTip;
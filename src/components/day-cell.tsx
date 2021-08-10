import React from "react";
import format from "date-fns/format";
import { DayContentRendererProps } from "react-date-range";
import { Popover } from "react-tiny-popover";
import { DATE_FORMAT } from "./casai-calendar";

type DayCellProps = {
  blockedMinimumNights: Record<string, boolean> | undefined;
} & DayContentRendererProps;

export default function DayCell({
  blockedMinimumNights,
  className,
  tabIndex,
  style,
  renderPreviewPlaceholder,
  renderSelectionPlaceholders,
  date,
  dayNumberStyles,
  ...events
}: DayCellProps) {
  const [isHoverOpen, setIsHoverOpen] = React.useState<boolean>(false);
  const key = format(date, DATE_FORMAT);
  const isBlockedDate = blockedMinimumNights && blockedMinimumNights[key];
  const minimumNights = Object.keys(blockedMinimumNights || {}).length + 1;
  let color = "black";
  if (isBlockedDate) {
    color = "red";
  }
  return (
    <Popover
      isOpen={isHoverOpen}
      // positions={["top"]} // if you'd like, you can limit the positions
      padding={0} // adjust padding here!
      // reposition={false} // prevents automatic readjustment of content position that keeps your popover content within its parent's bounds
      onClickOutside={() => setIsHoverOpen(false)} // handle click events outside of the popover/target here!
      content={(
        { position, nudgedLeft, nudgedTop } // you can also provide a render function that injects some useful stuff!
      ) => (
        <div
          style={{
            background: "rgb(255,255,255)",
            border: "1px solid rgb(235, 235, 235)",
            boxShadow: "rgb(0 0 0 / 10%) 0px 0px 5px",
            padding: 8,
            borderRadius: 8
          }}
        >
          {`${minimumNights}-nighs minimum`}
        </div>
      )}
    >
      <button
        // {...events}
        type="button"
        className={className}
        {...events}
        data-testid={key}
        tabIndex={tabIndex}
        disabled={isBlockedDate}
        style={style}
      >
        {renderSelectionPlaceholders()}
        {renderPreviewPlaceholder()}
        <span
          className={`${dayNumberStyles} ${
            isBlockedDate ? "minimum-night-blocked" : ""
          }`}
          style={{ color }}
          onClick={() => {
            if (isBlockedDate) {
              setIsHoverOpen(true);
            }
          }}
          onMouseEnter={() => {
            if (isBlockedDate) {
              setIsHoverOpen(true);
            }
          }}
          onMouseOut={() => {
            if (isBlockedDate) {
              setIsHoverOpen(false);
            }
          }}
        >
          {date.getDate()}
        </span>
      </button>
    </Popover>
  );
}

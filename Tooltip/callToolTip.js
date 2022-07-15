 
export const mesureToolTipViewScroll = (text, rightPosition, bgColor) => {
    toolTipViewRef.current.measureInWindow((x, y, width, height) => {
      if (x && y) {
        setisShowToolTip((prev) => {
          return {
            ...prev,
            status: true,
            rightPosition: rightPosition,
            bgColor: bgColor,
            text: text,
            measure: {
              x: parseInt(x),
              y: parseInt(y + 60), // 40 --> height of box, 20 -> extra margin
            },
          };
        });
      }
    });
  };

import {useMemo} from "react";

const computeData = ({data, offset, limit}) => {
  const computedValue = useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }

    const startIndex = limit * offset;
    const endIndex = limit ? startIndex + limit : data.length;

    return data.slice(startIndex, endIndex);
  }, [data, offset, limit]);

  return computedValue;
};

export default computeData;

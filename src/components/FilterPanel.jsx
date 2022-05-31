import { useDispatch, useSelector } from "react-redux";
import { clearFilter, removeFilter } from "store/filters/filter-actions";
import { selecAllFilters } from "store/filters/filter-selectors";
import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selecAllFilters);

  if (!filters.length) return null;

  const handleRemoveFilter = (filter) => {
    dispatch(removeFilter(filter));
  };

  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant='clearable'
              onClear={() => handleRemoveFilter(filter)}>
              {filter}
            </Badge>
          ))}
          {/* <Badge variant='clearable'>Frontend</Badge>
          <Badge variant='clearable'>Backend</Badge>
          <Badge variant='clearable'>React</Badge> */}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter)}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };

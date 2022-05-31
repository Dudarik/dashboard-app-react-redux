// import data from '../mock/data.json';
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "store/filters/filter-actions";
import { selecAllFilters } from "store/filters/filter-selectors";
import { selectVisiblePositions } from "store/positions/positions-selectors";
import { JobPosition } from "./JobPosition";

const JobList = () => {
  const filters = useSelector(selecAllFilters);

  const positions = useSelector((state) =>
    selectVisiblePositions(state, filters)
  );
  const dispatch = useDispatch();

  const handleAddPosition = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddPosition={handleAddPosition}
        />
      ))}
    </div>
  );
};

export { JobList };

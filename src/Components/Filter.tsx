import { IFileringField } from "../interfaces/Book.interface";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createUserSelectedFilterList } from "../redux/slices/filter.book.slice";

const Filter = ({
  label,
  options,
}: {
  label: IFileringField;
  options: string[];
}) => {
  const dispatch = useAppDispatch();
  const { author, genre } = useAppSelector((state) => state.userSelectedFilter);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const field = label;
    const value = e.target.value || null;
    dispatch(createUserSelectedFilterList({ field, value }));
  };
  return (
    <div className="flex items-center bg-slate-500 rounded-lg">
      <label htmlFor="filter-field" className="font-bold text-white px-2">
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={handleFilter}
      >
        <option value="">{`Select ${label} to filter`}</option>
        {options.map((option, i) => (
          <option
            value={option}
            key={i}
            selected={option === author || option === genre}
          >
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

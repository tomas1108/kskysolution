import {
  SelectTrigger,
  SelectValue,
  Select,
  SelectContent,
  SelectItem
} from '../ui/select';

type SelectBaseProps = {
  placeholder?: string;
  className?: string;
  classNameContent?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: Record<string, any>[];
  loading?: boolean;
  valueKey?: string;
  labelKey?: string;
  disabled?: boolean;
};

const SelectBase: React.FC<SelectBaseProps> = ({
  placeholder,
  className,
  onChange,
  value,
  options,
  loading,
  valueKey = 'value',
  labelKey = 'label',
  classNameContent,
  disabled
}) => {
  return (
    <Select
      disabled={loading || disabled}
      onValueChange={onChange}
      value={value}
      defaultValue={value}
    >
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={classNameContent}>
        {options.map((option) => {
          return (
            <SelectItem key={option[valueKey]} value={option[valueKey]}>
              {option[labelKey]}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectBase;

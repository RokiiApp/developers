import ReactSelect, { MultiValue, SingleValue } from 'react-select';
import Creatable from 'react-select/creatable';
import { Wrapper } from './Wrapper';

type Option = {
  value: string;
  label: string;
};

type ConditionalProps = {
  multi?: false,
  onChange: (newValue: SingleValue<Option>) => void;
} | {
  multi: true;
  onChange: (newValue: MultiValue<Option>) => void;
}

type SelectProps = ConditionalProps & {
  label?: string;
  value?: Option;
  description?: string;
  options: readonly Option[] | Option[];
  clearable?: boolean;
  creatable?: boolean;
};

export const Select = ({ label, value, onChange, description, options, multi, clearable, creatable }: SelectProps) => {
  const Component = creatable ? Creatable : ReactSelect;
  return (
    <Wrapper label={label} description={description}>
      <Component
        isMulti={multi}
        value={value}
        isClearable={clearable}
        options={options}
        onChange={(newValue) => {
          if (multi) {
            onChange(newValue as MultiValue<Option>);
          } else {
            if (!newValue) return;
            onChange(newValue as SingleValue<Option>);
          }
        }}
      />
    </Wrapper>
  );
};

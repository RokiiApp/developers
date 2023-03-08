import ReactSelect, { Options } from 'react-select';
import Creatable from 'react-select/creatable';
import { Wrapper } from './Wrapper';

type SelectProps = {
  label?: string;
  value?: string | number | Array<string | number>;
  onChange: (value: string | number | readonly (string | number)[]) => void;
  description?: string;
  options: Array<{ options: Options<string>, label: string } | string | number>;
  multi?: boolean;
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
        onChange={newValue => {
          if (!newValue) return newValue;

          if (Array.isArray(newValue)) {
            const changedValue = newValue.map(val => val.value);
            onChange(changedValue);
          }
          onChange(newValue);
        }}
      />
    </Wrapper>
  );
};

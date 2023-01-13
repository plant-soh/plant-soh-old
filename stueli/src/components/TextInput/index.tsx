import React, { FocusEvent, useRef } from 'react';
import { useFocusManager, useTextField } from 'react-aria';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type TextInputProps<TFormValues extends FieldValues> = {
  label: string;
  name: string;
  addOn?: string;
  description?: string;
  variant?: 'table' | 'default';
  control?: any;
} & Omit<UseControllerProps<TFormValues>, 'control'>;

export const TextInput = <TFormValues extends Record<string, any>>({
  name,
  label,
  variant = 'default',
  control,
  defaultValue,
  addOn,
  ...props
}: TextInputProps<TFormValues>) => {
  const ref = useRef(null);
  const { labelProps, inputProps, descriptionProps } = useTextField(props, ref);

  const {
    field,
    formState: { errors },
  } = useController<TFormValues>({ name, control, defaultValue });

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    return e.target.select();
  };

  const focusManager = useFocusManager();

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        focusManager.focusNext({ wrap: true });

        break;
      case 'ArrowUp':
        focusManager.focusPrevious({ wrap: true });
        break;
    }
  };

  return (
    <div className="relative w-full h-full">
      {variant !== 'table' && (
        <label
          {...labelProps}
          htmlFor={name}
          className={`${
            variant === 'default' ? 'text-gray-500/80 text-xs' : ''
          }`}
        >
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={name}
        className={`w-full bg-transparent focus:bg-white outline-none  ${
          variant === 'table'
            ? 'h-11 p-3 focus:ring-[1.5px] focus:ring-indigo-400'
            : 'border-b border-b-[1.5px] border-gray-300 text-[14px] pb-1 focus:border-indigo-400 '
        }`}
        {...field}
        ref={ref}
        aria-label={label}
        aria-invalid={errors[name] ? 'true' : 'false'}
        onFocus={(e) => handleFocus(e)}
        onKeyDown={handleOnKeyDown}
        {...props}
      />

      {addOn && <span className="absolute right-0 text-sm">{addOn}</span>}
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
      {/* {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )} */}
    </div>
  );
};

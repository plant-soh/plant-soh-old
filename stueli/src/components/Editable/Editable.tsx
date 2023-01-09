import { ReactNode, RefObject, useEffect, useState } from 'react';

export enum EditTableType {
  input = 'input',
  textarea = 'textarea',
}

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
const EditTable = ({
  childRef,
  text,
  type,
  placeholder,
  children,
  ...rest
}: {
  childRef: RefObject<HTMLInputElement>;
  text: string;
  type: EditTableType;
  placeholder: string;
  children: ReactNode;
}) => {
  const [isEditing, setEditing] = useState(false);

  const handleKeyDown = (event: any, editTableType: EditTableType) => {
    const { key } = event;
    const keys = ['Escape', 'Tab'];
    const enterKey = 'Enter';
    const allKeys = [...keys, enterKey];

    if (
      (editTableType === EditTableType.textarea && keys.indexOf(key) > -1) ||
      (editTableType !== EditTableType.textarea && allKeys.indexOf(key) > -1)
    ) {
      setEditing(false);
    }
  };

  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  return (
    <section {...rest}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <div onClick={() => setEditing(true)}>
          <span>{text || placeholder || 'Editable content'}</span>
        </div>
      )}
    </section>
  );
};

export default EditTable;

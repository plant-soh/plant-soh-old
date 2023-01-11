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
  onSave,
  onCancel,
  children,
  className,
  ...rest
}: {
  childRef: RefObject<HTMLInputElement>;
  text: string;
  type: EditTableType;
  /**
   * called when leaving the cell like with enter or tab
   * @returns
   */
  onSave: () => void;
  /**
   * called when leaving the cell like without saving like when pressing escape
   * @returns
   */
  onCancel: () => void;
  className?: string;
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
      key === 'Escape' ? onCancel() : onSave();
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
          <span className={'inline-block ' + className}>{text}</span>
        </div>
      )}
    </section>
  );
};

export default EditTable;

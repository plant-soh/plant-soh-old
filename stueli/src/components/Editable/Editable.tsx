import { ReactNode, RefObject, useEffect, useState } from 'react';

export enum EditTableType {
  input = 'input',
  textarea = 'textarea',
  select = 'select',
}

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
const EditTable = ({
  childRef,
  text,
  type,
  onSave,
  onCancel,
  children,
  onDoubleClick,
  className = '',
  ...rest
}: {
  childRef: RefObject<HTMLInputElement>;
  text: string;
  type: EditTableType;
  /**
   * called when leaving the cell like with enter or tab
   * @returns
   */
  onSave?: () => Promise<void>;
  /**
   * called when leaving the cell like without saving like when pressing escape
   * @returns
   */
  onCancel?: () => Promise<void>;
  onDoubleClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  className?: string;
  children: ReactNode;
}) => {
  const [isEditing, setEditing] = useState(false);

  const handleKeyDown = async (event: any, editTableType: EditTableType) => {
    const { key } = event;
    const keys = ['Escape', 'Tab'];
    const enterKey = 'Enter';
    const allKeys = [...keys, enterKey];

    if (
      (editTableType === EditTableType.textarea && keys.indexOf(key) > -1) ||
      (editTableType !== EditTableType.textarea && allKeys.indexOf(key) > -1)
    ) {
      setEditing(false);
      if (onCancel && onSave)
        key === 'Escape' ? await onCancel() : await onSave();
    }
  };

  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  return (
    <section className="h-full" {...rest}>
      {isEditing ? (
        <div
          onBlur={async () => {
            setEditing(false);
            if (onSave) await onSave();
          }}
          onKeyDown={(e) => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <div
          className="h-full pl-2 text-left"
          onDoubleClick={(e) => {
            setEditing(true);
            if (onDoubleClick) {
              onDoubleClick(e);
            }
          }}
        >
          <span className={'inline-block ' + className}>{text}</span>
        </div>
      )}
    </section>
  );
};

export default EditTable;

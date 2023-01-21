import { ReactNode, RefObject, useEffect, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

export enum EditTableType {
  input = 'input',
  textarea = 'textarea',
  select = 'select',
}

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
const EditTable = ({
  childRef,
  text,
  type = EditTableType.input,
  onSave,
  onCancel,
  children,
  onDoubleClick,
  className = '',
  editOnDoubleClick = true,
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
  editOnDoubleClick?: boolean;
  children: ReactNode;
}) => {
  const [isEditing, setEditing] = useState(false);

  const handleKeyDown = async (event: any, editTableType: EditTableType) => {
    const { key } = event;
    const keys = ['Escape', 'Tab'];
    const enterKey = 'Enter';
    const allKeys = [...keys, enterKey];

    console.log('handleKeyDown', key);

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
          className="flex h-full text-left"
          onDoubleClick={(e) => {
            if (editOnDoubleClick) setEditing(true);
            if (onDoubleClick) {
              onDoubleClick(e);
            }
          }}
          onClick={(_e) => {
            if (!editOnDoubleClick) setEditing(true);
          }}
        >
          <div className={'inline-block h-10 pl-2 text-sm ' + className}>
            <div className="flex">
              <span className="w-full">{text}</span>
              {type === EditTableType.select && <MdArrowDropDown size={18} />}
            </div>
          </div>
          {/* <MdArrowDropDown size={18} /> */}
        </div>
      )}
    </section>
  );
};

export default EditTable;

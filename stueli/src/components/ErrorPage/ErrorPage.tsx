import cs from 'classnames';
import { useNavigate } from 'react-router-dom';
// import Button from "components/Button"

const defaults = {
  header: 'Oops, an error has occurred',
  title: 'An unexpected error has occurred',
  messages: [],
};

export const ErrorPage = ({
  header = defaults.header,
  title = defaults.title,
  messages = defaults.messages,
}: {
  header?: string;
  title?: string;
  messages?: string[];
}) => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate('/');
    navigate(0); // hack to force reload
  };

  return (
    <>
      <main
        className={cs(
          'min-h-screen',
          'max-w-screen',
          'flex',
          'justify-center',
          'items-center',
        )}
        role="main"
        id="main"
      >
        <div
          className={cs(
            'flex-col',
            'flex',
            'justify-center',
            'items-center',
            'p-4',
            'rounded-md',
          )}
        >
          <h1
            className={cs(
              'text-bblue-500',
              'text-6xl',
              'font-semibold',
              'my-3',
            )}
          >
            {header}
          </h1>
          <h2
            className={cs(
              'text-bblue-500',
              'text-4xl',
              'font-semibold',
              'my-2',
            )}
          >
            {title}
          </h2>
          {messages?.map((message, index) => (
            <span
              key={index}
              className={cs('text-bblue-400', 'text-2xl', 'my-1')}
            >
              {message}
            </span>
          ))}

          <button
            name={'back-home'}
            onClick={onGoBack}
            className={'rounded-3xl mt-10'}
          >
            Go back to home
          </button>
        </div>
      </main>
      <footer role="contentinfo" className="hidden">
        Error Page
      </footer>
    </>
  );
};

export default ErrorPage;

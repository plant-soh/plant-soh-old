import ErrorPage from '../../components/ErrorPage';

const ErrorScreen = () => {
  return (
    <ErrorPage
      header={'404'}
      title={'Page not found'}
      messages={[
        'The page you are looking for does not exist',
        'Are you sure the url is right?',
      ]}
    />
  );
};

export default ErrorScreen;

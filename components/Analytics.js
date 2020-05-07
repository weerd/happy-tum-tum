const Analytics = () => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=UA-87056403-3'
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-87056403-3');
          `,
        }}
      />
    </>
  );
};

export default Analytics;

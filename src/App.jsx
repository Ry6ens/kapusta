import React from 'react';

import Header from 'components/layout/Header/Header';
import UserRoutes from 'components/Routes/UserRoutes';

function App() {
  return (
    <>
      <Header />
      <main>
        <UserRoutes />
      </main>
    </>
  );
}

export default App;

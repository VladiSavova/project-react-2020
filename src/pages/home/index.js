import React, { useContext } from 'react';
import PageLayout from '../../components/page-layout';
import UserContext from '../../Context/Context'

const HomePage = ({ user }) => {

const context = useContext(UserContext);
  const { loggedIn } = context;

  if (loggedIn) {
    return (
      <PageLayout>
        <div>
          <h1>Welcome to site, buddy</h1>
        </div>
      </PageLayout>
    );

  } else {
    return (
      <PageLayout>
        <div>
          <h1>Weclome to my simple site. If you want to share with us join us </h1>
        </div>
      </PageLayout>
    )
  }

}
export default HomePage

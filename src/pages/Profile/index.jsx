import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SdivProfile, SbuttonProfile, SbuttonLogout } from '../../style/Profile/index';

function Profile() {
  const emailStorage = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header displayIconSearch={ false }>Profile</Header>
      <SdivProfile>
        {emailStorage && <p data-testid="profile-email">{emailStorage.email}</p>}

        <SbuttonProfile
          data-testid="profile-done-btn"
          type="button"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </SbuttonProfile>

        <SbuttonProfile
          data-testid="profile-favorite-btn"
          type="button"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </SbuttonProfile>

        <SbuttonLogout
          data-testid="profile-logout-btn"
          type="button"
          onClick={ handleLogout }
        >
          Logout
        </SbuttonLogout>

      </SdivProfile>
      <Footer />
    </div>
  );
}

export default Profile;

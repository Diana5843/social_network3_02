import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div>
    <div>
      <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
}

export default Profile; 
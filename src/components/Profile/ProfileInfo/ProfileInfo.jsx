import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div >
      <div>
        <img className={classes.profileInfoImg} src='http://ic.pics.livejournal.com/stepbystep_hdr/11824494/1199598/1199598_original.jpg' />
      </div>
      <div className={classes.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;

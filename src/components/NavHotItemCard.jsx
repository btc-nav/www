import React, { PureComponent } from 'react';
import { Grid, Link } from '@material-ui/core';
import NavItem from './NavItemCard/NavItem';

import Box from './Box';
import { getSkeletonList, trackEvent, formatWebpImageSrc } from '../services';
import BoxStyles from './Box.module.css';

class NavHotItemCard extends PureComponent {
  render() {
    const { navList, tagList, language } = this.props;

    if (!(tagList || []).length || !(navList || []).length) {
      let skeletonList = getSkeletonList();
      return (
        <Box
          id={encodeURI((tagList[0] || {}).tag_en)}
          className={BoxStyles.navItemCard}
          style={{ marginTop: 16 }}
        >
          <Grid container spacing={2}>
            {skeletonList.map((key, index) => (
              <Grid item xs={6} sm={4} md={3} key={`${key}-${index}`}>
                <div
                  className='skeletonHotCard'
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 8,
                  }}
                ></div>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }

    // console.log('NavHotItemCard');
    return (
      <Box
        id={encodeURI((tagList[0] || {}).tag_en)}
        style={{ marginTop: 16, marginBottom: 16 }}
      >
        <Grid container spacing={2}>
          {(navList || [])
            .filter((item) => (item.tag_en || '').indexOf('Hot') > -1)
            .map((item, index) => (
              // <Grid item xs={6} sm={4} md={3} key={`Hot-${index}`}>
              //   <Box
              //     display='flex'
              //     flexDirection='column'
              //     justifyContent='center'
              //     borderRadius={8}
              //     backgroundColor='#fff'
              //     className='hotCard'
              //     onClick={() => {
              //       window.href = `${
              //         language === 'zh' ? item.url : item.url_en || item.url
              //       }?utm_resource=btcnav.org`;
              //     }}
              //   >
              <NavItem
                key={index}
                item={item}
                language={language}
                showDesc={false}
                className='hotItem'
              />
              // {/* <img src={formatWebpImageSrc(item.image)} alt='' /> */}
              //   </Box>
              // </Grid>
            ))}
        </Grid>
      </Box>
    );
  }
}

export default NavHotItemCard;

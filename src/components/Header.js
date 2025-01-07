import React, { useState } from 'react';
import {
  Container,
  Hidden,
  // IconButton,
  // Menu,
  // MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import NavBar from './NavBar';

// import BTCLOGO from './Icons/BTCNav';
// import selectDomainIcon from '../assets/domain_select.svg';

import Box from './Box';

const Header = ({ language, onChangeLanguage, tagList }) => {
  const [visible, setVisible] = useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const translations = {
    zh: {
      ethTitle: '以太坊生态资源导航',
      btcTitle: '比特币生态资源导航',
    },
    en: {
      ethTitle: 'A Portal to Ethereum Ecosystem',
      btcTitle: 'A Portal to Bitcoin Ecosystem',
    },
  };

  const t = (key) => {
    return translations[language][key];
  };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  //
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // render language change btn
  const renderLanguageBtn = () => {
    return (
      <Box display='flex' alignItems='center'>
        <select
          value={language}
          onChange={(e) => {
            const lng = e.target.value;
            window.localStorage.setItem('i18nextLng', lng);
            document.cookie = `i18next=${lng};path=/;domain=.btcnav.org`;
            onChangeLanguage(lng);
          }}
          style={{
            padding: '6px 12px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <option value='en'>English</option>
          <option value='zh'>中文</option>
        </select>
      </Box>
    );
  };

  // web header
  const webHeader = () => {
    return (
      <Box mb={3.75} backgroundColor='#fff' boxShadow='0 2px 8px #f0f1f2'>
        <Container>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'
            py={2}
          >
            <Box display='flex' flexDirection='row'>
              <a href='/' style={{ textDecoration: 'none' }}>
                <Box position='relative'>
                  <h1
                    style={{
                      color: '#000',
                    }}
                  >
                    BTCNav.org
                  </h1>
                  <Box mt={0.5} fontSize={14} color='#999'>
                    {t('btcTitle')}
                  </Box>
                  <Box
                    position='absolute'
                    bottom={-16}
                    left={0}
                    height={4}
                    width='100%'
                    borderRadius={2}
                    backgroundColor='#FF7828'
                  />
                </Box>
              </a>
            </Box>
            <Box>{renderLanguageBtn()}</Box>
          </Box>
        </Container>
      </Box>
    );
  };

  // wap header
  const wapHeader = () => {
    return (
      <Box mb={2} py={1.25} backgroundColor='#fff'>
        <Container>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'
            height={30}
          >
            <Box
              display='flex'
              cursor='pointer'
              onClick={() => {
                setVisible(true);
              }}
            >
              <MenuIcon />
            </Box>
            <Box display='flex' flexDirection='row' alignItems='center'>
              <h1
                style={{
                  color: '#000',
                  fontSize: 18,
                }}
              >
                BTCNav.org
              </h1>
              {/* <BTCLOGO /> */}
              {/* <IconButton
                aria-label="more"
                aria-controls="domain-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <img
                  src={selectDomainIcon}
                  alt=""
                  height={24}
                />
              </IconButton> */}
            </Box>
            <Box width={32}>
              <Box position='absolute' top={10} right={16}>
                {renderLanguageBtn()}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  };

  return (
    <Box>
      <Hidden smDown>{webHeader()}</Hidden>
      <Hidden mdUp>
        {wapHeader()}
        <NavBar
          tagList={tagList}
          language={language}
          key={`NavBar-${(tagList || []).length}`}
          drawerVisible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      </Hidden>
    </Box>
  );
};

export default Header;

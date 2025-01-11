import React from 'react';
import {
  CssBaseline,
  Container,
  // Box,
  // Typography,
  // Button,
  Hidden,
} from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import { Language, Menu } from '@material-ui/icons';

import NavBar from './components/NavBar';
import NavHotItemCard from './components/NavHotItemCard';
import NavItemCard from './components/NavItemCard';
import TabPanel from './components/TabPanel';
// import Logo from './components/Logo';
import Header from './components/Header';
import Footer from './components/Footer';
import Box from './components/Box';
import translations from './i18n.json';
import { get } from './services/fetch';
import { getDefaultLanguage } from './services';

import './App.css';
import TabMenus from './components/TabMenu';
// import BoxStyles from './components/Box.module.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff7828',
      contrastText: '#fff',
    },
  },
});

class App extends React.Component {
  state = {
    category: ['beginner', 'bitcoin', 'lightning', 'new-things'],
    selectedCategory: 'beginner',
    tagList: [],
    navList: [],
    tagMap: {},
    navMap: {},
    language: getDefaultLanguage(),
    drawerVisible: false,
    footerVisible: false,
  };

  componentDidMount() {
    // this.initPageLanguage();
    this.fetchTagList();
    this.fetchNavList(this.state.category);
  }

  fetchTagList = async () => {
    const res = await get('/data/tagList.json');
    var map = {};
    if (res && (res || []).length) {
      for (var item of res) {
        if (map[item.category] == null) {
          map[item.category] = new Set();
        }
        map[item.category].add(item);
      }
      this.setState({
        tagMap: map,
      });
    }
  };

  fetchNavList = async (categories) => {
    var map = {};
    for (var item of categories) {
      const res = await get(`/data/${item}.json`);
      if (res && (res || []).length) {
        map[item] = res;
      }
    }
    this.setState({
      navMap: map,
      footerVisible: true,
    });
  };

  translate = (key) => {
    const { language } = this.state;
    return translations[language][key];
  };

  render() {
    const {
      footerVisible,
      language,
      drawerVisible,
      selectedCategory,
      tagMap,
      navMap,
    } = this.state;

    const t = this.translate;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          tagList={Array.from(tagMap[selectedCategory] ?? [])}
          language={language}
          menus={
            <Hidden mdDown>
              <TabMenus
                category={this.state.category}
                selectedCategory={selectedCategory}
                t={t}
                onChange={(newValue) => {
                  this.setState({
                    selectedCategory: this.state.category[newValue],
                  });
                }}
              />
            </Hidden>
          }
          onChangeLanguage={(language) => {
            this.setState({ language });
          }}
        />
        <Container>
          <Hidden mdUp>
            <TabMenus
              t={t}
              category={this.state.category}
              selectedCategory={selectedCategory}
              onChange={(newValue) => {
                this.setState({
                  selectedCategory: this.state.category[newValue],
                });
              }}
            />
          </Hidden>
          {this.state.category.map((category, index) => (
            <TabPanel
              value={this.state.category.indexOf(selectedCategory)}
              index={index}
              key={category}
            >
              <Box display='flex' flexDirection='row'>
                <NavBar
                  tagList={Array.from(tagMap[selectedCategory] ?? [])}
                  language={language}
                  key={`NavBar-${(tagMap[selectedCategory] || []).length}`}
                  drawerVisible={drawerVisible}
                  onClose={() => {
                    this.setState({ drawerVisible: false });
                  }}
                />
                <Box flex='1' />

                <Box
                  className='tagContent'
                  key={(navMap[selectedCategory] || []).length}
                >
                  <NavHotItemCard
                    navList={navMap[selectedCategory] || []}
                    tagList={Array.from(tagMap[selectedCategory] ?? [])}
                    language={language}
                  />
                  <NavItemCard
                    navList={navMap[selectedCategory] || []}
                    tagList={Array.from(tagMap[selectedCategory] ?? [])}
                    language={language}
                  />
                </Box>
                <Hidden lgUp>
                  <Box flex='1' />
                </Hidden>
              </Box>
            </TabPanel>
          ))}
        </Container>
        <Footer language={language} footerVisible={footerVisible} t={t} />
      </ThemeProvider>
    );
  }
}

export default App;

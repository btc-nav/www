import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabMenus = ({ selectedCategory, category, onChange }) => {
  return (
    <Tabs
      variant='fullWidth'
      value={category.indexOf(selectedCategory)}
      indicatorColor='primary'
      textColor='primary'
      centered
      onChange={(e, newValue) => onChange(newValue)}
      aria-label='category tabs'
    >
      {category.map((item, index) => (
        <Tab
          label={item}
          {...a11yProps(index)}
          key={item}
          className='categoryTab'
        />
      ))}
    </Tabs>
  );
};
export default TabMenus;

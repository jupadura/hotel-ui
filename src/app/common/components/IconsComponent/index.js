import React from 'react';

import Bathrobes from "./icons/bathrobes.svg"
import Bathtub from "./icons/bathtub.svg"
import Beach from "./icons/beach.svg"
import BeachPoolFacilities from "./icons/beach-pool-facilities.svg"
import BusinessCenter from "./icons/business-center.svg"
import ChildrenClub from "./icons/children-club.svg"
import CoffeMaker from "./icons/coffe-maker.svg"
import DeepSoakingBathtub from "./icons/deep-soaking-bathtub.svg"
import FitnessCenter from "./icons/fitness-center.svg"
import Garden from "./icons/garden.svg"
import KitchenFacilities from "./icons/kitchen-facilities.svg"
import Newspaper from "./icons/newspaper.svg"
import Nightclub from "./icons/nightclub.svg"
import Restaurant from "./icons/restaurant.svg"
import SafetyBox from "./icons/safety-box.svg"
import SeparateBredroom from "./icons/separate-bredroom.svg"
import Sheets from "./icons/sheets.svg"
import Star from './icons/star.svg';
import Search from './icons/search.svg';

const icons = {
  'bathrobes': Bathrobes,
  'bathtub': Bathtub,
  'beach': Beach,
  'beach-pool-facilities': BeachPoolFacilities,
  'business-center': BusinessCenter,
  'children-club': ChildrenClub,
  'coffe-maker': CoffeMaker,
  'deep-soaking-bathtub': DeepSoakingBathtub,
  'fitness-center': FitnessCenter,
  'garden': Garden,
  'kitchen-facilities': KitchenFacilities,
  'newspaper': Newspaper,
  'nightclub': Nightclub,
  'restaurant': Restaurant,
  'safety-box': SafetyBox,
  'separate-bredroom': SeparateBredroom,
  'sheets': Sheets,
  'star': Star,
  'search': Search
};

const IconsComponent = ({
  icon,
  className,
  height = '20px',
  width = '20px'
}) => {
  const Icon = icons[icon];
  return <Icon
    className={className}
    height={height} 
    width={width} 
  />
};

export default IconsComponent;

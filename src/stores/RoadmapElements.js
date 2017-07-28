import { observable } from 'mobx';

class RoadmapElements {
  @observable all = [
    {
      id: 'skdcx',
      cardType: 'professional branding',
      title: 'Update resume template',
      description: 'Learn to create effective and usable interfaces for a range of products and devices.',
      callToActionCaption: 'Learn more',
      callToActionURL: 'www.google.com',
      isStatusComplete: false,
    },
    {
      id: 'skdr',
      cardType: 'soft skills',
      title: 'Interview mockup',
      description: 'Meet for a half hour mock interview to perfect your skills dawg!',
      callToActionCaption: 'Don\'t click here',
      callToActionURL: 'www.bing.com',
      isStatusComplete: false,
    }
  ];
}

export default new RoadmapElements();

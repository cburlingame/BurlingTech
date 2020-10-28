/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'ren.containers.HomePage';

export default defineMessages({
  renHeader: {
    id: `${scope}.ren.header`,
    defaultMessage: 'The Remote Education Network',
  },
  renMessage: {
    id: `${scope}.ren.message`,
    defaultMessage:
      'Information, tools, technology, resources, and community in support of remote education and learning',
  },
  rlHeader: {
    id: `${scope}.rl.header`,
    defaultMessage: 'Learn',
  },
  rlDetailMessage: {
    id: `${scope}.rldetail.message`,
    defaultMessage:
      "In 2020 we witnessed the modern era's first major pandemic, COVID-19, in which the countries of this world worked tirelesly to try and contain and ultimately resolve." +
      'Day to day life changed dramatically here in America, we had no choice but to adapt quickly, and so we did.' +
      'One of the many changes implemented to limit the spread of the contagion within our schools, was to move classroom learning online.' +
      'There have been numerous challenges with this new approach to learning.. remotely.. from home, an approach that can be as good if not better, if done right, as in person learning can be.' +
      'There are limited tools available for educators, currently, to try and replicate the classroom experience within the virtual classroom. Many times they are restriced by system or program rules and limitations.' +
      "Every teacher has his or her own way of teaching, a unique blend of that educator's personality, experience, and methodoligies he or she uses to present the materials and control the trajectory of the class." +
      'Here at the Remote Education Network, we are building tools, technologies, resources, and community to enable and support remote education, with a key focus on making the virtual classroom experience as easy and effective as the in person classroom experience.' +
      'One thing this requires is input.. please send us any suggestions that you may have.. if it will help an educator teach remote classes then we will build it.',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});

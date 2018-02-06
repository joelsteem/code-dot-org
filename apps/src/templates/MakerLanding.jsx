import React, {Component} from 'react';
import TopCourse from './studioHomepages/TopCourse';
import VerticalImageResourceCardRow from './VerticalImageResourceCardRow';
import shapes from './studioHomepages/shapes';
import {pegasus} from '@cdo/apps/lib/util/urlHelpers';
import i18n from '@cdo/locale';

const styles = {
  title: {
    fontSize: 30,
  }
};

export default class MakerLanding extends Component {
  static propTypes = {
    topCourse: shapes.topCourse,
  };

  render() {
    const { topCourse } = this.props;

    const cards = [
       {
        title: i18n.makerNewProjectTitle(),
        description: i18n.makerNewProjectDesc(),
        link: pegasus('/applab'),
        image: "applab-project",
        buttonText: i18n.makerNewProjectButton()
      },
      {
        title: i18n.makerViewProjectsTitle(),
        description: i18n.makerViewProjectsDesc(),
        link: "/projects",
        image: "applab-marketing",
        buttonText: i18n.makerViewProjectsButton()
      },
      {
        title: i18n.makerSetupTitle(),
        description: i18n.makerSetupDesc(),
        link: "/maker/setup",
        image: "applab-tutorial",
        buttonText: i18n.makerSetupButton()
      }
    ];

    return (
      <div>
        <h1 style={styles.title}>
          Code.org Maker App
        </h1>
        <TopCourse
          assignableName={topCourse.assignableName}
          lessonName={topCourse.lessonName}
          linkToOverview={topCourse.linkToOverview}
          linkToLesson={topCourse.linkToLesson}
        />
        <VerticalImageResourceCardRow
          cards={cards}
        />
      </div>
    );
  }
}

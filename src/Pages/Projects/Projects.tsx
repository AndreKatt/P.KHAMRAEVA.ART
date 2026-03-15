import {ProjectPreview} from "../../Components/ProjectPreview/ProjectPreview";
import {previewProps as metamorphosisProps} from "../Metamorphosis/constants";
import {previewProps as gardenProps} from "../GardenCity/constants";
import {previewProps as edenProps} from "../EdenIllusion/constants";

import styles from './styles.module.scss'
import { useNavigate } from "react-router";

export function Component() {
  const navigate = useNavigate();

  return (
    <div className={styles.projectsContainer}>
      <ProjectPreview
        OnClick={() => navigate('metamorphosis')}
        {...metamorphosisProps}
      />
      <Divider />
      <ProjectPreview
        Title='ГОРОД САД: МУЛЬТИВСЕЛЕННЫЕ'
        Description={'ФИДЖИТАЛ ВЫСТАВКА.\nТОТАЛЬНАЯ ИНСТАЛЛЯЦИЯ'}
        OnClick={() => navigate('garden')}
        {...gardenProps}
      />
      <Divider />
      <ProjectPreview
        OnClick={() => navigate('eden')}
        {...edenProps}
      />
      <Divider />
    </div>
  )
}

const Divider = () => (
  <div className={styles.divider} />
)
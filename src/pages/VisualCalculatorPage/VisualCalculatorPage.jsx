import { useEffect } from "react";
import { createLightRayScene } from "../../components/visual3D/LightRayEllipse";
import "./VisualCalculatorPage.css";

const VisualCalculatorPage = () => {
  useEffect(() => {
    const cleanup = createLightRayScene();

    // Очистка ресурсов при размонтировании компонента
    return cleanup;
  }, []);

  return <div id="scene" />;
};

export default VisualCalculatorPage;

import SvgTemplates from "./SvgTemplates";
import { useFramerRuntime } from "../../lib/useFramerRuntime";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  useFramerRuntime();

  return (
    <div
      id="main"
      data-framer-hydrate-v2='{"routeId":"dh9XiRY81","localeId":"default","breakpoints":[{"hash":"r0psrf","mediaQuery":"(min-width: 1200px)"},{"hash":"14enm81","mediaQuery":"(min-width: 810px) and (max-width: 1199.98px)"},{"hash":"1f0hsks","mediaQuery":"(max-width: 809.98px)"},{"hash":"128kipa","mediaQuery":"(min-width: 1200px)"},{"hash":"1l0aw67","mediaQuery":"(min-width: 810px) and (max-width: 1199.98px)"},{"hash":"xwr0r7","mediaQuery":"(max-width: 809.98px)"}]}'
      data-framer-ssr-released-at="2026-02-23T21:03:07.702Z"
      data-framer-page-optimized-at="2026-02-25T05:28:36.510Z"
      data-framer-generated-page
    >
      <SvgTemplates />
    </div>
  );
};

export default Layout;

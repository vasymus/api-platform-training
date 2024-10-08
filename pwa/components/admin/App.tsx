import { HydraAdmin } from "@api-platform/admin";

const App = () => (
  <HydraAdmin
    entrypoint={`${window.origin}/api`}
    title="API Platform admin"
  ></HydraAdmin>
);

export default App;

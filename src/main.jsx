import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./pages/Calendar";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "Mgo+DSMBaFt+QHFqVk9rWU5FdUBAXWFKbld8RmdTfl5gFChNYlxTR3ZbQ1ljS31Wd0BlWH5f;Mgo+DSMBPh8sVXJ1S0d+X1hPc0BDXnxLflF1VWdTfFp6dVVWACFaRnZdQV1nSHpTdEZmWHpYcndU;ORg4AjUWIQA/Gnt2VFhhQlJNfVpdXGBWfFN0RnNddV10flRGcDwsT3RfQF5jTX9XdkdgXH5bdndTRw==;MTcyMDc0MUAzMjMxMmUzMTJlMzMzOVpFN3NHUHN1SUVJVXhjT0orT1FuZjNTUzI0VkFRVk5tSDJ5ZFRoK3F4WFE9;MTcyMDc0MkAzMjMxMmUzMTJlMzMzOU1SL0pXU2d4UHIyWk5PRWRNcGNPSDYzNDFCNkxiaWNNZmdTSCtKZFZSeGM9;NRAiBiAaIQQuGjN/V0d+XU9Hf1RHQmJKYVF2R2BJe1RzcF9HYEwxOX1dQl9gSXpSckVhWnpfdXJcQmE=;MTcyMDc0NEAzMjMxMmUzMTJlMzMzOWZSdDgvTlNYckFIMC9EZGxNR0JBMzByQzNiOU5GeXlmRVhEeXQ1ZnE0ZTg9;MTcyMDc0NUAzMjMxMmUzMTJlMzMzOWRMV0NHbmZkeDBuOHhOVTVNajBHS0ZCdktuQ3UrZnNDRDNnRWNPRy85MXc9;Mgo+DSMBMAY9C3t2VFhhQlJNfVpdXGBWfFN0RnNddV10flRGcDwsT3RfQF5jTX9XdkdgXH5bd3FTRw==;MTcyMDc0N0AzMjMxMmUzMTJlMzMzOVF0a3Y1ampuSThVTVhhKzFyMW9QYTRHc1FpMkRJZXRhSXpPT1Q3R2tod009;MTcyMDc0OEAzMjMxMmUzMTJlMzMzOVl6QmoyS3pqT3g5d3R4QStPUWtpbjJGNy9GdkRiU1lDNEEzM2ltdkcyQlE9;MTcyMDc0OUAzMjMxMmUzMTJlMzMzOWZSdDgvTlNYckFIMC9EZGxNR0JBMzByQzNiOU5GeXlmRVhEeXQ1ZnE0ZTg9"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

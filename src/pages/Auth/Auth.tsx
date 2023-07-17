import React from "react";
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";
import { BaseLayout } from "../../components/Layout/BaseLayout";
import { AuthMain } from "./AuthMain";

export const Auth = () => {
  return (
    <BaseLayout>
      <BreadCrumb title="Login" />
      <AuthMain />
    </BaseLayout>
  );
};

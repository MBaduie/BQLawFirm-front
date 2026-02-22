import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();
  return <div>{t("auth.login.title")}</div>;
};

export default LoginForm;

function usernameAndPassword(type: "username" | "password", t: Function) {
  // 用户名和密码的验证
  return [
    {
      required: true,
      message: t("plsEnter") + t(type) + t("!"),
    },
    {
      min: type === "username" ? 3 : 8,
      message: t(type) + t(type === "username" ? "least3" : "least8") + t("!"),
    },
    {
      max: 16,
      message: t(type) + t("most16") + t("!"),
    },
  ];
}

function autoComplete(action?: "set", bool?: boolean) {
  console.log(action, bool);
  if (action === "set") {
    localStorage.setItem("rememberPwd", bool ? "on" : "new-password");
  } else {
    return localStorage.getItem("rememberPwd") ?? "off";
  }
}
export { usernameAndPassword, autoComplete };

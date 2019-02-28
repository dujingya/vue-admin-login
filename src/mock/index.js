import Mock from "mockjs";
let debug = 1;
if (debug) {
  Mock.mock(/login/, {
    data: {
      userId: "@integer(1,10)",
      "userName|1": ["鲁班七号", "夏侯惇", "蔡文姬", "王昭君", "妲己"],
      token: "@string(30)"
    },
    msg: "Success",
    status: "YQ-000"
  });
  Mock.mock(/getMenu/, {
    data: {},
    msg: "Success",
    status: "YQ-000"
  });
}

import 'dart:developer';

import 'package:dio/dio.dart';
import 'package:router/models/home/detail.dart';

Dio axios = Dio(BaseOptions(baseUrl: "http://10.168.1.15:5000"));

Future<UserList> getUserList() async {
  try {
    Response res = await axios.get("/list");
    return UserList.fromJson(res.data);
  } catch (e) {
    log("出错了");
    return UserList(total: 0, list: []);
  }
}
